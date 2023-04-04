var viewHigh = document.querySelector('#viewHighScore');
var secondsLeft = document.querySelector('#data-seconds');
var theQuestion = document.querySelector('#question');
var StartButton = document.querySelector('#startBtn');
var answerList = document.querySelector('#data-ans');
var liEl1 = document.querySelector('#answer-1')
var liEl2 = document.querySelector('#answer-2')
var liEl3 = document.querySelector('#answer-3')
var liEl4 = document.querySelector('#answer-4')
var questionsList = ["An array index starts with __ count","This is an example of ___ for(var i=0;< i<example.length;i++","var Person = {firstName: 'john', lastname: 'doe', age:'50';};... Is an example of javascript __","textContent does what?","what does document.getElementById do?","the local storage is a read only property of the __ interface","string length(), string toLoweCase(), string trim() are all string ____"] ;
var myAnswers= [
    [0,1,2],
    ["A:funtion","B:for loop","C:logic"],
    ["A:variable","B:object","C:function"],
    ["A:Returns just the text content of the element and all its children, without CSS hidden text spacing and tags, except <script> and <style> elements.","B: return the text content of the element, including all spacing and inner html tags","C: The text content of the element and all descendaces, with spacing and CSS hidden text, but without tags. "],
    ["A: changes the element color","B: get the element by class","C: get the element by ID"],
    ["A: Window","B:Html","C: Chrome"],
    ["A: Json Methods","B: String Methods","C: Html Method"],
]
var highScoreInput = "";
function QuesAns() {
    var pageQuest = '';
    if (questionsList[0]== pageQuest)

}