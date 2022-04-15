import React,{useContext, useState} from 'react';
import { StoreData } from './ContextStore';
import './style.css'


var arr=[];

const CardDetails =({indexVal})=>{

    const [len,fixLen]=useState("");

    var storeInputData=useContext(StoreData);
   
    const checkLength=(e)=>{
     var val=e.target.value;
      if(val.length>4)
       return false;
       
       fixLen(e.target.value)
       var fieldArr=e.target.name.split("-")
       var fieldIndex=fieldArr[1];
       arr[fieldIndex]=val;
       storeInputData(arr);

       if(val.length===4 || val.length===0)
         {
           
            if(fieldIndex<3)
            fieldIndex++;
            var inputField=document.getElementsByTagName("input")[fieldIndex];
            inputField.focus();
           }
      
}
   
return(

        <div>
           <input type="number" name={`ip-${indexVal}`} className='card-input-box' value={len} onChange={checkLength} required/>
         </div>
    
    )
}



export default CardDetails;
