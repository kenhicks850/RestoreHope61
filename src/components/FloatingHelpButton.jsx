import { MessageCircle } from 'lucide-react'

export function FloatingHelpButton() {
  return (
    <a
      href="#contact"
      aria-label="Get help now"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-4 bg-secondary text-gray-900 font-semibold rounded-full shadow-xl transition-all duration-200 hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(201,162,39,0.4)]"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Need Help?</span>
    </a>
  )
}
