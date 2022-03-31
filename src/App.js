import './App.css';
import './bootstrap.min.css';
//import ListMovies from './components/ListMovies';
import AddTable from './components/AddTable';
import RealTimeList from './components/RealTimeList';

function App() {
  return (
    <div className="App">
      <div className='container marginTop'>
        {/* <ListMovies /> */}
        <RealTimeList />
        <div className='marginTop'>
          <div className='row'>
          <AddTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
