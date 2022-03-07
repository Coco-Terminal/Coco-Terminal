import React from "react";
import "./css/wrap.css";
import Page_body from '../page_body/Page_body'
import Menulist from "../MenuList/Menulist";
import Herder  from "../Herder/Herder";
export default function Home() {
  return (
    <>
     <Herder/>
      <div className="wrap">
        <Menulist />

        <Page_body/>
        
      </div>
    </>
  );
}
