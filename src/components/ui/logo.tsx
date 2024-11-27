import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-[#0891b2] rounded-lg transform rotate-3 transition-transform group-hover:rotate-6" />
        <div className="absolute inset-0 bg-white rounded-lg transform -rotate-3 transition-transform group-hover:rotate-0">
          <span className="absolute inset-0 flex items-center justify-center font-bold text-[#0891b2] text-xl">
            C
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900">Chelford</span>
        <span className="text-sm text-[#0891b2] font-medium">Mobile Services</span>
      </div>
    </Link>
  )
}
