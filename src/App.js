import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ListMovies from './components/ListMovies';
import AddTable from './components/AddTable';
import ShowTables from './components/ShowTables';
import ShowProducts from './components/ShowProducts'
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className='container'>
      <div className='marginTop'>
        <div className='row'>
          <ShowTables />
        </div>
      </div>
      <div className=''>
        <div className='row'>
          {/*<AddTable />*/}
        </div>
      </div>
      <div className='marginTop'>
        <div className='row'>
          {/*<ShowProducts />*/}
        </div>
      </div>
      <div className='marginTop'>
        <div className='row'>
          {/*<AddProduct />*/}
        </div>
      </div>
    </div>
  );
}

export default App;
