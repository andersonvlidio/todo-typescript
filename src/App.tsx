import { useEffect, useState } from "react";
import InputAddComponent from "./components/InputAddComponent";
import ToDoListComponent from "./components/ToDoListComponent";

export interface ToDo {
  id: number;
  name: string;
  done: boolean;
  date: Date;
}

function App() {
  const [toDoList, setToDoList] = useState<ToDo[]>(
    localStorage.getItem("toDoList")
      ? JSON.parse(localStorage.getItem("toDoList") || "[]")
      : []
  );
  const [name, setName] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  const handleOnChangeTaskName = (taskName: string) => {
    setName(taskName);
  };

  const handleClickAddButton = () => {
    if(editId){
      const newToDoList = toDoList.map((toDo) => {
        if (toDo.id === editId) {
          return { ...toDo, name };
        }
        return toDo;
      })
      setToDoList(newToDoList)
      setEditId(null)

    }else{
      setToDoList([
        ...toDoList,
        { id: Math.random(), name, done: false, date: new Date() },
      ]);
    }
    setName("")
  };

  const handleClickDeleteButton = (id: number) => {
    setToDoList(toDoList.filter((toDo) => toDo.id !== id));
  };

  const handleClickDoneButton = (id: number) => {
    const newToDoList = toDoList.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, done: !toDo.done };
      }
      return toDo;
    })
    setToDoList(newToDoList);
  };

  const handleClickEditButton = (id: number) => {
    setEditId(id);
    const oldName = toDoList.find(item => item.id === id)?.name

    if (oldName) {
      setName(oldName)
    }
  }

  return (
    <div className="App">
      <InputAddComponent
        onChangeTaskName={handleOnChangeTaskName}
        onClickAdd={handleClickAddButton}
        buttonName= {editId ? "Atualizar" : "Adicionar"}
        placeholder="Nome da terefa"
        name={name}
      />
      <ToDoListComponent
        toDoList={toDoList}
        onClickDelete={handleClickDeleteButton}
        onClickDone={handleClickDoneButton}
        onClickEdit={handleClickEditButton}
      />
    </div>
  );
}

export default App;
