import React from "react";
import ShootingStars from "./components/ui/shooting-star";
import StarsBackground from "./components/ui/stars-background";
import "./App.css";
import google from './images/google.png';
import kodely from './images/Kodely.png';
import info from './images/infosys.png';


export default function App() {


  return (
    <div className="App">
      <div className="card">
        <h2>Fuad Farhan</h2>
         <h4>Email:fuadhoquefarhan05@gmail.com</h4>
        
        <a href = "https://www.linkedin.com/in/fuadfarhan/">Linkedin</a>
        <h4>Software Engineer. Computer Science BA @ Hunter College. Interested in building web applications and AI Agents and applications.</h4>
      </div>


      
      <div className="bars">
      <h3><strong>Recent Builds for YOU!</strong></h3>
      <div className="bar-item">
          <button className="bar-item" onClick={() => window.location.href = 'https://github.com/fuadfarhan05/HabitAware'}>
           Habit Aware
          </button>
      </div>

      <div className="bar-item">
         <button className="bar-item" onClick={() => window.location.href = 'https://github.com/fuadfarhan05/HabitAware'}>
           Just Put The Fries In the bag
          </button>
      </div>
          
        </div>
      

      <div className="bars">
      <h3><strong>2x Hackathon Winner</strong></h3>
        <div className="bar-item">
          <button className="bar-item" onClick={() => window.location.href = 'https://devpost.com/software/habitaware'}>
           Hunter Hacks
          </button>
      </div>
        <div className="bar-item">
          <button className="bar-item" onClick={() => window.location.href = 'https://devpost.com/software/just-put-the-fries-in-the-bag'}>
           DevPost Hackathon
          </button>
      </div>
        

      </div>
      <div className="bars">
      <h3><strong>Experiences and Contributions</strong></h3>
        <div className="bar-item">
          <p>Kodely</p>
        </div>
        <div className="bar-item">
          <p>InfoSys</p>
        </div>
         <div className="bar-item">
          <p>Google</p>
        </div>
       

      

      </div>

      <div>
        <div className="imagesofcompanies">
          <img src={google} className="floating-img" />

          <img src={kodely} className="floating-img2" />

          <img src= {info} className="floating-img3" />
        </div>
      </div>
      
      

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
