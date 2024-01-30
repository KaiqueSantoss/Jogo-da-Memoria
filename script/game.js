let game ={

    lockMode: false,
    firstCard:null,
    secondCard:null,
    setCard:function(id){
        let card = this.cards.filter(card=>card.id === id)[0];
        console.log(card)
        if(card.flipped || this.lockMode){
            
            return false; 
        }
        if(!this.firstCard){
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        }else{
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }
    },
    checkMatch:function(){
        if(!this.firstCard || !this.secondCard){
            return false
        }
        return this.firstCard.icon === this.secondCard.icon
    },
    clearCard:function(){
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },
    unFlippedCards:function(){
        this.firstCard.flipped = false
        this.secondCard.flipped = false
        this.clearCard()
    },
    checkGameOver:function(){
        return this.cards.filter(card=>!card.flipped).length === 0;
    }

    ,
    techs :[
        'bootstrap','html','javascript','css','jquery','mongo','firebase','react','node','electron'
     ],
     
    cards : null,
     
     
     createCardWithPair:function(){
         this.cards = []

         this.techs.forEach((tech)=>{
          this.cards.push(this.createPairForCards(tech))
         })
         
        this.cards = this.cards.flatMap(pair => pair)
        this.sheffluCards();
        return this.cards;
        
       
     },
     
    createPairForCards:function(tech){
         return [{id:this.creatingId(tech),
                 icon:tech,
                 flipped:false},
                 {id:this.creatingId(tech),
                     icon:tech,
                     flipped:false}
             ]
     },
     
    creatingId: (tech)=>{
         return tech + parseInt(Math.random()*1000)
     },

     sheffluCards:function(){
        let currentIndex = this.cards.length
        let randomIndex = 0;
     
         while(currentIndex !== 0){
     
            randomIndex = Math.floor(Math.random() * currentIndex);
             console.log(randomIndex)
     
             currentIndex--;
     
          
             [this.cards[currentIndex],this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]]
     
         }
        }
}