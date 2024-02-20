import React,{useState} from 'react'
import Ratting from '../components/Ratting';

const reviewtitle = "Add a Review";

let ReviewList = [
    {
      imgUrl: "/src/assets/images/instructor/01.jpg",
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/02.jpg",
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/03.jpg",
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/04.jpg",
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
  ];

const Review = () => {
    const [reviewShow, setReviewShow] = useState(true);
  return (
   <>
      <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
        <li className='desc' onClick={()=> setReviewShow(!reviewShow)}>Description</li>
        <li className='rev' onClick={()=> setReviewShow(!reviewShow)}>Reviews 4</li>

      </ul>

      <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
         <div className="review-showing">
            <ul className='content lab-ul'>
                {
                    ReviewList.map((review,i) =>(
                        <li key={i}>
                            <div className='post-thumb'>
                                 <img src={review.imgUrl} alt=''/>
                            </div>

                            <div className='post-content'>
                                <div className='entry-meta'>
                                    <div className='posted-on'>
                                        <a href='#'></a>
                                    </div>
                                </div>
                                <div className='entry-content'>
                                    <p>{review.desc}</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>

            <div className='client-review'>
                <div className='review-form'>
                    <div review-title>
                       <h5>{reviewtitle}</h5>
                    </div>

                    <form action='action' className='row'>
                        <div className='col-md-4 col-12'>
                            <input type='text' name='name' id='name' placeholder='Full Nmae'/>
                        </div>
                        <div className='col-md-4 col-12'>
                            <input type='email' name='email' id='name' placeholder='Your Email'/>
                        </div>
                        <div className='col-md-4 col-12'>
                            <div className='rating'>
                                <span className='me-2'>Your Rating</span>
                                <Ratting />
                            </div>
                        </div>
                        <div className='col-md-12 col-12'>
                            <textarea name='message' id='message' placeholder='Type Here Message' rows='10'></textarea>
                        </div>
                        <div className='col-12'>
                            <button type='submit' className='default-button'>
                                <span>Submit Review</span>
                            </button>
                        </div>
                    </form>

                </div>
            </div>

         </div>

         <div className='description'>
              <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
              making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
              text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
              </p>
              <div className='post-item'>
                  <div className='post-thumb'>
                      <img src="/src/assets/images/shop/01.jpg" alt=''/>
                  </div>
                  <div className='post-content'>
                      <ul className='lab-ul'>
                         <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore</li>
                         <li> amet, consectetur adipiscing elit, sed do eiusmod tempor labore</li>
                         <li> amet, consectetur adipiscing elit, sed do eiusmod tempor labore</li>
                         <li>Lorem ipsum dolor sit amet, sed do eiusmod tempor labore</li>
                         <li>Lorem ipsum dolor sit amet,  sed do eiusmod tempor labore</li>
                         <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  labore</li>
                         <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  labore</li>
                      </ul>
                  </div>

              </div>

              <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
              making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
              text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
              </p>
         </div>
      </div>
   </>
  )
}

export default Review