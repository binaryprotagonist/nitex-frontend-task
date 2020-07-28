import React, {Component} from 'react'
import './App.scss';
import Navbar from './component/Navbar';
import Home from './component/Home/Home';
import Footer from './component/Footer'
// import ScrollAnimation from 'react-animate-on-scroll';


class App extends Component {
   render ()
   {
        return(
          <div className="App">
          <div className="" style={{ position: 'relative' }}>
            <Navbar />

            <Home />
            <Footer/>
          </div>
        </div>
         )
    }
}


export default App;