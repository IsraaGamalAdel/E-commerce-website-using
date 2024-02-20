import React from 'react'
import './Footer.css'
import { FaPiggyBank , FaWallet ,FaHeadphonesSimple } from "react-icons/fa6";
import { FaShippingFast} from "react-icons/fa";

const Footer = () => {
    return <>
    <div className='footer'>
        <div className='container'>
            <div className='left_box'>
                <div className='box'>
                    <div className='icon_box'>
                        <FaPiggyBank />
                    </div>
                    <div className='detail'>
                        <h3>Great Saving</h3>
                        <p>This is a lead paragraph. It stands out from regular paragraphs.</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaShippingFast />
                    </div>
                    <div className='detail'>
                        <h3>Free delive</h3>
                        <p>This is a lead paragraph. It stands out from regular paragraphs.</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaHeadphonesSimple />
                    </div>
                    <div className='detail'>
                        <h3>24X7 support</h3>
                        <p>This is a lead paragraph. It stands out from regular paragraphs.</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaWallet />
                    </div>
                    <div className='detail'>
                        <h3>money back</h3>
                        <p>This is a lead paragraph. It stands out from regular paragraphs.</p>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='header'>
                    <img src='image/logo.webp' alt=''></img>
                    <p>This is a lead paragraph. It stands out from regular paragraphs.</p>
                </div>
                <div className='bottom'>
                    <div className='box'>
                        <h3>Your Account</h3>
                        <ul>
                            <li>About</li>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>sales</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Products</h3>
                        <ul>
                            <li>Delivery</li>
                            <li>Track Oder</li>
                            <li>New Product</li>
                            <li>Old Product</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Contact us</h3>
                        <ul>
                            <li>4005 , Silver business PointIndia</li>
                            <li>+(02)99999999</li>
                            <li>info@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Footer