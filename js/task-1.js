// const categoriesList = document.getElementById("categories");
// const categoryItems = categoriesList.querySelectorAll(".item");

// console.log(`Total categories: ${categoryItems.length}`);

// categoryItems.forEach((categoryItem) => {
//   const categoryName = categoryItem.querySelector("h2").textContent;
//   const categoryItemsCount = categoryItem.querySelectorAll("ul > li").length;

//   console.log(`Category: ${categoryName}`);
//   console.log(`Number of items: ${categoryItemsCount}`);
// });

// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
// елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

// Наведено список людей. Зроби можливість сортування списку за ім'ям та за прізвищем.

// const persons = document.querySelector(".person");
// const sortByNameButton = document.getElementById("sortByNameButton");
// const sortByLastNameButton = document.getElementById("sortByLastNameButton");

// sortByNameButton.addEventListener("click", onClickNameBtn);
// // sortByLastNameButton.addEventListener("click", onClickLastNameBtn);

// function onClickNameBtn() {
//   const Allpeople = persons.children;
//   const sortedNames = [...allPeople].toSorted((firstElement, secondElement) =>
//     firstElement.textContent.LocaleCompare(secondElement.textContent)
//   );

//   Allpeople.innerHTML = "";
//   Allpeople.append(...sortedNames);
// }

// Наведено список людей.
// Зроби можливість фільтрації (пошуку) за ім'ям або за прізвищем.

// const contacts = document.querySelector(".contacts");
// const input = document.querySelector(".contactsFilter");
// const items = [...contacts.children];

// input.addEventListener("input", onInput);

// function onInput(event) {
//   const value = event.target.value;
//   console.log(value);

//   const filteredItems = [...items].filter((item) =>
//     item.textContent.includes(value)
//   );

//   contacts.innerHTML = "";

//   contacts.append(...filteredItems);
// }
