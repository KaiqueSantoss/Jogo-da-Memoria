const FRONT = 'card_front'
const BACK = 'card_back'
const ICON = 'icon'


startGame()

function startGame(){


  
    initializeCards(game.createCardWithPair())
   

}


function initializeCards(){
    
    let boardGame = document.getElementById('board')

    boardGame.innerHTML = '';

    game.cards.forEach(card=>{
        let cardElement = document.createElement('div')
        cardElement.id = card.id
        cardElement.classList.add('card')
        cardElement.dataset = card.icon

        createCardContent(card,cardElement)

        cardElement.addEventListener('click',flipp)

        boardGame.appendChild(cardElement)
    })
}

function createCardContent(card, cardElement){

    createCardFace(FRONT, card, cardElement)
    createCardFace(BACK, card, cardElement)

}

function createCardFace(face, card,element){
    let cardElementFace = document.createElement('div')
    cardElementFace.classList.add(face) 
    if(face === FRONT){

     
    let imageIcon = document.createElement('img')
    imageIcon.classList.add(ICON)

    imageIcon.src = './images/' + card.icon + '.png'
     cardElementFace.appendChild(imageIcon)

    }else{
      
        cardElementFace.innerHTML = '&lt / &gt'
    }

    element.appendChild(cardElementFace)
}




function flipp(){

    if(game.setCard(this.id)){
        this.classList.add('flip')

        if(game.secondCard){
        if(game.checkMatch()){
            game.clearCard();

            if(game.checkGameOver()){
                let gameover = document.getElementById('gameOver')
                    gameover.style.display ='flex'
        }
       }else{
        setTimeout(()=>{
            let firstCardView = document.getElementById(game.firstCard.id)
            let secondCardview = document.getElementById(game.secondCard.id) 
            secondCardview.classList.remove('flip')
            firstCardView.classList.remove('flip')
            game.unFlippedCards()
        },1000)


        

       }
    }
       
    }
    
}

function restart(){
    let gameover = document.getElementById('gameOver')
    gameover.style.display ='none'
    game.clearCard()
    startGame()
}