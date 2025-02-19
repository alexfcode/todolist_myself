import { ChangeEvent, KeyboardEvent, useState } from "react";
import { filterType, TasksType } from "./App";
import { Button } from "./Button";

type TodoListItemPropsType = {
  title: string;
  tasks: TasksType[];
  date?: string;
  deleteTask: (taskId: string) => void;
  changeFilter: (filterValue: filterType) => void;
  createTask: (title: string) => void;
  changeTaskStatus: (taskId: string, isDone: boolean) => void;
  filter: string;
};

export const TodoListItem = ({
  title,
  tasks,
  date,
  deleteTask,
  changeFilter,
  createTask,
  changeTaskStatus,
  filter,
  }: TodoListItemPropsType) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const createTaskHandler = () => {
    if (taskTitle.trim()) {
      createTask(taskTitle.trim());
    } else {
      setError("Title is empty!")
    }
    setTaskTitle("");
  };

  const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.currentTarget.value);
    setError(null)
  };

  const createTaskOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      createTaskHandler();
    }
  };

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
        className={error ? "error" : ""}
          value={taskTitle}
          onChange={changeTaskTitleHandler}
          onKeyDown={createTaskOnEnterHandler}
        />
        <Button title="+" onClick={createTaskHandler} />
        {error && <div className={"error-message"}>{error}</div>  }
      </div>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((t) => {
            const deleteTaskHandler = () => {
              deleteTask(t.id);
            };

            const changeTaskStatusHandler = (
              e: ChangeEvent<HTMLInputElement>
            ) => {
              const newStatusValue = e.currentTarget.checked;
              changeTaskStatus(t.id, newStatusValue);
            };

            return (
              <li key={t.id} className={t.isDone ? "is-done" : ""}>
                <Button title="x" onClick={deleteTaskHandler} />
                <input
                  type="checkbox"
                  checked={t.isDone}
                  onChange={changeTaskStatusHandler}
                />{" "}
                <span>{t.title}</span>
              </li>
            );
          })
        ) : (
          <p>Тасок нет</p>
        )}
      </ul>
      <div>
        <Button className={filter === 'all' ? 'active-filter' : ""} title="All" onClick={() => changeFilter("all")} />
        <Button className={filter === 'active' ? 'active-filter' : ""} title="Active" onClick={() => changeFilter("active")} />
        <Button className={filter === 'complete' ? 'active-filter' : ""} title="Completed" onClick={() => changeFilter("complete")} />
      </div>
      <div>{date ? `Creation date: ${date}` : ""}</div>
    </div>
  );
};
