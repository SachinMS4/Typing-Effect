let insertText = document.getElementById("text");

let text = "It works on my machine!";
let index = 0;

function writeText() {
  insertText.textContent = text.slice(0, index);

  index++;

  if (index > text.length) 
    return;
  setTimeout(writeText, 250);
};

writeText();
