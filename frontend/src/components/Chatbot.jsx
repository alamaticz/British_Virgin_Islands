import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! I'm the BVIFSC AI Assistant. How can I help you today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // Show proactive greeting after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGreeting(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setShowGreeting(false);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input;
        setInput("");
        setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
        setIsLoading(true);

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
            console.log("Attempting to connect to:", `${apiUrl}/chat`); // Debug log

            const response = await fetch(`${apiUrl}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: userMessage }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Create a placeholder bot message
            setMessages(prev => [...prev, { text: "", sender: 'bot' }]);

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let botResponse = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                botResponse += chunk;

                setMessages(prev => {
                    const newMessages = [...prev];
                    const lastMessage = newMessages[newMessages.length - 1];
                    if (lastMessage.sender === 'bot') {
                        lastMessage.text = botResponse; // Update directly
                    }
                    return newMessages;
                });
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => [...prev, {
                text: "I'm sorry, I'm having trouble connecting to the server. Please ensure the backend is running.",
                sender: 'bot'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            {/* Proactive Greeting Bubble */}
            {!isOpen && showGreeting && (
                <div className="pointer-events-auto bg-white p-4 rounded-lg shadow-xl mb-4 border border-gray-100 relative animate-fade-in-up max-w-[280px]">
                    <button
                        onClick={() => setShowGreeting(false)}
                        className="absolute top-1 right-1 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <div className="flex items-center gap-3 cursor-pointer" onClick={toggleChat}>
                        <div className="w-10 h-10 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0 text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                        </div>
                        <p className="text-sm font-medium text-gray-800 leading-snug">
                            👋 Hi there! How can I assist you with AML/CFT regulations today?
                        </p>
                    </div>
                    {/* Arrow */}
                    <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="pointer-events-auto bg-white rounded-lg shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden border border-gray-200 flex flex-col h-[600px] transition-all duration-300 ease-in-out">
                    {/* Header */}
                    <div className="bg-[#003366] text-white p-4 flex justify-between items-center shadow-md z-10">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-2.5 h-2.5 bg-[#FFD100] rounded-full animate-pulse absolute top-0 right-0 border border-[#003366]"></div>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-playfair font-semibold tracking-wide text-lg">BVIFSC Assistant</h3>
                                <p className="text-[10px] text-gray-300 uppercase tracking-wider">AI Powered</p>
                            </div>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                            aria-label="Close chat"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4 scroll-smooth">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div
                                    className={`max-w-[85%] rounded-2xl p-4 text-sm shadow-sm break-words ${msg.sender === 'user'
                                        ? 'bg-[#003366] text-white rounded-br-none'
                                        : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                                        }`}
                                >
                                    <div className="prose prose-sm max-w-none text-inherit">
                                        {/* Simple rendering for now, could use a markdown library */}
                                        <ReactMarkdown
                                            children={msg.text}
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                a: ({ href, children }) => (
                                                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-400 transition-colors">
                                                        {children}
                                                    </a>
                                                ),
                                                p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
                                                ul: ({ children }) => <ul className="list-disc pl-4 mb-2 space-y-1 marker:text-gray-400">{children}</ul>,
                                                ol: ({ children }) => <ol className="list-decimal pl-4 mb-2">{children}</ol>,
                                                li: ({ children }) => <li className="pl-1">{children}</li>,
                                            }}
                                            className="whitespace-normal leading-relaxed text-[15px]"
                                        />
                                    </div>

                                    {/* PDF Links in Bot Message */}


                                    {/* Citations */}
                                    {msg.sources && msg.sources.length > 0 && (
                                        <div className="mt-3 pt-2 border-t border-gray-100/50 text-xs opacity-70">
                                            <p className="font-semibold mb-1">Sources:</p>
                                            <ul className="list-disc list-inside space-y-0.5">
                                                {msg.sources.map((source, i) => (
                                                    <li key={i} className="truncate max-w-full">{source}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none shadow-sm pb-1">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200">
                        <div className="flex gap-3">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about AML regulations..."
                                className="flex-1 px-4 py-3 border border-gray-200 bg-gray-50 rounded-xl text-sm focus:outline-none focus:border-[#003366] focus:ring-1 focus:ring-[#003366] focus:bg-white transition-all placeholder-gray-400"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="p-3 bg-[#003366] text-white rounded-xl hover:bg-[#002a52] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md active:scale-95 transform duration-150"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </div>
                        <div className="text-center mt-2">
                            <p className="text-[10px] text-gray-400">AI can make mistakes. Verify important information.</p>
                        </div>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className={`pointer-events-auto w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 ${isOpen ? 'bg-[#D23333] rotate-90' : 'bg-[#003366] hover:bg-[#002a52]'
                    } text-white border-2 border-white`}
                aria-label="Toggle chat"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
            </button>
        </div>
    );
};

export default Chatbot;
