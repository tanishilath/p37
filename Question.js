class Question {

  constructor() {
    this.title = createElement('h1')
    this.title3 = createElement('h1')
    this.title2 = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter your name");
    this.input2 = createInput("").attribute("placeholder", "correct option no..");
    this.button = createButton('Submit');
    this.button2 = createButton('Reset');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.title2.hide();
    this.title2.hide();
    this.input1.hide();
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("Tanishi's quiz gamee");
    this.title2.html("-----------------------------");
    this.title.position(350, 0);
    this.title2.position(340, 10);

    this.question.html("Question:- What is always coming but never arrives? " );
    this.question.position(150, 80);
    this.option1.html("1: train " );
    this.option1.position(150, 100);
    this.option2.html("2: vacation and holidays" );
    this.option2.position(150, 120);
    this.option3.html("3: tomorrow " );
    this.option3.position(150, 140);
    this.option4.html("4: salary" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 350);
    this.button2.position(360, 350);

    this.button.mousePressed(()=>{
      //this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      //Fill("green")
      this.title3.html("wait for the answer of your competitor")
      this.title3.position(200,340);
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button2.mousePressed(()=>{
      contestant.updateCount(0)
      quiz.update(0)
      var ref = database.ref("contestants")
      ref.remove()
      this.title.show();
      this.title2.show();
      this.input1.show();
      this.input2.show();
      this.input2.show();
      this.button.show();
      this.title3.hide();
    })
  }
}
