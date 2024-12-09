import React from 'react'
import Item from './Item'
import Sectionb from './Sectionb'
import Sectiona from './Sectiona'
import Popular from './Popular'
import Sectionc from './Sectionc'
import Sectiond from './Sectiond'

const Homepage = () => {
  return (
    <div>
      <Sectiona/>
      <Sectionb/>
      <Item/>
      <Popular/>
      <Sectionc/>
      <Sectiond/>
    </div>
  )
}

export default Homepage