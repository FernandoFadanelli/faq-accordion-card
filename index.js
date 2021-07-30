var previousFaq = "";

// Hide all answers
$(".answer").hide();

// Add a click event listener to all FAQ and show/hide answers and bold questions
$(".question-container").on("click", function(e) {
  var faqNumber = $(this).attr("class").split(/\s+/)[1];

  boldQuestion(faqNumber);
  arrowDirection(faqNumber);
  showAnswer(faqNumber);

  previousFaq = faqNumber;

})

// Bold the question
function boldQuestion (faqNumber) {
  var currentQuestion = "." + faqNumber + " h2";
  var previousQuestion = "." + previousFaq + " h2";

  if (previousFaq === "") {
    $(currentQuestion).addClass("bold");
  }
  else if (previousFaq === faqNumber) {
    $(currentQuestion).removeClass("bold");
  }
  else {
    $(currentQuestion).addClass("bold");
    $(previousQuestion).removeClass("bold");
  }
}

// Rotate arrow up
function arrowDirection (faqNumber) {
  var currentArrow = "." + faqNumber + " img";
  var previousArrow = "." + previousFaq + " img";

  if (previousFaq === "") {
    $(currentArrow).addClass("arrow-up");
  }
  else if (previousFaq === faqNumber) {
    $(currentArrow).removeClass("arrow-up");
  }
  else {
    $(currentArrow).addClass("arrow-up");
    $(previousArrow).removeClass("arrow-up");
  }
}

// Show answer
function showAnswer(faqNumber) {
  var currentAnswer = ".p-" + faqNumber;
  var previousAnswer = ".p-" + previousFaq;

  if (previousFaq === "") {
    $(currentAnswer).slideDown();
  }
  else if (previousFaq === faqNumber) {
    $(currentAnswer).slideToggle();
  }
  else {
    $(previousAnswer).slideUp();
    $(currentAnswer).slideDown();
  }
}
