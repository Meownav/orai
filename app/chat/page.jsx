"use client";
import { useState } from "react";
import { sendChatMessage } from "@/utils/openrouter";
import { IconSend, IconUser, IconRobot, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const Chat = () => {
  const [currentMessage, setCurrentMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleKeyChange = (e) => {
    setCurrentMessage(e.target.value)
  }

  const handleSend = async () => {
    if (!currentMessage.trim() || isLoading) return;

    const userMessage = { role: "user", content: currentMessage }
    const newMessages = [...messages, userMessage]

    setMessages(newMessages)
    setCurrentMessage("")
    setIsLoading(true)


    try {
      const response = await sendChatMessage(newMessages)
      const assistantMessage = { role: "assistant", content: response.choices[0].message.content }
      setMessages([...newMessages, assistantMessage])
    } catch (error) {
      console.error("Error sending message:", error)

      const errorMessage = { role: "assistant", content: "Sorry, I encountered an error. Please try again." }
      setMessages([...newMessages, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div>
      {/* Chat container */}
      <div className="w-screen h-screen border-2 border-gray-600 text-white flex flex-col">
        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 ">
          {messages.map((message, index) => (
            <div key={index} className={`flex mb-32 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start gap-3 max-w-3xl ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  {message.role === 'user' ? <IconUser className="w-5 h-5" /> : <IconRobot className="w-5 h-5" />}
                </div>
                <div className={`prose prose-invert max-w-none rounded-lg p-3 ${message.role === 'user' ? 'bg-blue-600/20' : 'bg-white/10'}`}>
                  <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        return (
                          <code className={`${inline ? 'bg-gray-800 px-1 py-0.5 rounded' : 'block bg-gray-800 p-2 rounded'}`}>
                            {children}
                          </code>
                        );
                      }
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                </div>

              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-32">
              <div className="flex items-start gap-3 max-w-3xl">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <IconRobot className="w-5 h-5" />
                </div>
                <div className="rounded-lg p-3 bg-white/10 text-white">
                  Thinking...
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Input box */}
      <div className="absolute bottom-4 w-screen flex justify-center">
        <div className="w-3/5 flex gap-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-4 shadow-lg">
          <textarea className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white 
          placeholder-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-white/30
           focus:border-transparent transition min-h-[48px] max-h-[120px]"
            placeholder="Type your message... (Shift + Enter for new line)"
            value={currentMessage}
            onChange={handleKeyChange}
            onKeyDown={handleKeyPress}
            disabled={isLoading}
            rows={1}
            style={{ height: 'auto' }}
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
            }} />
          <button className="bg-white/10 hover:bg-white/20 cursor-pointer disabled:bg-white/5 
          disabled:cursor-not-allowed transition-colors duration-200 rounded-lg p-3 
          text-white disabled:text-white/40"
            onClick={handleSend}
            disabled={isLoading || !currentMessage.trim()}>
            <IconSend className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Chat;