import React, { useState } from 'react'
import PlusCircleIcon from '../assets/icons/plus-circle.svg'

/**
 * Accordian displays a heading and additional data on tap
 *
 * @param {React.HTMLAttributes<HTMLDivElement> & {title: string; data: Object;}} props
 */
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
        <div className="my-2 pt-2 border-t">
          {Object.entries(data).map(([key, value], index) => (
            <p key={index} className="capitalize text-gray-600 my-1">
              <span className="text-xs mr-2 uppercase bg-indigo-100 text-indigo-600 border-none rounded p-1">
                {key.replaceAll('_', ' ')}
              </span>
              <span>{value}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
