import { Gift } from 'lucide-react'

export default function Header() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
          <Gift className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-white">Gift Finder</h1>
          <p className="text-sm text-blue-200/70">Подберите подарок по фильтрам</p>
        </div>
      </div>
      <a href="/test" className="text-sm text-blue-200/70 hover:text-blue-200 transition-colors">Проверка соединения</a>
    </div>
  )
}
