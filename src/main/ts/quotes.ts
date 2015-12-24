
export class Quote {
    
    quote:string
    question:string
    correctAnswer:string
    
    constructor(quote:string, question:string, 
                correctAnswer:string) {
        this.quote = quote
        this.question = question
        this.correctAnswer = correctAnswer
    }
    
}