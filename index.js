const headings=document.getElementsByTagName("h1");
const buttons=document.getElementsByTagName("button");
const spans=document.getElementsByTagName("span");
 
let trycount=0;
const changebutton=()=>{
    const headingstext="ali";
if(headings[0].innerHTML===headingstext)
{
    spans[0].style.backgroundColor="green";
    spans[0].style.color="white";
    spans[0].innerHTML=`nice haji karet khob bod u find ${headingstext} after ${trycount}`;
   return console.log("flawless")
}
trycount++;
const headingchar=headingstext.split("");
const r1=Math.floor(Math.random() *3);
const r2=Math.floor(Math.random() *3)
const r3=Math.floor(Math.random() *3)
const s=
headingchar[r1]+
headingchar[r2]+
headingchar[r3];

headings[0].innerHTML=s;
}
buttons[0].onclick=changebutton;
buttons[1]=()=>{
    location.reload();
}
