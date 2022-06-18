import { FC } from "react";
import { ToDo } from "../App";

interface ToDoListRowComponentProps {
  toDoItem: ToDo;
  onClickDelete: (id: number) => void;
  onClickDone: (id: number) => void;
  onClickEdit: (id: number) => void;
}
const ToDoListRowComponent: FC<ToDoListRowComponentProps> = (
  props
): JSX.Element => {
  const { toDoItem, onClickDelete, onClickDone, onClickEdit } = props;
  const { id, name, done, date } = toDoItem;
  return (
    <div>
      <input
        onChange={(e) => onClickDone(id)}
        checked={done}
        type="checkbox"
        name="done"
        id={"done-" + id}
      />
      <span>{done ? <s>{name}</s> : name}</span>
      <span onClick={() => onClickDelete(id)}>X</span>
      <span onClick={() => onClickEdit(id)}>EDITAR</span>
    </div>
  );
};

export default ToDoListRowComponent;
