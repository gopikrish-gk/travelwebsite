
import React ,{ useEffect} from "react";
import './about.css'

import img1 from '../../assest/about-us01.png'
import img2 from '../../assest/hiking.png'
import img3 from '../../assest//mountain.png'

//import video=======
import video from '../../assest/forest-video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

     useEffect(()=>{
                Aos.init({duration:2000})
            },[])
    return (
        <section className="about section">
            <div className="secContainer">
                <h2  className="title">
                    Why Hikings?
                </h2>

                <div className="mainContent container grid">
                    <div data-aos="fade-up" data-aos-duratuon='2000' className="singleItem">
                        <img src={img1} alt="Image Name" />
                        <h3>🏔️✨About Us</h3>
                        <p>
                            Welcome to Nature Trails Travel, your trusted partner in exploring forests and mountains. We specialize in eco-friendly forest stays, mountain trips, hiking adventures, and guided tours that bring you closer to nature. Our passionate team designs safe, comfortable, and memorable journeys for solo travelers, families, and adventure seekers alike. Whether you prefer a peaceful forest stay, a thrilling hike, or a guided trip with local insights, we ensure every journey blends adventure, learning, and natural beauty. Let’s explore nature together! 
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-duratuon='2500' className="singleItem">
                        <img src={img2} alt="Image Name" />
                        <h3>🥾 Adventure-Focused</h3>
                        <p>
                            Nature Trails Travel is your gateway to nature’s wonders. We proudly offer 1000+ hiking experiences, from peaceful forest walks to thrilling mountain trails. Whether you’re a solo traveler, a family, or an adventure seeker, we design every hike to connect you with nature’s beauty and leave you inspired

                            Ready for the ultimate adventure? With Nature Trails Travel, explore 1000+ hiking trails through misty hills, lush forests, and breathtaking viewpoints. Each journey is guided, safe, and tailored to give you the perfect balance of adventure, relaxation, and discovery
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duratuon='3000' className="singleItem">
                        <img src={img3} alt="Image Name" />
                        <h3>✨100+ Mountain Adventures</h3>
                        <p>
                            At Nature Trails Travel, every mountain tells a story of adventure. With over 100+ mountain experiences across breathtaking trails, misty peaks, and hidden valleys, we bring thrill-seekers and nature lovers closer to the wild. From sunrise treks to forest stays, from challenging climbs to peaceful nature walks — we craft journeys that awaken your explorer’s spirit. Whether you’re chasing adrenaline or seeking calm in the clouds, our mountain adventures are designed to make every step unforgettable. Get ready to trek, camp, and explore the untamed beauty of nature with us
                        </p>
                    </div>
                </div>

                <div className="videoCard container">
                    <div className="cardContent grid">

                        <div data-aos="fade-right" data-aos-duratuon='2000' className="cardText">
                            <h2>
                                Wonderful House Experience! – Nature Trails Travel
                            </h2>
                            <p>
                               Enjoy cozy mountain stays with breathtaking peaks, fresh air, serene cabins, and unforgettable nature experiences in the heart of the wilderness
                            </p>
                        </div>

                        <div data-aos="fade-left" data-aos-duratuon='2000' className="cardVideo">
                            <video src={video} autoPlay loop muted type='video/mp4'></video>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;