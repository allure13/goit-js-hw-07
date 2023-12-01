const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll(".item");

console.log(`Total categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
  const categoryName = categoryItem.querySelector("h2").textContent;
  const categoryItemsCount = categoryItem.querySelectorAll("ul > li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Number of items: ${categoryItemsCount}`);
});

// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
// елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
