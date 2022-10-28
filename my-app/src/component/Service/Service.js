import React from 'react'
import './Service.css'
import { useNavigate } from 'react-router-dom'
const Service = () => {
	const navigate = useNavigate();

	const goTOAboutPage  = () => {
		navigate("/");
	  };
  return ( 
    <div> 
		 <button onClick={()=> goTOAboutPage}>Home</button>
		 <section class="services">
	     <div class="container">
		     <div class="my-services">
			     <div class="services-head">
				     <h1>MY SERVICES</h1>
				 </div>
				 <div class="services-box">
				  <div class="boxone">
				     <div class="box1">
						<div class="hexagan">
							<div id="hexagon"><i class="icofont-computer hexagan-icon"></i></div>
						</div>
						<div class="box1-text">
						 <h1>Unique Design</h1>
						 <p>I desgin and developed services for customer for all size developed services for customer  </p>
						 </div>
					</div>
					<div class="box1">
						<div class="hexagan">
							<div id="hexagon"><i class="icofont-layout hexagan-icon "></i></div>
						</div>
						<div class="box1-text">
						 <h1>Different layout</h1>
						 <p>I desgin and developed services for customer for all size developed services for customer  </p>
						 </div>
					</div>
					<div class="box1">
						<div class="hexagan">
							<div id="hexagon"><i class="icofont-layers hexagan-icon "></i></div>
						</div>
						<div class="box1-text">
						 <h1>Make it simple</h1>
						 <p>I desgin and developed services for customer for all size developed services for customer  </p>
						 </div>
					</div>
				 </div>
				 <div class="boxone">
				     <div class="box1">
						<div class="hexagan">
							<div id="hexagon"><i class="icofont-responsive hexagan-icon"></i></div>
						</div>
						<div class="box1-text">
						 <h1>Responsiveness</h1>
						 <p>I desgin and developed services for customer for all size developed services for customer  </p>
						 </div>
					</div>
					<div class="box1">
						<div class="hexagan">
							<div id="hexagon"><i class="icofont-bug hexagan-icon"></i></div>
						</div>
						<div class="box1-text">
						 <h1>Testing for prefection</h1>
						 <p>I desgin and developed services for customer for all size developed services for customer  </p>
						 </div>
					</div>
					<div class="box1">
						<div class="hexagan">
							<div id="hexagon"><i class="icofont-computer hexagan-icon"></i></div>
						</div>
						<div class="box1-text">
						 <h1>Advance options</h1>
						 <p>I desgin and developed services for customer for all size developed services for customer  </p>
						 </div>
					</div>
				 </div>
				 </div>
			 </div>
		 </div>
	  </section>
         
    </div>
  )
}

export default Service