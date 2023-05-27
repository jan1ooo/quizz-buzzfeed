import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json";

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  ngOnInit(): void {
    if(quizz_questions){
      this.finished = false;
      this.title = quizz_questions.title;

      this.questions = quizz_questions.questions;
      this.questionSelected = this.questions[this.questionIndex];

      this.questionMaxIndex = this.questions.length;
      console.log(this.questionMaxIndex)
    }
  }

  title:string = "";

  questions:any;
  questionSelected:any;

  answers:string[] = [];
  answerSelected:string = "";

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = false;

  playerChoose(value:string){
    this.answers.push(value);
    console.log(this.answers)
  }

  async nextStep(){

    this.questionIndex++;

    if(this.questionIndex < this.questionMaxIndex){
      this.questionSelected = this.questions[this.questionIndex];
    }else{
      this.finished = true;
    }
  }

}
