import React, { Component } from 'react';

const Form = (props)=> 
<div className="Title">
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="city"/>
        <button className="btn" style={{backgroundColor:'#7C9E36'}}> Get Weather </button>
    </form>
</div>

export default Form;