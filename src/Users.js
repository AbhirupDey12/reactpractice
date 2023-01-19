import React, { Component } from 'react';

export default function User() {

  let data = "anil sidhu" ;

  function apple() {
    data = 'peter'  ;
    alert(data);
  }

  return (
    <div>
      <h1> {data} </h1>
      <button onClick={ apple }> Click Me </button>
    </div>
  )

}