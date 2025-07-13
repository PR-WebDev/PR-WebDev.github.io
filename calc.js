let calculation=JSON.parse(localStorage.getItem('calculation'))||'';
let total=JSON.parse(localStorage.getItem('total'))||'';
let scalc=document.querySelector('.calculation')
let stotal=document.querySelector('.total')

scalc.innerHTML=`${calculation}`
stotal.innerHTML=`${total}`


console.log(calculation)
function input(value){
    calculation += value;
    scalc.innerHTML=calculation;
    localStorage.setItem('calculation',JSON.stringify(calculation))
}
function calculate(){
    total=eval(calculation)||'';
    localStorage.setItem('total',JSON.stringify(total));
    stotal.innerHTML=`=${total}`
    console.log(total)
}
function clearall(){
localStorage.removeItem('calculation');
    localStorage.removeItem('total');
    calculation='';
    total='';
    stotal.innerHTML='';
    scalc.innerHTML='';
    console.log()
}
function clearone(){
   calculation= calculation.slice(0,-1);
   scalc.innerHTML=calculation;
   localStorage.setItem('calculation',JSON.stringify(calculation))
}
document.body.addEventListener('keydown',
   (event)=>{
    const numbers=['1','2','3','4','5','6','7','8','9','0','/','*','-','+','.']
    if (numbers.includes(event.key)){
        input(event.key);
    }else if(event.key==="Backspace"){
        clearone()
    }else if (event.key==="Enter"){
        calculate()
    }else if(event.key==="Delete"){
        clearall()
    }
   }
)

