import React from 'react';

class User extends React.Component {

     componentWillUnmount() {
          console.log("componentWillUnmount is called");
     }

     render() {
          return (
               <div>
                    <h1> Student Component </h1>
               </div>
          )
     }

}

export default User;