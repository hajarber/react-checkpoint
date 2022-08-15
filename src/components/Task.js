
import React, {useState} from 'react';

const Task = ({completed, id, text, todo, todos, setTodos}) => {
  const [input, setInput] = useState ('');
  const [hide, setHide] = useState (false);
  const [btnColor, setBtnColor] = useState ('white');
  //  remove a todo item from the todos array
  function deleteHandler () {
    const removeItem = todos.filter (todo => {
      return todo.id !== id;
    });

    setTodos (removeItem);
  }
  //update
  const setUpdate = e => {
    const newTodo = [...todos];
    const index = newTodo.findIndex (task => task.id === id);
    if (input !== '') {
      newTodo[index].text = input;
    }
    setTodos (newTodo);
  };
  const completeHandler = () => {
    setTodos (
      todos.map (item => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <div>
        <li className=" flex justify-between mb-3 h-8 w-auto  font-semibold text-gray-500 rounded  bg-white border  mx-2.5">
          <button
            onClick={() => {
              btnColor === 'text-gray' ? setBtnColor ('text-red-600') : setBtnColor ('text-gray');
            }}
            className={` ${btnColor}  m-1`}
          >
            <i className='fa-regular fa-circle-check  '></i>
          </button>
          {text}
          <button
            onClick={() => setHide (!hide)}
            className={`w-8 h-6 text-gray-400 border-solid border-1 border rounded m-1`}
            type=""
          >
            <i className="fa-solid fa-ellipsis-vertical" />
          </button>
        </li>
      </div>

      {hide &&
        <div className="md:w-72 md:h-20 md:ml-40 rounded bg-white h-auto w-82 m-3">
          <input
            value={input}
            onChange={e => setInput (e.target.value)}
            className="font-semibold font-sans appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
          />

          <div className="md:mt-10 flex justify-end h-9 bg-gray-200">
            <button
              onClick={deleteHandler}
              className="mr-24 text-gray font-semibold h-7 pt-1"
              type=""
            >
              delete
            </button>
            <button
              onClick={() => setHide (!hide)}
              className=" text-gray  font-semibold h-7 pt-1 px-4"
              type="reset"
            >
              Cancel
            </button>
            <button
              onClick={e => {
                setUpdate (e);
                setHide (!hide);
              }}
              className="shadow bg-gray-400  text-white font-semibold h-7 pb-1 mr-1  mt-1 rounded"
              type="submit"
            >
              Update
            </button>
          </div>
        </div>}
    </div>
  );
};

export default Task;
