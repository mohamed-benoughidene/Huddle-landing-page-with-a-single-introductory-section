
import logo from './images/logo.svg';
import illustration from './images/illustration-mockups.svg';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
function App() {
  return (
    <div className="App" role="main">
<img src={logo} alt="" className="logo"/>
<div className="content">
  <img src={illustration} alt="" className="illustration"/>
  <div className="text">
<h1>Build The Community Your Fans Will Love</h1>
<p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
<button>Register</button>
  </div>
</div>
<div className="social"><FaFacebookSquare className="icon"/>
   <FaTwitterSquare className="icon"/>
   <FaInstagramSquare className="icon"/>
   </div>
    <p class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://www.frontendmentor.io/profile/mohamed-benoughidene" target="_blank">Mohamed Benoughidene</a>.
    </p>
    </div>
  );
}

export default App;
