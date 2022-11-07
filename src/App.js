import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
function App() {
 const [data, setData] = useState([]);
 useEffect(() => {
 axios
 .get('https://jsonplaceholder.typicode.com/posts')
 .then((response) => {
 console.log('Getting data from:::', response.data);
 setData(response.data);
 })
 .catch((error) => console.log(error));
 }, []);
 const arr = data.map((data, index) => {
 return (
 <tr>
 <td>{data.id}</td>
 <td>{data.title}</td>
 <td>{data.body}</td>
 </tr>
 );
 });
 return (
 <div className="App">
 <table>
 <tr>
 <td>ID</td>
 <td>Title</td>
 <td>Body</td>
 </tr>
 {arr}
 </table>
 </div>
 );
}
export default App;
