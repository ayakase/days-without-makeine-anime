import Overlay from "../../components/Animations/StartupOverlay";
import { useState } from "react";

export function Chat() {
  const [messages, setMessages] = useState<string[]>([]); 
  const [inputValue, setInputValue] = useState<string>(""); 

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <Overlay name="lemon" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-lg flex flex-col h-[600px] bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white text-center font-semibold">
            Chatbox
          </div>

          {/* Chat messages section */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.length > 0 ? (
              messages.map((message, index) => (
                <div
                  key={index}
                  className="flex items-center justify-end space-x-2"
                >
                  <div className="bg-indigo-100 text-indigo-900 p-2 rounded-lg max-w-xs">
                    {message}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">No messages yet</div>
            )}
          </div>

          {/* Input and send button */}
          <div className="p-4 bg-gray-50 flex items-center space-x-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
