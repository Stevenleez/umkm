
import React, { MouseEventHandler } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Navbar } from "./Navbar";
import Beanfall from "../assets/beanfall.mp4";
import BannerBackground from "../assets/bijikopi.jpg";
import FloatingImage from "../assets/kopifloat.png"
import White from "../assets/white.jpg";

import SplitText from "./Effects/SplitText";
import TiltedCard from "./Effects/TiltedCard";
import { FiArrowRight } from "react-icons/fi";

export const Home = () => {

    return (
    <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            
            <div className="home-text-section">
                <TiltedCard
                imageSrc= {White}
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                containerWidth="400px"
                overlayContent={
                    <div className="tilted-card-overlay-content">
                        <h1 className="primary-heading">
                            <SplitText
                                text="Rumah Kopi Sumsel"
                                textAlign="left"
                                delay={150}
                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                easing="easeOutCubic"
                                threshold={0.2}
                                rootMargin="-50px"
                            />
                        </h1>
                        <p className="primary-text text-left">
                            <SplitText
                                text="Berdiri pada tahun 2019 dan dibina langsung oleh Bank Indonesia. Menawarkan berbagai jenis produk berkualitas, seperti Green Beans, Roast Beans, dan Produk Minuman Olahan."
                                textAlign="left"
                                delay={10}
                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                easing="easeOutCubic"
                                threshold={0.2}
                                rootMargin="-50px"
                            />
                        </p>
                        <button className="secondary-button">
                            Order Now <FiArrowRight />{" "}
                        </button>
                    </div>
                }/>
            </div>

        </div>
    </div>
    )
}
  
export default Home;
  