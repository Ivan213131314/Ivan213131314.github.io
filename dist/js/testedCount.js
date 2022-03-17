const testedCount=document.getElementsByClassName('tested_count')[0];
let currentTestedTimes = ()=>{
    let date=new Date();
    let y=date.getFullYear();
    let m=date.getMonth();
    let d=date.getDate();
    testedCount.innerHTML =(y*160+m*14+d*37)*6;

}
currentTestedTimes();