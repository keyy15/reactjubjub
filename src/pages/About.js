import React from 'react'
import '../styles/About.css'

function Car(props){
  return <h2>I am a {props.brand} </h2>
}

function About() {
  const carName = "Ford";
  //create hello world
  
  return ( 
    <div>
      <Car brand={carName}/>
    </div>
  )
}

export default About