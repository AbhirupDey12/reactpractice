// Form Handling 

import React, { Component, useState } from 'react'

export default function Student(props) {

     const [name, setName] = useState("");
     const [intrest, setIntrest] = useState("");
     const [tnc, setTnc] = useState(false);

     function getFormData(e) {
          e.preventDefault();
          console.log(name);
          console.log(tnc);
          console.log(intrest);
          setName("") ;
          setIntrest("options") ;
          setTnc(false) ;
     }

     return (
          <div style={{ textAlign: "center" }} >
               <h1>Handle Form In React </h1>
               <form onSubmit={getFormData}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />  <br />   <br />
                    <select onChange={(e) => setIntrest(e.target.value)} required value={intrest} >
                         <option value="options"> Select Options </option>
                         <option value="marvel"> Marvel </option>
                         <option value="dcComit"> DC Comic </option>
                    </select>   <br />   <br />
                    <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} required value={tnc} />
                    <span>Accept Terms and Conditions</span> <br />   <br />
                    <button>Submit</button>
               </form>
          </div>
     )

}