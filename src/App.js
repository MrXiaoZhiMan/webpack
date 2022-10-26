import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    componentDidMount(){
        axios.get('/data')
        .then(res=>{
        console.log(res.data);
        })
        }
        
render() {
return (
<div>
App组件
</div>
)
}
}
