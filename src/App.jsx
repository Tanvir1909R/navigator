import Headers from "./components/header/Header";
import Hero from "./components/hero/hero";
import List from "./components/list/List";

const App = () => {
  return (
    <>
      <header>
        <Headers />
      </header>
      <main>
        <Hero/>
        <List/>
      </main>
    </>
  );
};

export default App;
