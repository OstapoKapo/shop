let heartKey = true;
let likeCount = 0;
likeCounte.innerText = likeCount
$('.card__heartItem__heart').click(function(){     
    if(heartKey){
        $(this).empty()
        $(this).append('<img src="img/heart2.png" alt=""></img>')  
        heartKey = false
        likeCount+=1
        likeCounter()
    }
    else if(!heartKey){
        $(this).empty()  
        likeCount-=1
        heartKey = true
        likeCounter()
    }    
})

$('.footer__languaeGroup__p').click(function(){   
    $(".footer__languaeGroup__p").css("color","#101010");
    $(this).css("color","#FFA542");
    
})

function likeCounter(){
    likeCounte.innerText = likeCount 
}