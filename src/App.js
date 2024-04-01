import './App.css';
import Sidebar from "./components/Sidebar";

import Main from "./components/Main";

function App() {
  return (
    <div className="App font-spartan lg:flex bg-extend-11 h-screen">
      <Sidebar/>
        <main className={'flex-1 flex lg:px-[252px] lg:mt-[12px]'}>
          <Main/>
        </main>
    </div>
  );
}

export default App;
