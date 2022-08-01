import React from "react";
import Product from "../../components/Product";
import { useGetProductsByNameQuery } from "../../features/productsApi";

const Home = () => {
  const { data, error, isLoading } = useGetProductsByNameQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(data);
  return (
    <div className="container">
      <div className="row">
        {data.map((item) => {
          return <Product item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
