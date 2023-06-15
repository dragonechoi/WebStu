function show(){
    //document.write("show")
    //모듈 타입일떄는 document.write가 사용불가
    //그래서 새로운 요소 노드를 직접 만들어서 추가해야 함
    const e=document.createElement('h4')
    e.textContent="show!!!"
    document.body.appendChild(e)
}


//다른 JS에서 show() 를 improt 하게 하고싶다면 반드시 내보내야함 
//하나의 .js 안에서 여러개를 export 할 수 있음. 그 중에 반드시 1개는 default 키워드가 필요 
export default show


//또다른 함수도 export 해보기
export function addTextToBody(message){
    const e= document.createElement('h4')
    e.textContent=message
    document.body.appendChild(e)
}
//export default addTextToBody //ERROR - export default는 문서에서 1개만 사용
//export addTextToBody //ERROR가 없으면 함수선언하면서 export 명시
//변수나 상수도 export가 가능함 

export const num=100
export let age=20