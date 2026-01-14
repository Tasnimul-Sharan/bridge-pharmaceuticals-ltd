import { useState, useRef, useEffect } from "react";
import { IoMdSend, IoMdClose } from "react-icons/io";
import { ChatToggleButton } from "./ChatToggleButton";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const chatContainerRef = useRef(null);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chat, typing]);

  const botMessages = ["Greetings, Sir. How are you? 😊"];

  const cleanMarkdown = (text) => {
    return text
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/^- /gm, "")
      .replace(/^• /gm, "");
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    setChat((prev) => [...prev, { type: "user", text: message }]);
    const userMessage = message;
    setMessage("");
    setTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      setTyping(false);
      setChat((prev) => [...prev, { type: "bot", text: data.reply }]);
    } catch (err) {
      setTyping(false);
      setChat((prev) => [
        ...prev,
        {
          type: "bot",
          text: "❌ Sorry, something went wrong. Please try again later.",
        },
      ]);
    }
  };

  const startChat = () => {
    setOpen(true);
    setClosing(false);
    setChat([{ type: "bot", text: botMessages[0] }]);
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 300);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6">
        <ChatToggleButton
          open={open}
          toggle={() => (open ? handleClose() : startChat())}
        />
      </div>

      {open && (
        <div
          className={`fixed bottom-20 right-5 md:w-80 bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200 z-50 
          ${closing ? "animate-slideDown" : "animate-slideUp"}`}
        >
          <div className="bg-primary text-white px-4 py-4 flex justify-between items-center">
            <span className="font-semibold">Anondo Baari ChatBot</span>
          </div>
          <div
            ref={chatContainerRef}
            onWheel={(e) => {
              e.stopPropagation();
            }}
            className="p-4 bg-gray-100 h-60 overflow-y-auto flex flex-col space-y-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
          >
            {chat.map((c, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-md max-w-full text-sm ${
                  c.type === "bot"
                    ? "bg-white text-gray-800 self-start"
                    : "bg-primary text-white self-end ml-auto"
                }`}
              >
                {c.type === "bot" && c.text.includes("\n")
                  ? c.text.split("\n").map((line, idx) => (
                      <div key={idx} className="mt-1">
                        {cleanMarkdown(line.trim())}
                      </div>
                    ))
                  : cleanMarkdown(c.text)}
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-2xl bg-white border shadow text-sm">
                  <span className="transition-all transform duration-700 text-gray-500 typing-dots">
                    ● ● ●
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex border-t border-gray-200">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Write your mesages here..."
              className="flex-1 px-3 py-4 text-sm outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-primary text-white p-3 hover:bg-primary/80 transition-all duration-500"
            >
              <IoMdSend size={18} />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .typing-dots {
          display: flex;
          gap: 3px;
        }
        .typing-dots span {
          width: 6px;
          height: 6px;
          background-color: #6b7280; /* gray-500 */
          border-radius: 50%;
          display: inline-block;
          animation: bounce 2s infinite ease-in-out both;
        }
        .typing-dots span:nth-child(1) {
          animation-delay: 0s;
        }
        .typing-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }
        .typing-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideDown {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(20px);
            opacity: 0;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        @keyframes ripple {
          0% {
            box-shadow: 0 0 0 0 rgba(249, 155, 36, 0.6);
          }
          70% {
            box-shadow: 0 0 0 25px rgba(249, 155, 36, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(249, 155, 36, 0);
          }
        }
        .animate-ripple {
          animation: ripple 2s infinite ease-out;
        }
      `}</style>
    </>
  );
}
