import wordsDB from "./words.js";

const originalWord = document.getElementById('original_word');
const spellingRomaji = document.getElementById('spelling_romaji');
const engTranslation = document.getElementById('eng_translation');

let allWords = wordsDB.words;

function pickRandomWordFrom(words) {
  if (words.length) {
    const pickedWordIdx = Math.floor(Math.random() * words.length);
    return words.splice(pickedWordIdx, 1)[0];
  }
}

window.hideOrShowElement = function hideOrShowElement(elementID, currElem) {
  const elem = document.getElementById(elementID);
  if(elem.hasAttribute('hidden')) {
    elem.removeAttribute('hidden');
    elem.className = "";
    currElem.innerText = "Hide";
  } else {
    elem.setAttribute('hidden', true);
    elem.className = "hidden";
    currElem.innerText = "Show";
  }
}

window.renderRandomWord = function renderRandomWord() {
  const pickedWord = pickRandomWordFrom(allWords);
  if (pickedWord) {
    originalWord.innerText = pickedWord.original;
    spellingRomaji.innerText = pickedWord.spelling_romaji;
    engTranslation.innerText = pickedWord.eng_translation;
  } else {
    alert("No words left")
  }
}
