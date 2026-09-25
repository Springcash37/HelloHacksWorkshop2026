
import { useState } from 'react'
import './App.css'

const pokemonTypes = [
  { name: 'Fire', color: 'bg-red-500 text-white ring-red-300' },
  { name: 'Water', color: 'bg-blue-500 text-white ring-blue-300' },
  { name: 'Grass', color: 'bg-emerald-500 text-white ring-emerald-300' },
  { name: 'Ground', color: 'bg-amber-600 text-white ring-amber-300' },
]

function App() {
  const [selectedType, setSelectedType] = useState('Fire')



function getMatchup(type) {
  // API CALL WILL GO HERE, AND WE WILL RETURN THE RESPONSE
  return `Fake API response: You are fighting a ${type}-type Pokémon.`;

    function handleTypeClick(type) {
  const response = getMatchup(type);
  setResult(response);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff7db,_#f3f4f6_40%,_#dfe7f3_100%)] px-4 py-10 text-slate-800">
      <div className="mx-auto max-w-xl">
        <div className="pokemon-card relative overflow-hidden rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-sm">
          <div className="absolute inset-x-10 top-0 h-28 rounded-b-full bg-yellow-200/50 blur-2xl" />

          <div className="relative">
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Battle Guide
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-800 bg-white shadow-sm">
                <div className="h-3 w-3 rounded-full bg-red-500" />
              </div>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Pokémon Battle Assistant
            </h1>

            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              What type of Pokémon are you fighting?
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {pokemonTypes.map((type) => {
                const isSelected = selectedType === type.name

                return (
                  <button
                    key={type.name}
                    type="button"
                    onClick={() => handleTypeClick(type.name)}
                    className={`rounded-2xl px-4 py-3 text-base font-semibold shadow-sm ring-2 transition-all duration-200 ${type.color} ${
                      isSelected ? 'scale-[1.02] ring-offset-2 ring-offset-white' : 'opacity-90 hover:-translate-y-0.5'
                    }`}
                  >
                    {type.name}
                  </button>
                )
              })}
            </div>

            <p className="mt-7 rounded-2xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-slate-700">
              You clicked: {selectedType}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
