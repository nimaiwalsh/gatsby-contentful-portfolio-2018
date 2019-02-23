import React from 'react'
import Responsive from 'react-responsive'
import { BREAKPOINTS } from './theme'

// Wrapper components used to display componenets at breakpoints

export const Desktop = props => <Responsive {...props} minWidth={992} />
export const Tablet = props => (
  <Responsive {...props} minWidth={BREAKPOINTS.DEFAULT} maxWidth={991} />
)
export const Phone = props => <Responsive {...props} maxWidth={BREAKPOINTS.PHONE} />
export const Default = props => <Responsive {...props} minWidth={BREAKPOINTS.DEFAULT} />

