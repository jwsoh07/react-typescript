import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";
import { useFetch } from "usehooks-ts";
const url = `http://jsonplaceholder.typicode.com/posts`;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const { data, error } = useFetch<Post[]>(url);
  if (error) return <p>There is an error.</p>
  if (!data) return <p>Loading...</p>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
