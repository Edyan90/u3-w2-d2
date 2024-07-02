import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";
/* import AllTheBooks from "./Components/AllTheBooks"; */
import BookList from "./Components/BookList";

function App() {
  return (
    <div>
      <header>
        <MyNav />
      </header>
      <main>
        <Welcome></Welcome>
        {/* <AllTheBooks /> */}
        <BookList />
      </main>
      <MyFooter />
    </div>
  );
}

export default App;
