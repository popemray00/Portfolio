import React from 'react';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        {/*Navbar start*/}
          <nav id="Nav" class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#Home">Home</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#About">/ About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Client">/ Client-Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Side">/ Side-Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Contact">/ Contact</a>
              </li>
            </ul>
          </nav>
        {/*Navbar end*/}

        <a id="Home">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <div id="Header">
                <h1><span class="badge badge-dark">Michael Pope </span></h1>
                <h2><span class="badge badge-light">Full-Stack-Developer</span></h2>
                <h3><span class="badge badge-dark">Husband & Father</span></h3>
                <h4><span class="badge badge-light">Dog Lover</span></h4>
              </div>
            </div>
          </div>
        </a>


        <div className="container-fluid">
          <div className="About">
            <a id="About">
              <img className="SelfPic"
              src = "images/self1.jpg"
              alt = "Michael"
              />
              <h1> About Me </h1>
              <p>I'm a full stack web developer with a passion for both Front and Backend development. My experience is in Ruby, Ruby on Rails, JavaScript, and React, with knowledge in many more technologies. I'm coming from a background in sales and customer service, which I will take advantage of as a developer. I discovered web development through a podcast called CodeNewbie which motivated me to pursue my education at The Flatiron School in this field. I bring strong skills in problem solving, ability to learn quickly, customer service/relations and sales. My goal is to provide tremendous value through reliable code and dedication to my work. I'm always on the search for opportunities to learn and grow as a developer.</p>
              <p>I'm a husband, a father to two amazing kids and a owner of a chocolate lab lap dog!<br /> I enjoy spending time with my family outdoors whether it's camping, fishing, crabbing, traveling, or just sitting on the back porch chilling.</p>
            </a>
          </div>
        </div>

        <div className="container-fluid">
          <div className="Client-Projects">
            <a id="Client">
              <h1><span class="badge badge-secondary">Client Projects</span></h1>
              <div class="row">
                <div class="col">
                  <a href="https://crossfitdismantle.herokuapp.com"><h3>CrossFit Dismantle</h3></a><br />
                  <img src="images/Logo.png"/><br /><br />
                  <p>CrossFit Dismantle is a Full-Stack-App, using a React.js frontend and a Ruby-on-Rails/PostgreSQL backend. Styled using CSS3 and bootstrap, Dismantle is a fully responsive app that works with a PC, tablet, or mobile. The client gave me full control on how the site would be structured and full creativity on the appearance of the site. Even with all the bugs and errors that occurred, I was able to prove to myself I can problem solve each one and was able to complete each task and meet every deadline.</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="container-fluid">
          <div className="Side-Projects">
            <a id="Side">
              <h1><span class="badge badge-secondary">Side Projects</span></h1>
                <div class="card-deck">
                  <div class="card bg-primary">
                    <a className="SideHov" href="https://github.com/popemray00/rails-assessment-v-000" target="-blank">
                    <img class="card-img-top" id="image" src="images/download.jpg" alt="Card image"></img>
                    </a>
                    <div class="card-body text-center">
                      <h4 class="card-title">Concert Finder</h4>
                      <p class="card-text">Concert finder allows user to create a login, once logged in they are able to search upcoming concerts as well as purchase tickets. The tickets purchased will get stored a specific area, also will tell you how much money you have left on your account.</p>
                      <h4>Skills & Languages:</h4>
                      <p>Ruby on Rails, Validations, ActiveRecord, User Authentication, OAuth, Helper Methods, RESTful URLs</p>
                    </div>
                  </div>
                  <div class="card bg-danger">
                    <a className="SideHov" href="https://github.com/popemray00/Poker-night-players" target="-blank">
                    <img class="card-img-top" id="image" src="images/poker.jpg" alt="Card image"></img>
                    </a>
                    <div class="card-body text-center">
                      <h4 class="card-title">Poker Night</h4>
                      <p class="card-text">Poker night is a App for users to create a database of players for a poker tournament. I made this to keep track of the players in our monthly tournaments, also for new players to look around at the schedule and prize money. If a player wants in they simply input their information, it gets stored in the database and they just show up to the next event.</p>
                      <h4>Skills & Languages:</h4>
                      <p>React.js, Ruby on Rails, Redux, Redux Middleware, Action/Reducers, ES6, Rails API, Procfile, Stateless Components, Async Actions, CSS3</p>
                    </div>
                  </div>
                  <div className="card">
                    <a className="SideHov" href="https://github.com/popemray00/reactappointments" target="_blank">
                    <img class="card-img-top" id="image" src="images/comp.jpg" alt="Card image"></img>
                    </a>
                    <div class="card-body text-center">
                      <h4 class="card-title">React Appointments</h4>
                      <p class="card-text">React Appointments is a React.js app that was built to test my logical skills. I added some styling as well to make it a solid prototype for future use.</p>
                      <h4>Skills & Languages:</h4>
                      <p>React.js, CSS3, Lodash, React-Moment, React-Icons</p>
                    </div>
                  </div>
                  <div class="card bg-danger">
                    <a className="SideHov" href="https://github.com/popemray00/cli-data-gem-assessment-v-000" target="-blank">
                    <img class="card-img-top" id="image" src="images/gigi.jpg" alt="Card image"></img>
                    </a>
                    <div class="card-body text-center">
                      <p>(^^^ That's my dog ^^^)</p>
                      <h4 class="card-title">Dogs</h4>
                      <p class="card-text">Dogs is a Ruby CLI Gem I built that will list the most up-to-date top 50 family friendly dogs according to dogbreedslist.com.</p>
                      <h4>Skills & Languages:</h4>
                      <p>Ruby, Nokogiri, Open-Uri, Scraper, OO Desgins</p>
                    </div>
                  </div>
                </div>
            </a>
          </div>
        </div>

        <div className="container-fluid">
          <div className="ContactMe">
            <a id="Contact">
              <h1><span class="badge badge-secondary">Contact</span></h1>
              <h2><span class="badge badge-dark">EMAIL:</span></h2>
              <a href="mailto:Popemray1986@gmail.com"><p className="ContactLink">Popemray1986@gmail.com</p></a><br />
              <h2><span class="badge badge-dark">PHONE:</span></h2>
              <p>971-506-8410</p><br />
              <h2><span class="badge badge-dark">Blog:</span></h2>
              <a href="https://www.blogger.com/profile/12883160633696402998"><p className="ContactLink">My Blog</p></a><br />
              <h2><span class="badge badge-dark">SOCIAL:</span></h2>
              <div className="Social">
                <ul>
                  <a href="https://www.facebook.com/michael.pope.399" target="_blank"><i id="facebook" class="fab fa-facebook fa-5x"></i></a>
                  <a href="https://www.instagram.com/the_popesicle/" target="_blank"><i id="instagram" class="fab fa-instagram fa-5x"></i></a>
                  <a href="https://www.linkedin.com/in/michael-pope00/" target="_blank"><i id="linkedin" class="fab fa-linkedin fa-5x"></i></a>
                  <a href="https://github.com/popemray00" target="_blank"><i id="github" class="fab fa-github fa-5x"></i></a>
                  <a href="https://twitter.com/popemon86" target="_blank"><i id="twitter" class="fab fa-twitter fa-5x"></i></a>
                  <a href="https://learn-co.slack.com/messages/D6EGQJJ31/" target="_blank"><i id="slack" class="fab fa-slack fa-5x"></i></a>
                </ul>
              </div>
            </a>
          </div>
        </div>


      </div>
    );
  }
}

  export default Home;
