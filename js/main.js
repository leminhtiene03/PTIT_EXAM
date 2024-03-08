
let  creat = document.getElementById("add_class");
function touch()
{
  
    creat.style.display = "block";


}
let close = document.getElementById("close_form");
function close_creat()
{
   creat.style.display = "none";
}

let open_ava = document.getElementById("menu_avatar");
function close_drop(){
    if ( open_ava.style.display == none)
    {
        creat.style.display = "block";
    }
    else creat.style.display = "none";
}
