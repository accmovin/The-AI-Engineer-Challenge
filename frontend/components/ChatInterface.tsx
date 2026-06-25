"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ChatApiError,
  ChatMessage,
  createMessageId,
  sendChatMessage,
} from "@/lib/api";
import { MessageBubble } from "@/components/MessageBubble";
import { TypingIndicator } from "@/components/TypingIndicator";

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Welcome to your jungle sanctuary. I'm here as your mental coach — whether you're working through stress, building habits, or need a boost of motivation. What's on your mind today?",
};

/** Main chat interface: message history, input, and API integration. */
export function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const reply = await sendChatMessage(trimmed);
      setMessages((prev) => [
        ...prev,
        { id: createMessageId(), role: "assistant", content: reply },
      ]);
    } catch (err) {
      const message =
        err instanceof ChatApiError
          ? err.message
          : "Unable to reach the coach. Is the backend running on port 8000?";
      setError(message);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (
    <div className="flex h-full min-h-0 flex-col">
      {/* Scrollable message area — grows to fill available space */}
      <div
        className="flex-1 overflow-y-auto px-4 py-6 sm:px-6"
        role="log"
        aria-live="polite"
        aria-label="Chat messages"
      >
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
          {isLoading && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area pinned to bottom */}
      <div className="shrink-0 border-t border-jungle-700/80 bg-jungle-900/95 px-4 py-4 backdrop-blur-sm sm:px-6">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-3xl flex-col gap-3"
        >
          {error && (
            <div
              role="alert"
              className="rounded-lg border border-red-800/60 bg-red-950/50 px-4 py-2 text-sm text-red-200"
            >
              {error}
            </div>
          )}

          <div className="flex items-end gap-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Share what's on your mind..."
              rows={1}
              disabled={isLoading}
              aria-label="Your message"
              className="min-h-[48px] max-h-40 flex-1 resize-none rounded-xl border border-jungle-600 bg-jungle-800 px-4 py-3 font-body text-sm text-fern-100 placeholder:text-fern-300/50 focus:border-lagoon-500 focus:outline-none focus:ring-2 focus:ring-lagoon-500/30 disabled:opacity-60 sm:text-base"
              style={{ fieldSizing: "content" } as React.CSSProperties}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="shrink-0 rounded-xl bg-lagoon-500 px-5 py-3 font-body text-sm font-semibold text-jungle-950 transition hover:bg-lagoon-400 focus:outline-none focus:ring-2 focus:ring-lagoon-400/50 disabled:cursor-not-allowed disabled:opacity-40 sm:text-base"
            >
              {isLoading ? "..." : "Send"}
            </button>
          </div>

          <p className="text-center text-xs text-fern-300/60">
            Press Enter to send · Shift+Enter for a new line
          </p>
        </form>
      </div>
    </div>
  );
}
