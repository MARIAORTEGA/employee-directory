import React, { useState } from "react";
import "./style.css";
//import API from "https://randomuser.me/api/";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);

  const getUsers = async () => {
    let url = "https://randomuser.me/api/";

    const response = await axios.get(url);
    console.log("response", response);
    setEmployees(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const loadHeader = () => {
      let headerEqual = ['picture', 'username', 'gender']
      
      return headerEqual.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
      })
  }

const renderUser = () => {
    return employees && employees.map(({ picture, username, gender}) => {
        return (
            <tr key={id}>
            <td>{id}</td>
            <td>{picture}</td>
            <td>{username}</td>
            <td>{gender}</td>
            </tr>
        )
    })
}
return (
    <div>
        <h1 id='title'>Employee Directory</h1>
        <table id= 'employee'>
            <head>
                <tr>{loadHeader()}</tr>
                </head>
            <body>
                {renderUser()}
            </body>
        </table>
    </div>
)


export default App;
