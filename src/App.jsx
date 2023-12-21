import About from "./components/about/About";
import Headers from "./components/header/Header";
import Hero from "./components/hero/hero";
import List from "./components/list/List";
import Work from "./components/work/Work";

const App = () => {
  return (
    <>
      <header>
        <Headers />
      </header>
      <main>
        <Hero/>
        <List/>
        <Work/>
        <About/>
      </main>
    </>
  );
};

export default App;
