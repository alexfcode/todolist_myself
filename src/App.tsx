import { useState } from "react";
import "./App.css";
import { TodoListItem } from "./TodoListItem";

export type TasksType = {
  id: number;
  title: string;
  isDone: boolean;
};

export const App = () => {

type filterType = "all" | "active" | "complete"

const [filter, setFilter] = useState<filterType>("all")

  const [tasks, setTasks] = useState<TasksType[]>([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ]);

  const deleteTask = (tasksId: number) => {
    const filteredTasks = tasks.filter((t) => t.id !== tasksId);
    setTasks(filteredTasks);
  };

const changeFilter = (filterValue: filterType) => {
  setFilter(filterValue)
}

  let filteredTasks = tasks
  if (filter === "active") {
    filteredTasks = tasks.filter((t) => !t.isDone);
  }
  if (filter === "complete") {
    filteredTasks = tasks.filter((t) => t.isDone)
  }

    return (
    <div className="app">
      <TodoListItem
        title="What to learn"
        tasks={filteredTasks}
        deleteTask={deleteTask}
        changeFilter={changeFilter}
      />
    </div>
  );
};
