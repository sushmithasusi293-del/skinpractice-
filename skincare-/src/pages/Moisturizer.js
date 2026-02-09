// import React from 'react'
// import './Sunscreen.css'
// import { TiStar } from "react-icons/ti";
import m1 from '../images/m1.jpg'
import m2 from '../images/m2.jpg'
import m3 from '../images/m3.jpg'
import m4 from '../images/m4.jpg'
import m5 from '../images/m5.jpg'
import m6 from '../images/m6.jpg'
import m7 from '../images/m7.jpg'
import m8 from '../images/m8.jpg'
import m9 from '../images/m9.jpg'
// const Moisturizer = () => {
//     return (
//         <div>
//             <h1 className='ru'>MOISTURIZER</h1>
//             <div className='re1'>

//                 <div className='vc1'>
//                     <div class="fj" >
//                         <img src={m1} width={100} height={200} />
//                         <div class="fj2">
//                             <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                             <h6>AiryGlow Gel Sunscreen SPF 60</h6>
//                             <p className='e2'>Rs.100.00 - Rs.300.00
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='vc2'>
//                     <div class="fj3" >
//                         <img src={m2} width={100} height={200} />
//                         <div class="fj2">
//                             <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                             <h6>Smudge me not Lipstick</h6>
//                             <p className='e2'>Rs.100.00 - Rs.300.00
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='vc3'>
//                     <div class="fj4" >
//                         <img src={m3} width={100} height={200} />
//                         <div class="fj2">
//                             <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                             <h6>
//                                 Fix Derma</h6>
//                             <p className='e2'>Rs.100.00 - Rs.300.00
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='vc4'>
//                     <div class="fj5" >
//                         <img src={m4} width={100} height={200} />
//                         <div class="fj2">
//                             <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                             <h6>Minimalist</h6>
//                             <p className='e2'>Rs.100.00 - Rs.300.00
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>



//             <div className='re1'>

//                 <div className='vc1'>
//                     <div class="fj" >
//                         <img src={m5} width={100} height={200} />
//                         <div class="fj2">
//                             <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                             <h6>AiryGlow Gel Sunscreen SPF 60</h6>
//                             <p className='e2'>Rs.100.00 - Rs.300.00
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='vc2'>
//                     <div class="fj3" >
//                         <img src={m6} width={100} height={200} />
//                         <div class="fj2">
//                             <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                             <h6>Smudge me not Lipstick</h6>
//                             <p className='e2'>Rs.100.00 - Rs.300.00
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='vc3'>
//                     <div class="fj4" >
//                         <img src={m7} width={100} height={200} />
//                         <div class="fj2">
//                             <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                             <h6>
//                                 Fix Derma</h6>
//                             <p className='e2'>Rs.100.00 - Rs.300.00
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='vc4'>
//                     <div class="fj5" >
//                         <img src={m8} width={100} height={200} />
//                         <div class="fj2">
//                             <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                             <h6>Minimalist</h6>
//                             <p className='e2'>Rs.100.00 - Rs.300.00
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>



//             <div className='vc5'>
//                 <div class="fj" >
//                     <img src={m9} width={100} height={200} />
//                     <div class="fj2">
//                         <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                         <h6>AiryGlow Gel Sunscreen SPF 60</h6>
//                         <p className='e2'>Rs.100.00 - Rs.300.00
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Moisturizer

const Moisturizer = [
    {
        id: 24,
        img: m1,
        name: "derma",
        title: "AiryGlow Gel Sunscreen SPF",
        price: 200,

    },
    {
        id: 25,
        img: m2,
        name: "derma",
        title: "Smudge me not Lipstic",
        price: 500,

    }, {
        id: 26,
        img: m3,
        name: "derma",
        title: "Fix Derma",
        price: 400,

    }, {
        id: 27,
        img: m4,
        name: "derma",
        title: "AiryGlow Gel Sunscreen SPF",
        price: 290,

    }, {
        id: 28,
        img: m5,
        name: "derma",
        title: "AiryGlow Gel Sunscreen SPF",
        price: 100,

    },
    {
        id: 29,
        img: m6,
        name: "derma",
        title: "AiryGlow Gel Sunscreen SPF",
        price: 300,

    },
    {
        id: 30,
        img: m7,
        name: "derma",
        title: "AiryGlow Gel Sunscreen SPF",
        price: 500,

    },
    {
        id: 31,
        img: m8,
        name: "derma",
        title: "AiryGlow Gel Sunscreen SPF",
        price: 1000,

    },
    {
        id: 32,
        img: m9,
        name: "derma",
        title: "AiryGlow Gel Sunscreen SPF",
        price: 312,

    },


]
export default Moisturizer;