// js -> babel
import { REACT_TXT , REACT_ELEMENT} from './stants'
import { toObject } from './utils';
function createElement(type,config,children){
    // console.log(arguments);
    const props = {...config}
    let key,ref
    if(config){
        key = config.key;
        ref = config.ref
    }
    if (config){
        if (arguments.length >3){ // 多个children
            props.children = Array.prototype.slice.call(arguments, 2).map(toObject)

        }else if(arguments.length == 3){
            props.children = toObject(children)
        }
        delete props.ref;
        delete props.key;
    }
    return{
        $$typeof: REACT_ELEMENT,
        key,
        ref,
        type,
        props
    }
}

const react = {
    createElement
}

export default react