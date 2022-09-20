import {REACT_ELEMENT,REACT_TXT} from './stants.js'
// 初始化react 元素
function render(vdom,container){
    mount(vdom, container)
}

function mount(vdom, container){
    // 1. vdom => 真实dom
    let newDom = createDom(vdom);
    // 2. 真实dom 放到 container 里面
    console.log(newDom);
    container.appendChild(newDom)
    // 3.children
}

function createDom(vdom){
    let { $$typeof, props, type, content } = vdom
    let dom;
    // 判断 type 文本或者是元素
    if ($$typeof == REACT_ELEMENT){
        dom = document.createElement(type)
    }else if(typeof type == 'function'){
        // 变成一个 vdom
        return mountFunctionComponent(vdom)
    }else{
        console.log(222, vdom);
        dom = document.createTextNode(content)
    }
    // 处理属性
    if(props){
        let { children } = props
        // 问题更新
        dom = updateProps(dom,{},props)
        //  处理children
        if (children){
            changeChildren(children,dom)
        }
    }

    // children
    return dom
}
// 处理函数式组件
function mountFunctionComponent(vdom){
    const {type ,props} = vdom;
    const functionVdom = type(props)
    return createDom(functionVdom)
}
function changeChildren(children, dom){
    // 一个 children 多个 childred
   if (Array.isArray(children)){
        children.forEach((item,index)=>{
            mount(item,dom)
        })
    }else if (typeof children == 'object') {
        mount(children, dom) //递归
    } 

}
/**
 * @dom 真实dom
 * @oldProps 旧的属性
 * @newProps 新的属性
 * 更新属性
 */
function updateProps(dom,oldProps,newProps){
    for (let key in newProps){
        if (key === 'children'){
            continue;
        }else if(key === 'style'){
            let styleObject = newProps[key]
            for (let item in styleObject){
                dom.style[item] = styleObject[item]
            }
        }else{
            dom[key] = newProps[key]
        }
    }
    // 更新
    if (oldProps){
        // 旧的属性在新的属性上面没有 =》 删除
        for (let key in oldProps){
            if (!newProps[key]){
                dom[key] = null
            }
        }
    }
    return dom

}
const ReactDOM = {
    render
}

export default ReactDOM
