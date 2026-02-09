import React from 'react'
import './Home.css'
import skin1 from '../images/skin1.jpg'
import skin2 from '../images/skin2.jpg'
import skin3 from '../images/skin3.jpg'
import skin4 from '../images/skin4.jpg'
import skin5 from '../images/skin5.jpg'
import skin6 from '../images/skin6.jpg'
import skin7 from '../images/skin7.jpg'
import { TiStar } from "react-icons/ti";
import face1 from '../images/face1.jpg'
import face2 from '../images/face2.jpg'
import face3 from '../images/face3.jpg'
import face4 from '../images/face4.jpg'
import cream1 from '../images/cream1.jpg'
import cream2 from '../images/cream2.jpg'
import cream3 from '../images/cream3.jpg'
import cream4 from '../images/cream4.jpg'
import video1 from '../images/video1.mp4'
import video2 from '../images/video2.mp4'
import video3 from '../images/video3.mp4'
import video4 from '../images/video4.mp4'
import skin8 from '../images/skin8.jpg'
import skin9 from '../images/skin9.jpg'
import skin10 from '../images/skin10.jpg'
import s1 from '../images/s1.jpg'
import s2 from '../images/s2.jpg'
import s3 from '../images/s3.jpg'
const Home = () => {
    return (
        <div>

            <div className='row'>
                <div className='col1'>
                    <img src={skin1} />
                </div>
                <div className='col2'>
                    <p>TREAT YOUR SKIN WITH THE RIGHT KIND OF LOVE</p>
                    <button>Shop Now</button>
                </div>
                <div className='col3'>
                    <img src={skin2} />
                </div>
            </div>



            <div className='home'>
                <p >OUR SUMMER FAVOURITES</p>
                <h3>GIVE YOUR SKIN THAT SUMMER GLOW</h3>
            </div>



            <div className='row1'>
                <div className='c1'>
                    <div class="card1" >
                        <img src={skin3} width={100} height={220} />
                        <div class="card-body1">
                            <p className='g'>Derma<span className="starss"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
                            <h6>AiryGlow Gel Sunscreen SPF 60</h6>
                            <p className='g1'>Rs.100.00 - Rs.300.00
                            </p>
                        </div>
                    </div>
                </div>
                <div className='c2'>
                    <div class="card2" >
                        <img src={skin4} width={200} height={220} />
                        <div class="card-body2">
                            <p className='g3'>Loreal<span className="starss"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
                            <h6>AlpineDew Calming Face Oil</h6>
                            <p className='g4'>Rs.100.00 - Rs.300.00
                            </p>
                        </div>
                    </div>
                </div>
                <div className='c3'>
                    <div class="card3" >
                        <img src={skin5} width={200} height={220} />
                        <div class="card-body3">
                            <p className='g5'>Aqua <span className="starss"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
                            <h6>Aqualogica</h6>
                            <p className='g6'>Rs.100.00 - Rs.300.00
                            </p>
                        </div>
                    </div>
                </div>
                <div className='c4'>
                    <div class="card4" >
                        <img src={skin6} width={200} height={220} />
                        <div class="card-body3">
                            <p className='g5'>SolarVive <span className="stars"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
                            <h6>AquaLuxe Hydrating Face Oil</h6>
                            <p className='g6'>Rs.100.00 - Rs.300.00
                            </p>
                        </div>
                    </div>
                </div>
            </div>




            <div className='home1'>

            </div>



            <div className='home2'>
                <img src={skin7} height={700} />
                <h1 className='f1'>SKINCARE MADE WITH  </h1>
                <h1 className='f2'> THE MOST</h1>
                <h1 className='f3'>RICHEST INGREDIENTS</h1>
                <button className='f4'>SHOPNOW</button>
            </div>


            <div className='home3'>
                <p>SHOP BY CATEGORIES</p>
            </div>


            <div className='row4'>
                <div className='cc1'>
                    <img src={face1} width={250} height={300} />
                </div>
                <div className='cc2'>
                    <img src={face2} width={250} height={300} />
                </div>
                <div className='cc3'>
                    <img src={face3} width={300} height={300} />
                </div>
                <div className='cc4'>
                    <img src={face4} width={300} height={300} />
                </div>
            </div>



            <div className='home4'>
                <h3>BEST SELLERS</h3>
                <ul>
                    <li><button>Body</button></li>
                    <li><button>Skin</button></li>
                    <li><button>Hair</button></li>
                </ul>
            </div>





            <div className='row1'>
                <div className='c1'>
                    <div class="card5" >
                        <img src={cream1} width={180} height={220} />
                        <div class="card-body1">
                            <p className='g'>Derma<span className="starss"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
                            <h6>AiryGlow Gel Sunscreen SPF 60</h6>
                            <p className='g1'>Rs.100.00 - Rs.300.00
                            </p>
                        </div>
                    </div>
                </div>
                <div className='c2'>
                    <div class="card2" >
                        <img src={cream2} width={200} height={220} />
                        <div class="card-body2">
                            <p className='g3'>Loreal<span className="starss"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
                            <h6>AlpineDew Calming Face Oil</h6>
                            <p className='g4'>Rs.100.00 - Rs.300.00
                            </p>
                        </div>
                    </div>
                </div>
                <div className='c3'>
                    <div class="card3" >
                        <img src={cream3} width={200} height={220} />
                        <div class="card-body3">
                            <p className='g5'>Aqua <span className="starss"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
                            <h6>Aqualogica</h6>
                            <p className='g6'>Rs.100.00 - Rs.300.00
                            </p>
                        </div>
                    </div>
                </div>
                <div className='c4'>
                    <div class="card4" >
                        <img src={cream4} width={200} height={220} />
                        <div class="card-body3">
                            <p className='g5'>SolarVive <span className="stars"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
                            <h6>AquaLuxe Hydrating Face Oil</h6>
                            <p className='g6'>Rs.100.00 - Rs.300.00
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home1'>

            </div>



            {/* <div class="circle">
                <span>100% natural</span> 
            </div> */}






            <div className='home6'>
                <div className='co1'>
                    <video controls autoPlay loop src={video1} width={300} />
                </div>
                <div className='co2'>
                    <video controls autoPlay loop src={video2} width={300} />
                </div>

                <div className='co3'>
                    <video controls autoPlay loop src={video3} width={300} />
                </div>

                <div className='co4'>
                    <video controls autoPlay loop src={video4} width={300} />
                </div>

            </div>




            <div className='home7'>
                <h3>HERE'S WHAT OUR LOVELY CUSTOMERS HAVE TO SAY</h3>
            </div>


            <div className='row5'>
                <div className='coo1'>
                    <p className='y'>
                        Pink Beauty has become my go to for every makeup need! The products are not only high-quality but also so versatile. Whether I'm going for a natural day time look or a glamorous night out, Pink Beauty has me covered. The foundation blends seamlessly, and are the lipstick are to die for! I've never felt more confident in my skin.</p>
                    <p className='h'> Anya S</p>
                    <p className='starr'><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></p>

                    <div class="card0" >
                        <div class="row g-0">
                            <div class="l1">
                                <img src={skin8} />
                            </div>
                            <div class="col-md-8">
                                <div class="car">
                                    <h5 class="card-title">Makeup Foundation Bottle</h5>

                                    <p class="x"><small class="text-body-secondary">850.00</small></p>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
                <div className='coo2'>
                    <p className='yy'>
                        Pink Beauty has become my go to for every makeup need! The products are not only high-quality but also so versatile. Whether I'm going for a natural day time look or a glamorous night out, Pink Beauty has me covered. The foundation blends seamlessly, and are the lipstick are to die for! I've never felt more confident in my skin.</p>
                    <p className='hh'> Anya S</p>
                    <p className='starrr'><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></p>

                    <div class="card9" >
                        <div class="row g-0">
                            <div class="l2">
                                <img src={skin9} />
                            </div>
                            <div class="col-md-8">
                                <div class="car1">
                                    <h5 class="card-title">Glow  Brightening Serum</h5>

                                    <p class="xx"><small class="text-body-secondary">850.00</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='coo3'>
                    <p className='yyy'>
                        Pink Beauty has become my go to for every makeup need! The products are not only high-quality but also so versatile. Whether I'm going for a natural day time look or a glamorous night out, Pink Beauty has me covered. The foundation blends seamlessly, and are the lipstick are to die for! I've never felt more confident in my skin.</p>
                    <p className='hhh'> Anya S</p>
                    <p className='starrrr'><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></p>

                    <div class="card9" >
                        <div class="row g-0">
                            <div class="l3">
                                <img src={skin10} />
                            </div>
                            <div class="col-md-8">
                                <div class="car2">
                                    <h5 class="card-title">Glow  Brightening Serum</h5>

                                    <p class="xxx"><small class="text-body-secondary">850.00</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='home1'>

            </div>



            <div className='homee'>
                <h3 className='j'>MAKEUP & BEAUTY TIPS FOR THAT
                </h3>
                <h3 className='j1'> EVERYDAY GLOW</h3>

                <button className='j3'>Read Now</button>
            </div>



            <div className='homee1'>
                <div className='cd1'>
                    <div class="card111" >
                        <img src={s1} width={300} height={350} />
                        <div class="card-body111">

                            <p className='gg'>COSMETIC<span className="starss1">Read More</span></p>


                            <p className='gg1'>Understanding the ingredients in your favourite skincare products
                            </p>
                        </div>
                    </div>
                </div>
                <div className='cd2'>
                    <div class="card111" >
                        <img src={s2} width={300} height={350} />
                        <div class="card-body1111">

                            <p className='gg3'>BEAUTY TRENDS<span className="starss1">Read More</span></p>


                            <p className='gg4'>Stay ahead of the curve with the latest makeup trends and techniques for every occassion.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='cd3'>
                    <div class="card01" >
                        <img src={s3} width={300} height={350} />
                        <div class="card-body02">

                            <p className='gg5'>COSMETIC<span className="starsss1">Read More</span></p>


                            <p className='gg6'>Understanding the ingredients in your favourite skincare products
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='home1'>

            </div>
        </div>
    )
}

export default Home