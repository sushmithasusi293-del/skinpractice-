// import React from 'react'
// import './Sunscreen.css'
// import { TiStar } from "react-icons/ti";
import to1 from '../images/to1.jpg'
import to2 from '../images/to2.jpg'
import to3 from '../images/to3.jpg'
import to4 from '../images/to4.jpg'
import to5 from '../images/to5.jpg'
// const Toner = () => {
//   return (
//     <div> <div>
//                 <h1 className='ru'>TONER</h1>
//                 <div className='re1'>

//                     <div className='vc1'>
//                         <div class="fj" >
//                             <img src={to1} width={100} height={200} />
//                             <div class="fj2">
//                                 <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                                 <h6>Plum Green Tea Alcohol</h6>
//                                 <p className='e2'>Rs.100.00 - Rs.300.00
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='vc2'>
//                         <div class="fj3" >
//                             <img src={to2} width={100} height={200} />
//                             <div class="fj2">
//                                 <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                                 <h6>Vilvah Milk Facial Toner</h6>
//                                 <p className='e2'>Rs.100.00 - Rs.300.00
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='vc3'>
//                         <div class="fj4" >
//                             <img src={to3} width={100} height={200} />
//                             <div class="fj2">
//                                 <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                                 <h6>
//                                     Facial Toner</h6>
//                                 <p className='e2'>Rs.100.00 - Rs.300.00
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='vc4'>
//                         <div class="fj5" >
//                             <img src={to4} width={100} height={200} />
//                             <div class="fj2">
//                                 <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                                 <h6>Rice Toner</h6>
//                                 <p className='e2'>Rs.100.00 - Rs.300.00
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>



//                 <div className='vc5'>
//                     <div class="fj" >
//                         <img src={to5} width={100} height={200} />
//                         <div class="fj2">
//                             <p className='e'>Derma<span className="e3"><TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></span></p>
//                             <h6>Biotique</h6>
//                             <p className='e2'>Rs.100.00 - Rs.300.00
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div></div>
//   )
// }

// export default Toner

import React from 'react'

const Toner = [
    {
        id: 6,
        img: to1,
        name: "derma",
        title: "Plum Green Tea Alcohol",
        price: 600,

    },
    {
        id: 7,
        img: to2,
        name: "derma",
        title: "Vilvah Milk Facial Toner",
        price: 500,

    }, {
        id: 8,
        img: to3,
        name: "derma",
        title: "Facial Toner",
        price: 213,

    }, {
        id: 9,
        img: to4,
        name: "derma",
        title: "Rice Toner",
        price: 350,

    }, {
        id: 10,
        img: to1,
        name: "derma",
        title: "Biotique",
        price: 290,

    },

]


export default Toner