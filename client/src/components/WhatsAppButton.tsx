export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/256782830524"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group animate-float"
      aria-label="Contact on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>
      
      {/* Main button with Image - Reduced size */}
      <div className="relative w-12 h-12 md:w-14 md:h-14 transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center">
        <img 
          src="/images/whatsapp_logo.png" 
          alt="WhatsApp" 
          className="w-full h-full object-contain drop-shadow-xl"
        />
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
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </a>
  );
}
