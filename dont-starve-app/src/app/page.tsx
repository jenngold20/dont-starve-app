'use client'

import { useState } from 'react'

// Componentes simplificados
const Button = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-[#4A3A2A] text-[#E0D0A0] rounded hover:bg-[#5A4A3A] ${className}`}
  >
    {children}
  </button>
)

const ScrollArea = ({ children, className = '' }) => (
  <div className={`overflow-auto ${className}`}>
    {children}
  </div>
)

const Separator = ({ className = '' }) => (
  <hr className={`border-t border-[#4A3A2A] my-4 ${className}`} />
)

const characters = [
  {
    name: "Wilson",
    description: "El Caballero Científico",
    ability: "Puede crear objetos científicos con facilidad.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Willow",
    description: "La Pirómana",
    ability: "Inmune al fuego y puede crear su propio fuego.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Wolfgang",
    description: "El Hombre Fuerte",
    ability: "Se vuelve más fuerte cuando está bien alimentado.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Wendy",
    description: "La Médium",
    ability: "Puede invocar el espíritu de su hermana gemela.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "WX-78",
    description: "El Autómata",
    ability: "Puede comer engranajes para mejorar sus estadísticas.",
    image: "/placeholder.svg?height=200&width=200"
  }
]

export default function Component() {
  const [currentCharacter, setCurrentCharacter] = useState(0)

  const nextCharacter = () => {
    setCurrentCharacter((prev) => (prev + 1) % characters.length)
  }

  const prevCharacter = () => {
    setCurrentCharacter((prev) => (prev - 1 + characters.length) % characters.length)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#2A2A2A] text-[#E0D0A0] font-serif">
      <header className="p-4 bg-[#1A1A1A] text-center">
        <h1 className="text-4xl font-bold tracking-tight">Don't Starve Together</h1>
      </header>
      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4">Bienvenido al Mundo de Don't Starve</h2>
            <p className="text-lg">
              Explora un mundo misterioso y peligroso lleno de criaturas extrañas, peligros ocultos y sorpresas.
              Sobrevive junto a tus amigos o enfrenta los desafíos en solitario.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-3xl font-bold mb-4 text-center">Personajes</h2>
            <div className="flex items-center justify-center space-x-4">
              <Button onClick={prevCharacter}>&lt;</Button>
              <div className="w-64 h-80 bg-[#3A2A1A] rounded-lg p-4 flex flex-col items-center justify-center">
                <img
                  src={characters[currentCharacter].image}
                  alt={characters[currentCharacter].name}
                  className="w-32 h-32 mb-4 rounded-full border-4 border-[#E0D0A0]"
                />
                <h3 className="text-xl font-bold">{characters[currentCharacter].name}</h3>
                <p className="text-sm italic mb-2">{characters[currentCharacter].description}</p>
                <p className="text-sm text-center">{characters[currentCharacter].ability}</p>
              </div>
              <Button onClick={nextCharacter}>&gt;</Button>
            </div>
          </section>
          <Separator />
          <section>
            <h2 className="text-3xl font-bold mb-4 text-center">Información del Juego</h2>
            <ScrollArea className="h-48 rounded-md border border-[#4A3A2A] p-4">
              <div className="space-y-4">
                <p>
                  Don't Starve Together es un juego de supervivencia en un mundo generado proceduralmente.
                  Recolecta recursos, crea objetos, y lucha contra criaturas para sobrevivir el mayor tiempo posible.
                </p>
                <p>
                  Características principales:
                </p>
                <ul className="list-disc list-inside">
                  <li>Modo multijugador cooperativo</li>
                  <li>Diversos biomas para explorar</li>
                  <li>Ciclo día/noche y estaciones</li>
                  <li>Sistema de crafteo complejo</li>
                  <li>Personajes únicos con habilidades especiales</li>
                  <li>Criaturas y jefes desafiantes</li>
                </ul>
              </div>
            </ScrollArea>
          </section>
        </div>
      </main>
      <footer className="p-4 bg-[#1A1A1A] text-center text-sm">
        <p>© 2023 Klei Entertainment. Don't Starve Together es una marca registrada de Klei Entertainment Inc.</p>
      </footer>
    </div>
  )
}