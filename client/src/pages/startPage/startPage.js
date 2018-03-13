import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Cards from "../../components/Cards"
import "./startPage.css"
import Searchinput from "../../components/Searchinput";
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

const startPage = () => (
  <div>
    <Navbar/>
    <Searchinput/>
   <div class="container">
    <div className="section">
      <div className="row">
        <div calssName="col s12">
          <div className="section">
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
          </div>
        </div>
      </div>
    </div>
  </div>
 
    <Footer/>
  </div>
);

export default startPage;
