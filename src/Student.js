import React, { Component } from 'react'

export default function Student(props) {

     const [status, setStatus] = React.useState(true);
     const [show, setShow] = React.useState("Hide");

     function clickHandler() {
          if (status === true) {
               setStatus(false);
               setShow("Show")
          }
          else {
               setStatus(true);
               setShow("Hide") 
          }
     }

     return (
          <div>
               {
                    status ? <h1>Hello Everybody !!! </h1> : null
               }
               <button onClick={() => clickHandler()} > {show} </button>
          </div>
     )

}