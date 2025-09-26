import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { MdAirportShuttle } from "react-icons/md";
import { MdOutlineOtherHouses } from "react-icons/md";

import React ,{ useEffect} from "react";
import './offers.css'

//let us import images====
import img1 from '../../assest/stay1.jpg'
import img2 from '../../assest/stay2.webp'
import img3 from '../../assest/stay3.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Offer = [
    {
        id: 1,
        imgScr: img1,
        off:'15% Off',
        wifi: <strike>Wi-Fi </strike>,
        destTitle: 'Nature Trails Homestay',
        location: 'Moir Point Road, Near Pine Forest, Kodaikanal',
        beds:'2 Beds',
        bath:'1 Bath',
        price: '₹3,200/ per Day'
    },
    {
        id: 2,
        imgScr: img2,
        off:'30% Off',
        wifi:'Wi-Fi',
        destTitle: 'Misty Woods Forest Stay',
        location: 'Glenmorgan Road, Ooty, Tamil Nadu – 643001',
        beds:'3 Beds',
        bath:'2 Bath',
        price: '₹2,500 / per Day'
    },
    {
        id: 3,
        imgScr: img3,
        off:'20% Off',
        wifi:'Wi-Fi',
        destTitle: 'Wild Haven Eco Stay',
        location: 'Rangasamy Peak Road, Kotagiri – 643217',
        beds:'2 Beds',
        bath:'1 Bath',
        price: '₹2,200 / per Day'
    },
]


const Offers = () => {

    useEffect(()=>{
            Aos.init({duration:2000})
        },[])
    return (
        <section className="offer container section">
            <div className="secContainer">

                
                <div data-aos="fade-up" data-aos-duratuon='2000' className="secIntro">
                    <h2 className="secTitle">
                        special offers
                    </h2>
                    <p>
                        From historical places to natural specteculars, come see the best of the world!
                    </p>
                </div>
            <strike></strike>
                <div className="mainContent grid">

                    {Offer.map(({id,off,wifi,imgScr,destTitle,location,beds,bath,price}) => {
                        return (
                            <div   data-aos="fade-up" data-aos-duratuon='3000'   className="singleOffer">
                                <div className="destImage">
                                    <img src={imgScr} alt={destTitle} />

                                    <span className="discount">
                                        {off}
                                    </span>
                                </div>

                                <div className="offerBody">
                                    <div className="price flex">
                                        <h4>{price}</h4>
                                        <span className="status">
                                            For Rent
                                        </span>
                                    </div>

                                    <div className="amenities flex">
                                        <div className="singleAmenity flex">
                                            <MdKingBed className='icon' />
                                            <small>{beds}</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <MdBathtub className='icon' />
                                            <small>{bath}</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <FaWifi className='icon' />
                                            <small>{wifi}</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <MdAirportShuttle className='icon' />
                                            <small>Shuttle</small>
                                        </div>
                                    </div>

                                    <div className="location flex">
                                        <MdOutlineOtherHouses className="icon" />
                                        <small>{destTitle}</small>
                                    </div>
                                    <div className="location flex">
                                        <MdLocationOn className="icon" />
                                        <small>{location}</small>
                                    </div>

                                    <button className="btn flex">
                                        view details
                                        <BsArrowRightShort className='icon' />
                                    </button>
                                </div>
                            </div>
                        )
                    }
                    )}


                </div>
            </div>
        </section>
    )
}

export default Offers;