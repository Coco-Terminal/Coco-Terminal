/* eslint-disable array-callback-return */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './date.css/index.css'
import DateTime from './Date/DateTime';
import { Button } from 'antd';
import Date_text from './Date2/Date_text';
export default function Nopermission() {
    function onPanelChange(value: any, mode: any) {
        console.log(value, mode);
      }

      const dataSource = [
        {
          key: '1',
          name: '1am',
          age: '',
          address: '',
        },
        {
          key: '2',
          name: '2am',
          age: '',
          address: '',
        },
        {
            key: '3',
            name: '3am',
            age: '',
            address: '',
          },
          {
            key: '4',
            name: '4am',
            age: '',
            address: '',
          },
          {
            key: '5',
            name: '5am',
            age: '',
            address: '',
          },
          {
            key: '6',
            name: '6am',
            age: '',
            address: '',
          },
          {
            key: '7',
            name: '7am',
            age: '',
            address: '',
          },
          {
            key: '8',
            name: '8am',
            age: '',
            address: '',
          },
          {
            key: '9',
            name: '9am',
            age: '',
            address: '',
          },
      ];
      
      const columns = [
        {
         
          title: '11',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '12',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '13',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: '14',
            dataIndex: 'address',
            key: 'address',
          },
          {
            title: '15',
            dataIndex: 'address',
            key: 'address',
          },
          {
            title: '16',
            dataIndex: 'address',
            key: 'address',
          },
          {
            title: '17',
            dataIndex: 'address',
            key: 'address',
          },
    ]
    const datetime = [
      {
        key:'1',
        title: 'Mon',
      } ,
      {
        key:'1',
        title: 'Tue',
      } ,
      {
        key:'2',
        title: 'Wed',
      } ,
      {
        key:'3',
        title: 'Thu',
      } ,
      {
        key:'4',
        title: 'Frl  ',
      } ,
      {
        key:'5',
        title: 'Sot',
      } ,
      {
        key:'6',
        title: 'Sot',
      } ,

    ]
    const date = '0000000000'
    const Listtime = [
      {
        key:'1',
        time:'8.00-9.00',
        Text:'depes'
      },
      {
        key:'2',
        time:'8.00-9.00',
        Text:'depes'
      },
    ]
    return (
        <div className='NFT_page'>
           <h1>NFt Colender</h1>
           <div className='NFT_page_div'>
              <div className='NFT_page_div_date'>
               <DateTime/>
               <h3>TODAY: <span>{date}</span></h3>
               <div className='NFT_page_div_button'>
                  <Button>All-NFT Calendar</Button>
               </div>
            
              {
                Listtime.map((itme)=>{
                  return(
                    <div className='NFT_page_div_lesttime' key={itme.key}>
                        <div>
                          <span></span><p>{itme.time}</p>
                        </div>
                        <p className='NFT_page_div_lesttime_p'>{itme.Text}</p>
                    </div>
                  )
                })
              }
              </div>
              <div className='NFT_page_div_table'>
                <Date_text/>
              </div>
           </div>
        </div>
    )
}
