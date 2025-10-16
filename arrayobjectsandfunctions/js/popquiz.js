"use strict";

const qa =  [
        {
            question: "What is the largest land animal?",
            answer: "Elephant"
        },
        {
            question: "Which animal is known as the king of the jungle?",
            answer: "Lion"
        },
        {
            question: "What mammal can fly?",
            answer: "Bat"
        },
        {
            question: "Which animal is famous for its black and white stripes?",
            answer: "Zebra"
        },
        {
            question: "What is the fastest land animal?",
            answer: "Cheetah"
        }
    ];//array of objects

    console.log(qa.length);
    console.log(qa[0].question);
    console.log(qa[0].answer);

    //let questionPop = qa.pop();
    let questionPop = getQuestion();
    console.log(questionPop);
    console.log(qa.length);


    function getQuestion(){

        let popQuestion = qa.pop();
        return popQuestion;
    }