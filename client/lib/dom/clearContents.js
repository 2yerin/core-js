import { getNode } from "./getNode.js";
import { isString } from "../utils/type.js";





 function clearContents(node){

  if(isString(node)) node = getNode(node);

  if(node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') {
    node.value = ''
    return;
  }

  node.textContent = '' //문자일 경우에는 텍스트 컨텐츠 지워줌
  
}

export default clearContents