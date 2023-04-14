import React,{useState} from 'react'
import './Card.css'

function Card() {

    const[name,setName]=useState('Olu Osinowo');
    const[job,setJob]=useState('Junior Software Developer');
    const[about,setAbout]=useState('i am an up and coming Programmer with special efficiency in the use of HTML,CSS, React and Node.js.I have a teachable spirit and i am ready to collaborate;   ');
    
  return (
    <div className='Card'>
        <div className='upper-container'>
            <div className='image-container'>
                <img src='logo.jpg' alt='' height='100px' width='100px'/>
            </div>

        </div>
        <div className='lower-container'>
            <h3>{ name }</h3>
            <h4>{ job }</h4>
            <p>{ about}</p>
            <button>Visit Profile</button>
        </div>
      
    </div>
  )
}

export default Card
