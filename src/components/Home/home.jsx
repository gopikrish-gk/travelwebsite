import { useState ,useEffect} from "react";
import React from "react";
import './home.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    const today = new Date().toISOString().split("T")[0];

    const [date, setDate] = useState(today);

    const handleChange = (e) => {
        setDate(e.target.value);
    };
    return (
        <section className="home">

            <div className="secContainer container">
                <div className="homeText">

                    <h3 data-aos="fade-up" className="title">
                        Plan Your Trip with Nature Trails Travel
                    </h3>

                    <p data-aos="fade-up" data-aos-duratuon='2500' className="subTitle">
                        Travel to your favourite place with peaceful of the environment!
                    </p>

                    <button data-aos="fade-up" data-aos-duratuon='3000'  className="btn">
                        <a href="">Explore Now</a>
                    </button>
                </div>

                <div className="homeCard grid">
                    <div data-aos="fade-right" data-aos-duratuon='2000'  className="locationDiv">
                        <label htmlFor="location">
                            Location
                        </label>
                        <input type="text" placeholder="Dream Destination" />
                    </div>



                    <div data-aos="fade-right" data-aos-duratuon='2500' className="distDiv">
                        <label htmlFor="distance">
                            Select Date
                        </label>
                        <input type="date" placeholder="Select Date" id="date" value={date}
                            onChange={handleChange} />
                    </div>


                    <div data-aos="fade-right" data-aos-duratuon='3000' className="priceDiv">
                        <label htmlFor="price">
                            Price
                        </label>
                        <input type="text" placeholder="₹2999 - ₹14999" />
                    </div>
                    <button data-aos="fade-left"  className="btn">
                        Search
                    </button>

                </div>
            </div>
        </section>

    )
}

export default Home;