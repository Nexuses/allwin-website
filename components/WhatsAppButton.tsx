import Icon from "./Icon";

export default function WhatsAppButton() {
  return (
    <a
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      href="https://wa.me/971585666955"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon name="chat" className="text-[26px]" />
    </a>
  );
}
