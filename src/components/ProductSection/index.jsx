import { useEffect, useState } from "react";
import { categories, productsArray } from "../../utils/DummyData";
import { ProductCard } from "../ProductCard";
import "./ProductSection.scss";

const ProductSection = ({ featuredProducts }) => {
  const [products, setProductsArray] = useState(productsArray);
  const filterByCategory = (category) => {
    let newProductsArray;
    if (category.target.value === "Select Category") {
      newProductsArray = productsArray;
    } else {
      newProductsArray = productsArray.filter(
        (product) => product.category === category.target.value.toLowerCase()
      );
    }
    setProductsArray(newProductsArray);
  };
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <>
      {featuredProducts ? <h1>Featured Products</h1> : <h1> Products</h1>}
      <div className="product-container">
        {featuredProducts ? (
          ""
        ) : (
          <div className="select-wrapper">
            <select
              className="select"
              onChange={filterByCategory}
              placeholder="Select category"
            >
              <option value="Select Category" selected>
                Select Category
              </option>
              {categories.map((category) => {
                return (
                  <option value={category.category}>{category.text}</option>
                );
              })}
            </select>
          </div>
        )}
        <div className="product-section-wrapper">
          {products.map((product) => {
            if (
              (featuredProducts && product.featuredProduct) ||
              !featuredProducts
            ) {
              return (
                <ProductCard
                  key={product.name}
                  product={product}
                  featuredProducts={featuredProducts}
                ></ProductCard>
              );
            } else return <></>;
          })}
        </div>
      </div>
    </>
  );
};
export { ProductSection };
