import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
	const nav = useNavigate();

	const goHome = () =>{
		nav("Home");
	};
  return (
	
    <div className="about-content">
                     <button onClick={()=>goHome}>Home</button>
                     <p>Hello , my name is Zemo and i am UX / UI designer and front - end developer  </p>
                     <p>Lorem ipsum dolor sit amet , consectetur adipisicing elit , sed do eiusmod tempor incididunt ut labe et dolore magna aliqua . Ut enim ad minim veniam , quis nostrud exercitation ullamco laboris</p>
					 <p>Design Tools</p>
					 <ul>
					     <li>Adobe xd</li>
					     <li>Illustrator</li>
					     <li>Photoshop</li>
					     <li>Figma</li>
						 <li>Sketch</li>
					 </ul>
					 <div className="para">
					 <p>Tecnologies and Skill</p>
					 <ul>
					      <li>Html</li>
					      <li>Css </li>
					      <li>Scss</li>
					      <li>Less</li>
					      <li>jQuery</li>
						  <li>php</li>
						  <li>React</li>
						  <li>Java </li>
					 </ul>
					 </div>
					 <div className="paraone">
					      <p>Work Process</p></div>
						  <div className="span-item">
						  <ul>
							<li ><span className="number-span">#01</span>&nbsp;&nbsp;&nbsp;Research</li> 
							 <li><span className="number-span">#02</span>&nbsp;&nbsp;&nbsp;Code</li> 
							 <li><span className="number-span">#03</span>&nbsp;&nbsp;&nbsp;Design</li> 
							 <li><span className="number-span">#04</span>&nbsp;&nbsp;&nbsp;Lanuch</li> 
							 </ul>
					 </div>
                  </div>
  )
}

export default About