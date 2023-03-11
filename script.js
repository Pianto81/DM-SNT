function reveal() {
    document.getElementById('console').classList.toggle('quiz');
    document.getElementById('console').classList.toggle('hide'); 
};

var score = 0;
var scoring = 0;
// Questions will be asked
const Questions = [{
    id: 0,
    q: "Quelle est la date de naissance de Katie Bouman ?",
    a: [{ text: "5 septembre 2012", isCorrect: false },
        { text: "31 août 2006", isCorrect: false },
        { text: "9 mai 1989", isCorrect: true },
        { text: "23 août 1969", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Quel est le jour de publication de la première image d'un trou noir ?",
    a: [{ text: "10 septembre 2015", isCorrect: false, isSelected: false },
        { text: "10 avril 2019 ", isCorrect: true },
        { text: "", isCorrect: false },
        { text: "23 septembre 2018", isCorrect: false }
    ]

},
{
    id: 2,
    q: "En quelle Katie Bouman devient responsable du CHIRP ?",
    a: [{ text: "1915", isCorrect: false },
        { text: "2045", isCorrect: false },
        { text: "2002", isCorrect: false },
        { text: "2016", isCorrect: true }
    ]

},
{
    id: 3,
    q: "Quel volume de données peut traiter le CHIRP ?",
    a: [{ text: "4 pétaoctets", isCorrect: true},
        { text: "404 mégaoctets", isCorrect: false },
        { text: "34 téraoctets", isCorrect: false },
        { text: "1 zétaoctet", isCorrect: false },
    ]
}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "navy";
    op2.style.backgroundColor = "cadetblue";
    op3.style.backgroundColor = "cadetblue";
    op4.style.backgroundColor = "cadetblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "cadetblue";
    op2.style.backgroundColor = "navy";
    op3.style.backgroundColor = "cadetblue";
    op4.style.backgroundColor = "cadetblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "cadetblue";
    op2.style.backgroundColor = "cadetblue";
    op3.style.backgroundColor = "navy";
    op4.style.backgroundColor = "cadetblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "cadetblue";
    op2.style.backgroundColor = "cadetblue";
    op3.style.backgroundColor = "cadetblue";
    op4.style.backgroundColor = "navy";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");


// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        scoring = 1;
        result[0].innerHTML = "Réponse juste !";
        result[0].style.color = "green";
        evaluate[0].disabled = true;
    } else {
        scoring=0;
        result[0].innerHTML = "Réponse fausse";
        result[0].style.color = "red";
        evaluate[0].disabled = true;
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {

if (id < 3) {
    start = false;
    id++;
    iterate(id);
    console.log(id);
    document.getElementsByClassName("evaluate")[0].disabled = false;
    if (scoring == 1) {
        score++;
    }
    if (scoring == 0) {
        score--;
        if (score < 0) {
            score = 0
        }
    }

} else {
    if (scoring == 1) {
        score++;
    }
    if (scoring == 0) {
        score--;
        if (score < 0) {
            score = 0
        }
    }
    document.getElementsByClassName("result")[0].innerText="score : "+score+"/4";
}

})


