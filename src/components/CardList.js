import React from 'react'

const CardList = (props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-container mx-auto py-8">
      {props.children}
    </section>
  )
}

export default CardList
