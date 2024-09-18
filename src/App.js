
import './App.css';
import {Table} from 'react-bootstrap'

function App() {

  const student=[
    {name:'abid',age:'24',address:'bgp'},
    {name:'abid',age:'24',address:'bgp'},
    {name:'abid',age:'24',address:'bgp'},
    {name:'abid',age:'24',address:'bgp'},
  ]
  return (
    <div className="App">
      <Table border={2} >
        <tr>
          <td>name</td>
          <td>age</td>
          <td>address</td>
        </tr>
        {
          student.map((item,i)=>
          <tr key={i}>

            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
          </tr>
          )
        }
      </Table>
    </div>
  );
}

export default App;
