//Declare Global Variables
var questionCounter = 0;
var time = 30;
var intervalId;

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

//Questions for trivia game
var questions =
    [
        {
            question: 'Which book series was turned into a movie franchise starring Daniel Radcliffe, Emma Watson, and Rupert Grint?',
            answer1: 'The Lord of the Rings',
            answer2: 'Harry Potter',
            answer3: 'The Lord of the Rings',
            answer4: 'Twilight',
            correctAnswer: 'Harry Potter',
            image: "assets/images/harrypotter.jpg",
        },
        {
            question: 'What is the name of the first Hunger Games movie?',
            answer1: 'The Hunger Games',
            answer2: 'The Hunger Games: Catching Fire',
            answer3: 'The Hunger Games: Mockingjay – Part 1',
            answer4: 'The Hunger Games: Catching Fire ',
            correctAnswer: 'The Hunger Games',
            image: "assets/images/hungergames.jpg",
        },
        {
            question: 'Kate Winslet played Rose in Titanic, but who was the leading man?',
            answer1: 'Leonardo DiCaprio',
            answer2: 'Tom Cruise',
            answer3: 'Brad Pitt',
            answer4: 'George Clooney',
            correctAnswer: 'Leonardo DiCaprio',
            image: "assets/images/leonardo-dicaprio.jpg",
        },
        {
            question: 'What’s the name of the latest DC Extended Universe movie, starring Ben Affleck, Gal Gadot, and Henry Cavill?',
            answer1: 'Justice League',
            answer2: 'Suicide Squad',
            answer3: 'Batman Begins',
            answer4: 'Avengers: Infinity War',
            correctAnswer: 'Justice League',
            image: "assets/images/justiceleague.jpg",
        },
        {
            question: 'Who sang the songs “Crazy in Love” and “Drunk in Love?"',
            answer1: 'Pink',
            answer2: 'Rihanna',
            answer3: 'Beyoncé',
            answer4: 'Justin Bieber',
            correctAnswer: 'Beyoncé',
            image: "assets/images/beyonce",
        }
    ]

//Display trivia questions
function displayQuestion() {
    //Set specific time every 1s run decrement function
    intervalId = setInterval(decrement, 1000);
    function decrement() {
        time--;
        $('.timer').text(time);

        //Stop timer once it reaches 0s and alert user is out of time
        if (time <= 0) {
            clearInterval(intervalId);
            alert('Out of time!')

            //Refresh page
            location.reload();
        }
    };

    //Display question object
    $('#question').text(questions[questionCounter].question);
    //Display answer property
    $('.answer1').text(questions[questionCounter].answer1);
    $('.answer2').text(questions[questionCounter].answer2);
    $('.answer3').text(questions[questionCounter].answer3);
    $('.answer4').text(questions[questionCounter].answer4);
}
//Check if answer is correct
function correct() {
    correctAnswers++;
    questionCounter++;
    clearInterval(intervalId);
    if (questionCounter == questions.length) {
        $('#question').text('');
        $('.answer1').text('Correct Answer: ' + correctAnswers);
        $('.answer2').text('Wrong Answer: ' + wrongAnswers);
        $('.answer3').text('No Answer: ' + unAnswered);
        $('.answer4').text('');

    } else {
        displayQuestion();
    }
}
//Check if answer is wrong
function wrong() {
    wrongAnswers++;
    questionCounter++;
    clearInterval(intervalId);
    if (questionCounter == questions.length) {
        $('#question').text('');
        $('.answer1').text('Correct Answer: ' + correctAnswers);
        $('.answer2').text('Wrong Answer: ' + wrongAnswers);
        $('.answer3').text('UnAnswered: ' + unAnswered);
        $('.answer4').text('');

    } else {
        displayQuestion();
    }
}

//Answer buttons click handler
$('.button').click(function () {
    //this references button clicked on
    if ($(this).text() == questions[questionCounter].correctAnswer) {
        correct();

    } else {
        wrong();
    }
})

//Callback function runs after action is complete
//Waiting for HTML to load
$(document).ready(function () {
    //timerText to hide button
    $('.timerText').hide();
    //startButton click handler
    $('#startButton').click(function () {
        $('#startButton').hide();
        //timerText to show button
        $('.timerText').show();
        displayQuestion();
    })
})

