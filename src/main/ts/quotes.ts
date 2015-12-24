
export class Quote {
    
    quote:string
    author:string
    question:string
    correctAnswer:string
    
    constructor(quote:string, author:string, question:string, 
                correctAnswer:string) {
        this.quote = quote
        this.author = author
        this.question = question
        this.correctAnswer = correctAnswer
    }
    
}