export interface Question {
    label: string;
    answerA: string;
    answerB: string;
    answerC: string;
    answerD: string;
    correctAnswer: string;
  }

export class Quizz {
    name: string;
    questions: Question[] = [];
}
