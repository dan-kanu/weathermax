import React, { Component } from 'react';


const Footer = (props) =>
  <div className="footer">
    <div className="container">
        <div className="row">
          <div className="col-sm-4">
          <span style={{color:'#E24390',fontSize:16}}>&copy; <a target="_blank" href="http://www.Danielkanu.xyz">Danielkanu.xyz</a> | <a target="blank" href="http://www.danielkanujr.com">Danielkanujr.com</a></span>
          </div>
          <div className="col-sm-8">
            
            Source of Data: <a target="_blank" href="http://http://openweathermap.org"> openweathermap.org API</a>
          </div>
        </div>
    </div>

  </div>

export default Footer;
