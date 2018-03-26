import React, { Component } from 'react';


const Weather = (props) =>
  <div className="">
      { props.city &&
        <div className="city-container" style={{display:'flex', alignItems:'center',backgroundSize:'cover', background:
          `linear-gradient(rgba(8, 7, 8, 0.744), rgba(10, 8, 8, 0.656)),url('https://source.unsplash.com/1600x900/?${ props.city }')`}}><span style={{color:'#F1D83D',fontSize:50}}><p><span style={{fontWeight:'bold'}}>{ props.city }</span>, <br/> { props.country } </p> 
        </span>
        </div>
      }
      
      { props.temperature && 
        <span style={{color:'#F4D21F',fontSize:28}}><p>Temperature: { props.temperature }<span>&#176;</span></p> 
      </span> 
      }
      
      { props.humidity && 
        <span style={{color:'#31B495',fontSize:22}}><p> Humidity: { props.humidity } </p> 
        </span>
      }
      
      { props.description && 
        <span style={{color:'#9DCA40',fontSize:22}}><p>Conditions: { props.description } </p> 
        </span>
      }

      { props.windspeed && 
        <span style={{color:'#1AA5D0',fontSize:22}}><p>Wind Speed: { props.windspeed } </p> 
        </span>
      }
      { props.coordLon && 
        <span style={{color:'#DA5A98',fontSize:22}}><p>Lon: { props.coordLon } </p> 
        </span>
      }
      { props.coordLat && 
        <span style={{color:'#E5683E',fontSize:22}}><p>Lat: { props.coordLat } </p> 
        </span>
      }

      { props.tempmax && 
        <span style={{color:'#BC6D21',fontSize:22}}><p>High: { props.tempmax } </p> 
        </span>
      }

      { props.tempmin && 
        <span style={{color:'#DA1817',fontSize:22}}><p>Low: { props.tempmin } </p> 
        </span>
      }
      { props.icon && 
        <span style={{color:'#F4D21F',fontSize:22}}><p>: { props.img } </p> 
        </span>
      }
      
      { props.error && <p>{props.error} </p> }
    </div>


export default Weather;
