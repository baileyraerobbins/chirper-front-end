import React, {useState} from 'react';

const Form =(props) => {
    const [name, setName] = useState(''); //use state for name
    const [chirp, setChirp] = useState(''); //use state for chirp messages

    const submit =() =>{
        setName('')
        setChirp('')
        props.addChirp(name, chirp)
    }

    return (
        <div className='chirpForm shadow p-3 mb-5 rounded col-6'>
                        <strong>Send a Message!</strong>
                        <form onSubmit={props.stopSubmit}>
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
                                    maxLength="150"
                                    rows='4'
                                    placeholder='Chirp your message (in 150 characters or less)...'
                                    value={chirp} onChange={e => setChirp(e.target.value)} />
                            </div>
                            <div>
                                <button className='btn btn-primary' onClick={() => submit()}> Chirp </button>
                            </div>
                        </form>
                    </div>
    )
}

export default Form;