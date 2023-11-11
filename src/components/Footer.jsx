import React from 'react';
import logo2 from "./../assets/imgs/investlogo2blue.png";
import logo3 from "./../assets/imgs/investlogo3blue.png";
import logo4 from "./../assets/imgs/investlogo4blue.png";

const Footer = () => {
    return (
        <footer>
            <div className="techno">
                <span>Core technologies</span>
                <button>Token</button>
                <button>Proof of Coverage</button>
                <button>longFi</button>
            </div>
            <div className="investors">
                <span>Our Inverstors</span>
                <div className="logo">
                    <img src={logo2} alt="G" />
                    <img src={logo3} alt="FirstMark" />
                    <img src={logo4} alt="Khosla" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;