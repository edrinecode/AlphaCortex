import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/256782830524"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contact on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
      
      {/* Main button */}
      <div className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center">
        <MessageCircle size={28} className="stroke-[1.5]" />
      </div>
      
      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .group:hover {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </a>
  );
}
