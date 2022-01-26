class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    question.hide(); 

    background("cyan");
    fill(0);
    textSize(30);
    text("Result of the Quiz",340, 50);
    text("~~~~~~~~~~~~~~~~",320, 65);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill("blue");
      textSize(20);
      //text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);

      for(var plr in allContestants){
        debugger;
        var correctAns = "3";

        // if (correctAns !== allContestants[plr].answer){
        //   fill("Green")
        // }
        // else{
        //   fill("red");
        // }

        if (correctAns === allContestants[plr].answer){
        fill("Green")
        text("congratulations dear "+allContestants[plr].name+", right answer:)",360,display_Answers+30)
         }
        else{
        fill("red");
        text("oppss...wrong answer "+ allContestants[plr].name,360,display_Answers+30)
         }
        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      }
    }
  }
}
