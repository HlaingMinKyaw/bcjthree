//Start jquery
$(document).ready(function(){
    $('.sidebarlinks').click(function(){
        $('.sidebarlinks').removeClass('currents');
        $(this).addClass('currents');
    });
});



// start dropdown
function dropbtn(e){

    console.log(e.target);
    e.target.parentElement.nextElementSibling.classList.toggle('show');
}//End jquery

