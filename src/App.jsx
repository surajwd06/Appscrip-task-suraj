import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import TopNav from "./components/header/Logo_header";
import DiscoverProducts from "./components/discover/DiscoverProduct";
import FilterSection from "./components/products/filterSection/FilterSection";
import ProductList from "./components/products/productSection/ProductList";
import Footer from "./components/footer/Footer";
import FilterNav from "./components/products/filternav/FilterNav";
import axios from "axios";

const App = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFilterItem,setShowFilterItem]=useState(false)
  const showfilter = () => {
    setShowFilter(!showFilter);
    setShowFilterItem(!showFilterItem)
  };
 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  const filterHighToLow = () => {
    const filteredProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(filteredProducts);
  };

  const filterLowToHigh = () => {
    const filteredProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(filteredProducts);
  };
  return (
    <>
      <TopNav />  
      <Header />
      <DiscoverProducts />
      <FilterNav showfilter={showfilter} showFilter={showFilter} filterHighToLow={filterHighToLow} filterLowToHigh={filterLowToHigh} showFilterItem={showFilterItem}/>
      <main >
        <FilterSection showFilter={showFilter} />
        <ProductList showFilter={showFilter} products={products} setProducts={setProducts} loading={loading}  error={error}/>
      </main>
      <Footer />
      
    </>
  );
};

export default App;
