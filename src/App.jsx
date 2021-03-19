import React, { useState } from 'react'; //import react, useState
import { v4 as uuidv4 } from 'uuid'; //get unique ids
import moment from 'moment';
import Chirp from './components/Chirp'


const App = () => { //create react hook

    const initialList = [ //array of initial messages
        {
            name: 'Winnie the Pooh',
            chirp: 'Hi! Has anyone seen my honey?',
            id: uuidv4(),
        },
        {
            name: 'Piglet',
            chirp: 'No, sorry! It is a bit blustery today. Maybe it blew away.',
            id: uuidv4(),
        },
        {
            name: 'Tigger',
            chirp: 'Let me ask around!',
            id: uuidv4(),
        },

    ];
    const [name, setName] = useState(''); //use state for name
    const [chirp, setChirp] = useState(''); //use state for chirp messages
    const [arr, setArr] = useState(initialList); //use state for initial list

    const handleClick = () => { //handle button click
        const newList = arr.concat({ name, chirp, id: uuidv4(), time: moment().format() }) //button adds new name, chirp and id to array
        setArr(newList);
    };

    const submitHandler = e => { //prevent submit button from refreshing data
        e.preventDefault();
    };


    return ( //input fields must use state, all messages should be displayed on page
        <>
            <div className='container'>
                <div className='row'>
                    <div className='chirpForm shadow p-3 mb-5 rounded col-6'>
                        <strong>Send a Message!</strong>
                        <form onSubmit={submitHandler}>
                            <div className='form-group'>
                                <input
                                    className='form-control'
                                    placeholder='Enter your name...'
                                    value={name}
                                    onChange={e => setName(e.target.value)} />
                            </div>

                            <div className='form-group'>
                                <textarea
                                    className='form-control'
                                    maxlength="150"
                                    rows='4'
                                    placeholder='Chirp your message (in 150 characters or less)...'
                                    value={chirp} onChange={e => setChirp(e.target.value)} />
                            </div>
                            <div>
                                <button className='btn btn-primary' onClick={handleClick}> Chirp </button>
                            </div>
                        </form>
                    </div>

                    <div className='msgBox col-6'>
                        {arr.map(props => <Chirp name={props.name} chirp={props.chirp}/>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;

// import React, { useState } from 'react'; //import react, useState
// import { v4 as uuidv4 } from 'uuid'; //get unique ids
// import moment from 'moment';


// const App = () => { //create react hook

//     const initialList = [ //array of initial messages
//         {
//             name: 'Winnie the Pooh',
//             chirp: 'Hi! Has anyone seen my honey?',
//             id: uuidv4(),
//         },
//         {
//             name: 'Piglet',
//             chirp: 'No, sorry! It is a bit blustery today. Maybe it blew away.',
//             id: uuidv4(),
//         },
//         {
//             name: 'Tigger',
//             chirp: 'Let me ask around!',
//             id: uuidv4(),
//         },

//     ];
//     const [name, setName] = useState(''); //use state for name
//     const [chirp, setChirp] = useState(''); //use state for chirp messages
//     const [arr, setArr] = useState(initialList); //use state for initial list

//     const handleClick = () => { //handle button click
//         const newList = arr.concat({ name, chirp, id: uuidv4(), time: moment().format() }) //button adds new name, chirp and id to array
//         setArr(newList);
//     };

//     const submitHandler = e => { //prevent submit button from refreshing data
//         e.preventDefault();
//     };


//     return ( //input fields must use state, all messages should be displayed on page
//         <>
//             <div className='container'>
//                 <div className='row'>
//                     <div className='chirpForm shadow p-3 mb-5 rounded col-6'>
//                         <strong>Send a Message!</strong>
//                         <form onSubmit={submitHandler}>
//                             <div className='form-group'>
//                                 <input
//                                     className='form-control'
//                                     placeholder='Enter your name...'
//                                     value={name}
//                                     onChange={e => setName(e.target.value)} />
//                             </div>

//                             <div className='form-group'>
//                                 <textarea
//                                     className='form-control'
//                                     maxlength="150"
//                                     rows='4'
//                                     placeholder='Chirp your message (in 150 characters or less)...'
//                                     value={chirp} onChange={e => setChirp(e.target.value)} />
//                             </div>
//                             <div>
//                                 <button className='btn btn-primary' onClick={handleClick}> Chirp </button>
//                             </div>
//                         </form>
//                     </div>

//                     <div className='msgBox col-6'>
//                         {arr.map(val => {
//                             return (
//                                 <div className='messages shadow p-2 mb-3 rounded' key={val.id}>
//                                     <strong>{val.name}</strong>
//                                     <p>{val.chirp}</p>
//                                     <em className='time'>{moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}</em>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default App;