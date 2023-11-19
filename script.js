function findVowels() {
    const wordm = document.getElementById('userInput').value; // Fetch the value inside the function
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = {};

    const wordArray = wordm.split('');
    wordArray.forEach((char) => {
        if (vowels.includes(char.toLowerCase())) {
            // Converting the character to lowercase for case-insensitive matching
            // Incrementing the count for the vowel
            vowelCount[char] = (vowelCount[char] || 0) + 1;
        }
    });

    // Displaying the vowels and their number of occurrence
    let outputText = '';
    for (const vowel in vowelCount) {
        outputText += `${vowel}: ${vowelCount[vowel]} times\n`;
    }

    document.getElementById('outputs').textContent = outputText;
}
