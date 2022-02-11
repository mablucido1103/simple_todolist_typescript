import React from "react";
import Head from "next/head";
import { useState, ChangeEvent } from "react";
import HTMLInputElement from "react";

type TodoItem = {
  id: string;
  status: boolean;
  content: string;
};

const Todolist = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todoInputs, setTodoInputs] = useState<TodoItem[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setTodoInput(event.target.value);
  };

  const addTodoItem = () => {
    const todoItem = {
      id: new Date().getTime().toString(),
      status: false,
      content: todoInput,
    };
    setTodoInputs([...todoInputs].concat(todoItem));
    setTodoInput("");
  };

  function deleteTodoItem(id: any) {
    const updatedTodoItem = [...todoInputs].filter(
      (todoInput) => todoInput.id !== id
    );

    setTodoInputs(updatedTodoItem);
  }

  const toggleComplete = (id: any) => {
    const updatedTodoItem = [...todoInputs].map((todoInput) => {
      if (todoInput.id === id) {
        todoInput.status = !todoInput.status;
      }
      return todoInput;
    });
    setTodoInputs(updatedTodoItem);
  };

  const finishedTodoItem = (id: any) => {};
  return (
    <div>
      <Head>
        <title>Todo list</title>
      </Head>

      <main>
        <h1>Todo</h1>

        <input
          type="text"
          onChange={handleChange}
          value={todoInput}
          placeholder="Add your todo"
        />
        <button type="submit" onClick={addTodoItem}>
          Add Todo
        </button>
        {todoInputs.map((todoInput) => (
          <div key={todoInput.id}>
            <div>
              <input
                type="checkbox"
                onChange={() => toggleComplete(todoInput.id)}
                checked={todoInput.status}
              />
              {todoInput.content}
              <button onClick={() => deleteTodoItem(todoInput.id)}>
                Delete
              </button>
              {todoInput.status}
            </div>
          </div>
        ))}
        <div>
          <h3>Finished Todos</h3>
          {todoInputs.map((todoInput, id) => {
            return (
              <div key={id}>
                {todoInput.status === true && (
                  <ul>
                    <li>{todoInput.content}</li>
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Todolist;
