import NavBar from './components/navBar/NavBar';
import ProductList from './components/productList/ProductList';

import './style/style.sass';


const App = () => {
  return (
    <>
    <NavBar />
      <div className='container'>
        <ProductList />
      </div>
    </>
  );
}

export default App;