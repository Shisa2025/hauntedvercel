import { pool } from '@/database/client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toFixed(2).padStart(5, '0')}`;
};

export default async function RankingPage() {
  // time_record table does not have an id column; order by time ascending
  const { rows } = await pool.query(
    'SELECT nickname, email, time FROM time_record ORDER BY time ASC'
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto bg-gray-700/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-500 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-200">Leaderboard</p>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">Ranking</h1>
          </div>
          <a
            href="/"
            className="text-sm text-gray-100 hover:text-white underline underline-offset-4"
          >
            Back to Home
          </a>
        </div>

        <p className="text-gray-100 mb-6 text-base">
          Congratulations on clearing the game! Rankings are ordered by the fastest clear time. We may reach out using the email you provided.
        </p>

        {/* Prize Information */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-xl p-5 mb-6 border-2 border-yellow-300 shadow-lg">
          <p className="text-gray-900 font-bold mb-2 text-lg">🎁 Prize Information</p>
          <p className="text-gray-900 text-base font-semibold">
            <span className="bg-yellow-200 px-2 py-1 rounded font-bold">Deadline: January 31, 2026 at 00:00 (Midnight)</span> — The player ranked #1 at this time will receive a <span className="bg-yellow-200 px-2 py-1 rounded font-bold">$20 Grab Voucher</span> !
          </p>
        </div>

        {rows.length === 0 ? (
          <div className="text-center text-gray-300 py-12">No records yet.</div>
        ) : (
          <div className="divide-y divide-gray-500 border border-gray-500 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[60px_1fr_140px] px-4 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-sm text-white font-bold">
              <span>#</span>
              <span>Nickname</span>
              <span className="text-right">Time</span>
            </div>
            {rows.map((row: { nickname: string; email: string; time: number }, index: number) => (
              <div
                key={row.email || `${row.nickname}-${index}`}
                className={`grid grid-cols-[60px_1fr_140px] px-4 py-4 items-center transition-colors ${
                  index === 0 
                    ? 'bg-gradient-to-r from-yellow-600/30 to-amber-600/30 border-l-4 border-yellow-400' 
                    : 'bg-gray-700/50 hover:bg-gray-600/50'
                }`}
              >
                <span className={`text-sm font-bold ${index === 0 ? 'text-yellow-300' : 'text-gray-300'}`}>
                  {index === 0 ? '🏆' : '#'} {index + 1}
                </span>
                <div className="flex flex-col">
                  <span className={`font-semibold text-base ${index === 0 ? 'text-yellow-200' : 'text-gray-100'}`}>{row.nickname}</span>
                  <span className={`text-xs break-words ${index === 0 ? 'text-gray-300' : 'text-gray-400'}`}>{row.email}</span>
                </div>
                <span className={`text-right font-mono text-lg font-bold ${index === 0 ? 'text-yellow-300' : 'text-purple-200'}`}>{formatTime(row.time)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
