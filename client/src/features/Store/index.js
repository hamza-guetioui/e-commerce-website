import Categories from "./components/Categories"
import Filter from "./components/Filter"
import Adbar from "./components/Adbar"
import Products from "./components/Products"

export default function Store(){
    return (
      <>
        <Filter />
        <div className="grid grid-cols-12 gap-4 p-4">
          <Categories />
          <Products/>
          <Adbar />
        </div>
      </>
    );
  };
  
