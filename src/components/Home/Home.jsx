/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
 const [allActors,setAllactors] = useState([]);
 const [selectActors ,setSelectActors] = useState([]);
 const [remaning , setRemaning] = useState(0);
 const [totalCost , setTotalCost] = useState(0)


  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setAllactors(data))
  },[]);

const handleSelectActor = (actor) =>{
const isExit = selectActors.find((item)=>item.id==actor.id);
// console.log(isExit);

let count = actor.salary
if(isExit){
return  alert('already booked')
}else{

selectActors.forEach((item) => {
    count = count + item.salary;
});

// console.log(count);
const totalRemmaning = 20000 - count;
if(count > 20000){
  alert('not enough money')
}else{
  setTotalCost(count);
  setRemaning(totalRemmaning);
    setSelectActors([...selectActors,actor])
}

}

  
}
// console.log(selectActors);

  return (
   <div>
     <div className='flex'>
      
      <div className='w-9/12 flex  flex-wrap gap-3'>

      {
        allActors.map(actor =>( <div  key={actor.id} className='w-80 h-80 border-2 border-sky-500'>
        <div className=''>
  
  
  
  
          <div className=' ' >
            <img className='w-20 rounded-full' src={actor.image} alt="" />
          </div >
           <h2 className='text-white'>Name:{actor.name
}</h2>
           <p className='text-white'><small>Lorem ipsum dolor, sit amet consectetur
             adipisicing elit. Repellat, facilis?</small></p>
             {/* <h3>Facebook:{actor.fbUrl}</h3> */}
        </div>
          <div className='text-white flex justify-evenly'>
            <p>salary:{actor.salary
} $</p>
            <p>Role:{actor.role}</p>
          </div>
          <button  onClick={()=>handleSelectActor(actor)} className='text-white bg-rose-700 p-4'>Select</button>
      </div>))
      }


      </div>
 
     <div className='text-white w-3/12'>
        <Cart  totalCost={totalCost} remaning={remaning}  selectActors={selectActors} ></Cart>
     </div>
 
     </div>
   </div>
  );
};

export default Home;

