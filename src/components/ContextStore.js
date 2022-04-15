import { createContext ,useState} from "react";
import CardDetails from "./CardDetails";
import ShowData from "./ShowData";




export const StoreData=createContext();

export const ContextStore=()=>{
    
    const [inputData,storeInputData]=useState([]);
    var [checkState,updateCheckState]=useState({check: false})
   

    return (
        <>
        <div className='wrapper'>
        <p>Card Number<sup style={{color: "red"}}>*</sup> :</p>
       
        
     
    <StoreData.Provider value={storeInputData}>
        <CardDetails indexVal={0}/>
      <CardDetails indexVal={1}/>
      <CardDetails indexVal={2}/>
      <CardDetails indexVal={3}/>
    </StoreData.Provider>
 
    </div>
       <button className="btn" onClick={()=>{
           updateCheckState({check : true})

       }}>Submit</button>

       {checkState.check===true?
       <ShowData  ipData={inputData} />: ""}
       </>
    
     )
}

