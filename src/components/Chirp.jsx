import React from 'react';

const Chirp = (props) => {
    return (
         <div className='messages shadow p-2 mb-3 rounded' key={props.id}>
            <strong>{props.name}</strong>
            <p>{props.chirp}</p>
            <em className='time'>{props.time}</em>
        </div> 
    )
}

export default Chirp