import "./App.css";
import searchData from "./data/Data.jsx";
import SearchBar from "./components/component/SearchBar";
import Modal from "./components/Modal/Modal.jsx";
import { useState } from "react";
// import UserForm from "./components/UserForm";

function App() {
  const [openModal, setOpenModal] = useState(false);

   const openModalClick = () =>{
    setOpenModal(true)
   }
  return (
    <div className="App">
      {/* custom hook - example 1 */}
      {/* <DocTitleOne />
      <DocTileTwo /> */}

      {/* custom hook - example 2 */}
      {/* <CounterOne />
      <CounterTwo /> */}

      {/* example 3 */}
      {/* <UserForm /> */}
      <SearchBar placeholder={"Enter a book name"} data={searchData} />
      <button onClick={openModalClick}>Open Model</button>

      {openModal && <Modal open={setOpenModal}/>}
    </div>
  );
}

export default App;
