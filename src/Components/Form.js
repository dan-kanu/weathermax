import React, { Component } from 'react';

const Form = (props)=> 
<div className="Title">
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="city"/>
        <input type="text" name="country" placeholder="country"/>
        <button className="btn btn-primary"> Get Weather </button>
    </form>
</div>
 

export default Form;
