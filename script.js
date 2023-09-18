// Get references to the buttons and content divs
const tab1Button = document.getElementById("tab1");
const tab2Button = document.getElementById("tab2");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");

// Add click event listeners to the buttons
tab1Button.addEventListener("click", () => {
  content1.style.display = "block";
  content2.style.display = "none";
  tab1Button.classList.add("active");
  tab2Button.classList.remove("active");
});

tab2Button.addEventListener("click", () => {
  content1.style.display = "none";
  content2.style.display = "block";
  tab1Button.classList.remove("active");
  tab2Button.classList.add("active");
});

// Initially, show content 1 and make tab 1 active
content1.style.display = "block";
content2.style.display = "none";
tab1Button.classList.add("active");
tab2Button.classList.remove("active");

// copy div content

function copyToClipboard() {
  const copyText = document.getElementById("copyDiv"); // Get the div element
  const textToCopy = copyText.innerText; // Get the text to copy

  // Create a temporary textarea to hold the text to copy
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);

  // Select and copy the text in the textarea
  tempTextArea.select();
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(tempTextArea);

  // You can add a visual cue here to indicate that the text has been copied
  alert("Text copied to clipboard: " + textToCopy);
}
