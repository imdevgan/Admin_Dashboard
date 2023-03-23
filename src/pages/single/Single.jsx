import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table.'

import my from './my.jpg'
const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>

        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
            <img
                src={my}
                alt=""
                className="itemImg"
              />
               <div className="details">
                <h1 className="itemTitle">Ragnar</h1>
                <div className="detailItem">
                <span className="itemKey">Email:</span>
                  <span className="itemValue">xyz@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                   Amritsar
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
               </div>
            </div>
           
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending (Last 6 months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transaction</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single