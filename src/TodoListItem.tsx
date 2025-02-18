import { TasksType } from "./App";

type TodoListItemPropsType = {
  title: string;
  tasks: TasksType[];
  date?: string;
};

export const TodoListItem = ({ title, tasks, date }: TodoListItemPropsType) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {tasks.map((t) => {
          return (
            <li>
              <input type="checkbox" checked={t.isDone} />{" "}
              <span>{t.title}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div>{date ? `Creation date: ${date}` : ""}</div>
    </div>
  );
};
