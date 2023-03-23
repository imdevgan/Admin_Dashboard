import React from "react";
import "./home.scss";
import SideBar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widget/Widgets";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table.";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earnings" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 months(Revenue)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Tranasaction</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
