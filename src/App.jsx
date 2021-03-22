import React, { useState } from 'react'; //import react, useState
import { v4 as uuidv4 } from 'uuid'; //get unique ids
import moment from 'moment';
import Chirp from './components/Chirp';
import Form from './components/Form'

const App = () => { 
    const initialList = [ //array of initial messages
        {
            name: 'Tigger',
            chirp: 'Let me ask around!',
            id: uuidv4(),
            time: moment().format('dddd, MMMM Do YYYY, h:mm a')
        },
        {
            name: 'Piglet',
            chirp: 'No, sorry! It is a bit blustery today. Maybe it blew away.',
            id: uuidv4(),
            time: moment().format('dddd, MMMM Do YYYY, h:mm a')
        },
        {
            name: 'Winnie the Pooh',
            chirp: 'Hi! Has anyone seen my honey?',
            id: uuidv4(),
            time: moment().format('dddd, MMMM Do YYYY, h:mm a')
            
        },

    ];

    const [arr, setArr] = useState(initialList); //use state for initial list

    const handleClick = (name, chirp) => { //handle button click
        const newChirp ={
            name,
            chirp,
            id:uuidv4(),
            time:moment().format('dddd, MMMM Do YYYY, h:mm a')
        }
        const newList = arr.concat() //button adds new name, chirp and id to array
        setArr([newChirp, ...arr]);
    };

    const submitHandler = e => { //prevent submit button from refreshing data
        e.preventDefault();
    };


    return ( //input fields must use state, all messages should be displayed on page
        <>
            <div className='container'>
                <div className='row'>

                    <Form stopSubmit={submitHandler} addChirp={handleClick} />

                    <div className='msgBox col-6'>
                        {arr.map(singleChirp => <Chirp key={singleChirp.id} name={singleChirp.name} chirp={singleChirp.chirp} time={singleChirp.time}/>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;