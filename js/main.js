let okList =document.querySelector(".okList");

let noList =document.querySelector(".noList");

let list =document.querySelector(".list");

let liS=[...list.children]


let nav =document.querySelector("nav");

okList.onclick=()=>{
    okList.style.transform= "translateY(-50%) rotateZ(180deg)";
    list.style.display="block"
    setTimeout(() => {
        list.style.opacity="1"
        okList.style.display="none"
        noList.style.display="block"
        okList.style.transform= "translateY(-50%) rotateZ(0deg)";
    }, 200);
}
noList.onclick=()=>{
    noList.style.transform= "translateY(-50%) rotateZ(180deg)";
    list.style.opacity="0"  
    setTimeout(() => {
        list.style.display="none"
        noList.style.display="none"
        okList.style.display="block"
        noList.style.transform= "translateY(-50%) rotateZ(0deg)";
    }, 500);
}

liS.forEach((li)=>{
    li.onclick=()=>{
        if (nav.scrollWidth<1000){
            list.style.opacity="0"
            noList.style.display="none"
            okList.style.display="block"
        }
    }
})
let up=document.querySelector(".up");
window.onscroll=()=>{
    if (window.scrollY<740){
        up.style.display="none ";
    }
    else{
        up.style.display="flex";
    }
}

window.onresize=()=>{
    if (nav.scrollWidth>1000){
        list.style.display="flex"
        list.style.opacity="1"
        okList.style.display="none"
        noList.style.display="none"
    }
    else{
        list.style.display="none"
        list.style.opacity="0"
        okList.style.display="block"
        noList.style.display="none"
    }
}
