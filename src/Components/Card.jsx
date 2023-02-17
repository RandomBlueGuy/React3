import React from 'react';
import './Card.css';
import {useState} from 'react';

export default function Card() {

    const [Ndegree, setNdegree] = useState('');
    const [TypeFrom, setTypeFrom] = useState('');
    const [Answer, setAnswer] = useState('');

    const addNumber = (event) => {
        setNdegree(Number(event.target.value));
    };

    const selectDegreeTypeFrom = (event) => {
        setTypeFrom(event.target.value);
    };

    const sendForm = (event) => {
        event.preventDefault();
        (TypeFrom[0] === 'C') ? setAnswer('Result = ' + ((Ndegree*9/5) + 32).toFixed(2) + '°C') : setAnswer('Result = '+ ((Ndegree-32)*5/9).toFixed(2) + '°C'); 
        //setNdegree(''); //Reset input
    };

  return (
    <div className='container'>
        <section className="data-input">
            <h1>Degree Conversion</h1>
            <h4>Celsius - Farenheit</h4>
            <form>
                <p>From:</p>
                    <label>
                        <input type="text" className="Ndegree" id = "Ndegree" defaultValue="Insert Number"  value = {Ndegree} onChange = {addNumber} placeholder='Insert Number'/>
                    </label>

                    <p>Transform to:</p>
                    <label>
                        <select id = "sFrom" onChange = {selectDegreeTypeFrom}>
                            <option selected disabled></option>
                            <option value="Farenheit">Farenheit</option>
                            <option value="Celsius">Celsius</option>
                        </select>
                    </label>
           
                    <button className="Convert" onClick={sendForm} disabled = {typeof(Ndegree) !== 'number' || !TypeFrom }>Convert</button>
      
            </form>
        </section>
        <section className="data-output">
                <h3>{Answer}</h3>      
        </section>

        <h5>* button will be disabled until all the necessary data is verified</h5>
    </div>
  )
}
