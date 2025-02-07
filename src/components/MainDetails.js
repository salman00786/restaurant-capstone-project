import React from 'react';
import starRatings from "../images/5-star-review.jpg";
import userPrfile from "../images/Asset 20@4x.png"
import chefPic from "../images/Mario and Adrian b.jpg"

const MainDetails = () => {
  return (
    <>
     <div className="main-Center menu-header">
            <h3 className="center testText">
              Testimonials
            </h3>
            <div className="testimonial-menu cards">
              <div className="starRating tItems ">
                <h3>
                  Star Ratings
                </h3>
                <p>We are a family owned Mediterranean</p>
                
                
              </div>
              <div className="userProfile tItems">
                <h3>User Profile</h3>

                <p>We are a family owned Mediterranean</p>
                
              </div>
              <div className="photo tItems">
                <h3>Photo</h3>
                <p>We are a family owned Mediterranean</p>

              </div>
              <div className="review tItems">
                <h3>Review</h3>
                <p>We are a family owned Mediterranean</p>
              </div>
            </div>
          </div>
          <div className="chefMenu ">
          <h2 >Little Lemon</h2>
              <h3>Chicago</h3>
            <div className="flexChefMenu menu-header center">
             
              <p className='test center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
              <div className="chefImgContainer  ">
                <img className="chefImg center" src={chefPic}/>
              </div>
            </div>
          </div>
    </>
  )
}

export default MainDetails