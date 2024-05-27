import React, { useEffect, useState } from 'react';
import "./home.scss";

import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';

// 15
import { getLists } from '../../apiRequest/listRequest.js';

// 4 type props
const Home = ({type}) => {
  // 16
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null); 

  // 17
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const response = await getLists(type, genre);
        setLists(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getRandomLists();
  }, [type, genre]);

  console.log(lists);

  return (
    <div className="home">
      <Navbar></Navbar>
      {/* 5 send type to featured page */}
      <Featured type={type} setGenre={setGenre}></Featured>
      {/* <List></List>
      <List></List>
      <List></List>
      <List></List> */}

      {/* 18 */}
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  )
}

export default Home;