let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let dlbt=document.createElement("button");
    dlbt.innerText="Delete";
    dlbt.classList.add("Delete");
    item.appendChild(dlbt);
    ul.appendChild(item);
    inp.value="";
})