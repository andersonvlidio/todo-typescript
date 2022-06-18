import InputAdd from "./components/InputAdd";



function App() {

  const handleClickAddButton = (taskName: string) => {
    console.log(taskName);
  }
  return (
    <div className="App">
      <InputAdd onClickAdd={handleClickAddButton} buttonName="adicionar" placeholder="Nome da terefa"/>
    </div>
  );
}

export default App;
