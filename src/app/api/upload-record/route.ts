import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/database/client';

export async function POST(request: NextRequest) {
  try {
    const { session, email, nickname } = await request.json();

    if (!session || !email || !nickname) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get temp session data
    const tempResult = await pool.query('SELECT * FROM temp_sessions WHERE id = $1', [session]);
    if (tempResult.rows.length === 0) {
      return NextResponse.json({ error: 'Invalid or expired session' }, { status: 400 });
    }

    const { clear_time, build } = tempResult.rows[0];

    // Check for existing email and nickname
    const existingEmail = await pool.query('SELECT * FROM time_record WHERE email = $1', [email]);
    const existingNickname = await pool.query('SELECT * FROM time_record WHERE nickname = $1', [nickname]);

    const emailExists = existingEmail.rows.length > 0;
    const nicknameExists = existingNickname.rows.length > 0;

    // If only email OR only nickname exists (but not both) → reject
    if ((emailExists && !nicknameExists) || (!emailExists && nicknameExists)) {
      await pool.query('DELETE FROM temp_sessions WHERE id = $1', [session]);
      return NextResponse.json({ error: 'Email or nickname already exists' }, { status: 400 });
    }

    // If both email and nickname exist → check if same user
    if (emailExists && nicknameExists) {
      const emailRecord = existingEmail.rows[0];
      const nicknameRecord = existingNickname.rows[0];

      // Check if they belong to the same user (same record)
      if (emailRecord.id === nicknameRecord.id) {
        // Same user, update if new time is shorter
        if (clear_time < emailRecord.time) {
          await pool.query('UPDATE time_record SET time = $1 WHERE id = $2', [clear_time, emailRecord.id]);
          await pool.query('DELETE FROM temp_sessions WHERE id = $1', [session]);
          return NextResponse.json({ message: 'Record updated with shorter time!' });
        } else {
          await pool.query('DELETE FROM temp_sessions WHERE id = $1', [session]);
          return NextResponse.json({ message: 'Your time was not shorter than the existing record.' });
        }
      } else {
        // Email and nickname belong to different users → reject
        await pool.query('DELETE FROM temp_sessions WHERE id = $1', [session]);
        return NextResponse.json({ error: 'Email and nickname belong to different users' }, { status: 400 });
      }
    }

    // Neither exists → insert new record
    await pool.query('INSERT INTO time_record (email, nickname, time) VALUES ($1, $2, $3)', [email, nickname, clear_time]);
    await pool.query('DELETE FROM temp_sessions WHERE id = $1', [session]);
    return NextResponse.json({ message: 'Record uploaded successfully!' });
  } catch (err) {
    console.error('Error in /api/upload-record:', err);
    return NextResponse.json({ error: 'Failed to upload record' }, { status: 500 });
  }
}