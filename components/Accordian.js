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
        <p className="flex-1 overflow-ellipsis">{title}</p>
        <PlusCircleIcon
          className={`ml-2 transition-transform ${
            isOpen ? 'transform rotate-45' : ''
          }`}
        />
      </div>
      {isOpen && (
        <div className="mt-2 pt-2 border-t">
          {Object.entries(data).map(([key, value], index) => (
            <p key={index} className="capitalize text-gray-600">
              <span className="underline">{key.replaceAll('_', ' ')}</span>: {}
              {value}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
