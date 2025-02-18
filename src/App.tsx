import "./App.css";
import { TodoListItem } from "./TodoListItem";

export type TasksType = {
  id: number;
  title: string;
  isDone: boolean;
};

const Tasks1 = [
  { id: 1, title: "HTML&CSS", isDone: true },
  { id: 2, title: "JS", isDone: true },
  { id: 3, title: "React", isDone: false },
];
const Tasks2 = [
  { id: 1, title: "Oh, my Niga!", isDone: true },
  { id: 2, title: "Suck My Disk", isDone: true },
  { id: 3, title: "Lick my ass", isDone: false },
];

export const App = () => {
  return (
    <div className="app">
      <TodoListItem title="What to learn" tasks={Tasks1} />
      <TodoListItem title="Songs" tasks={Tasks2} />
      {/* <TodoListItem title="Books"/> */}
    </div>
  );
};
