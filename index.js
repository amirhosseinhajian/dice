function plyBtn() {
    var user1 = Math.floor(Math.random()*6) + 1;
    var user2 = Math.floor(Math.random()*6) + 1;
    var imageSource1 = "images/" + "dice" + user1 + ".png"
    var imageSource2 = "images/" + "dice" + user2 + ".png"

    document.querySelectorAll("img")[0].setAttribute("src", imageSource1)
    document.querySelectorAll("img")[1].setAttribute("src", imageSource2)


    if(user1==user2){
        document.querySelector("h1").innerHTML = "Draw!"
    }
    else if(user1 > user2){
        document.querySelector("h1").innerHTML = "Player1 wins!"
    }
    else if(user1 < user2){
        document.querySelector("h1").innerHTML = "Player2 wins!"
    }
    
    document.querySelector("button").innerHTML = "Play again"
}