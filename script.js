const words = [
    { word: "Photosynthesis", definition: "The process by which green plants use sunlight to synthesize foods with the help of chlorophyll.", formula: "6CO2 + 6H2O → C6H12O6 + 6O2" },
    { word: "Gravity", definition: "The force that attracts a body toward the center of the earth.", formula: "F = G * (m1*m2)/r^2" },
    { word: "Acceleration", definition: "The rate of change of velocity of an object.", formula: "a = (v_f - v_i) / t" },
];

let currentWordIndex = 0;

function showWord() {
    const wordElement = document.getElementById('word');
    wordElement.textContent = words[currentWordIndex].word;
    document.getElementById('definition').classList.add('hidden');
    document.getElementById('formula').classList.add('hidden');
    document.getElementById('userDefinition').value = '';
    document.getElementById('userFormula').value = '';
}

function checkAnswer() {
    const userDefinition = document.getElementById('userDefinition').value;
    const userFormula = document.getElementById('userFormula').value;
    const correctDefinition = words[currentWordIndex].definition;
    const correctFormula = words[currentWordIndex].formula;

    const definitionResult = userDefinition.toLowerCase() === correctDefinition.toLowerCase();
    const formulaResult = userFormula === correctFormula;

    document.getElementById('definition').textContent = definitionResult ? "Correct!" : `Incorrect! Correct: ${correctDefinition}`;
    document.getElementById('formula').textContent = formulaResult ? "Correct!" : `Incorrect! Correct: ${correctFormula}`;

    document.getElementById('definition').classList.remove('hidden');
    document.getElementById('formula').classList.remove('hidden');
}

document.getElementById('checkButton').addEventListener('click', checkAnswer);
document.getElementById('nextButton').addEventListener('click', () => {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    showWord();
});

showWord();
