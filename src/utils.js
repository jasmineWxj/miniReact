import { REACT_ELEMENT, REACT_TXT } from "./stants";

export function toObject(element){
    return typeof element == 'string' || typeof element == 'number' 
    ? 
    {
        $$typeof: REACT_TXT,
        content: element
    }
    :
    element
}