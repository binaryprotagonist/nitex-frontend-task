import React from 'react'
import axios from 'axios'

import Contacts from './SubComponents/Contacts'


const Home = () => {


  return (
    <div>
      <div className="container-fluid p-0 m-0 banner-container">
        {/*<img src="/images/landing/Asset 1.png" class="w-100 banner-background">*/}
        {/* The video */}
        {/* The video */}
        <video autoPlay muted loop className="w-100 banner-background">
          <source src="/video/hero_video.mp4" type="video/mp4" />
        </video>
        <img src="/images/banner.png" className="banner-background-2" />
        <div className="banner-text-div">
          <p className="banner-text">RELEASING</p>
          <p className="banner-text pl-5">the<span className="banner-text-1"> POWER</span></p>
          <p className="banner-text-1 pl-3">of collective</p>
          <p className="banner-text-2">ACTION</p>
        </div>
        <div className="banner-second-text-div text-justify">
          <h4 className="text-light landing-banner-text banner-bold-text"><span><img src="/images/about/Asset 10.png" className="pr-3" style={{ width: '40%' }} /></span>empowers purpose-driven organizations to impact social and environmental challenges through social partnerships, enhanced communication, and a new mechanism that catalyzes awareness and participation.</h4>
          <h4 className="text-light landing-banner-text">Each engagement with our online campaigns is directly converted into  the resources and visibility that positive-impact initiatives need most</h4>
        </div>
      </div>
      <div className="container">
        <div className="landing-heading-tab d-flex justify-content-end text-right">
          <p className=" text-left text-dark heading-small">Click to<br /><span className="heading-big">Empower</span></p>
        </div>
        <h5 className="font-grey pt-5 texth5">Trustloop is a platform where individuals can gain awareness and raise funds for impactful projects in one click.</h5>
        <h5 className="font-grey py-2 texth5"><b>It's simple: each view of our videos generates 1 unit of value to the project presented in it, which is donated by a partner company.</b></h5>
        <h5 className="font-grey py-2 pb-3 texth5">Together, we will enable a more aware, engaged and resilient community!</h5>
        <img src="/images/landing/Asset 3.png" className="w-100 pb-3" />
        <div className="row">
          <div className="col-md-8">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
              </div>
            </div>
            <p className="text-center proj-subheading">490.873 <span className="font-weight-normal">Views</span></p>
            <div className="row pt-5">
              <div className="col-md-5">
                <h4 className="font-weight-bold texth4">Trustloop, the Platform</h4>
              </div>
              <div className="col-md-7">
                <p className="font-grey text-p">We are looking forward to showing the world
                    what you've been up to.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5 mb-3 text-center">
            <div className="d-flex social-icon-background">
              <a href><img src="/images/landing/fb.png" /></a>
              <a href><img src="/images/landing/twitter.png" /></a>
              <a href><img src="/images/landing/instagram.png" /></a>
              <a href><img src="/images/landing/linkedin.png" /></a>
              <h5 className="d-flex align-items-center pl-3 pt-1 social-icon-text">Follow US</h5>
            </div>
            <p className="pt-5"><b className="font-weight-bold">sponser</b> by</p>
            <img src="/images/purpose.png" className="w-50" />
          </div>
        </div>
      </div>
      <div className="container-fluid p-5 text-center project-card-div">
        <p className="heading-bold">Check out some of the projects looking for partners to boost their impact.</p>
        <div className="row py-5">
          <div className="col-md-4 text-center mb-4">
            <div className="bg-light">
              <img src="/images/GranhotelCosmopolis (1).jpg" className="w-100 pb-3" />
              <h5 className="font-weight-bold texth5">Grandhotel Cosmopolis</h5>
              <p className="text-p"><span className="font-weight-bold" />Augsburg, Germany</p>
              <p className="p-4 text-justify font-weight-bold text-p">We focus on art, culture and education, and support in the field of flight and migration for a fair and sustainable urban society.</p>
              <p className="looking-text pb-5"><a href="https://grandhotel-cosmopolis.org/" className="text-info">www.grandhotel-cosmopolis.org/</a></p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="bg-light">
              <img src="/images/INGA.jpeg" className="w-100 pb-3" />
              <h5 className="font-weight-bold texth5">International Network of Green Agents (INGA)</h5>
              <p className="text-p"><span className="font-weight-bold">Trees of Life </span> Copenhagen, Denmark</p>
              <p className="p-4 text-justify font-weight-bold text-p">Trees of life leverages reforestation to restore native forests, contribute to the green transition and decrease the gap of forest worldwide.</p>
              <p className="looking-text pb-5"><a href="https://www.networkofgreenagents.international" className="text-info">www.networkofgreenagents.international</a></p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="bg-light">
              <img src="/images/landing/Asset 6.png" className="w-100 pb-3" />
              <h5 className="font-weight-bold texth5">Refugee Inclusion Program</h5>
              <p className="text-p">by <span className="font-weight-bold ">Human Aid </span> Koln, Germany</p>
              <p className="p-4 pb-3 text-justify font-weight-bold text-p">It doens’t take only allowing their entry, there are
              futher actions to be taken. They are not refugees,
                  they are all humans. </p>
              <p className="text-info looking-text pb-5">LOOKING FOR A PARTNER</p>
            </div>
          </div>
          {/*coloums end-*/}
        </div>
      </div>
      <div className="container-fluid steps-main-div p-0 m-0 desktop">
        <div className="container-fluid " style={{ width: '85%' }}>
          <div className="landing-heading-tab d-flex justify-content-start text-left">
            <p className=" text-left text-dark heading-small">Trustloop in three<br /><span className="heading-big">Simple Steps</span></p>
          </div>
          <div className="three-steps-div">
            <p className="heading-bold">We raise funds for social and environmental projects by bringing people, NGOs and purpose-driven brands to achieve their best, together.</p>
            <div className="row pt-5 mt-5">
              <div className="col-md-6 d-flex align-items-center mb-3">
                <p className="num-one big-numbers cyan-gradient">01.</p>
                <img src="/images/landing/Asset 7.png" className="w-100 p-5" />
              </div>
              <div className="col-md-5 d-flex align-items-center">
                <p className="p-2">We connect projects delivered by NGOS and funded by our partner companies with the online audience, in a re-imagined fundraising strategy that leverages visual storytelling, social media and reverse crowdfunding - that's how we call the mechanism that turns engagement into donations</p>
              </div>
              <div className="col-md-6 d-flex align-items-center mt-5 ml-3">
                <p className="num-one big-numbers cyan-gradient">02.</p>
                <img src="/images/landing/Asset 8.png" className="w-100 p-5" />
              </div>
              <div className="col-md-5 d-flex align-items-center">
                <p className="p-2">Individuals directly support initiatives by simply watching and sharing our content. </p>
              </div>
              <div className="col-md-5 d-flex align-items-center text-center mt-5 ml-5 pl-5">
                <p className="num-one big-numbers cyan-gradient">03.</p>
                <img src="/images/landing/Asset 9.png" className="w-100 p-5" />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <p className="p-4">Our partners donate 1 unit of value per engagement to support and scale the impact of initiatives improving our world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*mobile view*/}
      <div className="container-fluid steps-main-div p-0 m-0 mobile">
        <div className="container-fluid">
          <div className="landing-heading-tab d-flex justify-content-start text-left">
            <p className=" text-left text-dark heading-small">Trustloop in three<br /><span className="heading-big">Simple Steps</span></p>
          </div>
          <div className="three-steps-div">
            <p className="heading-bold">We raise funds for social and environmental projects by bringing people, NGOs and purpose-driven brands to achieve their best, together.</p>
            <div className="row pt-5">
              <div className="col-md-6 mb-3 text-center">
                <p className="num-one big-numbers cyan-gradient">01.</p>
                <img src="/images/landing/Asset 7.png" className="w-100 p-5" />
              </div>
              <div className="col-md-6 text-center">
                <p className="p-2">We connect projects delivered by NGOS and funded by our partner companies with the online audience, in a re-imagined fundraising strategy that leverages visual storytelling, social media and reverse crowdfunding - that's how we call the mechanism that turns engagement into donations</p>
              </div>
              <div className="col-md-6 text-center">
                <p className="num-one big-numbers cyan-gradient">02.</p>
                <img src="/images/landing/Asset 8.png" className="w-100 p-5" />
              </div>
              <div className="col-md-6 text-center">
                <p className="p-2">Individuals directly support initiatives by simply watching and sharing our content. </p>
              </div>
              <div className="col-md-6 text-center">
                <p className="num-one big-numbers cyan-gradient">03.</p>
                <img src="/images/landing/Asset 9.png" className="w-100 p-5" />
              </div>
              <div className="col-md-6 text-center">
                <p className="p-4">Our partners donate 1 unit of value per engagement to support and scale the impact of initiatives improving our world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*view ends*/}
      <div className="container-fluid text-center whats-for-you-container">
        <div className="landing-heading-tab d-flex justify-content-center text-left">
          <p className=" text-left text-dark heading-small">What’s in it<br /><span className="heading-big">For you</span></p>
        </div>
        <p className="heading-bold mt-5">We measure our success by the value that we can generate for our different stakeholder groups.</p>
        <div className="row px-5">
          <div className="col-md-4 landing-card">
            <img src="/images/landing/Asset 11.png" className="card-image" />
            <h3 className="heading-small text-dark py-5">Individuals</h3>
            <div className="card-height">
              <p className="text-justify text-p">We put people at the centre of our mission, by creating the means for you to stay informed, spread awareness, stimulate optimism, and help raise funds for initiatives regenerating our planet and strengthening our communities.<br /><br /> Every time you engage with our online campaigns you increase the chances for an initiative to secure much-needed funds to carry out with their good work.<br /><br /> Every time you spread the word, you are amplifying a positive message and helping the NGOs achieve their goal.<br /><br /> Let's create a resilient community and a better future together. Join us today!</p>
            </div>
            <button className="landing-button subscribe-button my-1 mb-5">SUBSCRIBE</button>
          </div>
          <div className="col-md-4 landing-card">
            <img src="/images/landing/Asset 12.png" className="card-image" />
            <h3 className="heading-small text-dark py-5">NGOs</h3>
            <div className="card-height">
              <p className="text-justify text-p">We know the #1 challenge faced by non-profit organisations worldwide is the lack of financial resources. Most of you rely on individual donors to sustain your initiatives, making fundraising an arduous and time-consuming part of your daily efforts.<br /><br /> Trustloop helps NGOs address their major challenge, increasing funds and visibility for their projects. In addition, we reduce the fundraising burden, leaving more time for you to dedicate to your mission.<br /><br /> If you are an NGO or a social company seeking to boost your impact by partnering up with a local company, we encourage you to apply today!</p>
            </div>
            <button className="landing-button apply-button my-3  mb-5">APPLY</button>
          </div>
          <div className="col-md-4 landing-card">
            <img src="/images/landing/Asset 13.png" className="card-image" />
            <h3 className="heading-small text-dark py-5">Companies</h3>
            <div className="card-height">
              <p className="text-justify text-p">CEOs worldwide have placed Corporate Social Responsibility and Sustainability on the top of corporate agendas. The transformation, purpose, and impact of a company is truly enabled when they collaborate with external partners such as non-profit organisations, social business and innovative start-ups.<br /><br /> Companies have the power to drive change and inspire consumers and employees through their actions and effective communication. Trustloop offers the means for companies to engage with both initiatives and the community, in order to increase and communicate their social and environmental impact.If you are a purpose-driven brand seeking to improve the world through social partnerships, please get in touch!<br /><br /> We will love to support you in your endeavour. </p>
            </div>
            <button className="landing-button contactus-button my-5">CONTACT US</button>
          </div>
        </div>
      </div>
      <div className="container-fluid m-0 p-0 position-relative">
        <img src="/images/Asset 13.png" className="follow-us-background" />
        <div className="landing-followus-div">
          <div className="row">
            <div className="col-md-6">
              <p className="heading-big text-light text-shadow">Follow Us</p>
              <h3 className="heading-small text-light text-shadow">on social media</h3>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex landing-followus-icons align-items-center">
                <img src="/images/landing/Asset 17.png" />
                <img src="/images/landing/Asset 18.png" />
                <img src="/images/landing/Asset 19.png" />
                <img src="/images/landing/Asset 20.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ width: '90%' }}>
        <p className="heading-big text-dark text-center">Services</p>
        <p className="heading-bold mt-5 text-center">We also offer a range of services to support our customers in achieving greater impact. </p>
        <div className="row">
          <div className="col-md-8 text-justify">
            <p className="heading-bold mt-5 text-left">Consultation &amp; Training</p>
            <div className="services-card">
              <p className="text-p">We understand that private and non-profit organizations have plenty to exchange, and that
              an efficient collaboration between parties can generate incredible results. But finding the
                  right partners, achieving a productive dialogue and the desired results can be challenging.<br /><br />
                  In order to ensure healthy, impactful and long-lasting partnerships, we have teamed up
                  with a number of world class experts in cross-sectoral partnerships, cooperations and
                  matchmaking to consult our customers.<br /><br />
                  We also offer a range of workshops and bespoke training on CSR and social partnerships.<br />
                <br />
                  Stay tuned on our social media channels: free webinars and podcasts are coming up soon!</p>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <img src="/images/landing/Asset 21.png" className="w-100 pt-5" />
          </div>
          <div className="col-md-6 text-justify">
            <p className="heading-bold mt-5 text-left">Tailor-made social media campaigns </p>
            <h4 className="texth4 mt-5 text-left font-weight-bold font-grey">Copywriting and Brand Messaging </h4>
            <div className="services-card">
              <p className="text-p">Let us help you cut through the noise by creating clear and engaging
                  messaging tailored to connect your impact with your audience</p>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <img src="/images/landing/Asset 22.png" className="w-50 p-4" />
            <img src="/images/landing/Asset 23.png" className="w-50 p-3" />
          </div>
          <div className="col-md-6 text-justify">
            <h4 className="texth4 mt-5 text-left font-weight-bold font-grey">Impact Video Production and Campaign Management</h4>
            <div className="services-card">
              <p className="text-p">To ensure content and aesthetic quality of every campaign, we work
                  with experts in impact video production eager to tell your story.<br /><br />
                  We're also specialised in video launches and manage social media
                  campaigns in order to drive the highest possible engagement.<br /><br />
                  The results of every campaign are consolidated and made available
                  to you on Trustloop's platform.</p>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <img src="/images/landing/Asset 24.png" className="w-50 p-3" />
            <img src="/images/landing/Asset 25.png" className="w-50 p-5" />
          </div>
        </div>
        <h4 className="texth4 mt-5 text-center font-weight-bold font-grey">Please get in touch if you'd like to learn more about our platform and services.</h4>
        <div className="row py-3">
          <div className="offset-md-8 col-md-4 text-center">
            <button className="landing-button contactus2-button my-1"><a href="#contactus">CONTACT US</a></button>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0 m-0 position-relative ">
        <img src="/images/landing/landing_page_v1b.png" className="supporter-background" />
        <div className="supporter-text-div text-center">
          <div className="landing-heading-tab d-flex justify-content-center text-center">
            <p className=" text-left text-light heading-small">Our<br /><span className="heading-big">Supporters</span></p>
          </div>
          <img src="/images/landing/Asset 27.png" className="supporters-image" />
        </div>
      </div>
      <div className="container-fluid" style={{ width: '90%' }}>
        <div className="row p-0 m-0">
          <div className="col-md-6">
            <div className="landing-heading-tab d-flex justify-content-start text-left">
              <p className=" text-left text-dark heading-big">What People<br />Say<span className="heading-small pl-3 font-weight-bold">about Us</span></p>
            </div>
            <div className="landing-testimonial-div">
              <p className="landing-testimonial-text"><span>  <img src="/images/caption2.png" className="px-3" style={{ marginLeft: '-70px' }} /></span>We put people at the centre of our mission, by
                  creating communication strategies for YOU to
                  spread awareness, stimulate optimism and
                  raise funds for initiatives regenerating our
                  planet.<br /><br />
                  Here's our promise: every time you donate a
                  minute of your attention to learn about our
                  solutions, our partners will donate 1 unit of value
                  to an environmental organization.<br /><br />
                  Do you want to support a cause? All you have to
                  do is to watch and spread our videos through
                  your network.<span><img src="/images/caption.png" className="px-3 py-3" style={{ marginLeft: '120px' }} /></span></p><br />
              <h4 className="texth4 mt-5 mb-0 text-center font-weight-bold">Jean-Bernard De Milito</h4>
              <p className="font-weight-bold text-center text-p">Business Development &amp; Operations</p>
              <p className="font-weight-bold text-center text-p">Enterprise Name</p>
            </div>
          </div>
          <div className="col-md-6">
            <img src="/images/landing/Asset 28.png" className="w-100" />
          </div>
        </div>
      </div>
      <div className="container-fluid footer-background d-flex align-items-center">
        <div className="container" id="contactus">
          <div>
            <p className="heading-big text-shadow text-light">Contact</p>
            <p className="heading-bold mt-2 ml-5 text-left text-light  banner-bold-text">Do you have any questions or feedback? Please, get in touch!</p>
            <p className="mt-2 ml-5 text-left text-light">Indicated mandatory fields (*) are required for correct processing. The data entered will be sent exclusively by e-mail to wanessa@trustloop.org, where it will be stored and processed for order processing only. A permanent storage of the entered data on our web server does not take place. Please also read our<a href="policy.html" className="text-secondary font-weight-bold"> privacy policy.</a></p>
            {/*form*/}
            <Contacts/>
            {/*form ends*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
