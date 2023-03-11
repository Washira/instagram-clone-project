import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import './App.css';
import Navbar from "./components/Navbar";

//Add all icons to the library so you can use it in your page
library.add(fas, far);

function App() {
  return (
    <Navbar />
  );
}

export default App;
