// js for menu section 
const menu1=document.querySelector(".f-flex1");
const menu2=document.querySelector(".f-flex2");
const menu3=document.querySelector(".f-flex3");

  //  buttons

const btn1=document.querySelector('.m-btn1');   
const btn2=document.querySelector('.m-btn2');   
const btn3=document.querySelector('.m-btn3');


btn1.addEventListener("click", function() {
menu1.style.display='flex'; 
menu2.style.display='none'; 
menu3.style.display='none'; 

btn1.style.opacity='1';
btn1.style.borderColor='black';

btn2.style.opacity='0.7';
btn2.style.borderColor='rgba(128, 128, 128, 0.561)';

btn3.style.opacity='0.7';
btn3.style.borderColor='rgba(128, 128, 128, 0.561)';


})
btn2.addEventListener("click", function() {

menu2.style.display='flex'; 
// menu2.style.opacity='1'; 

menu3.style.display='none'; 
menu1.style.display='none'; 

btn2.style.opacity='1';
btn2.style.borderColor='black';

btn1.style.opacity='0.7';
btn1.style.borderColor='rgba(128, 128, 128, 0.561)';

btn3.style.opacity='0.7';
btn3.style.borderColor='rgba(128, 128, 128, 0.561)';


})
btn3.addEventListener("click", function() {
menu3.style.display='flex'; 
menu1.style.display='none'; 
menu2.style.display='none'; 

btn3.style.opacity='1';
btn3.style.borderColor='black';

btn1.style.opacity='0.7';
btn1.style.borderColor='rgba(128, 128, 128, 0.561)';

btn2.style.opacity='0.7';
btn2.style.borderColor='rgba(128, 128, 128, 0.561)';


})


  //  nevigation bar 
  const bar =document.querySelector(".bar");
  const menu =document.querySelector(".slide-bar");

  bar.addEventListener("click",function(){
    if(menu.style.opacity=='0'){
     menu.style.opacity='1';
    }
    else{
      menu.style.opacity="0";
    }
  })


  // close menu 
  const a1=document.querySelector("#a1");
  const a2=document.querySelector("#a1");
  const a3=document.querySelector("#a1");
  const a4=document.querySelector("#a1");
  const a5=document.querySelector("#a1");
  const a6=document.querySelector("#a1");
  const a7=document.querySelector("#a1");

  a1.addEventListener('click',function(){
  menu.style.opacity='0';
  })
  a2.addEventListener('click',function(){
    menu.style.opacity='0';
    })
    a3.addEventListener('click',function(){
      menu.style.opacity='0';
      })
      a4.addEventListener('click',function(){
        menu.style.opacity='0';
        })
        a5.addEventListener('click',function(){
          menu.style.opacity='0';
          })
          a6.addEventListener('click',function(){
            menu.style.opacity='0';
            })
            a7.addEventListener('click',function(){
              menu.style.opacity='0';
              })


              const burger = document.querySelector('.burger');
              const slideBar = document.querySelector('.slide-bar');
              
              burger.addEventListener('click', () => {
                burger.classList.toggle('active');
              });
              