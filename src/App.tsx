import React, { useState } from 'react';

import iphone1 from './imgs/iphone1.jpg'
import iphone2 from './imgs/iphon2.jpg'
import iphone3 from './imgs/iphon3.jpg'
import iphone4 from './imgs/iphone4.jpg'
import iphone5 from './imgs/iPhone5.jpg'

const App:React.FC = () => {

  const [bgColor,setBgColor] = useState<string>('#8d9aad')

  const [img,setImg] = useState<string>(iphone1)


const showIphon = (iph:string)=> {
  console.log(iph);
  setImg(iph)

  switch(iph){
    case iphone1 :
      setBgColor('#99aac4');
      break;
    case iphone2 :
      setBgColor('#9c6a22');
      break;
    case iphone3 :
      setBgColor('#969693');
      break;
    case iphone4 :
      setBgColor('#62615d');
      break;
    case iphone5 :
      setBgColor('#205d7a');
      break;

  }
}

return (
    <div className='app' style={{backgroundColor:`${bgColor}`}} >
      <nav className='border-slate-300 border-b-2 flex flex-wrap justify-around p-2 text-white'>
        <div className="logo">
          <img className='w-10 h-10 rounded-md' style={{objectFit:"cover"}} src="https://www.apple.com/ac/structured-data/images/open_graph_logo.png?201809270548" alt="" />
        </div>
        <div className="nav-links0 font-bold flex flex-wrap items-center">
          <span className='mx-3'>Home</span>
          <span className='mx-3'>Product</span>
          <span className='mx-3'>News</span>
          <span className='mx-3'>About</span>
          <span className='mx-3'>Contact</span>
        </div>
      </nav>

      <div className="main-container p-3 grid lg:grid-cols-2">
        <div className="left-text flex justify-center items-start flex-col">
          <div className="text-content mx-auto">
          <h1 className='text-2xl font-bold'>IPhone 13 Pro MAX</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, accusamus!</p>
          </div>
        </div>
        <div className="product-imgs-container flex justify-center items-center ">
            <div className="img-container">
              <img className='w-72' src={img} alt="" />
            </div>
        </div>
      </div>

      <div className="select-product">
        <div className="iphons flex justify-center">
          <div onClick={()=> showIphon(iphone1)} className="i1 iphon mx-2"><img className='w-24 rounded-md' src={iphone1} alt="" /></div>
          <div onClick={()=> showIphon(iphone2)} className="i2 iphon mx-2"><img className='w-24 rounded-md' src={iphone2} alt="" /></div>
          <div onClick={()=> showIphon(iphone3)} className="i3 iphon mx-2"><img className='w-24 rounded-md' src={iphone3} alt="" /></div>
          <div onClick={()=> showIphon(iphone4)} className="i4 iphon mx-2"><img className='w-24 rounded-md' src={iphone4} alt="" /></div>
          <div onClick={()=> showIphon(iphone5)} className="i5 iphon mx-2"><img className='w-24 rounded-md' src={iphone5} alt="" /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
