aryClubs = ["2C.png", "3C.png", "4C.png", "5C.png", "6C.png", "7C.png", "8C.png", "9C.png", "10C.png", "JC.png", "QC.png", "KC.png", "AC.png"]
aryDiamonds = ["2D.png", "3D.png", "4D.png", "5D.png", "6D.png", "7D.png", "8D.png", "9D.png", "10D.png", "JD.png", "QD.png", "KD.png", "AD.png"]
aryHearts = ["2H.png", "3H.png", "4H.png", "5H.png", "6H.png", "7H.png", "8H.png", "9H.png", "10H.png", "JH.png", "QH.png", "KH.png", "AH.png"]
arySpades = ["2S.png", "3S.png", "4S.png", "5S.png", "6S.png", "7S.png", "8S.png", "9S.png", "10S.png", "JS.png", "QS.png", "KS.png", "AS.png"]

let playAgain = "yes"

while (playAgain == "yes") {
    //randomly select 'suit' an array
    let suit1 = Math.ceil(Math.random() * 4)
    let card1 = Math.floor(Math.random() * 13)

    let cardSelected //save which card was selected
    console.log(suit1)
    console.log(card1)


    //if block which will choose based on the random number which array to use (suit)
    if (suit1 == 1) {
        //use aryClubs
        cardSelected1 = aryClubs[card1]
        console.log(cardSelected1)
    } else if (suit1 == 2) {
        //use aryDiamonds
        cardSelected1 = aryDiamonds[card1]
        console.log(cardSelected1)
    } else if (suit1 == 3) {
        //use aryHearts
        cardSelected1 = aryHearts[card1]
        console.log(cardSelected1)
    } else {
        //use arySpades
        cardSelected1 = arySpades[card1]
        console.log(cardSelected1)

    }
    document.getElementById("card1").src = "cards/" + cardSelected1

    //card for second player

    //randomly select 'suit' an array
    suit1 = Math.ceil(Math.random() * 4)
    card2 = Math.floor(Math.random() * 13)

    cardSelected //save which card was selected
    console.log(suit1)
    console.log(card2)


    //if block which will choose based on the random number which array to use (suit)
    if (suit1 == 1) {
        //use aryClubs
        cardSelected1 = aryClubs[card2]
        console.log(cardSelected1)
    } else if (suit1 == 2) {
        //use aryDiamonds
        cardSelected1 = aryDiamonds[card2]
        console.log(cardSelected1)
    } else if (suit1 == 3) {
        //use aryHearts
        cardSelected1 = aryHearts[card2]
        console.log(cardSelected1)
    } else {
        //use arySpades
        cardSelected1 = arySpades[card2]
        console.log(cardSelected1)

    }

    document.getElementById("card2").src = "cards/" + cardSelected1

    let winner
    if (card1 > card2) {
        winner = "Card 1 wins"
    } else if (card1 < card2) {
        winner = "Card 2 wins"
    } else {
        winner = "It's a tie"
    }
    document.getElementById("winner").innerHTML = winner

    playAgain = prompt("Play Again?")
}

document.getElementById("winner").innerHTML = "Thank you for playing!"