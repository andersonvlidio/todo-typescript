import { FC } from "react";
import { ToDo } from "../App";
import ToDoListRowComponent from "./ToDoListRowComponent";

interface ToDoListComponentProps {
  toDoList: ToDo[];
  onClickDelete: (id: number) => void;
  onClickDone: (id: number) => void;
  onClickEdit: (id: number) => void;
}

const ToDoListComponent: FC<ToDoListComponentProps> = (props): JSX.Element => {
  const { toDoList, onClickDelete, onClickDone, onClickEdit } = props;
  return (
    <div>
      {toDoList.map((toDo) => {
        return (
          <ToDoListRowComponent
            key={toDo.id}
            toDoItem={toDo}
            onClickDelete={onClickDelete}
            onClickDone={onClickDone}
            onClickEdit={onClickEdit}
          />
        );
      })}
    </div>
  );
};

export default ToDoListComponent;
