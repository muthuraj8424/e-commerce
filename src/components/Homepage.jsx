import React, { useContext, useState } from "react";
import { data } from "../data";
import { useStatevalue } from "../Context&Reducer/StateContext";
import Homepageitems from "./Homepageitems";
function Homepage() {
  // const [{ basket }, dispatch] = useStatevalue();
  // const [isSearched, setIsSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    // if (searchQuery) {
    //   setIsSearched(true);
    // }
    // else{
    //   setIsSearched(false);
    // }
  };
  const filteredProducts = data.filter((product) => {
    // if (searchQuery) {
      // console.log(product.productName);
      return product.productName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    // } else {
    //   return [...data];
    // }
  });
  // console.log(filteredProducts);
  return (
    <div>
      
      <input
        type="text"
        onChange={handleChange}
        className="input-bar"
        placeholder="   search..."
        style={{ marginLeft: "400px" }}
      />
      <div className="product-container">
      {filteredProducts.map((product) => {
            return (
              <div key={product.id}>
                <Homepageitems
                  id={product.id}
                  name={product.productName}
                  img={product.img}
                  price={product.price}
                  rating={product.rating}
                />
              </div>
            );
            })}
        {/* {isSearched ? (
          <>
            {filteredProducts.map((product) => {
              return (
                <div key={product.id}>
                  <Homepageitems
                    id={product.id}
                    name={product.productName}
                    img={product.img}
                    price={product.price}
                    rating={product.rating}
                  />
                </div>
              );
            })}
          </>
        ) : (
          <>
            {data.map((product) => {
              return (
                <div key={product.id}>
                  <Homepageitems
                    id={product.id}
                    name={product.productName}
                    img={product.img}
                    price={product.price}
                    rating={product.rating}
                  />
                </div>
              );
            })}
          </> */}
        {/* )} */}

        {/* {!isSearched &&
          data.map((product) => {
            return (
              <div key={product.id}>
                <Homepageitems
                  id={product.id}
                  name={product.productName}
                  img={product.img}
                  price={product.price}
                  rating={product.rating}
                />
              </div>
            );
          })} */}
        {/* {isSearched &&
          // filteredProducts.map((product) => {
          //   return (
          //     <div key={product.id}>
          //       <Homepageitems
          //         id={product.id}
          //         name={product.productName}
          //         img={product.img}
          //         price={product.price}
          //         rating={product.rating}
          //       />
          //     </div>
          //   );
          // })} */}
      </div>
    </div>
  );
}

export default Homepage;
