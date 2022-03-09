import React from "react";
import "./Rolelist_css/index.css";
import { Layout, Menu } from "antd";
import title from "../../../../assets/title.png";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Item from "antd/lib/list/Item";
import { Input } from 'antd';

const { TextArea } = Input;
export default function RoleList() {
  const { Header, Content, Footer, Sider } = Layout;
  const add =[
      {
          key: '1',
          title:'jone',
          icon:"A",
          text:"11111",
          time:"00-000*-0000"
      },
      {
        key: '2',
        title:'lOIJE',
        icon:"B",
        text:"111",
        time:"00-000*-0000"
    },
    {
        key:'3'
    }
  ]
  const arr =[
      {
          key:'1',
          icon:"A",
          name:"adsda",
          text:"1111",
          add:"price",
          img:title
      },
      {
        key:'2',
        icon:"A",
        name:"adsda",
        text:"1111",
        add:"price",
        img:title
    },
    {
        key:'3',
        icon:"A",
        name:"adsda",
        text:"1111",
        add:"price",
        img:title
    },
    {
        key:'4',
        icon:"A",
        name:"adsda",
        text:"1111",
        add:"price",
        img:title
    },
    {
        key:'5',
        icon:"A",
        name:"adsda",
        text:"1111",
        add:"price",
        img:title
    },
    {
        key:'6',
        icon:"A",
        name:"adsda",
        text:"1111",
        add:"price",
        img:title
    },
    {
        key:'7',
        icon:"A",
        name:"adsda",
        text:"1111",
        add:"price",
        img:title
    },
    {
        key:'8',
        icon:"A",
        name:"adsda",
        text:"1111",
        add:"price",
        img:title
    },
  ]
  const Time_text = "00-000--0000";
  const text = "000";
  return (
      <>
    <div className="RoleList">
      <div className="RoleList_one">
        <Layout className="RoleList_one_first">
          <img src={title} />
          <div className="RoleList_one_first1">
            <div className="RoleList_one_first_text">
              <h1>NAME</h1>
              <p>Minred {Time_text}</p>
            </div>
            <div className="RoleList_one_first_text1">
              <span>
                <ArrowUpOutlined />
              </span>{" "}
              {text}{" "}
              <span>
                <ArrowDownOutlined />
              </span>
              <h1>Price</h1>
            </div>
          </div>
          <div className="RoleList_one_first2">
            <Button>
              <span></span>
              <p>Collection</p>
            </Button>
            <Button>
              <span></span>
              <p>Creator</p>
            </Button>
            <Button>
              <span></span>
              <p>Collector</p>
            </Button>
          </div>
        </Layout>
      </div>
      <div className="RoleList_one">
        <Layout className="RoleList_one_lest">
            <h1>Desscription</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
             <Layout className="RoleList_one_lest_comments">
                 <h2>Comments</h2>
                
                    {
                        add.map((itme)=>{
                            return( 
                            <div className="RoleList_one_lest_username">
                              <div className="RoleList_username_icon" key={itme.key}>
                                  <span>{itme.icon}</span>
                                  <p>  {itme.title}</p>
                              </div> 
                              <p>
                                 {itme.text}
                              </p>
                              <span>
                                  {itme.time}
                              </span>
                            </div>
                            )
                        })
                    }
            
             </Layout>
            <Layout className="RoleList_comment">
                 <div>
                     <span></span>
                     <p>username</p>
                 </div>
                 <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
            </Layout>
        </Layout>
       
      </div>
    </div>
     <Layout className="Related_Nft">
            <h1>Related NFTs</h1>
            <div>
                {
                    arr.map((itme)=>{
                        return(
                            <div key={itme.key}>
                                <img src={itme.img}/>
                                <div>
                                    <span>{itme.name}</span>
                                    <div>
                                        <span><ArrowDownOutlined/></span> {text}<span><ArrowUpOutlined/></span>
                                    </div>
                                </div>
                                <div className="Related_Nft_box">
                                    <span></span>
                                    <p>{itme.add}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {
                    arr.map((itme)=>{
                        return(
                            <div key={itme.key}>
                                <img src={itme.img}/>
                                <div>
                                    <span>{itme.name}</span>
                                    <div>
                                        <span><ArrowDownOutlined/></span> {text}<span><ArrowUpOutlined/></span>
                                    </div>
                                </div>
                                <div className="Related_Nft_box">
                                    <span></span>
                                    <p>{itme.add}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          
     </Layout>
    </>
  );
}
