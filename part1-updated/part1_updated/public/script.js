function saveNote(){

    let note=document.getElementById("note").value;

    if(note=="")
        return;

    let li=document.createElement("li");

    li.innerHTML=note;

    document.getElementById("notes").appendChild(li);

    document.getElementById("note").value="";

}