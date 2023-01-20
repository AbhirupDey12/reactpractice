import React from 'react';

class User extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               email: "anil@test.com"
          }
     }

     render() {
          console.log("Render Method Called", this.state.email);
          return (
               <div>
                    <h1>User Email : {this.state.email} </h1>
                    <button onClick={() => this.setState({ email: "abhirup@test.com" })} >Update Email </button>
               </div>
          )
     }

}

export default User;