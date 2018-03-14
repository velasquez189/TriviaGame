var trivia = [
{
    trivia1: "What is my name?",
    options: ["Laura", "Karen", "Andrea", "Marcela"],
    answer: "Andrea",
    userPick: " "
},
{
    trivia2: "How old am I?",
    options: ["7", "29", "32", "100"],
    answer: "29",
    userPick: " "
},
{
    trivia3: "Where do I live?",
    options: ["Kennesaw", " Woodstock", " Midtown", " Atlanta"],
    answer: "Kenensaw",
    userPick: " "
}
]

$(".question").text(trivia[0].trivia1);
$(".hello").text(trivia[1].trivia2);
$(".again").text(trivia[2].options);
// $(".question").text(trivia[2].answer);







