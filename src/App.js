import React from 'react';
import Table from 'react-bootstrap/Table';

export default function App() {

  const users = [
    {
      name: 'anil', email: "anil@test.com", address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "11", city: "Delhi", country: "India" },
        { Hn: "34", city: "Kolkata", country: "India" },
        { Hn: "100", city: "Chennai", country: "India" },
      ]
    },
    {
      name: 'sidhu', email: "sidhu@test.com", address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "11", city: "Delhi", country: "India" },
        { Hn: "34", city: "Kolkata", country: "India" },
        { Hn: "100", city: "Chennai", country: "India" },
      ]
    },
    {
      name: 'sidhu', email: "sidhu@test.com", address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "11", city: "Delhi", country: "India" },
        { Hn: "34", city: "Kolkata", country: "India" },
        { Hn: "100", city: "Chennai", country: "India" },
      ]
    },
    {
      name: 'sidhu', email: "sidhu@test.com", address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "11", city: "Delhi", country: "India" },
        { Hn: "34", city: "Kolkata", country: "India" },
        { Hn: "100", city: "Chennai", country: "India" },
      ]
    }
  ]

  return (

    <div>
      <h1>Nested List</h1>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        </tbody>
        {
          users.map((item) =>
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              {
                item.address.map((data) =>
                  <tr>
                    <td>{data.Hn}</td>
                    <td>{data.city}</td>
                    <td>{data.country}</td>
                  </tr>
                )
              }
            </tr>
          )
        }
      </Table>
    </div>
  )

}
