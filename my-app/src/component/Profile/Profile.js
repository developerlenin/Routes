import React from 'react'
import './profile.css'
import { useNavigate } from 'react-router-dom';
const Profile = () => {
	const nav = useNavigate();

	const goHome = () =>{
		nav("Home");
	};
  return (
    <div>
          <section class="portfolio">
		  <button onClick={()=> goHome}>Home</button>
		<div class="container">
			<div class="my-portfolio">
				<div class="portfolio-heading">
					<h5>MY PORTFOLIO</h5>
				</div>
					<div class="portfolio-image">
						<div class="portfolio-image-one">
							<div class="portfolio-box1">
								<div class="portfolio-box1-img">
									 <img src="images/portfolio-02.jpg" />
									 <button class="img-btn">+ </button>
								</div>
								<div class="portfolio-box1-text">
									<h3>Mombo Mockup</h3>
									<h3>Lorem ipsum dolor sit amet</h3>
									<button>Ui Design</button>
								</div>
							</div>
							<div class="portfolio-box1">
								<div class="portfolio-box1-img">
									 <img src="images/portfolio-03.jpg" />
									  <button class="img-btn">+ </button>
								</div>
								<div class="portfolio-box1-text">
									<h3>Mombo Mockup</h3>
									<h3>Lorem ipsum dolor sit amet</h3>
									<button>Ui Design</button>
								</div>
							</div>
						</div>
						<div class="portfolio-image-one">
						<div class="portfolio-box1">
							<div class="portfolio-box1-img">
									 <img src="images/portfolio-01.jpg" />
									  <button class="img-btn">+ </button>
								</div>
								<div class="portfolio-box1-text">
									<h3>Mombo Mockup</h3>
									<h3>Lorem ipsum dolor sit amet</h3>
									<button>Ui Design</button>
								</div>
						</div>
						<div class="portfolio-box1">
							<div class="portfolio-box1-img">
									 <img src="images/portfolio-04.jpg" />
									  <button class="img-btn">+ </button>
								</div>
								<div class="portfolio-box1-text">
									<h3>Mombo Mockup</h3>
									<h3>Lorem ipsum dolor sit amet</h3>
									<button>Ui Design</button>
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

export default Profile