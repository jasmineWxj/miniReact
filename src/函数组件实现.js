// import React from 'react';
// import ReactDOM from 'react-dom/client';
import react from './react';
import ReactDOM from './react-dom'
// const root = ReactDOM.createRoot(document.getElementById('root'));

// 函数时组件，他就是一个函数

function FunctionComponent(props){
    return react.createElement('div', {
        className: 'box',
        style: {
            color: 'pink',
            height: '10px'
        },
        key: 'item01',
        ref: 'iii'
    },'llll')
}
// 函数式组件的使用
let Eml = <FunctionComponent name='1234'></FunctionComponent>
console.log(Eml);
react.createElement(FunctionComponent,{
    name:'oooo'
})
// root.render(Eml)
ReactDOM.render(Eml, document.getElementById('root'))