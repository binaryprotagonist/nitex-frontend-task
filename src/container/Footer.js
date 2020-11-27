import React, { Fragment } from 'react'
import moment from 'moment'
const Footer = ()=>{

  const links = [
    { label: 'Ady Production, LLC ',    link: '/' },
    { label: `Copyright ${ moment().format('YYYY') }  `, link: '/' },
    { label: 'All Rights Reserved', link: '/' },
  ]

  return(
    
    <div className="container-fluid">
    <div className="row p-5">
      <div className="col-md-3">
        <img src="images/logo.png" className="w-100" /><br />
      </div>
      <div className="col-md-2 d-flex">
        <img src="/images/fb.png" className="w-25" />
        <img src="/images/twitter.png" className="w-25" />
        <img src="/images/instagram.png" className="w-25" />
        <img src="/images/linkedin.png" className="w-25" />
      </div>
      <div className="col-md-2 pt-3">
        <p>Impressum</p>
      </div>
      <div className="col-md-2 pt-3">
        <p>Datenshutz</p>
      </div>
      <div className="col-md-2 pt-3">
        <p>Contact</p>
      </div>
    </div>
  </div>
  )
}

export default Footer
