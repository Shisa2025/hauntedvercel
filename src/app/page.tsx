import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
            我的游戏开发成果展示
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            这里展示了我开发的游戏项目，包括创新的玩法、精美的图形和引人入胜的故事。
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">项目列表</h2>
            <ul className="list-disc list-inside mt-4 text-zinc-600 dark:text-zinc-400">
              <li>游戏1：描述...</li>
              <li>游戏2：描述...</li>
              <li>游戏3：描述...</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
