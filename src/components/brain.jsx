import './brain.css';
import { useState, useEffect } from 'react';

function Brain({ notify }){
   const [lastUpdated, setLastUpdated] = useState(null);
  

  useEffect(() => {
   const storedTime = localStorage.getItem('lastUpdated');
   if (storedTime) {
     setLastUpdated(new Date(storedTime)); // Store it as a Date object
   }
 }, []);

 
 const updateLastClicked = () => {
   const currentTime = new Date();
   localStorage.setItem('lastUpdated', currentTime.toISOString()); // Store as ISO string
   setLastUpdated(currentTime);
 };

 const heartclick = () => {
   const today = new Date();
   
   if (lastUpdated && lastUpdated.toDateString() === today.toDateString()) {
     console.log("You've already clicked today!"); // Warn the user
     notify("You've already clicked today! Please try again tomorrow.");
     return; // Exit the function
   }
   
   
   updateLastClicked();

   notify("You clicked the Heart! 🧡"); 
 };

 const brainclick = () => {
   const today = new Date();
   
   if (lastUpdated && lastUpdated.toDateString() === today.toDateString()) {
     console.log("You've already clicked today!"); // Warn the user
     notify("You've already clicked today! Please try again tomorrow.");
     return; 
   }

   
   updateLastClicked();
   notify("You clicked the Brain! 🧠");
 };
     return(
        <div className='container'>
         <div className='brain'  onClick={brainclick}>
            <h2>betteru.io</h2>
            <h1>Heart</h1>
         </div>
         <div className='heart' onClick={heartclick}>
            <h1>Brain</h1>
         </div>
        </div>
     );
}

export default Brain;