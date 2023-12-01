function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const body = document.body;
const span = document.querySelector(".color");

const onButtonClick = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
};

button.addEventListener("click", onButtonClick);

// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color
// і задає це значення кольору текстовим вмістом для span.color.

// Фон на <body> задається тільки після кліку на button.change-color
// При кожному кліку на елемент button.change-color фон <body> зафарбовується новим рандомним кольором
// На <body> і span.color значення одного й того самого кольору
