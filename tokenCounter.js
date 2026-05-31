function cleanText(text) {
  return text.trim();
}

function splitIntoWords(text) {
  return text.split(" ");
}

function removeEmptyWords(words) {
  return words.filter(function(word) {
    return word !== "";
  });
}

function estimateTokens(words) {
  return Math.ceil(words.length * 0.75);
}

function countTokens(text) {
  const cleaned = cleanText(text);
  const words = splitIntoWords(cleaned);
  const filtered = removeEmptyWords(words);
  return estimateTokens(filtered);
}

const inputText = document.getElementById("inputText");
const result = document.getElementById("result");

function updateTokenCount() {
  const tokenCount = countTokens(inputText.value);
  result.textContent = "Estimated tokens: " + tokenCount;
}

inputText.addEventListener("input", updateTokenCount);
updateTokenCount();
