import React from 'react'
import './main.css'
import PageTitle from './PageTitle'
import Dashboard from './Dashboard'

function Main() {
  return (
    <main className='main' id='main'>
        <PageTitle page='Dashboard'/>
        <Dashboard/>
    </main>
  )
}

export default Main