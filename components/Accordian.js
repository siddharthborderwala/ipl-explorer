import { useState } from 'react'
import PlusCircleIcon from '../assets/icons/plus-circle.svg'

export default function Accordian({ title, data }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen(!isOpen)

  return (
    <div className="bg-gray-50 px-4 py-2 border rounded-md">
      <div
        className="flex justify-between items-center cursor-pointer text-gray-900"
        onClick={handleToggle}
      >
        <p>{title}</p>
        <PlusCircleIcon
          className={`transition-transform ${
            isOpen ? 'transform rotate-45' : ''
          }`}
        />
      </div>
      {isOpen && (
        <div className="mt-2 pt-2 border-t">
          {Object.entries(data).map(([key, value]) => (
            <p className="capitalize text-gray-600">
              {key.replaceAll('_', ' ')}: {value}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
