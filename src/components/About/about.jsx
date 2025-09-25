
import React from "react";
import './about.css'

import img1 from '../../assest/about-us01.png'
import img2 from '../../assest/hiking.png'
import img3 from '../../assest//mountain.png'

//import video=======
import video from '../../assest/forest-video.mp4'


const About = () => {
    return (
        <section className="about section">
            <div className="secContainer">
                <h2 className="title">
                    Why Hikings?
                </h2>

                <div className="mainContent container grid">
                    <div className="singleItem">
                        <img src={img1} alt="Image Name" />
                        <h3>🏔️✨About Us</h3>
                        <p>
                            Welcome to Nature Trails Travel, your trusted partner in exploring the beauty of forests and mountains. We specialize in forest stays, mountain trips, hiking adventures, and guided tours that bring you closer to nature.

                            Our team is passionate about creating unforgettable travel experiences. Whether you want a peaceful stay in the woods, a thrilling hike through scenic trails, or a guided forest trip with local insights, we are here to make your journey safe, comfortable, and memorable.

                            With a focus on eco-friendly travel and personalized guide support, we ensure every trip is filled with adventure, learning, and natural beauty.

                            Let’s explore the wild side of nature together! 
                        </p>
                    </div>
                    <div className="singleItem">
                        <img src={img2} alt="Image Name" />
                        <h3>🥾 Adventure-Focused</h3>
                        <p>
                            Nature Trails Travel is your gateway to nature’s wonders. We proudly offer 1000+ hiking experiences, from peaceful forest walks to thrilling mountain trails. Whether you’re a solo traveler, a family, or an adventure seeker, we design every hike to connect you with nature’s beauty and leave you inspired

                            Ready for the ultimate adventure? With Nature Trails Travel, explore 1000+ hiking trails through misty hills, lush forests, and breathtaking viewpoints. Each journey is guided, safe, and tailored to give you the perfect balance of adventure, relaxation, and discovery
                        </p>
                    </div>

                    <div className="singleItem">
                        <img src={img3} alt="Image Name" />
                        <h3>✨100+ Mountain Adventures. One Unforgettable Journey</h3>
                        <p>
                            At Nature Trails Travel, every mountain tells a story of adventure. With over 100+ mountain experiences across breathtaking trails, misty peaks, and hidden valleys, we bring thrill-seekers and nature lovers closer to the wild. From sunrise treks to forest stays, from challenging climbs to peaceful nature walks — we craft journeys that awaken your explorer’s spirit. Whether you’re chasing adrenaline or seeking calm in the clouds, our mountain adventures are designed to make every step unforgettable. Get ready to trek, camp, and explore the untamed beauty of nature with us
                        </p>
                    </div>
                </div>

                <div className="videoCard container">
                    <div className="cardContent grid">

                        <div className="cardText">
                            <h2>
                                Wonderful House Experience! – Nature Trails Travel
                            </h2>
                            <p>
                               Enjoy cozy mountain stays with breathtaking peaks, fresh air, serene cabins, and unforgettable nature experiences in the heart of the wilderness
                            </p>
                        </div>

                        <div className="cardVideo">
                            <video src={video} autoPlay loop muted type='video/mp4'></video>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;