import React from 'react'

/**
 * A NavLink for navigating through different tabs
 *
 * @param {React.HTMLAttributes<HTMLAnchorElement> & {tabName: string; isActive: boolean;}} props
 */
export default function NavLink({ tabName, isActive }) {
  return (
    <a
      href={`#${tabName}`}
      className={`text-md inline-block border rounded-md focus:outline-none focus:ring-2 ${
        isActive
          ? 'bg-indigo-100 text-indigo-600 hover:bg-indigo-100'
          : ' text-gray-500'
      } px-5 py-2.5 capitalize hover:bg-indigo-50`}
    >
      {tabName}
    </a>
  )
}
