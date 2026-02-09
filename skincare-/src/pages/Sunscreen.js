// import React from 'react'
// import './Sunscreen.css'
// import { TiStar } from "react-icons/ti";
import sun1 from '../images/sun1.jpg'
import sun2 from '../images/sun2.jpg'
import sun3 from '../images/sun3.jpg'
import sun4 from '../images/sun4.jpg'


// const Sunscreen = () => {
//     return (
//         <div>
//             <h1 className='ru'>SUNSCREEN</h1>

//             <div className='re1'>

//                 <div className='vc1'>
//                     <div class="fj" >
//                         <img src={sun1} width={100} height={200} />
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
//                         <img src={sun2} width={100} height={200} />
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
//                         <img src={sun3} width={100} height={200} />
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
//                         <img src={sun4} width={100} height={200} />
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
//                     <img src={sun1} width={100} height={200} />
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

// export default Sunscreen

const Sunscreen = [
    {
        id: 1,
        img: sun1,
        name: "derma",
        title: "AiryGlow Gel Sunscreen SPF",
        price: 200,

    },
    {
        id: 2,
        img: sun2,
        name: "derma",
        title: "Smudge me not Lipstic",
        price: 250,

    }, {
        id: 3,
        img: sun3,
        name: "derma",
        title: "Fix Derma",
        price: 300,

    }, {
        id: 4,
        img: sun4,
        name: "derma",
        title: "AiryGlow Gel Sunscreen SPF",
        price: 200,

    }, {
        id: 5,
        img: sun1,
        name: "derma",
        title: "Minimalist",
        price: 100,

    },


]
export default Sunscreen;