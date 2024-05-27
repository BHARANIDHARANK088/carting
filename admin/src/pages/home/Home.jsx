import React, { useEffect, useState, useMemo } from 'react';
import "./home.css";

import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart.jsx';
import {userData} from "../../dummyData.js";
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';

// 42
import { getStats } from '../../apiRequest/userRequest.js';

const Home = () => {
  // 43
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getUserStats = async () => {
      try {
        const response = await getStats();
        // console.log(response);
        const statsList = response.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    }
    getUserStats();
  }, [MONTHS])
 
  return (
    <div className="home">
      <FeaturedInfo></FeaturedInfo>
      {/* 44 data = {userStats} */}
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
          <WidgetSm></WidgetSm>
          <WidgetLg></WidgetLg>
      </div>
    </div>
  )
}

export default Home;