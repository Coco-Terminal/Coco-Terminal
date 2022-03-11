/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import "./css/topherder.css";
import { BellFilled } from "@ant-design/icons";
import { Input, Button } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Badge } from 'antd';


import {
  CopyOutlined,
  MenuOutlined,
  ThunderboltOutlined,
  BellOutlined 
  
} from "@ant-design/icons";
import logoImg from "../../../assets/logo.png";
export default function TopHeader() {
  const text = [
    {
      key: "1",
      icon: <ThunderboltOutlined />,
      text: "00.00",
    },
    {
      key: "2",
      icon: <MenuOutlined />,
      text: "00.00",
    },
  ];
  const add = '0x1A9...EFb4'
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <div className="Topherder">
    
      <div className="herder_input">
        <Input.Group compact style={{ borderRadius: "0.5rem" }}>
          <Input.Search allowClear style={{ width: "100%" }} />
        </Input.Group>
      </div>

      <div className="herder_button">
        <Button type="primary" block>
          Primary
        </Button>
      </div>
      <div className="herder_waller">
        <div className="herder_waller_box">
          {text.map((itme) => {
            return (
              <p key={itme.key}>
                <span>{itme.icon}</span> {itme.text}
              </p>
            );
          })}
        </div>
      </div>
      <div className="herder_waller_fee">
        <span className="herder_waller_fee_span">
          <Avatar size={44} icon={<UserOutlined />} />
        </span>
        <div className="herder_waller_fee_div">
        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link" 
          style={{color:'black',display:'block'}} 
          onClick={(e) => e.preventDefault()
          }>
              Vitalik Buterin <DownOutlined />
          </a>
        </Dropdown>
         <div>
            <p>{add}</p>
            <CopyOutlined />
         </div>
       </div>
      </div>
      <div className="herder_icon">
      <Badge dot showZero>
          < BellOutlined  shape="square" sizes="large" />
       </Badge>
      </div>
    </div>
  );
}
