import React, { useState, useEffect } from "react";
import { Header_routes } from "../nav";
import { Link } from "react-router-dom";
const Header = () => {
  const [pos, setPos] = useState(0);
  const [URL, SetURL] = useState("dashboard");
  const [linkClassName,SetlinkClassName]  = useState('nav-link')

  useEffect(() => {
    getRouteUrl()
  },);
  const getRouteUrl = () => {
    let str = window.location.hash;
    var res = str.slice(2, 30);
    SetURL(res);
    console.log("kjaSadfer",res)

  };
const onLink=(item)=>{
  console.log("nav bar id",item.id)
  // let linkClassName='nav-link text-info'
  if(item.id===2){
    SetlinkClassName('nav-link text-info')
  }
  if(item.id ===1 || item.id ===3){
    SetlinkClassName('nav-link')

  }
}

  return (
    <nav className="navbar navbar-expand-lg p-0 m-0 px-md-5 position-relative">
      <a className="navbar-brand p-0 m-0" href="#a">
        <img src="/images/landing_page_v1b.png" className="navbar-logo"></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          {Header_routes.map((item, index) => {
            return (
              <li key={index} className="nav-item">
                <Link to={item.url} className={linkClassName} onClick={()=>onLink(item)}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
