const add = document.querySelector("#add");
const items = document.querySelector("#items");
const deleteItems = document.querySelector("#deleteItems");

add.addEventListener("click",(e)=>{
e.preventDefault();

let key = document.querySelector("#key").value;
let value = document.querySelector("#value").value;

if(!key || !value) return alert("Please fill empty fields !!");

localStorage.setItem(key,value);
items.innerHTML ="";
getItems();
location.reload();

});

deleteItems.addEventListener("click",(e)=>{
    localStorage.clear();
    items.innerHTML ="";
    
});


function getItems(){
    for(let a=0; a < localStorage.length;a++){
        let inpKey = localStorage.key(a);
        let inpItem = localStorage.getItem(inpKey);
        
        items.innerHTML += `<li onclick="removeItem('${inpKey.trim()}')"><p>${inpKey}</p> <p>:</p> <p>${inpItem}</p></li>`
        
    }
    
}
function removeItem(key){
    
    localStorage.removeItem(key);
    items.innerHTML ="";
    getItems();
}




getItems();