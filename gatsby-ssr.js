import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="preconnect-fonts" rel="preconnect" href="https://fonts.googleapis.com" />,
    <link
      key="google-fonts"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap"
      rel="stylesheet"
    />,
  ])
}
