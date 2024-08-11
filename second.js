var taskinput = document.getElementById("box");
var addtask = document.getElementById("enter");
var showsam = document.getElementById("show");
//Event listener
addtask.addEventListener("click",()=>
{
    if (taskinput.value.trim() !="")
    {
        const tasktext = taskinput.value;
        const listitem =document.createElement("li");
        listitem.textContent=tasktext;
        const buttonItem = document.createElement("button");
        buttonItem.textContent= 'delete';
        buttonItem.addEventListener("click",()=>
        {
            listitem.remove();
            buttonItem.remove();
    });
        showsam.appendChild(listitem);
        showsam.appendChild(buttonItem);
        taskinput.value=" ";
    }
});
