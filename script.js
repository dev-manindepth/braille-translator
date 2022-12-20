const inputContainer = document.querySelector(".input");
const outputContainer = document.querySelector(".output");
const errorContainer = document.querySelector(".error");
const translateBtn = document.querySelector(".btn-translate");

const serverURL = "https://api.funtranslations.com/translate/braille.json";

const translate = (searchText) => {
  errorContainer.textContent = "";
  const url = `${serverURL}?text=${searchText}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return (outputContainer.textContent = data.contents.translated);
    })
    .catch((error) => (errorContainer.textContent = error.message));
};

translateBtn.addEventListener("click", () => {
  if (!inputContainer.value) {
    return (errorContainer.textContent = "Please enter some text");
  }
  translate(inputContainer.value);
});
