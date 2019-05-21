import React from 'react';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1> Michael Pope </h1>
        </div>
        </div>

        <div className="container-fluid">
            <img className="SelfPic"
            src = "images/self1.jpg"
            alt = "Michael"
            />
            <h1> About Me </h1>
            <p>I'm a full stack web developer with a passion for both Front and Backend development. With experience in Ruby, Ruby on Rails, JavaScript, React and knowledge with many more technologies. I'm coming from a background in sales and customer service. I discovered web development through a podcast called CodeNewbie which motivated me to pursue my education at The Flatiron School in this field. I bring strong skills in problem solving, ability to learn quickly, customer service/relations and sales. My goal is to provide tremendous value through reliable code and dedication to others. I'm always on the search for opportunities to learn and grow as a developer. </p>
        </div>
      </div>
    );
  }
}

  export default Home;
