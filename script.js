$("button").click(function() {
    
    var username = $(".username").val();

    var password = $(".password").val();
    console.log(username,password);
 


if(username > 10 && password === "goku"){
    $('.qwe').html("<img src='https://thumbs.gfycat.com/LimpImpeccableKentrosaurus-size_restricted.gif'>");
}
else if(username < 10 && password === "goku"){
    $('.qwe').html("<img src='https://media.tenor.com/images/ba1457b88228e7795dd555116b93cad7/tenor.gif'>");
}
else if(username > 10 && password === "naruto"){
    $('.qwe').html("<img src='https://media.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif'>");
    
}
else if(username < 10 && password === "naruto"){
    $('.qwe').html("<img src='https://media2.giphy.com/media/l378hTnSHp8EI0la0/giphy.gif'>");
}


});

