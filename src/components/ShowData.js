import React,{useEffect} from "react";
import axios from 'axios';


var card;
var fetchData;

var delData;
const ShowData=({ipData})=>{
    
  
   var dataStr=ipData.join(" ");
   var strLength=dataStr.replaceAll(" ","")
    
   if(strLength.length<16)
   alert("Please enter a valid pin number");
   
   useEffect(()=>{
        card=document.querySelector(".show-data-wrapper");
        card.style.display="block";
        axios.post("http://dummy-card-project.herokuapp.com/checkapi",{name : "data-passed"}).then( (res)=>{
        
         fetchData= res.data;
          delData=document.getElementById("fetchdata")
         delData.style.display="block";

   })
   
 });
          const deleteIcon=()=>{
         card=document.querySelector(".show-data-wrapper");
         card.style.display="none";
         delData=document.getElementById("fetchdata")
         delData.style.display="none";
        
    }
    return (
    <>
    <p id="fetchdata" style={{textAlign: "center",color:"orange",marginTop: "5vh"}}>{fetchData}</p>
    <div className="show-data-wrapper">
       
     <p>Card No</p>
     <hr className="show-data-hr" />
     <div className="show-data-content">
     {
         
         dataStr
     }
     </div>
     <p className="trash-icon" onClick={deleteIcon}>
     <i className="fa fa-trash" aria-hidden="true"></i>
     </p>
    </div>
    </>
    )
}

export default ShowData;
