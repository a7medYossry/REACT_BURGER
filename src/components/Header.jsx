import React from 'react'
import Navigation from './Navigation'
import UpperHeader from './UpperHeader'

export default function Header() {
  return (
    <header className="header">
      <UpperHeader/>
      <Navigation/>
    </header>
  )
}
