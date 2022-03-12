import React from 'react'
import Header from './Header'

import Filter from './Filter'
import Banner from './Banner'

function Main() {
  return (
      <>
    <Header />
    <div className='container'>
    <Filter />
    <Banner />
      </div>
    
    </>
  )
}

export default Main