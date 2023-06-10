import "./App.css";
import searchData from "./data/Data.jsx";
import SearchBar from "./components/component/SearchBar";
// import UserForm from "./components/UserForm";

function App() {
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
    </div>
  );
}

export default App;
