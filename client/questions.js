export function randomQuestion() {
    return Questions[Math.trunc(Math.random()*Questions.length)];
}

export function isCorrectAnswer(question, answer) {
    return question.correct_answers[answer + "_correct"] === "true";
}

export const Question =
    [{hei}]