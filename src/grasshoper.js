// basic styles
const style = document.createElement("style");
style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
  font-size: 16px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  line-height: 1;
  font-family: 'Roboto', sans-serif;
  user-select: none;
}
*::before, *::after {
  box-sizing: border-box;
}
::selection {
  background-color: #46F5A055;
}
#root p {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8px;
}
#root p:last-child {
  margin-bottom: 0;
}
#root p .content {
  outline: 0 solid transparent;
  transition: .15s ease;
  cursor: pointer;
}
#root p .content:hover {
  outline: 3px solid #46F5A055;
  background-color: #46F5A030;
}
#root p .content:active {
  transform: scale(1.05);
}
#root p span {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Source Code Pro', monospace;
}
#root p span:first-child {
  cusror: default;
  color: rgba(255, 255, 255, 0.4);
  margin-right: 8px;
  font-size: 18px;
  user-select: none;
}
#root .title {
  color: #46F5A0;
  font-size: 20px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #46F5A030;
}
`;
document.head.appendChild(style);
// styles for root element
const bg = "#00324B";
const green = "#46F5A0";
const root = document.getElementById("root");
root.style.backgroundColor = bg;
root.style.padding = "16px";
root.style.margin = "8px";
root.style.boxShadow = "0 0 17px 8px rgba(0, 0, 0, 0.15)";
root.style.borderRadius = "4px";
root.insertAdjacentHTML("afterbegin", '<div class="title">Result</div>');
// defined functions
function println(content) {
  document;
  root.insertAdjacentHTML(
    "beforeend",
    `<p><span>&gt;</span><span class="content" onclick="navigator.clipboard.writeText(this.textContent); window.alert('Copied to clipboard')">${content}</span></p>`
  );
  return;
}
function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}
