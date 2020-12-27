import React from 'react';

const Cards= ({name, email, id})=> {
    
    return(
        
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3 '>
           <img alt='robots' src={`https://robohash.org/${id}test?size=200x200` }/>
           <div>
           <h2>{name}</h2>
           <p>{email}</p>
           
           </div>
        </div>
    )

}

export default Cards;