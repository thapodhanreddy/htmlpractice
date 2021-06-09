function myFunc(){
    var input =document.getElementById('todoinput').value;
    document.getElementById('div4').innerHTML+='<div><h2>' +input+ '</h2><i class="fa fa-trash-o" aria-hidden="true"></i>'
                                                '</div>';
    document.getElementById('todoinput').value='';


    var eventlis=document.getElementsByTagName('h2');
    var trashlis = document.getElementsByClassName('fa-trash-o');

for(let i=0;i<eventlis.length;i++){
    
    eventlis[i].addEventListener("click",function(){
        eventlis[i].style.textDecoration="line-through";
    });

    trashlis[i].addEventListener('click',function(){
        eventlis[i].parentElement.remove();
    })

}
}





    
        
   


    
        


     

     


