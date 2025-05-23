const parent = document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children);

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}

// Basic Way to create a new element in a list
function addLang(langName){
    // 1. Create List item
    const listItem = document.createElement('li');
    listItem.innerHTML = `${langName}`;

    // 2. Select ul
    const ul = document.querySelector('.language');

    // 3. Append in it
    ul.appendChild(listItem);
}

addLang("C++")
addLang("Java")
addLang("Python")
addLang("TypeScript")

// Optimised way to create a new element in a list
function addOptimisedLanguage(langName){
    const listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(listItem);
}

addOptimisedLanguage("GoLang");
addOptimisedLanguage("Rust");

// EDIT
const thirdLang = document.querySelector("li:nth-child(3)");
console.log(thirdLang);

// thirdLang.innerHTML = "Kotlin";
const newLi = document.createElement('li');
console.log(newLi);

newLi.textContent = "Kotlin";
thirdLang.replaceWith(newLi);

const firstLang = document.querySelector('li:nth-child(1)')
firstLang.outerHTML = '<li>Swift</li>'

// REMOVE
const lastLang = document.querySelector('li:last-child')
lastLang.remove()