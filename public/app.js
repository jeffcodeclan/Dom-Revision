window.onload = function(){
  main();
};

var main = function(){

  quotes = [{text: "This is a quote1.", author: "Jeff"},
  {text: "This is a quote2.", author: "Jeff2"}
];


var qotd = document.getElementById('quote-of-the-day');
console.log(qotd.children[1].innerText);

var buttons = document.getElementsByTagName('button');
console.log(buttons[0]);

var quotes = document.getElementsByClassName('quote');
var lastQuote = quotes[quotes.length-1];

console.log(lastQuote.innerText);

qotd.style.visibility = 'hidden';
qotd.hidden = true;

// var articles = document.getElementsByTagName('article');
//   for (var i =0; i < articles.length; i++){
//     articles[i].style.backgroundColor = 'grey';

var loadQuotes = function(){
  for (i = 0; i< quotes.length; i++) {
    li = document.createElement('li');
    li.innerText = quotes[i].text + " by: " + quotes[i].author;
  }
};

  createQuote();

  function createQuote(){
  var quoteArticle = document.createElement('article');
  quoteArticle.classList.add('quote');

  var blockQuote = document.createElement('blockquote');
  blockQuote.innerText = "Open the pod bay doors Al ";

  var cite = document.createElement('cite');
  cite.innerText = "Dave";

  blockQuote.appendChild(cite);

  quoteArticle.appendChild(blockQuote);

  var quotes = document.querySelector('#quotes');
  quotes.appendChild(quoteArticle);
}

var example_click_handler = function (ev){
  var objKind = (ev instanceof Event) ? "EventPrototype" : "ObjectPrototype";
  alert("Jeff Says stop pressing button man! " );
};

var buttonDOMElement = document.querySelector('#buttonOne');
buttonDOMElement.addEventListener('click', example_click_handler);var funcInit = function(){

};
document.addEventListener('DOMContentLoaded', funcInit);
};

function myFunction() {
  var x = document.getElementById("fname").value;
  document.getElementById("demo").innerHTML = x;

  var quotes = ["quote 1 by Mr J Lloyd", "quote 2 by Mr Not J Lloyd", "quote 3 by Mr Could be J Lloyd", "quote 4 by Mrs J Lloyd "];
  document.getElementById("array").innerHTML = quotes.sort(" * ");


  document.getElementById("myBtn").addEventListener("click", displayDate);

  function displayDate() {
    document.getElementById("d").innerHTML = Date();

    var x = document.getElementById("myBtn");
    // x.addEventListener("mouseover", myFunction);
    x.addEventListener("click", mySecondFunction);
    x.addEventListener("mouseout", myThirdFunction);

    // function myFunction() {
    //     document.getElementById("demo").innerHTML += "Moused over!<br>";
    // }

    function mySecondFunction() {
      document.getElementById("demo").innerHTML += "Clicked!<br>";
    }

    function myThirdFunction() {
      document.getElementById("demo").innerHTML += "Moused out!<br>";
    }

    // function myFunction() {
    //     var x = document.getElementById("Uppername");
    //     x.value = x.value.toUpperCase();
    // }

    var loadQuotes = function(){
      for (i = 0; i< quotes.length; i++) {
        li = document.getElementsById('array')('li');
        li.innerText = quotes[i].text + " by: " + quotes[i].author;
      }

    };

  }
}
