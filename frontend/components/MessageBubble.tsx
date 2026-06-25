import type { ChatMessage } from "@/lib/api";

interface MessageBubbleProps {
  message: ChatMessage;
}

/** Single chat bubble with role-specific styling for contrast and readability. */
export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex animate-fade-in ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-lg sm:max-w-[75%] ${
          isUser
            ? "rounded-br-md bg-lagoon-600 text-fern-100"
            : "rounded-bl-md border border-jungle-600/60 bg-jungle-800/90 text-fern-100"
        }`}
      >
        {!isUser && (
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-lagoon-400">
            Mental Coach
          </p>
        )}
        <p className="whitespace-pre-wrap break-words font-body text-sm leading-relaxed sm:text-base">
          {message.content}
        </p>
      </div>
    </div>
  );
}
