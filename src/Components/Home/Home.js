import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import Homeproduct from '../HomeProduct/HomeProduct';
import { FaEye , FaHeart } from "react-icons/fa";
import { FaFacebookF , FaTwitter , FaInstagram , FaYoutube } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";

const Home = ({addtocart}) => {
    //Product category
    const [newProduct , setNewProduct] = useState([])
    const [featuredProduct , setFeaturedProduct] = useState([])
    const [topProduct , setTopProduct] = useState([])
    //tranding Product
    const [trendingProduct , setTrendingProduct] = useState(Homeproduct);
    //filter of tranding product
    const filtercate = (x) => 
    {
        const filterproduct = Homeproduct.filter((curElm) => {
            return curElm.type === x
        })
        setTrendingProduct(filterproduct);
    }
    //All Trending Product
    const allTrendingProduct = () =>
    {
        setTrendingProduct(Homeproduct);
    }
    //Product type
    useEffect(() => {
        productcategory()
    })
    const productcategory = () =>{
        //New product
        const mewcategory = Homeproduct.filter((x) =>{
            return x.type ==='new';
        })
        setNewProduct(mewcategory);

        //Featured product
        const featuredcategory = Homeproduct.filter((x) =>{
            return x.type === 'featured';
        })
        setFeaturedProduct (featuredcategory);

        //Top product
        const topproduct = Homeproduct.filter((x) => {
            return x.type ==='top';
        })
        setTopProduct (topproduct);
    }
    return <>
        <div className='home'>
            <div className='top_banner'>
                <div className='contant'>
                    <h3>Silver Aluminm</h3>
                    <h2>Apple Watch</h2>
                    <p>30% off at your first odder</p>
                    <Link to='/shop' className='link'>Shop Now</Link>
                </div>
            </div>
            <div className='trending'>
                <div className=' container'>
                    <div className='left_box'>
                        <div className=' header'>
                            <div className=' heading'>
                                <h2 onClick={() => allTrendingProduct()}>trending product</h2>
                            </div>
                            <div className='cate'>
                                <h3 onClick={() => filtercate('new')}>New</h3>
                                <h3 onClick={() => filtercate('featured')}>Featured</h3>
                                <h3 onClick={() => filtercate('top')}>top selling</h3>
                            </div>
                        </div>
                        <div className='products'>
                            <div className='container'>
                                {
                                    trendingProduct.map((curElm) =>
                                    {
                                        return<>
                                            <div className='box'>
                                                <div className='img_box'>
                                                    <img src={curElm.image} alt=''></img>
                                                    <div className='icon'>
                                                        <div className='icon_box'>
                                                            <FaEye />
                                                        </div>
                                                        <div className='icon_box'>
                                                            <FaHeart />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='info'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p>${curElm.price}</p>
                                                    {/* <Link to='/cart'>Add To Cart</Link> */}
                                                    <button className='btu' onClick={() => addtocart(curElm)}>Add To Cart</button>
                                                </div>
                                            </div>
                                        </>
                                    })
                                }
                            </div>
                            <button>Show More</button>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='right_container'>
                            <div className='testimonial'>
                                <div className='head'>
                                    <h3>our testimonial</h3>
                                </div>
                                <div className='detail'>
                                    <div className='img_box'>
                                        <img src='image/T1.avif' alt='testimonial'></img>
                                    </div>
                                    <div className='info'>
                                        <h3>stephan robot</h3>
                                        <h4>web designer</h4>
                                        <p>
                                            This is a lead paragraph. It stands out from regular paragraphs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='newsletter'>
                                <div className='head'>
                                    <h3>newsletter</h3>
                                </div>
                                <div className='form'>
                                    <p>join our malling list</p>
                                    <input type='email' placeholder='E-mail' outoComplete='off'></input>
                                    <button>subscribe</button>
                                    <div className='icon_box'>
                                        <div className='icon'>
                                            <FaFacebookF />
                                        </div>
                                        <div className='icon'>
                                            <FaTwitter />
                                        </div>
                                        <div className='icon'>
                                            <FaInstagram />
                                        </div>
                                        <div className='icon'>
                                            <FaYoutube />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banners'>
                <div className='container'>
                    <div className='left_box'>
                        <div className='box'>
                            <img src='image/Multi-Banner-1.avif' alt='banner'></img>
                        </div>
                        <div className='box'>
                            <img src='image/Multi-Banner-2.avif' alt='banner'></img>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='top'>
                            <img src='image/Multi-Banner-3.webp' alt=''></img>
                            <img src='image/Multi-banner-4.avif' alt=''></img>
                        </div>
                        <div className='bottom'>
                            <img src='image/Multi-Banner-5.webp'alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product_type'>
                <div className='containe'>
                    <div className='box'>
                        <div className='header'>
                            <h2>New Product</h2>
                        </div>
                        {
                            newProduct.map((curElm) => {
                                return<>
                                <div className='productbox'>
                                    <div className='img_box'>
                                        <img src={curElm.image} alt=''></img>
                                    </div>
                                    <div className='detail'>
                                        <h3>{curElm.Name}</h3>
                                        <p>$ {curElm.price}</p>
                                        <div className='icon'>
                                            <button><FaEye /></button>
                                            <button><FaHeart /></button>
                                            <button onClick={() => addtocart(curElm)}><FaCartPlus /></button>
                                        </div>
                                    </div>
                                </div>
                                </>
                            })
                        }
                    </div>
                    <div className='box'>
                        <div className='header'>
                            <h2>featured Product</h2>
                        </div>
                        {
                            featuredProduct.map((curElm) => {
                                return<>
                                <div className='productbox'>
                                    <div className='img_box'>
                                        <img src={curElm.image} alt=''></img>
                                    </div>
                                    <div className='detail'>
                                        <h3>{curElm.Name}</h3>
                                        <p>$ {curElm.price}</p>
                                        <div className='icon'>
                                            <button><FaEye /></button>
                                            <button><FaHeart /></button>
                                            <button onClick={() => addtocart(curElm)}><FaCartPlus /></button>
                                        </div>
                                    </div>
                                </div>
                                </>
                            })
                        }
                    </div>
                    <div className='box'>
                        <div className='header'>
                            <h2>Top Product</h2>
                        </div>
                        {
                            topProduct.map((curElm) => {
                                return<>
                                <div className='productbox'>
                                    <div className='img_box'>
                                        <img src={curElm.image} alt=''></img>
                                    </div>
                                    <div className='detail'>
                                        <h3>{curElm.Name}</h3>
                                        <p>$ {curElm.price}</p>
                                        <div className='icon'>
                                            <button><FaEye /></button>
                                            <button><FaHeart /></button>
                                            <button onClick={() => addtocart(curElm)}><FaCartPlus /></button>
                                        </div>
                                    </div>
                                </div>
                                </>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Home
