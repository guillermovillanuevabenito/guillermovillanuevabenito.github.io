
(function(document) {

    const toggleBtn =document.querySelector('.hamburguer');
    const closeBtn =document.querySelector('.closebtn');
    const sidebar =document.querySelector('.nav-sidebar');
    
    toggleBtn.addEventListener('click', function(){
        sidebar.style.width = "200px";
    });
    
    closeBtn.addEventListener('click', function(){
        sidebar.style.width = "0px";
    });

})(document);