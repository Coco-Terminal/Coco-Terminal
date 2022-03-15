/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./index.css";
import { Menu, Dropdown, Table, Space, Tag } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import Firstecharts from "../../compoment/firstEcharts/Firstecharts";
import Seconecharts from "../../compoment/seconecharts";
import Roundecharts from "../../compoment/roundEcharts/Roundecharts";
export default function Collection() {
  const { SubMenu } = Menu;

  const menu = (
    <Menu>
      <Menu.ItemGroup title="Group title">
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
      </Menu.ItemGroup>
      <SubMenu title="sub menu">
        <Menu.Item>3rd menu item</Menu.Item>
        <Menu.Item>4th menu item</Menu.Item>
      </SubMenu>
      <SubMenu title="disabled sub menu" disabled>
        <Menu.Item>5d menu item</Menu.Item>
        <Menu.Item>6th menu item</Menu.Item>
      </SubMenu>
    </Menu>
  );
  const BNB = (
    <Menu>
      <Menu.ItemGroup title="Group title">
        <Menu.Item>7777</Menu.Item>
        <Menu.Item>menu item</Menu.Item>
      </Menu.ItemGroup>
      <SubMenu title="sub menu">
        <Menu.Item>3rd menu item</Menu.Item>
        <Menu.Item>4th menu item</Menu.Item>
      </SubMenu>
      <SubMenu title="disabled sub menu" disabled>
        <Menu.Item>5d menu item</Menu.Item>
        <Menu.Item>6th menu item</Menu.Item>
      </SubMenu>
    </Menu>
  );
  const Total = [
    {
      key: "1",
      title: "Total spent",
      Nft: "000.000",
      time: " 000-00-00 ",

      hour: "00:00:00",
    },
    {
      key: "2",
      title: "Total spent",
      Nft: "000.000",
      time: " 000-00-00 ",

      hour: "00:00:00",
    },
    {
      key: "3",
      title: "Total spent",
      Nft: "000.000",
      time: " 000-00-00 ",

      hour: "00:00:00",
    },
    {
      key: "4",
      title: "Total spent",
      Nft: "000.000",
      time: " 000-00-00 ",

      hour: "00:00:00",
    },
    {
      key: "5",
      title: "Total spent",
      Nft: "000.000",
      time: " 000-00-00 ",

      hour: "00:00:00",
    },
    {
      key: "6",
      title: "Total spent",
      Nft: "000.000",
      time: " 000-00-00 ",

      hour: "00:00:00",
    },
    {
      key: "7",
      title: "Total spent",
      Nft: "000.000",
      time: " 000-00-00 ",

      hour: "00:00:00",
    },
  ];
  const data = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 1,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 2,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 3,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
        key: "4",
        firstName: "Joe",
        lastName: "Black",
        age: 4,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "5",
        firstName: "Joe",
        lastName: "Black",
        age: 5,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "6",
        firstName: "Joe",
        lastName: "Black",
        age: 6,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "7",
        firstName: "Joe",
        lastName: "Black",
        age: 7,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "8",
        firstName: "Joe",
        lastName: "Black",
        age: 8,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "9",
        firstName: "Joe",
        lastName: "Black",
        age: 9,
        address: "0000000",
        tags: '000',
      },
      {
        key: "10",
        firstName: "Joe",
        lastName: "00000",
        age: 10,
        address: "00000k",
        tags:'0000-000',
      },
  ];
  const listdata = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: '00000000000000000000000000',
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: '00000000000000000000000000',
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: '00000000000000000000000000',
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
        key: "4",
        firstName: "Joe",
        lastName: "Black",
        age: '00000000000000000000000000',
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "5",
        firstName: "Joe",
        lastName: "Black",
        age: '00000000000000000000000000',
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "6",
        firstName: "Joe",
        lastName: "Black",
        age: '00000000000000000000000000',
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "7",
        firstName: "Joe",
        lastName: "Black",
        age: '00000000000000000000000000',
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "8",
        firstName: "Joe",
        lastName: "Black",
        age: '00000000000000000000000000',
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "9",
        firstName: "Joe",
        lastName: "Black",
        age: '00000000000000000000000000',
        address: "0000000",
        tags: '000',
      },
      
  ];

  return (
    <>
      <div className="collection">
        <h1 className="collection_h1">NFT COLLECTION NAME</h1>
        <div className="collection_total_box">
          <div className="collection_total_dropdown_box">
            <span className="collection_total_dropdown_box_span">Period:</span>
            <Dropdown overlay={menu} className="collectionDropdown">
              <a
                className="ant_dropdown_link"
                onClick={(e) => e.preventDefault()}
              >
                1 Hour <DownOutlined />
              </a>
            </Dropdown>

            <span className="collection_total_dropdown_box_span">token::</span>
            <Dropdown overlay={BNB} className="collectionDropdown">
              <a
                className="ant_dropdown_link"
                onClick={(e) => e.preventDefault()}
              >
                BNB <DownOutlined />
              </a>
            </Dropdown>
          </div>
          <div className="collection_total_max">
            {Total.map((itme) => {
              return (
                <div key={itme.key} className="collection_max_box">
                  <h1 className="collection_max_box_h1">{itme.title}</h1>
                  <div className="collection_max_box_div">{itme.Nft}</div>
                  <div className="collection_max_box_time">
                    Last update:{itme.time} at {itme.hour}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="collection_top">
          <h1 className="collection_top_h1">Top 10 NFT Collection Sales</h1>
          <div className="collection_top_table">
            <Table dataSource={data}>
              <Column title="Ranking" dataIndex="age" key="age" />
              <Column title="NFT id" dataIndex="tags" key="tags" />
              <Column title="Use Case" dataIndex="tags" key="tags" />
              <Column title="Sale Amount" dataIndex="tags" key="tags" />
              <Column title="USD" dataIndex="tags" key="" />
           
              <Column title="Time" dataIndex="tags" key="tags" />
            </Table>
            
          </div>
        </div>
        <div className="collection_ovlume">
             <Firstecharts/>
        </div>
        <div className="collection_Seconecharts">
            <Seconecharts/>
        </div>
        <div className="collection_frequently">
            <h1 className="collection_frequently_h1">
            Top 10 Frequently Traded
            </h1>
            <div>
            <Table dataSource={data}>
              <Column title="Ranking" dataIndex="age" key="age" />
              <Column title="NFT id" dataIndex="tags" key="tags" />
              <Column title="Number of Trades" dataIndex="tags" key="tags" />
              <Column title="Volumet" dataIndex="tags" key="tags" />
              <Column title="USD Volume" dataIndex="tags" key="" />
            </Table>
            </div>
        </div>
        <div className="collection_end">
                <Roundecharts/>
        </div>
        <div className="collection_footer">
           <h1 className="collection_footer_h1">
           NFT Collection Whales
           </h1>
           <div>
           <Table dataSource={listdata}>
              <Column title="Owner" dataIndex="age" key="age" />
              <Column title="Last xfer" dataIndex="tags" key="tags" />
              <Column title="NFT’s owned" dataIndex="tags" key="tags" />
              <Column title="NFT’s IDs" dataIndex="tags" key="tags" />
            </Table>
           </div>
        </div>
      </div>
    </>
  );
}
