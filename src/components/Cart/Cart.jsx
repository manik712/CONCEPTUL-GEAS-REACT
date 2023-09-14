/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectActors,remaning,totalCost}) => {
  console.log(selectActors);
  return (
    <div>
       <h3 className='underline'>This is cart</h3>
       <p>Total Actors:{selectActors.length}</p>
       <h5>Total cost:{totalCost}$</h5>
       <h2>Reaming:{remaning}$</h2>
        {selectActors.map((actor)=>(<li key={actor.id}>{actor.name}</li>))
       
        
        }
    </div>
  );
};

export default Cart;