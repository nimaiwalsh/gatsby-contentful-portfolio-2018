import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const FadeInUp = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const style = {
    opacity: isMounted ? 1 : 0,
    transform: isMounted ? 'translateY(0px)' : 'translateY(20px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  }

  return <div style={style}>{children}</div>
}

FadeInUp.propTypes = { children: PropTypes.element }

export default FadeInUp
