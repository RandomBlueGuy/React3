import React from 'react';
import './Card.css';
import {useState} from 'react';

export default function Card() {

    const [Ndegree, setNdegree] = useState('');
    const [TypeFrom, setTypeFrom] = useState('');
    const [TypeTo, setTypeTo] = useState('');
    const [Answer, setAnswer] = useState(Ndegree, TypeFrom, TypeTo);

    const addNumber = (event) => {
        setNdegree(Number(event.target.value));
    };

    const selectDegreeTypeFrom = (event) => {
        setTypeFrom(event.target.value);
    };

    const selectDegreeTypeTo = (event) => {
        setTypeTo(event.target.value);
    };

    const sendForm = (event) => {
        event.preventDefault();
        switch (TypeFrom[0]) {
            case 'F':  
                TypeTo[0] === 'F' ? setAnswer(Ndegree) : TypeTo[0] === 'C' ? setAnswer(((Ndegree-32)*5/9).toFixed(2)) : setAnswer((((Ndegree-32)*5/9)+273.15).toFixed(2));
                break;
            case 'C':
                TypeTo[0] === 'F' ? setAnswer(((Ndegree*9/5) + 32).toFixed(2)) : TypeTo[0] === 'C' ? setAnswer(Ndegree) : setAnswer(Ndegree + 273.15);
                break;
            case 'K':
                TypeTo[0] === 'F' ? setAnswer((((Ndegree - 273.15)*9/5)+32).toFixed(2)) : TypeTo[0] === 'C' ? setAnswer(Ndegree - 273.15) : setAnswer(Ndegree);
                break;
            default:
                break;
        };
    };

  return (
    <div className='container'>
        <section className="data-input">
            <h1>Degree Conversion Project</h1>
            <h4>From & To Kelvin, Celsius and Farenheit</h4>
            <form>
                <p>From:</p>
                    <label>
                        <input type="Number" className="Ndegree" id = "Ndegree" defaultValue="Insert Number"  value = {Ndegree} onChange = {addNumber} placeholder='Insert Number'/>
                    </label>
                
                    <label>
                        <select id = "sFrom" onChange = {selectDegreeTypeFrom}>
                            <option selected disabled></option>
                            <option value="Farenheit">Farenheit</option>
                            <option value="Celsius">Celsius</option>
                            <option value="Kelvin">Kelvin</option>
                        </select>
                    </label>

                    <p>To:</p>

                    <label>
                        <select id = "sTo" onChange = {selectDegreeTypeTo}>
                            <option selected disabled></option>
                            <option value="Farenheit">Farenheit</option>
                            <option value="Celsius">Celsius</option>
                            <option value="Kelvin">Kelvin</option>
                        </select>
                    </label>
                         
                    <button className="Convert" onClick={sendForm} disabled = {typeof(Ndegree) !== 'number'   || !TypeFrom || !TypeTo }>Convert</button>
      
            </form>
        </section>
        <section className="data-output">
                <h3>Result = {Answer} °{TypeTo[0]} </h3>      
        </section>

        <h5>* button will be disabled until all the necessary data is verified</h5>
    </div>
  )
}
