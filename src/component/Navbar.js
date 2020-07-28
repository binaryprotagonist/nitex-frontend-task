import React, { useState, useEffect } from 'react'

const Navbar = ()=>{
  const [pos, setPos] = useState(0)

  const links = [

    { label: 'City Tour', url: '/' },
    { label: 'Local Guide', url: '/' },
    { label: 'Bus Tour', url: '/' },
    { label: 'Bike Ride', url: '/' },
   

  ]

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      setPos(window.pageYOffset)
    })
  }, [])

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
      <a className="navbar-brand" href="#a">
        <label className="color_1">WOOP<label className="color_s">TOUR</label></label>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto under_navber">
       
          { links.map((e, i)=>(
            <li key={ i } className="nav-item">
              <a className="nav-link" href={ e.url }>{ e.label }</a>
            </li>
          ))}
          
      
        </ul>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <a className="nav-link custom_anchor" href="#a">
              Get App
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom_anchor2" href="#a">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      </div>
    </nav>

  )
}

export default Navbar
