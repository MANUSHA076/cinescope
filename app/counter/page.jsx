"use client";
import Profile from "./profile"
import React, { useState,useEffect } from "react";
import { Component } from "react";

// Old Method
// Define a class component that extends React.Component or React.PureComponent
// class Counter extends Component {
//   // Define constructor if necessary
//   constructor(props) {
//     super(props);
//     // Initialize state if needed
//     this.state = {
//       count: 0,
//     };
//   }

//   // Define lifecycle methods if necessary
//   componentDidMount() {
//     // Code to run after the component is mounted
//     console.log("Component Mounted !");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // Check if the data has changed
//     if (prevState.count !== this.state.count) {
//       // Data has changed, perform additional actions
//       console.log("Count has been updated:", this.state.count);
//     }
//   }

//   // Define instance methods if necessary
//   handleClick = () => {
//     // Update state or perform other logic
//     this.setState({ count: this.state.count + 1 });
//   };

  // Define render() method to return JSX

export default function Counter() {
  
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(23);
  const [todos, setTodos] = useState(() => createTodos());
  console.log({ name, age, todos });

  function createTodos() {
    return ["shalani", "Manusha"];

  }
  function handleClick() {
    
    setAge(32);
    setTodos( ["miyurangana", "Thiwankar"] );
  
    setCount(count -1);

  }

  //initial render/re-render
  //useeffect with  no dependency
  useEffect(() => {
    
    console.log("userEffect triggered 1");

  });

  //useEffect with empty dependency array
  //usage:only run on Initial render ekedi witharai
  useEffect(() => {
    
    console.log("userEffect triggered 2");

  }, []);

  //useEffect with empty dependency array
  //usage :Componen props update
  useEffect(() => {
    
    console.log("userEffect triggered 3",{count,age,todos});

  }, [count,age,todos]);
  


  return (
      
 
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <p>Count:{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="border border-primary py-1 px-2 text-sm rounded-2xl"
      >
        Increment
      </button>
      <Profile />
      <div className="bg-primary rounded p-6">
        <h1 className="p-4 gap-0.5 text-yellow-100 font-bold text-lg">Update Hook:</h1>
          <ul className="text-amber-300 p-2">
          <li>Age:{age}</li>
          <li>count:{count}</li>
          
            <li>todos : {todos.join(",")}</li>
          </ul>
        <button onClick={handleClick} className="cursor-pointer bg-blue-400 rounded p-2 mt-2 px-4 text-sm"> Update Now
            
          </button>
        

      </div>
    </div>
  );
  
}

//export default Counter;