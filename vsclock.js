let deg=6;
const hr=document.getElementById("hr");
const sc=document.getElementById("sc");
const mn=document.getElementById("mn");
setInterval(()=>{let day=new Date();
    let hh=day.getHours()*30;
    let mm=day.getMinutes()*deg;
    let ss=day.getSeconds()*deg;
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)+(ss/60)}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    document.getElementById("heur-text").innerHTML=day.toDateString();
});


