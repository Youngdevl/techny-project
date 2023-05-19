import React, { Component } from 'react';
import background from "../images/hero-illustration-shield-large-desktop.svg";
import fig from '../images/techny-launching-a-startup.gif';
import './body.css';

class App extends Component {
render() {
	// const myStyle={
	// 	backgroundImage: `url(${background})` ,
	// 	height:'50vh',
	// 	marginTop:'-30px',
	// 	fontSize:'50px',
	// 	backgroundSize: 'cover',
	// 	backgroundRepeat: 'no-repeat',
	// };
	return (
	<div id='wep'>
	<div class="flex">
  <div class="flex-1 w-64 ...">
    <h1>HEIMDAL SECURITY</h1>
    <h3>Your first step to online freedom</h3>
    <p>We believe everyone has the right to be safe online, <br/>
    which is why we offer our award-winning free antivirus to<br/>
     millions of people around the world.</p>
     <div className='centerr'>  <button
            type="button" id='fv'
            className="inline-flex items-center rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register Now
          </button>
           <button
            type="button" id='fst'
            className="inline-flex items-center rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View Plans  <span aria-hidden="true">&nbsp;&rarr;</span>
          </button>
          </div>
  </div>
  <div class="flex-1 w-32 ...">
    <img src={fig} width={500}/>
  </div>
</div>
	</div>
	);
}
}

export default App;
