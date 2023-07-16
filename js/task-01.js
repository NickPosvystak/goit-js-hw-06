const categoriesList = document.querySelector("#categories");

const categoriesItems = document.querySelectorAll(".item");

const numberOfCategories = categoriesItems.length;
console.log(`Number of categories: ${numberOfCategories}`);

categoriesItems.forEach((categoriesItem) => {
  const categoryTitle = categoriesItem.querySelector("h2").textContent;

  const elemenst = categoriesItem.querySelectorAll("li");

  const numberOfCategories = elemenst.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elemens: ${numberOfCategories}`);
});
