import React from 'react'
import Search from './Search'
import partsout from './partsout.png'

function Filter() {
  return (
    <div className='filter'>
       <div className='logo'>
       <img src={partsout} alt="Girl in a jacket"></img>
      </div>
      <div className='parts'>
      <ul>
            <li>
               <p>CPU</p>
            </li>
            <li>
               <p>GPU</p>
            </li>
            <li>
               <p>Motherboard</p>
            </li>
            <li>
               <p>RAM</p>
            </li>
            <li>
               <p>Storage</p>
            </li>
            <li>
               <p>Power Supply</p>
            </li>
            <li>
               <p>Monitor</p>
            </li>
            <li>
               <p>Keyboard</p>
            </li>
        </ul>
      </div>
        <div className='search'>
            <Search />
        </div>
      </div>
  )
}

export default Filter