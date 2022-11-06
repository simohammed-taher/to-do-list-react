import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  //Tasks (ToDo List) State
const [toDo,setToDo]= useState([
  {"id":1,"title":"Task 1","status":false},
  {"id":2,"title":"Task 2","status":false},
]);
//Temp State
const [newTask,setNewTask] = useState('');
const [updateData,setUpdateData] = useState('');
// Add task
const addTask =()=>{

}
//Delete task
const deleteTask =(id)=>{

}
//Mark task as done or completed
const markDone = (id) =>{

}
//Cancel update
const cancelUpdate =()=>{

}
//change task for update
const changeTask =(e)=>{

}
//Update task
const updateTask =()=>{

}




  return (
    <div className="container App">
      <br /><br />
      <h2>To Do List App (ReactJS)</h2>
      <br/><br/>
      {/* Update Task */}
      <div className='row'>
        <div className='col'>
        <input className='form-control form-control-lg'></input>
        </div>
        <div className='col-auto'>
        <button className='btn btn-lg btn-success mr-20'>
                Update
              </button>
              <button className='btn btn-lg btn-warning'> Cancel</button>
              </div>
              <br/>
          {/* Add Task */}
          <div className='row'>
            <div className='col'>
              <input className='form-control form-control-lg'></input>
            </div>
            <div className='col-auto'>
              <button className='btn btn-lg btn-success'>
                Add Task
              </button>
            </div>
          </div>
         <br></br>
         {/* Display ToDos */}
      {toDo && toDo.length ? '': 'No Tasks...'}
      {toDo && toDo
      .sort((a, b) =>a.id > b.id ? 1 : -1)
      .map((task, index)=>{
        return(
          <React.Fragment key={task.id}>
            <div className='col taskBg'>
              <div className={task.status ? 'done' : ''}>  
            <span className='taskNumber'>{index+1}</span>
            <span className='taskText'>{task.title}</span>
            </div>
            <div className='iconsWrap'>
              <span title='Completed / Not Completed'>
                <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
              </span>
              <span title='Edit'>
              <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
              </span>
              <span title="Delet">
              <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
              </span>
            </div>
            </div>
          </React.Fragment>
        )
      })
      }
    </div>
  );
)}
  export default App;
