import { useRef } from "react";
import { filterType, TasksType } from "./App";
import { Button } from "./Button";

type TodoListItemPropsType = {
  title: string;
  tasks: TasksType[];
  date?: string;
  deleteTask: (taskId: string) => void;
  changeFilter: (filterValue: filterType) => void;
  createTask: (title: string) => void
};

export const TodoListItem = ({
  title,
  tasks,
  date,
  deleteTask,
  changeFilter,
  createTask,
}: TodoListItemPropsType) => {

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input ref={inputRef}/>
        <Button title="+" onClick={() => {
          if (inputRef.current) {
            createTask(inputRef.current.value)
            inputRef.current.value=''
          }
        }}/>
      </div>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((t) => {
            return (
              <li key={t.id}>
                <Button title="x" onClick={() => deleteTask(t.id)} />
                <input type="checkbox" checked={t.isDone} />{" "}
                <span>{t.title}</span>
              </li>
            );
          })
        ) : (
          <p>Тасок нет</p>
        )}
      </ul>
      <div>
        <Button title="All" onClick={() => changeFilter("all")} />
        <Button title="Active" onClick={() => changeFilter("active")} />
        <Button title="Completed" onClick={() => changeFilter("complete")} />
      </div>
      <div>{date ? `Creation date: ${date}` : ""}</div>
    </div>
  );
};
