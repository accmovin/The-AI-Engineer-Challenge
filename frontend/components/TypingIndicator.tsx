/** Animated typing indicator shown while waiting for the coach reply. */
export function TypingIndicator() {
  return (
    <div className="flex justify-start animate-fade-in">
      <div className="rounded-2xl rounded-bl-md border border-jungle-600/60 bg-jungle-800/90 px-4 py-3 shadow-lg">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-lagoon-400">
          Mental Coach
        </p>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-pulse-soft rounded-full bg-lagoon-400" />
          <span
            className="h-2 w-2 animate-pulse-soft rounded-full bg-lagoon-400"
            style={{ animationDelay: "0.2s" }}
          />
          <span
            className="h-2 w-2 animate-pulse-soft rounded-full bg-lagoon-400"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
}
