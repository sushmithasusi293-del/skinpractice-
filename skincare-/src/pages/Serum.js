// import React from 'react'
// import './Sunscreen.css'
// import { TiStar } from "react-icons/ti";
import se1 from '../images/se1.jpg'
import se2 from '../images/se2.jpg'
import se3 from '../images/se3.jpg'
import se4 from '../images/se4.jpg'
import se5 from '../images/se5.jpg'
import se6 from '../images/se6.jpg'
import se7 from '../images/se7.jpg'
import se8 from '../images/se8.jpg'
// const Serum = () => {
//     return (

//         <div>
//             <h1 className='ru'>SERUM</h1>
//             <div className='re1'>

//                 <div className='vc1'>
//                     <div class="fj" >
//                         <img src={se1} width={100} height={200} />
//                         <div class="fj2">
//                             <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                             <h6>Deconstruct</h6>
//                             <p className='e2'>Rs.100.00 - Rs.300.00
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='vc2'>
//                     <div class="fj3" >
//                         <img src={se2} width={100} height={200} />
//                         <div class="fj2">
//                             <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                             <h6>Plum</h6>
//                             <p className='e2'>Rs.100.00 - Rs.300.00
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='vc3'>
//                     <div class="fj4" >
//                         <img src={se3} width={100} height={200} />
//                         <div class="fj2">
//                             <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                             <h6>
//                                 Vitamin C serum</h6>
//                             <p className='e2'>Rs.100.00 - Rs.300.00
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='vc4'>
//                     <div class="fj5" >
//                         <img src={se4} width={100} height={200} />
//                         <div class="fj2">
//                             <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                             <h6>Niacinamide Serum</h6>
//                             <p className='e2'>Rs.100.00 - Rs.300.00
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>




//             <div className='re1'>

//                 <div className='vc1'>
//                     <div class="fj" >
//                         <img src={se5} width={100} height={200} />
//                         <div class="fj2">
//                             <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                             <h6>Derma Co Serum</h6>
//                             <p className='e2'>Rs.100.00 - Rs.300.00
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='vc2'>
//                     <div class="fj3" >
//                         <img src={se6} width={100} height={200} />
//                         <div class="fj2">
//                             <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                             <h6>Streax</h6>
//                             <p className='e2'>Rs.100.00 - Rs.300.00
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='vc3'>
//                     <div class="fj4" >
//                         <img src={se7} width={100} height={200} />
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
//                         <img src={se8} width={100} height={200} />
//                         <div class="fj2">
//                             <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                             <h6>Minimalist</h6>
//                             <p className='e2'>Rs.100.00 - Rs.300.00
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </div>

//     )
// }

// export default Serum


const Serum = [
    {
        id: 11,
        img: se1,
        name: "derma",
        title: "Deconstruct",
        price: 325,

    },
    {
        id: 12,
        img: se2,
        name: "derma",
        title: "Plum",
        price: 457,

    }, {
        id: 13,
        img: se3,
        name: "derma",
        title: " Vitamin C serum",
        price: 900,

    }, {
        id: 14,
        img: se4,
        name: "derma",
        title: "Niacinamide Serum",
        price: 750,

    }, {
        id: 15,
        img: se5,
        name: "derma",
        title: "Derma Co Serum",
        price: 200,

    },
    {
        id: 16,
        img: se6,
        name: "derma",
        title: "Streax",
        price: 100,

    },
    {
        id: 17,
        img: se7,
        name: "derma",
        title: "Fix Derma",
        price: 260,

    },
    {
        id: 18,
        img: se8,
        name: "derma",
        title: "Minimalist",
        price: 209,

    },


]
export default Serum;