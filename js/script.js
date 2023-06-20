/*
var imgBox =document.getElementById("#file");

var loadFile=function(event){
    imgBox.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+")";
}*/

/* FORM1  IMAGE*/

function readURL(input){
    if(input.files && input.files[0]){
        var reader = new FileReader();

        reader.onload = function(e){
            $('#file_upload')
                .attr('src',e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

/* FORM2 IMAGE*/

const image_input = document.querySelector("#image_input");
var uploaded_image="";

image_input.addEventListener("change",function(){
    const reader= new FileReader();
    reader.addEventListener("load",()=>{
        uploaded_image=reader.result;
        document.querySelector("#display_image").style.backgroundImage=`url(${uploaded_image})`;
        document.querySelector("#display_image1").style.backgroundImage=`url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
})

/* ESTADOS DA IMAGENS*/

function contrast(){
    document.getElementById('display_image1').style.filter = "contrast(45%)";
}

function bru(){
    document.getElementById('display_image1').style.filter = "blur(3px)";
}

function grayscale(){
    document.getElementById('display_image1').style.filter = "grayscale(40%)";
}

function vintage(){
    document.getElementById('display_image1').style.filter = 
    "blur(0.05em ) saturate(0.6) brightness(1.2) contrast(1.4)";
}

function saturate(){
    document.getElementById('display_image1').style.filter = "saturate(2)";
}

function opacity(){
    document.getElementById('display_image1').style.filter = "opacity(30%)";
}

function huerotate(){
    document.getElementById('display_image1').style.filter = "hue-rotate(180deg)";
}

function sepia(){
    document.getElementById('display_image1').style.filter = "sepia(50%)";
}

    /* MENU */

  let menu=document.querySelector('#menu-icon');
  let navbar=document.querySelector('.navbar');
  let uploadbtn=document.querySelector('.upload-btn');

  menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    uploadbtn.classList.toggle('active1');
  }
  /*
  window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  } */







