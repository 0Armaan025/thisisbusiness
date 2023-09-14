import React from 'react';
import './middlepart.css';
import LearnMoreBtn from './components/learn_more_btn/learnMoreBtn';

const MiddlePart = () => {
  return (
    <>
    <center>
        <div className="wrapper">
     <div className="middlePart">
        <img src="https://media.istockphoto.com/id/1262582734/vector/happy-girl-studying-with-books-student-girl-at-the-desk-writing-for-her-homework-back-to.jpg?s=612x612&w=0&k=20&c=AiXV4EkEfWsgnIILEkilYyIDVzhefIFckEOhP6wMf50=" className='leftImage'/>

        <div className="textDiv">
            <h1 className='headingText'>Empower, Share and become better!</h1>
            
            <h4 className="paragraphText">Empowerment is the catalyst for personal growth. By sharing our knowledge, experiences, and resources, we not only uplift ourselves but also contribute to the betterment of others. Together, we can create a brighter future, fostering a community of continuous improvement and support.</h4>
        </div>
        
     </div>
     </div>
     </center>
     <br/>
        <br/>
        <br/>
        <br/>
        <center>
        <LearnMoreBtn/></center>
    </>
  )
}

export default MiddlePart
