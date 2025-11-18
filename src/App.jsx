import { useState } from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import GiftGrid from './components/GiftGrid'

function App() {
  const [filters, setFilters] = useState({})

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_90%_30%,rgba(99,102,241,0.08),transparent_35%)]"></div>
      <div className="relative max-w-6xl mx-auto px-4 py-10">
        <Header />
        <Filters onChange={setFilters} />
        <GiftGrid filters={filters} />
      </div>
    </div>
  )
}

export default App
