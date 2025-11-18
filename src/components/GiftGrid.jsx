import { useEffect, useState } from 'react'

export default function GiftGrid({ filters }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError('')
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const params = new URLSearchParams()
        Object.entries(filters || {}).forEach(([k, v]) => {
          if (v) params.append(k, v)
        })
        params.append('limit', '24')
        const res = await fetch(`${base}/api/gifts?${params.toString()}`)
        if (!res.ok) throw new Error('Ошибка загрузки')
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [JSON.stringify(filters)])

  if (loading) {
    return <div className="text-blue-200/70 p-8">Загрузка...</div>
  }

  if (error) {
    return <div className="text-red-300 p-8">{error}</div>
  }

  if (!items.length) {
    return <div className="text-blue-200/70 p-8">Ничего не найдено</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {items.map(item => (
        <div key={item.id} className="bg-slate-800/60 border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-400/40 transition-colors">
          {item.image_url ? (
            <img src={item.image_url} alt={item.title || item.gift} className="w-full h-40 object-cover" />
          ) : (
            <div className="w-full h-40 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-blue-200/50 text-sm">
              Нет изображения
            </div>
          )}
          <div className="p-4">
            <div className="text-white font-semibold">{item.title || item.gift}</div>
            <div className="text-blue-200/70 text-sm mt-1">фон: {item.background} • паттерн: {item.pattern}{item.number ? ` • №${item.number}` : ''}</div>
            {item.description && <div className="text-blue-200/70 text-sm mt-2">{item.description}</div>}
            {typeof item.price === 'number' && <div className="text-blue-300 mt-2 font-medium">{item.price} ₽</div>}
          </div>
        </div>
      ))}
    </div>
  )
}
