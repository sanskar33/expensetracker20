import React from "react";
import {  Dropdown, Menu } from "antd";
import "../resources/default-layout.css";
import { useNavigate } from "react-router-dom";
const DefaultLayout = (props) => {
  const user = JSON.parse(localStorage.getItem("expensetracker-sanskar-user"));
  const navigate = useNavigate()
  const menu = (
    <Menu
      items={[
        {
          label: (
           <li onClick={()=>{
           localStorage.removeItem('expensetracker-sanskar-user')
           navigate("/login");
}}>Logout</li>
          ),
        }
      
      ]}
    />
  );
  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="logo">EXPENSE TRACKER</h1>
        </div>
        <div>
          <Dropdown overlay={menu} placement="bottomLeft">
            <button className='primary'>{user.name}</button>
          </Dropdown>
        </div>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
