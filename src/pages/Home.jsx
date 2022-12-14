import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "../components/Item";
import LoadingProduct from "../components/LoadingProduct";
import ShowItem from "../components/ShowItem";
import ProductContext from "../context/Context";

const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  let componentMounted = true;

  const getProducts = async () => {
    setLoading(true);
    const res = await axios.get("https://fakestoreapi.com/products/");
    setData(res.data);
    const wait = await setLoading(false);
    return () => {
      componentMounted = false;
    };
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="md:px-10 px-2 bg-[#eeeeee]">
      {loading ? <LoadingProduct /> : <ShowItem data={data} />}
    </div>
  );
};

export default Home;
