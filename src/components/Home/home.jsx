import { useState } from "react";
import React from "react";
import './home.css'

const Home = () => {

    const today = new Date().toISOString().split("T")[0];

    const [date, setDate] = useState(today);

    const handleChange = (e) => {
        setDate(e.target.value);
    };
    return (
        <section className="home">

            <div className="secContainer container">
                <div className="homeText">

                    <h1 className="title">
                        Plan Your Trip with Nature Trails Travel
                    </h1>

                    <p className="subTitle">
                        Travel to your favourite place with peaceful of the environment!
                    </p>

                    <button className="btn">
                        <a href="">Explore Now</a>
                    </button>
                </div>

                <div className="homeCard grid">
                    <div className="locationDiv">
                        <label htmlFor="location">
                            Location
                        </label>
                        <input type="text" placeholder="Dream Destination" />
                    </div>



                    <div className="distDiv">
                        <label htmlFor="distance">
                            Select Date
                        </label>
                        <input type="date" placeholder="Select Date" id="date" value={date}
                            onChange={handleChange} />
                    </div>


                    <div className="priceDiv">
                        <label htmlFor="price">
                            Price
                        </label>
                        <input type="text" placeholder="₹2999 - ₹14999" />
                    </div>
                    <button className="btn">
                        Search
                    </button>

                </div>
            </div>
        </section>

    )
}

export default Home;