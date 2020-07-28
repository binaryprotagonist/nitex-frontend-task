import React, {Component} from 'react'



class Footer extends Component {
   render ()
   {
        return(
          <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2">
                    <a className="navbar-brand" href="#a">
        <label className="color_1">WOOP<label className="color_s">TOUR</label></label>
      </a>
                    </div>
                    <div className="col-xl-7">
                    <ul className=" under_footer">
          <li className="nav-item">
            <a href="" className="nav-link">City Tour</a>    
              </li>
          <li className="nav-item" >
          <a href="" className="nav-link">  Local Guide
          </a>
          </li>
          <li className="nav-item"><a href="" className="nav-link">Bus Tour</a></li>
          <li className="nav-item"><a href="" className="nav-link">Bike Rside</a></li>
      </ul>
                    </div>
                    <div className="col-xl-3">
                    <ul className=" under_footer">
          <li className="nav-item">
            <a href="" className="nav-link"><i className="fab fa-facebook"></i></a>    
              </li>
          
          <li className="nav-item"><a href="" className="nav-link"><i className="fab fa-twitter"></i></a></li>
          <li className="nav-item" >
          <a href="" className="nav-link"><i className="fab fa-instagram"></i>
          </a>
          </li>
      </ul>
                    </div>
                </div>
        
     
            </div>
          </div>
         )
    }
}


export default Footer;