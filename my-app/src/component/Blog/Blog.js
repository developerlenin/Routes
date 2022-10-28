import React from 'react'
import { useNavigate } from 'react-router-dom';
const Blog = () => {
	const Nav = useNavigate();

	const GoHome = () =>{
		Nav("Home");
	};
  return (
    <section class="l-blog">
		 <button onClick={()=> GoHome}>Home</button>
		<div class="container">
			<div class="latest-blog">
				<div class="blog-heading">
					<p>LATEST BLOG</p>
				</div>
				<div class="blog-img">
					<div class="blog-img-one">
						<div class="image-blog">
						 <img src="images/blog-1.jpg"/>
						 <button class="blog-btn">14 JAN</button>
						</div>
						<div class="blog-text">
							<p>Prevent 75% of visitors from google analytics</p>
							<p>Lorem ipsum dolor sit ametadipisicing sed do eiusmod tempor </p>
							<a href="">Read  More</a>
						</div>
					</div>
					<div class="blog-img-one">
												<div class="image-blog">
						 <img src="images/blog-2.jpg"/>
						 <button class="blog-btn">14 JAN</button>
						</div>
						<div class="blog-text">
							<p>Prevent 75% of visitors from google analytics</p>
							<p>Lorem ipsum dolor sit amet adipisicing sed do eiusmod tempor </p>
							<a href="">Read  More</a>
						</div>
					</div>
					<div class="blog-img-one">
												<div class="image-blog">
						 <img src="images/blog-3.jpg"/>
						 <button class="blog-btn">14 JAN</button>
						</div>
						<div class="blog-text">
							<p>Prevent 75% of visitors from google analytics</p>
							<p>Lorem ipsum dolor sit ametadipisicing sed do eiusmod tempor </p>
							<a href="">Read  More</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>			 
  )
}

export default Blog