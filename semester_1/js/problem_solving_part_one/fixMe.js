function calculateScore(score) {
    const scored = score;
    switch (true) {
        case scored == 100:
            return {
                message: "perfect",
                status: "perfect-status"
            };
            break;

        case scored >= 90:
            return {
                message: "excelent",
                status: "excelent-status"
            };
            break;

        case scored >= 80:
            return {
                message: "very good",
                status: "very-good-status"
            };
            break;

        case scored >= 70:
            return {
                message: "good",
                status: "good-status"
            };
            break;

        case scored >= 60:
            return {
                message: "ok",
                status: "ok-status"
            };
            break;

        case scored >= 50:
            return {
                message: "just passed",
                status: "not-bad-status"
            };
            break;

        case scored < 50:
            return {
                message: "Bad",
                status: "bad-status"
            };
            break;
    }
}
function studentRecords(student, score) {
    if (!score) {
        return "Please provide your name and score";
    }
    const studentScore = calculateScore(score);
    return `Hi ${student} you have scored: ${score} you have a ${studentScore.status}`;
}

console.log(studentRecords(76)); // Please provide your name and score
console.log(studentRecords("Hindreen")); // Please provide your name and score
console.log(studentRecords("John", 43)); // Hi John you have scored: 43 you have a bad-status
console.log(studentRecords("Julian", 53)); // Hi Julian you have scored: 53 you have a not - bad - status
console.log(studentRecords("Aryan", 65)); // Hi Aryan you have scored: 65 you have a ok - status
console.log(studentRecords("Roman", 75)); // Hi Roman you have scored: 75 you have a good - status
console.log(studentRecords("Herman", 88)); // Hi Herman you have scored: 88 you have a very - good - status
console.log(studentRecords("Lola", 90)); // Hi Lola you have scored: 92 you have a excelent - status
console.log(studentRecords("David", 100)); // Hi David you have scored: 100 you have a perfect - status