"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, ChevronUp, ChevronDown } from "lucide-react"

export function ChatWindow() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I help you with your chemistry product needs today?", isUser: false },
  ])
  const [inputValue, setInputValue] = useState("")

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true)
      setIsMinimized(false)
    } else {
      setIsMinimized(!isMinimized)
    }
  }

  const closeChat = () => {
    setIsOpen(false)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      // Add user message
      setMessages([...messages, { text: inputValue, isUser: true }])

      // Simulate response after a short delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Thanks for your message. Our team will get back to you shortly.",
            isUser: false,
          },
        ])
      }, 1000)

      setInputValue("")
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {isOpen && (
        <div
          className={`bg-white rounded-lg shadow-lg mb-2 overflow-hidden transition-all duration-300 ease-in-out w-80 sm:w-96 border border-orc-medium ${
            isMinimized ? "h-14" : "h-96"
          }`}
        >
          <div className="bg-orc-medium text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} />
              <h3 className="font-medium">Chat with ORC Support</h3>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-orc-dark rounded"
                aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                {isMinimized ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              <button onClick={closeChat} className="p-1 hover:bg-orc-dark rounded" aria-label="Close chat">
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="p-3 h-[calc(100%-110px)] overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-3 p-2 rounded-lg max-w-[85%] ${
                      message.isUser ? "bg-orc-bg text-gray-800 ml-auto" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="p-3 border-t">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="bg-orc-medium hover:bg-orc-dark"
                    disabled={!inputValue.trim()}
                  >
                    <Send size={16} />
                    <span className="sr-only">Send message</span>
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      )}

      <Button
        onClick={toggleChat}
        className="rounded-full w-12 h-12 flex items-center justify-center bg-orc-medium hover:bg-orc-dark shadow-lg"
        aria-label="Open chat"
      >
        <MessageCircle />
      </Button>
    </div>
  )
}
