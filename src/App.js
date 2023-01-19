import React from 'react';
import AddTodo from './components/todoPages/AddTodo';
import ToDos from './components/todoPages/ToDos';
import UpdateTodo from './components/todoPages/UpdateTodo';

function App() {


  return (<>
    <AddTodo />
    <ToDos />
    <hr></hr>
    <UpdateTodo/>
  </>
  )
}

export default App