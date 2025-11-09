import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Chào bạn! Mình là Chatbot "Gia đình CNXH", hỗ trợ bạn học và ôn tập môn MLN131 — Những nguyên lý cơ bản của chủ nghĩa Mác-Lênin, đặc biệt về chủ đề Gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam 🎓',
    sender: 'bot',
    timestamp: new Date(),
  },
  {
    id: '2',
    text: 'Gõ số tương ứng hoặc yêu cầu cụ thể. Mình sẵn sàng bắt đầu! 💪',
    sender: 'bot',
    timestamp: new Date(),
  },
];

const quickReplies = [
  'Giới thiệu chung về gia đình',
  'Lý thuyết về gia đình CNXH',
  'Biến đổi gia đình Việt Nam',
  'Phương hướng phát triển',
];

export default function CustomChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    // Sử dụng requestAnimationFrame để đảm bảo DOM đã được cập nhật
    requestAnimationFrame(() => {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  };

  // Cuộn xuống khi có message mới hoặc khi bot trả lời (isTyping thay đổi)
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(text.trim());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
      // useEffect sẽ tự động cuộn xuống khi messages hoặc isTyping thay đổi
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('giới thiệu') || input.includes('1')) {
      return 'Gia đình là tế bào cơ bản của xã hội, đóng vai trò nền tảng trong việc duy trì và phát triển cộng đồng. Trong bối cảnh Việt Nam đang trong thời kỳ quá độ lên chủ nghĩa xã hội, gia đình không chỉ chịu tác động sâu sắc từ những biến đổi kinh tế - xã hội mà còn là động lực quan trọng thúc đẩy sự tiến bộ và phát triển bền vững của đất nước.';
    }

    if (input.includes('lý thuyết') || input.includes('2')) {
      return 'Theo quan điểm của chủ nghĩa Mác-Lênin, gia đình là sản phẩm lịch sử và phát triển cùng với sự phát triển của xã hội. Gia đình xã hội chủ nghĩa được xây dựng trên nền tảng bình đẳng, dân chủ, hạnh phúc, góp phần xây dựng con người mới xã hội chủ nghĩa.';
    }

    if (input.includes('biến đổi') || input.includes('3')) {
      return 'Gia đình Việt Nam đã trải qua nhiều biến đổi: từ cơ cấu gia đình (giảm quy mô, tăng gia đình hạt nhân), quan hệ trong gia đình (bình đẳng giới, dân chủ hóa), đến chức năng gia đình (thay đổi vai trò kinh tế, giáo dục). Công nghiệp hóa, hiện đại hóa và hội nhập quốc tế là những động lực chính của các biến đổi này.';
    }

    if (input.includes('phương hướng') || input.includes('4') || input.includes('định hướng')) {
      return 'Phương hướng phát triển gia đình Việt Nam: Xây dựng gia đình văn minh, tiến bộ, hạnh phúc; Tăng cường bình đẳng giới; Bảo vệ quyền lợi trẻ em, người cao tuổi; Kết hợp truyền thống với hiện đại; Hỗ trợ gia đình trong bối cảnh công nghiệp hóa, đô thị hóa.';
    }

    if (input.includes('chính sách') || input.includes('5') || input.includes('pháp luật')) {
      return 'Việt Nam có nhiều chính sách và pháp luật về gia đình: Luật Hôn nhân và Gia đình, chính sách bình đẳng giới, chính sách dân số, chính sách hỗ trợ gia đình khó khăn, chính sách bảo vệ trẻ em và người cao tuổi. Những chính sách này góp phần xây dựng và bảo vệ gia đình Việt Nam.';
    }

    // Default response
    return 'Cảm ơn bạn đã hỏi! Bạn có thể hỏi tôi về: Giới thiệu chung về gia đình, Lý thuyết về gia đình CNXH, Biến đổi gia đình Việt Nam, Phương hướng phát triển, hoặc bất kỳ câu hỏi nào liên quan đến môn MLN131. Tôi sẵn sàng hỗ trợ! 😊';
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleNewConversation = () => {
    setMessages(initialMessages);
    setInputValue('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg flex items-center justify-center transition-colors"
          >
            <MessageCircle size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[360px] h-[520px] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                  🤖
                </div>
                <div>
                  <h3 className="font-semibold text-base">MLN131 Bot</h3>
                  <p className="text-xs text-blue-100">Gia đình & CNXH</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleNewConversation}
                  className="hover:bg-white/10 p-1.5 rounded transition-colors"
                  title="Tạo hội thoại mới"
                >
                  <RefreshCw size={18} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/10 p-1.5 rounded transition-colors"
                  title="Đóng"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 px-4 py-2.5 rounded-lg">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Replies */}
              {messages.length <= 2 && !isTyping && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 bg-white border border-blue-300 text-blue-600 rounded-full text-xs hover:bg-blue-50 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage(inputValue);
                    }
                  }}
                  placeholder="Nói chuyện với MLN131..."
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

