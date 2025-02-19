import { useState } from "react";
import "./App.css";
import { TodoListItem } from "./TodoListItem";
import { v1 } from "uuid";

export type TasksType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type filterType = "all" | "active" | "complete";

export const App = () => {
  const [filter, setFilter] = useState<filterType>("all");

  const [tasks, setTasks] = useState<TasksType[]>([
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: false },
  ]);

  const createTask = (title: string) => {
    const newTask = {
      id: v1(),
      title,
      isDone: false,
    };
    const newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  };

  const deleteTask = (tasksId: string) => {
    const filteredTasks = tasks.filter((t) => t.id !== tasksId);
    setTasks(filteredTasks);
  };

  const changeFilter = (filterValue: filterType) => {
    setFilter(filterValue);
  };

  const changeTaskStatus = (taskId: string, isDone: boolean) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      task.isDone = isDone;
      setTasks([...tasks]);
    }
  };

  let filteredTasks = tasks;
  if (filter === "active") {
    filteredTasks = tasks.filter((t) => !t.isDone);
  }
  if (filter === "complete") {
    filteredTasks = tasks.filter((t) => t.isDone);
  }

  return (
    <div className="app">
      <TodoListItem
        title="What to learn"
        tasks={filteredTasks}
        deleteTask={deleteTask}
        changeFilter={changeFilter}
        createTask={createTask}
        changeTaskStatus={changeTaskStatus}
      />
    </div>
  );
};
