import { ChatInterface } from "@/components/ChatInterface";

export default function Home() {
  return (
    <main className="flex h-screen flex-col overflow-hidden">
      {/* Header */}
      <header className="shrink-0 border-b border-jungle-700/80 bg-jungle-900/80 px-4 py-5 backdrop-blur-sm sm:px-6">
        <div className="mx-auto flex max-w-3xl items-center gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-jungle-700 ring-2 ring-lagoon-500/40"
            aria-hidden="true"
          >
            <span className="text-2xl">🦕</span>
          </div>
          <div>
            <h1 className="font-display text-xl font-semibold tracking-tight text-fern-100 sm:text-2xl">
              Jungle Coach
            </h1>
            <p className="text-sm text-lagoon-400">
              Your supportive mental coach in the prehistoric wild
            </p>
          </div>
        </div>
      </header>

      {/* Chat fills remaining viewport height */}
      <div className="flex min-h-0 flex-1 flex-col">
        <ChatInterface />
      </div>
    </main>
  );
}
