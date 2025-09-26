import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { MdReadMore } from "react-icons/md";
import React from "react";
import './popular.css'

//import the images ===============
import img1 from '../../assest/image3_yelagiri.jpg'
import img2 from '../../assest/Kodaikanal.jpg'
import img3 from '../../assest/kotagiri.jpeg'
import img4 from '../../assest/ooty.webp'


const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Nature’s Hidden Paradise',
        location: 'Yelagiri',
        grade: 'mind relex',

    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Misty Hills of Kodaikanal Bliss',
        location: 'Kodaikanal',
        grade: 'mind relex',

    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Calm Beyond the Clouds',
        location: 'Kotagiri',
        grade: 'mind relex',

    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Explore Ooty’s Beauty and Serenity',
        location: 'Ooty',
        grade: 'mind relex',

    }

]
const Popular = () => {
    return (
        <section className="popular section container">
            <div className="secContainer">
                <div className="secHeader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">
                            Peaceful Destination
                        </h2>
                        <p>
                            From historical places to natural specteculars, come see the best of the world!
                        </p>
                    </div>
                    <div className="iconsDiv flex">
                        <BsArrowLeftShort className="icon leftIcon" />
                        <BsArrowRightShort className='icon rightIcon' />
                    </div>
                </div>

                <div className="mainContent grid">
                    {
                        Data.map(({id,imgSrc,destTitle,location,grade}) => {
                            return (
                                <div className="singleDestination">
                                    <div className="destImage">


                                        <img src={imgSrc} alt="Image title" />

                                        <div className="overLayInfo">
                                            <h3>{destTitle}</h3>
                                            <p>
                                                {location}
                                            </p>
                                            <BsArrowRightShort className="icon" />
                                        </div>
                                    </div>
                                    <div className="destFooter">
                                        <div className="number">
                                            0{id}
                                        </div>
                                        <div className="destText flex">
                                            <h6>{location}</h6>
                                            <span className="flex">
                                                <span className="dot">
                                                    <MdReadMore className="icon" />
                                                </span>
                                                {/* GK */}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Popular;