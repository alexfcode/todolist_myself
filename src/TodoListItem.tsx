import { filterType, TasksType } from "./App";
import { Button } from "./Button";


type TodoListItemPropsType = {
  title: string;
  tasks: TasksType[];
  date?: string;
  deleteTask: (taskId: string) => void;
  changeFilter: (filterValue: filterType) => void;
  createTask: () => void
};

export const TodoListItem = ({
  title,
  tasks,
  date,
  deleteTask,
  changeFilter,
  createTask,
}: TodoListItemPropsType) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button title="+" onClick={createTask}/>
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
