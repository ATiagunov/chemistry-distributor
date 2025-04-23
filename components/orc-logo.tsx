import Image from "next/image"

interface OrcLogoProps {
  size?: number
  fontSize?: string
}

export function OrcLogo({ size = 50, fontSize = "text-[10px]" }: OrcLogoProps) {
  return (
    <div className="relative" style={{ width: `${size}px`, height: `${size}px` }}>
      <Image src="/orc-flower.svg" width={size} height={size} alt="ORC Logo" className="w-full h-full" />
      <span className={`absolute inset-0 flex items-center justify-center text-white font-bold ${fontSize}`}>ORC</span>
    </div>
  )
}
