/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode, useEffect, useState } from 'react'

import { FormInstance } from 'antd/lib/form';
import './home.css'
import { Table, Radio, Divider } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

interface DataType {
    key: React.Key;
    icon:string;
    name: string;
    age: number;
    address: string;
    value: any;
  }
const columns:any = [
    {
      title: 'Name',
      dataIndex: 'name',
  
    },
    {
      title: 'Volume',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
      title: ' 24h % ',
      dataIndex: 'address',
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
        title: '7d %',
        dataIndex: 'address',
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
      },
      {
        title: 'Floor Price',
        dataIndex: 'address',
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
      },
      {
        title: 'Owners',
        dataIndex: 'address',
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
      },
      {
        title: 'assets',
        dataIndex: 'address',
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
      },
  ];
  
  

  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];
export default function Home() {
    const [listData, setListData] = useState([])
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [alignment, setAlignment] = useState(1)
    const [count, setCount] = useState(5)

    function onChange(pagination: any, filters: any, sorter: any, extra: any) {
        console.log('params', pagination, filters, sorter, extra);
      }
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
    <div className='home_box'>
        <h2>Trending Collections</h2>
        <div className='home_button'>
           <div>
           <span>Pwiod:</span>
           <Dropdown overlay={menu} trigger={['click']} className='button_onclick'>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Click me <DownOutlined />
              </a>
           </Dropdown>
           </div>
           <div>
           <span>Token:</span>
           <Dropdown overlay={menu} trigger={['click']} className='button_onclick'>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Click me <DownOutlined />
              </a>
           </Dropdown>
           </div>
        </div>
        <div>
            <Table
            onChange={onChange}
              columns={columns}
              dataSource={data}
             />
         </div>
     </div>
    )
}


