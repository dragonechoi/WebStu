var n=0;
while(true){
    n++;
    //document.getElementById('hh').innerHTML=n;
    // worker에서는 UI작업이 불가능
    
    // 메인 스레드에게 요청
    postMessage(n);

    // onmessage=function(event){
    //     this.alert(event.data);
    // }

}