import { Pool } from 'pg';

const neonConnectionString = 'postgresql://neondb_owner:npg_Y8kp6WOGroiQ@ep-lucky-lab-a4qskx5x-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const pool = new Pool({ connectionString: neonConnectionString });

async function deleteNeonTables() {
  try {
    await pool.query('DROP TABLE IF EXISTS time_record');
    console.log('Table "time_record" dropped from neondb');

    await pool.query('DROP TABLE IF EXISTS feedback');
    console.log('Table "feedback" dropped from neondb');

  } catch (err) {
    console.error('Error dropping tables from neondb:', err);
  } finally {
    await pool.end();
  }
}

deleteNeonTables();