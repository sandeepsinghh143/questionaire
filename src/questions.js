import pdf from "./assets/pdf.png"
import html from "./assets/html.png"
import css from "./assets/css.png"

const lesson =[
    {
        id:"1",
        questionType:"free choice",
        question:"5+4=?",
        correctAnswer:9,
        flag:false,
        userAns:"",
        attempts:6
    },
    {
        id:"2",
        questionType:"fill blank",
        question:"Complete the pattern.",
        correctAnswer:[346,348],
        answerPattern:"345 _ _ 350",
        flag:false,
        userAns:["",""],
        attempts:6
    },
    {
        id:"3",
        questionType:"matrix sorting",
        question:"Sort the elements in correct order.",
        correctAnswer:["PDF", "HTML", "CSS"],
        options:[pdf, html, css],
        answerOptions:["CSS","PDF", "HTML"],
        flag:false,
        userAns:[],
        attempts:6
    },
    {
        id:"4",
        questionType:"Sorting",
        question:"Sort the options in correct order.",
        correctAnswer:["A","B","C","D"],
        flag:false,
        userAns:["B","D","A","C"],
        attempts:6
    },
    {
        id:"5",
        questionType:"single choice",
        question:"Choose the right option.",
        correctAnswer:"Correct",
        options:["Incorrect", "Correct"],
        flag:false,
        userAns:"",
        attempts:6
    },
    {
        id:"6",
        questionType:"multiple choice",
        question:"Select the numbers that are divisible by 2.",
        correctAnswer:[2,4,6],
        options:[2,3,5,4,6],
        flag:false,
        userAns:[],
        attempts:6
    }
]

export default lesson;