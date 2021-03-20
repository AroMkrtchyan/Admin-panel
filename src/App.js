
import './App.css';
import TopBlock from "./components/top-block/top-block";
import LeftBlock from "./components/left-block/left-block";
import RightBlock from "./components/right-block/right-block";
import BottomBlock from "./components/bottom-block/bottom-block";
import Content from "./components/content/content";

function App() {
  return (
    <div className="App">
      <TopBlock />
      <LeftBlock />
      <RightBlock />
      <BottomBlock />

      <Content />
    </div>
  );
}

export default App;
