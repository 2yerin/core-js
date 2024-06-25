//attr 함수를 받아옴
//다시 내보내기 re-export


//re-export 구문
export * from './css.js';
export * from './attr.js';
export * from './insert.js';
export * from './getNode.js';
export * from './bindEvent.js';
export * from './clearContents.js';
export {default as clearContents} from './clearContents.js';

//중간 엔트리에서 받고 바로 다시 내보냄. 중간 엔트리에서는 따로 import 안 써줘도 됨.