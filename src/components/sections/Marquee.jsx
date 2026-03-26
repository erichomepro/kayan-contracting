'use client'

export default function Marquee() {
  return (
    <div className="bg-black py-6 overflow-hidden border-y border-white/5">
      <div className="animate-marquee">
        <span className="text-white/20 font-bold uppercase tracking-[0.5em] text-[10px] mx-12">
          STONY PLAIN ◆ SPRUCE GROVE ◆ PARKLAND COUNTY ◆ ST. ALBERT ◆ LAC STE. ANNE ◆ EDMONTON
        </span>
        <span className="text-white/20 font-bold uppercase tracking-[0.5em] text-[10px] mx-12">
          STONY PLAIN ◆ SPRUCE GROVE ◆ PARKLAND COUNTY ◆ ST. ALBERT ◆ LAC STE. ANNE ◆ EDMONTON
        </span>
      </div>
    </div>
  )
}