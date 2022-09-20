import React from 'react';
// import ReactDOM from 'react-dom/client';
import react from './react';
import ReactDOM from './react-dom'
// const root = ReactDOM.createRoot(document.getElementById('root'));
const div = <div className='ppp'>1234<span>000</span></div>
const re = react.createElement('div',{
  className:'box',
  style:{
    color:'pink',
    height:'10px'
  },
  key: 'item01',
  ref: 'iii'
}, 'hello',react.createElement('div',{
  style:{
    color:'yellow',
    background:'red'
  }
},'asdad'))


ReactDOM.render(re, document.getElementById('root'))
// console.log(re,'vdom');
// console.log(res);
// root.render(res);
