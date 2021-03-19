import React from 'react';
import moment from 'moment';

const Chirp = (props) => {
    return (
         <div className='messages shadow p-2 mb-3 rounded' key={props.id}>
            <strong>{props.name}</strong>
            <p>{props.chirp}</p>
            <em className='time'>{moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}</em>
        </div> 
    )
}

export default Chirp