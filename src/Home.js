import React from 'react';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        {/*Navbar start*/}
          <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
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
              <p>I'm a husband, a father to two amazing kids and a owner of a chocolate lab lap dog!<br /> I enjoy spending time with my family outdoors wether it's camping, fishing, crabing, traveling, or just sitting on the back porch chilling.</p>
            </a>
          </div>
        </div>

        <div className="container-fluid">
          <div className="Client-Projects">
            <a id="Client">
              <h1><span class="badge badge-secondary">Client Projects</span></h1>
              <div class="row">
                <div class="col">
                  <a href="https://crossfitdismantle.herokuapp.com"><h3>CrossFit Dismantle</h3></a>
                  <img src="images/Logo.png" />
                  <p>CrossFit Dismantle is a Full-Stack-App, using a React.js frontend and a Ruby-on-Rails/PostgreSQL backend. Styled using CSS3 and bootstrap, Dismantle is a fully responsive app that works with a PC, tablet, or phone. The client gave me full control on how the site would be structured and the way it would look. This is my first site up on the internet and will all the bugs and errors that occured, I was able to prove to myself I can problem solve and complete each task.</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="container-fluid">
          <div className="Side-Projects">
            <a id="Side">
              <h1><span class="badge badge-secondary">Side Projects</span></h1>
            </a>
          </div>
        </div>

        <div className="container-fluid">
          <div className="ContactMe">
            <a id="Contact">
              <h1><span class="badge badge-secondary">Contact</span></h1>
              <h2>EMAIL:</h2>
              <a href="mailto:Popemray1986@gmail.com"><p id="email"><span class="badge badge-dark">Popemray1986@gmail.com</span></p></a><br />
              <h2>PHONE:</h2>
              <p><span class="badge badge-dark">971-506-8410</span></p>
              <h2>SOCIAL:</h2>
              <div className="Social">
                <ul>
                  <a href="https://www.facebook.com/michael.pope.399" target="_blank"><i id="facebook" class="fab fa-facebook fa-5x"></i></a>
                  <a href="https://www.instagram.com/the_popesicle/" target="_blank"><i id="instagram" class="fab fa-instagram fa-5x"></i></a>
                  <a href="https://www.linkedin.com/in/michael-pope00/" target="_blank"><i id="linkedin" class="fab fa-linkedin fa-5x"></i></a>
                  <a href="https://github.com/popemray00" target="_blank"><i id="github" class="fab fa-github fa-5x"></i></a>
                  <a href="https://twitter.com/popemon86" target="_blank"><i id="twitter" class="fab fa-twitter fa-5x"></i></a>
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
