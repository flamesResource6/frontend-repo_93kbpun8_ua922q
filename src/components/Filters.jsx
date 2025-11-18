import { useEffect, useState } from 'react'
import { Search, Sparkles } from 'lucide-react'

export default function Filters({ onChange }) {
  const [gift, setGift] = useState('')
  const [background, setBackground] = useState('')
  const [pattern, setPattern] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    const delay = setTimeout(() => {
      onChange({ gift, background, pattern, number })
    }, 300)
    return () => clearTimeout(delay)
  }, [gift, background, pattern, number])

  return (
    <div className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm text-blue-200/70 mb-1">Подарок</label>
          <input value={gift} onChange={(e)=>setGift(e.target.value)} placeholder="Например: flowers"
            className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
        </div>
        <div>
          <label className="block text-sm text-blue-200/70 mb-1">Фон</label>
          <input value={background} onChange={(e)=>setBackground(e.target.value)} placeholder="Например: dark"
            className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
        </div>
        <div>
          <label className="block text-sm text-blue-200/70 mb-1">Паттерн</label>
          <input value={pattern} onChange={(e)=>setPattern(e.target.value)} placeholder="Напр.: dots"
            className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
        </div>
        <div>
          <label className="block text-sm text-blue-200/70 mb-1">Номер</label>
          <input value={number} onChange={(e)=>setNumber(e.target.value)} placeholder="Произвольный номер"
            className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2 text-blue-200/60 text-sm">
          <Sparkles className="w-4 h-4" /> Автопоиск по мере ввода
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-200/60" />
          <input placeholder="Поиск по описанию/тегам" onChange={(e)=>onChange({ gift, background, pattern, number, q: e.target.value })}
            className="w-64 bg-slate-900/50 border border-slate-700 text-white rounded-lg pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
        </div>
      </div>
    </div>
  )
}
