import React,{useState,useEffect} from 'react';
import FormatTime from "./Numbers"

const StopWatch = () => {
  const [time,setTime] = useState(0);
  const [isRun , setIsRun] = useState(false);

  useEffect(()=>{
   let invalidId;
   
   if(isRun){
     invalidId = setInterval(()=>[
       setTime((prevTime)=>prevTime + 10)
     ],10);
   }
   return()=>{
     clearInterval(invalidId);
   };
  },[isRun]);

  const HandleStart = ()=>{
    setIsRun(true);
  }
  const handleStop = () => {
    setIsRun(false);
    // setTime(0);
  };

  const handleReset = () => {
    if (!isRun) {
      setTime(0);
    }
  }




  return (
    <>
      <div className='container'>
        <h1>StopWatch Timer</h1>
        <p>{FormatTime(time)}</p>
        <button onClick={HandleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default StopWatch;
