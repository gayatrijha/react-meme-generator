import React from 'react'
import troll from '../img/troll.png'

export default function Header() {
  return (
    <>
      <header style={{backgroundColor:'#6C2685', padding:'20px 30px', display:'flex', alignItems:'center'}}>
        <img src={troll}  width='5%'alt="loading"/>
        <h4 style={{padding:'20px', marginRight:'auto'}} className='text-light'> Meme Generator</h4>
        <h4 className='text-light' style={{ padding:'20px'}}>React Course -Project 3</h4>
      </header>
    </>
  )
}
