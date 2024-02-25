const reultOfItems = document.getElementsByClassName("item");
console.log(`Number of categories: ${reultOfItems.length}`);

const titles = document.querySelectorAll("h2");
console.log(titles);
titles.forEach(function (title){
    const titleName = title.textContent;
    console.log(`Category: ${titleName}`);
    const categoriesName = document.querySelectorAll("ul>li");
    console.log(`Elements: ${categoriesName.length}`);
})









