elem=document.getElementsByClassName("container");
console.log(elem);
elem[0].innerText="hello";
str=elem[0].innerHTML;
console.log(str);

//settimeout and settimeinterval

setTimeout(show,2000); // it will work after 2 seconds of loading page

function show()
{
    console.log("show method called");
    elem[0].style.background="red";
    elem[0].style.color="white";
    elem[0].style.fontSize="10vmin";
    elem[0].innerText="timeout"
}

//setInterval will work repeatdly after the given time

clr1=setInterval(show1,1000);

function show1()
{
  console.log("timeinterval executed");
  elem[1].style.background="lightgreen";
  elem[1].innerText="timeinterval green";
  elem[1].style.fontSize="10vmin";
  elem[1].style.color="white";
  elem[1].style.border="2px solid lightgreen";
}

clr2=setInterval(show2,2000);

function show2()
{
    elem[1].style.background="skyblue";
    elem[1].innerText="timeinterval blue";
    elem[1].style.border="2px solid lightblue";
}

//use clearinterval/cleartimeout to cancel setinterval/settimeout

btn1=document.getElementById("btn");
console.log("btn1");
btn1.addEventListener('click',function(){
clearTimeout(clr1);
clearInterval(clr2);
})

btn2=document.getElementById("btn2");
btn2.addEventListener('click',function(){
  clr1=setInterval(show1,1000);
  clr2=setInterval(show2,2000);
})

//local storage
localStorage.setItem('name','mayank');
console.log(localStorage.getItem('name'));