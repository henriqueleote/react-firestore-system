import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ListMovies from './components/ListMovies';
import AddTable from './components/AddTable';
import RealTimeList from './components/RealTimeList';

function App() {
  return (
    <div className='container marginTop'>
      <RealTimeList />
      <div className='marginTop'>
        <div className='row'>
          <AddTable />
        </div>
      </div>
    </div>
  );
}

export default App;
