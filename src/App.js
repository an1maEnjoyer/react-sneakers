import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer></Drawer>
      <Header></Header>
      <div className='content p-40'>
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            <input placeholder='Поиск...'></input>
          </div>
        </div>
        <div className='d-flex'>
          <Card></Card>

        </div>
      </div>
    </div>
  );
}

export default App;
