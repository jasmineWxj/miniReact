import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Fun extends React.Component{
    constructor(){
        super() // 执行父类的构造函数
        this.state = {
            name:1
        }
    }
    ppp = ()=>{
        this.setState({
            name:this.state.name+=1
        })
    }
    render(){
        console.log(this.state.name);
        return <div onClick={this.ppp}>{this.state.name}</div>
    }
}
let el = <Fun></Fun>
root.render(el)
