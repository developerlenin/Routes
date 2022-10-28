import React from 'react'
import { useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
const Contact = () => {
	const nav = useNavigate();

	const goHome = () =>{
		nav("Home");
	};
  return (
    <section class="contact">
		 <button onClick={()=> goHome}>Home</button>
			<div class="container">
				<div class="contact-me">
					<div class="contact-heading">
						<h1>CONTACT ME</h1>
					</div>
						<div class="contact-box-item">
					      <div class="contact-box">
							<div class="contact-box-info">
							 <h1>Email</h1>
								<h1>info@domainname.com</h1>
									<p>support@domainname.com</p>
										<h1>Visit My Studio</h1>
											<p>Warwne Park Streeperrine</p>
												<p>FL 33443 New York City</p>
													<h1>Phone</h1>
													<h1> +01 34 67 12 67</h1>
													<div class="contact-box-info-links">
													 <ul>
                                                        <li><i class="icofont-facebook"></i></li>
                                                        <li><i class="icofont-twitter"></i></li>
                                                        <li><i class="icofont-instagram"></i></li>
                                                        <li><i class="icofont-linkedin"></i></li>
                                                       </ul>	
													</div>
							</div>
						  </div>
							<div class="from-box">
								<div class="from-box-info">
									<h1>Get In Touch</h1>
									
										<input type="text" class="input-name" placeholder="Name*"/>
										<input type="text" class="input-email" placeholder="Email*"/>
										<input type="text" class="input-subject" placeholder="subject*"/>
										<input type="teaxt-area" class="input-your-message" placeholder="Your-Message*"/>
									
									<button>Contact Us</button>
								</div>
							</div>
						</div>
				</div>
			</div>
		</section>
  )
}

export default Contact