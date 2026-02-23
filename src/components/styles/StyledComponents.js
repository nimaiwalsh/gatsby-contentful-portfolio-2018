import React from 'react'
import { Link } from 'gatsby'

export const PageWrapper = ({ children, className }) => (
  <div className={`w-full${className ? ` ${className}` : ''}`}>{children}</div>
)

export const Section = ({ children, className }) => (
  <section className={`pb-4 relative${className ? ` ${className}` : ''}`}>{children}</section>
)

export const Button = ({ children, onClick, type, width }) => (
  <button
    type={type || 'button'}
    onClick={onClick}
    style={width ? { width } : undefined}
    className="mt-4 px-4 py-2 bg-primary text-white uppercase font-bold text-sm rounded shadow hover:bg-teal-500 transition-colors cursor-pointer border-none"
  >
    {children}
  </button>
)

export const ButtonNext = ({ children, to }) => (
  <Link
    to={to}
    className="inline-block px-4 py-2 mr-2 bg-primary text-white font-semibold text-sm rounded hover:bg-teal-500 transition-colors"
  >
    {children}
  </Link>
)

export const ButtonPrevious = ({ children, to }) => (
  <Link
    to={to}
    className="inline-block px-4 py-2 mr-2 bg-primary text-white font-semibold text-sm rounded hover:bg-teal-500 transition-colors"
  >
    {children}
  </Link>
)
