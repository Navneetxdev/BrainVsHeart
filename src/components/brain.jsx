import './brain.css';
import { useState, useEffect } from 'react';

function Brain({ notify }){
   const [lastUpdated, setLastUpdated] = useState(null);

  const getInitialWidth = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  };

  const [leftWidth, setLeftWidth] = useState(() => 
    getInitialWidth('leftWidth', 50));  // Brain
  const [rightWidth, setRightWidth] = useState(() => 
    getInitialWidth('rightWidth', 50));  // Heart 

  useEffect(() => {
    localStorage.setItem('leftWidth', JSON.stringify(leftWidth));
    localStorage.setItem('rightWidth', JSON.stringify(rightWidth));
  }, [leftWidth, rightWidth]);  

  const increaseBrainWidth = () => {
    if (rightWidth > 1) {
      setLeftWidth(leftWidth + 1);
      setRightWidth(rightWidth - 1);
      
      console.log("program ran gay");
    }
  };

  
  const increaseHeartWidth = () => {
    if (leftWidth > 1) {
      setRightWidth(rightWidth + 1);
      setLeftWidth(leftWidth - 1);
      console.log("program ran");
      
    }
  };

  useEffect(() => {
   const storedTime = localStorage.getItem('lastUpdated');
   if (storedTime) {
     setLastUpdated(new Date(storedTime)); 
   }
 }, []);

 
 const updateLastClicked = () => {
   const currentTime = new Date();
   localStorage.setItem('lastUpdated', currentTime.toISOString()); 
   setLastUpdated(currentTime);
 };

 const heartclick = () => {
   const today = new Date();
   
   if (lastUpdated && lastUpdated.toDateString() === today.toDateString()) {
     console.log("You've already clicked today!"); 
     notify("You've already clicked today! Please try again tomorrow.");
     return; 
   }
   
   
   updateLastClicked();
   increaseHeartWidth();
   notify("You clicked the Heart! 🧡"); 
   
   
 };

 const brainclick = () => {
   const today = new Date();
   
   if (lastUpdated && lastUpdated.toDateString() === today.toDateString()) {
     console.log("You've already clicked today!"); 
     notify("You've already clicked today! Please try again tomorrow.");
     return; 
   }

   increaseBrainWidth();
   updateLastClicked();
   notify("You clicked the Brain! 🧠");
 };
     return(
        <div className='container'>
         <div className='brain' style={{ width: `${leftWidth}%` }} onClick={brainclick}>
            <h2>betteru.io</h2>
            <h1>Brain</h1>
         </div>
         <div className='heart' style={{ width: `${rightWidth}%` }} onClick={heartclick}>
            <h1>Heart</h1>
         </div>
        </div>
     );
}

export default Brain;