const resultOfItems = Array.from (document.getElementsByClassName("item"));
console.log(`Number of categories: ${resultOfItems.length}`);

resultOfItems.forEach(function (item){
    const title = item.querySelector("h2").textContent;
    console.log(`Category:${title}`);
    const categoriesName = item.querySelectorAll("ul > li");
    console.log(`Elements:${categoriesName.length}`);
})









