import React, {Component} from 'react'
import ScrollAnimation from 'react-animate-on-scroll';



class Home extends Component {
render (){
return (
<div className="">
   <div className="box">
      <h1 className="heaf ">CITY OF</h1>
      <h1 className="codepen">COPENHAGEN</h1>
       
      {/* <ScrollAnimation  animateIn="fadeInLeft"  animateOut="fadeInRight">
         <h1 className="heaf">CITY OF</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight">
         <h1 className="codepen">COPENHAGEN</h1>
      </ScrollAnimation>
     */}
      <div className="row">
         <div className="col-md-12">
            <div id="shortcuts-zone">
               <form id="jq_search">
                  <div className="search-block">
                     <input type="search" placeholder="Choose Location" />
                     <input type="search search2" placeholder="Date" className="date" />
                     <input type="search search3" placeholder="Guests" className="guests" />
                     <input type="button" Value="Search" className="btn_search" />
                  </div>
               </form>
            </div>
         </div>
      </div>
     
     
   </div>
  <div id="clouds">
  <div className="cloud x1" />
  <div className="cloud x2" />
  <div className="cloud x3" />
  <div className="cloud x4" />
  <div className="cloud x5" />
</div>

   <div className="img">
      <img src="/vector.png"/>
   </div>
   <div style={{backgroundColor: "#f9f9f9", paddingTop:"10px", paddingBottom: "50px" }}>
   <div className="container">
     <div className="box_location">
       <i className="fas fa-map-marker"></i>
     </div>
     <h1 className="head_summer">Available Summer Tours</h1>
     
      <div className="row">
        <div className="col-xl-6">
           
             <div className="box_animation">
             <div class="row">
             <div className="col-xl-2">
               <img src="/1.JPG"/>
             </div>
             <div className="col-xl-7">
              <h1>Hop On- Hop Off Boat (1 hour)</h1>
              <p>Get onboard of our Hop On .Hop off boat tours</p>
             </div>
             <div className="col-xl-3 border-left_1">
               <h1 className="head_line">$ 25.00</h1>
               <button className="btn_book1">Book</button>
             </div>
             </div>
           </div>
           <div className="box_animation">
             <div class="row">
             <div className="col-xl-2">
               <img src="/2.JPG"/>
             </div>
             <div className="col-xl-7">
              <h1>Round City Bike Tour (5 hours)</h1>
              <p>Get onboard one of Our Round City Bike Tour.</p>
             </div>
             <div className="col-xl-3 border-left_1">
               <h1 className="head_line">$ 35.00</h1>
               <button className="btn_book1">Book</button>

             </div>
             </div>
           </div>
           <div className="box_animation">
             <div class="row">
             <div className="col-xl-2">
               <img src="/3.JPG"/>
             </div>
             <div className="col-xl-7">
              <h1>City Cable Car Tour (2 hour)</h1>
              <p>Get onboard one of our City Cable Car Tour </p>
             </div>
             <div className="col-xl-3 border-left_1">
               <h1 className="head_line">$ 45.00</h1>
               <button className="btn_book1">Book</button>

             </div>
             </div>
           </div>
           <div className="box_animation">
             <div class="row">
             <div className="col-xl-2">
               <img src="/4.JPG"/>
             </div>
             <div className="col-xl-7">
              <h1>Round City Panoramic (3 hours)</h1>
              <p>Get onboard one of our Round City Panoramic Tour </p>
             </div>
             <div className="col-xl-3 border-left_1">
               <h1 className="head_line">$ 85.00</h1>
               <button className="btn_book1">Book</button>

             </div>
             </div>
           </div>
        </div>
        <div className="col-xl-6">
        <ScrollAnimation animateIn="fadeInRight">
           <img src="/vector3.png" className="img-fluid img_1"/>
         </ScrollAnimation>
        </div>
      </div>
    </div>

     <div className="row">
       <div className="col-xl-6"></div>
       <div className="col-xl-6"></div>
     </div>
   </div>



   <div className="container-fluid box_1">
      <h1 className="">Discover Copenhagen at <br/>your own pace</h1>
      <p className="para_l">
        An easy and calm way to get to the other side of the harbor, and the ticket <br/> you can enjoy a free beer or soda at the Reffen bars.
      </p>
      <button className="btn_book">Book a Tour</button>
      <button className="more">More info</button>
   </div>
   
   <div style={{backgroundColor: "#fff", paddingTop:"10px", paddingBottom: "50px" }}>
   <div className="container">
     <div className="box_location">
       <i className="fas fa-ship"></i>
     </div>
     <h1 className="head_summer">Nyhavn-Reffen Boat Service</h1>
     
      <div className="row">
        
            <div className="col-xl-6">
            <ScrollAnimation animateIn="fadeInLeft">
           <img src="/vectordoor.png" className="img-fluid"/>
           </ScrollAnimation>
         </div>
        
       
        <div className="col-xl-6">
         <div className="row">
        
           <div className="col-xl-6">
           <div className="animation_top">
             <h1 className="head" style={{color:"#215579"}}>1. Tickets</h1>
             <p className="para_priny">
               Rehshaleoen or Reffen is one of Copenhagen's up and comming areas. which is slowly turning from an industrial wasteland into.
</p>
           </div>
           </div>
          
           <div className="col-xl-6">
           <div className="animation_top2">
             <h1 className="head" style={{color:"#F8E079"}}>2. Boat</h1>
             <p className="para_priny">
             The trendy street food market offers fantastic treats for the taste buds. You will discover a large array of international cuisiness and local.  
              </p>
           </div>
           </div>
           <div className="col-xl-6">
           </div>
           
           <div className="col-xl-6">
           <div className="animation_top3">
             <h1 className="head" style={{color:"#4BA6B4"}}>3. Explore</h1>
             <p className="para_priny">
             Rehshaleoen or Reffen is one of Copenhagen's up and comming areas. which is slowly turning from an industrial wasteland into.
             </p>
           </div>
           </div>
         </div>
        </div>
      </div>
    </div>

     <div className="row">
       <div className="col-xl-6"></div>
       <div className="col-xl-6"></div>
     </div>
   </div>
   <div class="contact">
      <h1 className="">Discover Copenhagen at <br/>your own pace</h1>
      <p className="para_l">
      An easy and calm way to get to the other side of the harbor, and the ticket <br/> you can enjoy a free beer or soda at the Reffen bars.

      </p>
      <div className="container">
         <div className="row">
            <div className="col-xl-6">
               <form>
                  <input type="text" placeholder="Name" className="form_col" />
                  <input type="Email" placeholder="Phone" className="form_col" />
                  <input type="Email" placeholder="Email" className="form_col" />
                  <input type="button" value="Send Request" className="btn_sub"/>
               </form>
            </div>
            <div className="col-xl-6">
               <img src="/vector2.jpg"/>
            </div>
         </div>
      </div>
   </div>
</div>
)
}
}
export default Home;