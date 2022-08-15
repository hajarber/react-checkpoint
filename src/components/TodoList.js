
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Task from './Task';

const Todolist = ({ color, inputText, setInputText }) => {
  const [show, setShow] = useState(false);

  const [todos, setTodos] = useState(() => {

    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      // return the parsed the JSON object back to a javascript object
      return JSON.parse(savedTodos);

    } else {
      // return an empty array
      return [];
    }
  });

  // useEffect  runs once the component mounts
  useEffect(() => {
    // localstorage only support storing strings as keys and values

    localStorage.setItem("todos", JSON.stringify(todos));
    // add the todos as a dependancy  to update the
    // localstorage everytime the todos state changes
  }, [todos]);


  //   todo's input
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  };

  // input cancel 
  const cancelHandler = () => {
    setShow(false)
    setInputText("");
  }
  // handle the submit action.
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos((todos) => [...todos, { text: inputText, id: uuidv4(), completed: false }]);
      setInputText("");
    }

  };



  return (
    <div>

      <div className='flex  border-b-2 border-white justify-between m-4 py-5  '>
        <span class="text-white font-bold text-lg">Tasks</span>
        <div>
          <button className={` md:w-auto text-white ${color} border-solid border-1 rounded w-8 h-8 mx-1`}> <i class="fa-solid fa-ellipsis-vertical"></i></button>
        </div>
      </div>
      <div>
        <ul className="todo-list">
          {/* map over the todos array which creates a new li element for every todo */}
          {todos.map((todo) => (
            <Task completed={todo.completed} id={todo.id}
              todo={todo} key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} />

          ))}
        </ul>

      </div>

      <div>
        {show &&
          <div className=' rounded bg-white h-auto w-82 m-3'>
            <div className='  '>
              <form>

                <input value={inputText} onChange={inputTextHandler} type="text" className="font-semibold font-sans appearance-none bg-transparent border-none w-full text-gray-500 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder='What are you working on?' />
              </form>

            </div>
            <div className='flex justify-center bg-slate-200 h-9 pl-48  font-bold text-sm'>

              <button onClick={() => cancelHandler()} className='  text-slate-400   w-12  rounded  mr-3.5' type="reset"> Cancel</button>

              <button onClick={(e) => { submitTodoHandler(e); setShow(!show) }} className='  text-white  bg-slate-400 w-12  rounded ' type="submit"> Save </button>
            </div>
          </div>
        }

        <div className='flex flex-col justify-center h-14 w-82  border border-dashed border-white mx-2.5'>
          <button className=' text-white' onClick={(e) => { e.preventDefault(); setShow(!show) }}><i class="fa-solid fa-circle-plus"></i>Add Task</button>
        </div>
      </div>
    </div>
  )
}

export default Todolist