'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Importa las imágenes
import wilsonImg from './img/wilson.webp'
import willowImg from './img/willow.webp'
import wolfgangImg from './img/wolfgang.webp'
import wendyImg from './img/wendy.webp'
import wx78Img from './img/wx78.webp'

// Importa los iconos de Lucide
import { Sun, Moon, Volume2, VolumeX } from 'lucide-react'

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
    image: wilsonImg
  },
  {
    name: "Willow",
    description: "La Pirómana",
    ability: "Inmune al fuego y puede crear su propio fuego.",
    image: willowImg
  },
  {
    name: "Wolfgang",
    description: "El Hombre Fuerte",
    ability: "Se vuelve más fuerte cuando está bien alimentado.",
    image: wolfgangImg
  },
  {
    name: "Wendy",
    description: "La Médium",
    ability: "Puede invocar el espíritu de su hermana gemela.",
    image: wendyImg
  },
  {
    name: "WX-78",
    description: "El Autómata",
    ability: "Puede comer engranajes para mejorar sus estadísticas.",
    image: wx78Img
  }
]

const survivalTips = [
  "Recolecta recursos constantemente para sobrevivir.",
  "Mantén tu cordura alta para evitar alucinaciones peligrosas.",
  "Prepárate para el invierno con anticipación.",
  "No ataques a los cerdos a menos que sea necesario, pueden ser aliados útiles.",
  "Explora con cuidado, pero no tengas miedo de aventurarte.",
  "Aprende a cocinar para obtener mejores beneficios de tu comida.",
  "Construye una base cerca de recursos importantes.",
  "No olvides llevar antorchas o fuego para la noche.",
  "Los conejos son una fuente fácil de carne y pelaje.",
  "Mantén un ojo en tu medidor de hambre en todo momento."
]

export default function Component() {
  const [currentCharacter, setCurrentCharacter] = useState(0)
  const [isDayTime, setIsDayTime] = useState(true)
  const [survivalDays, setSurvivalDays] = useState(0)
  const [isSoundOn, setIsSoundOn] = useState(false)
  const [currentTip, setCurrentTip] = useState(survivalTips[0])

  const nextCharacter = () => {
    setCurrentCharacter((prev) => (prev + 1) % characters.length)
  }

  const prevCharacter = () => {
    setCurrentCharacter((prev) => (prev - 1 + characters.length) % characters.length)
  }

  const toggleDayNight = () => {
    setIsDayTime((prev) => !prev)
  }

  const toggleSound = () => {
    setIsSoundOn((prev) => !prev)
    // Aquí iría la lógica para activar/desactivar el sonido
  }

  useEffect(() => {
    // Incrementa los días de supervivencia cada 10 segundos
    const survivalInterval = setInterval(() => {
      setSurvivalDays((prev) => prev + 1)
    }, 10000)

    // Cambia el consejo de supervivencia cada 30 segundos
    const tipInterval = setInterval(() => {
      setCurrentTip(survivalTips[Math.floor(Math.random() * survivalTips.length)])
    }, 30000)

    return () => {
      clearInterval(survivalInterval)
      clearInterval(tipInterval)
    }
  }, [])

  return (
    <div className={`flex flex-col min-h-screen ${isDayTime ? 'bg-[#F5DEB3]' : 'bg-[#2A2A2A]'} text-[#4A3A2A] font-serif transition-colors duration-1000`}>
      <header className="p-4 bg-[#1A1A1A] text-[#E0D0A0] text-center flex justify-between items-center">
        <h1 className="text-4xl font-bold tracking-tight">Don't Starve Together</h1>
        <div className="flex space-x-4">
          <button onClick={toggleDayNight} className="text-[#E0D0A0] hover:text-white">
            {isDayTime ? <Moon size={24} /> : <Sun size={24} />}
          </button>
          <button onClick={toggleSound} className="text-[#E0D0A0] hover:text-white">
            {isSoundOn ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </button>
        </div>
      </header>
      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4">Bienvenido al Mundo de Don't Starve</h2>
            <p className="text-lg">
              Explora un mundo misterioso y peligroso lleno de criaturas extrañas, peligros ocultos y sorpresas.
              Sobrevive junto a tus amigos o enfrenta los desafíos en solitario.
            </p>
            <p className="text-xl font-bold mt-4">Días de supervivencia: {survivalDays}</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-3xl font-bold mb-4 text-center">Personajes</h2>
            <div className="flex items-center justify-center space-x-4">
              <Button onClick={prevCharacter}>&lt;</Button>
              <div className="w-64 h-80 bg-[#3A2A1A] rounded-lg p-4 flex flex-col items-center justify-center text-[#E0D0A0]">
                <Image
                  src={characters[currentCharacter].image}
                  alt={characters[currentCharacter].name}
                  width={128}
                  height={128}
                  className="mb-4 rounded-full border-4 border-[#E0D0A0]"
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
          <section className="bg-[#3A2A1A] p-4 rounded-lg text-[#E0D0A0]">
            <h3 className="text-2xl font-bold mb-2">Consejo de Supervivencia</h3>
            <p className="italic">{currentTip}</p>
          </section>
        </div>
      </main>
      <footer className="p-4 bg-[#1A1A1A] text-center text-sm">
        <p>© 2024 Realizada por Jenn ♡ . Don't Starve Together es una marca registrada de Klei Entertainment Inc.</p>
      </footer>
    </div>
  )
}