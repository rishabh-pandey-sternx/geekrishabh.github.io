import PropTypes from 'prop-types'
import React from 'react'
import { withPrefix } from 'gatsby'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/rishabh-about.jpg'
import resumePDF from "../assets/Rishabh-Resume.pdf"
// import resumePDF from "/Rishabh-Resume.pdf"

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >

          {/*---------------ABOUT SECTION ----------*/}
          <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          Hey ! I am Rishabh Pandey,a person who is passionate about technologies, coding, taking up challenges and much more. 
          I have keen interest in Software and Mobile/Web develpoment along with interest in various technical activities.
          </p>
          <p><b>Qualities : </b>
          Strong of mind, free, organizing skilled, self initiator, motivated, inventive, persuading charming and shrewd in business. 
          I am talkative and cheerful, adapt very well to situations, excessive and enthusiastic.
          </p>
          {close}
        </article>
 {/*---------------SKILLS SECTION ----------*/}
        <article
          id="skills"
          className={`${this.props.article === 'sk' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
         
          <p>
          To succeed in this high-performance, global economy, everyone needs to understand and be good at communicating about skills that they hold and how much they are good at that particular skill set. So enlisted below are some of my Technical skills ,please have a Look .
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>
    {/*---------------WORK SECTION ----------*/}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <div>
          <ul>
            <li><h4>APP TO TRACK THE MARKET PRICE OF METALS, BATTERIES</h4></li>
          <p>A mobile app using React Native, redux-thunk that is used to fetch a daily market price for metals, stock available, buy and sell price.</p>
         
          <li><h4>A MULTI TENANT APPLICATION FOR ORGANISATION MANAGEMENT AND COMMUNICATIONS</h4></li>
          <p>Portal to manage companies progress contribution and all based on team, end-user. It is built with MYSQL, Expressjs, & React</p>

          <li><h4>EXPENSE TRACKING APP</h4></li>
          <p>Banking API to financial analytics to build software that makes saving money easy. It is built on Expressjs, GraphQL, MySQL.</p>
          <li><h4>TRAVEL PLANNING APP</h4></li>
          <p>This app helps to plan the travel itinerary. It gives information about popular destinations and the things to do there. Also, it helps to plan the travel with your friends so that the trip plan can be shared and edited on groups. It also has a section for famous travel bloggers. Tech stack used is React Native, AWS AppSync, Redux, Apollo GraphQL    </p>
          <li><h4>AN APP TO IMPROVE EFFECTIVENESS OF HEALTHCARE ORGANISATION</h4></li>
          <p>Organisation Management API’s that keep track of patient-focused initiatives by individual team, the contribution of an individual with each organization having some objective to achieve using Express.js, MySQL.</p>
          <li><h4></h4></li>
          <p>    </p>
          <li><h4></h4></li>
          <p>    </p>
          <li><h4></h4></li>
          <p>    </p>
          <li><h4></h4></li>
          <p>    </p>
          <li><h4></h4></li>
          <p>    </p>
          <li><h4>SERVER MONITORING APPLICATION</h4></li>
          <p>Server Monitoring Sofware, it monitors over 150 servers and display their performance.</p>
          </ul>
          </div>

            
          {close}
        </article>


        {/*---------------RESUME SECTION ----------*/}
        <article
          id="resume"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          <div class="columns download"><p>
            <a href={resumePDF} title="Rishabh's resume" target="_blank" class="button"><i class="fa fa-download"></i>Download Resume</a></p></div>
          {close}
        </article>

          {/*---------------CONTACT SECTION ----------*/}
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="tel:+919066274428" class="icon fa-phone"><span class="label">Mobile</span></a>
            </li>
            <li>
              <a
                href="https://twitter.com/geekrishabh"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li><a href="https://in.linkedin.com/in/pandeyrishabh25" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
            <li>
              <a href="https://github.com/geekrishabh" className="icon fa-github">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a href="mailto:geekrishabh@gmail.com" className="icon fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
