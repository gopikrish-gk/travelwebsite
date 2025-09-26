import { BsArrowRightShort } from "react-icons/bs";
import React ,{ useEffect} from "react";
import './blog.css'

//import images=====

import img1 from '../../assest/blog01.webp'
import img2 from '../../assest/blog2.jpg'
import img3 from '../../assest/blog3.webp'
import img4 from '../../assest/blog4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const posts = [
    {
        id: 1,
        postImage: img1,
        title: 'Mysterious Guna Cave',
        desc: 'Hidden in the Kotagiri hills, Guna Cave, also known as Devil’s Kitchen, features mysterious rock formations, narrow passages, and misty valleys. This thrilling trek through the Nilgiri forests offers adventurers a unique blend of excitement, exploration, and serene natural beauty, making it a must-visit destination for nature enthusiasts'
    },
    {
        id: 2,
        postImage: img2,
        title:'Exploring Kodaikanal’s Shola Forests',
        desc: 'Hidden in the misty hills of Kodaikanal, the Shola forests are nature’s secret wonder. These ancient tropical forests, interspersed with rolling grasslands, offer a peaceful escape. Trek through dense greenery, listen to rustling leaves and streams, and witness rare flora and fauna. A serene, rejuvenating experience for every nature lover'
    },
    {
        id: 3,
        postImage: img3,
        title:'Explore the Wonders of Velliangiri Hills',
        desc: 'Nestled in the Western Ghats, Vellingiri Hills is a haven for trekkers, pilgrims, and nature lovers. Known for its serene landscapes, misty trails, and panoramic views, it offers a peaceful escape. Trek through lush forests, experience the hilltop temple, witness sunrise over the clouds, and immerse yourself in nature’s spiritual embrace'
    },
    {
        id: 4,
        postImage: img4,
        title:'Trek Through the Wild: Mudumalai National Park Adventure',
        desc: 'Mudumalai National Park offers an unforgettable trekking experience for nature lovers and adventure enthusiasts. The park features lush forests, rolling hills, and diverse wildlife. Trekkers can enjoy misty landscapes, panoramic views, hidden waterfalls, and guided trails that provide both adventure and serene natural beauty'
    }
]

const Blog = () => {
     useEffect(()=>{
                    Aos.init({duration:2000})
                },[])
    return (
        <section className="blog container section">
            <div className="secContainer">
                <div data-aos="fade-right" data-aos-duratuon='2000' className="secIntro">
                    <h2 className="secTitle">
                        Our Best Blog?
                    </h2>
                    <p>
                        An insight to the incredible experince in the world.
                    </p>
                </div>
                <div className="mainContainer grid">
                    {posts.map(({id,postImage,title,desc}) => {
                        return (
                            <div data-aos="fade-right" data-aos-duratuon='2000'className="singlePost grid">
                                <div className="imgDiv">
                                    <img src={postImage} alt={title} />
                                </div>

                                <div className="postDetails">
                                    <h3 data-aos="fade-right" data-aos-duratuon='3000'>
                                        {title}
                                    </h3>
                                    <p data-aos="fade-right" data-aos-duratuon='4000'>
                                       {desc}
                                    </p>
                                </div>
                                <a href="#" className="flex" data-aos="fade-right" data-aos-duratuon='4000'>
                                    
                                    Read More
                                    <BsArrowRightShort className='icon' />
                                </a>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Blog;