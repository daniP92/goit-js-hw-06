const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((element) => {
  const categoryName = element.firstElementChild.textContent;
  console.log(`Category: ${categoryName}`);

  const categoryElements = element.lastElementChild.children.length;
  console.log(`Elements: ${categoryElements}`);
});
