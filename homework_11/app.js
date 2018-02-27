var rootNode = document.getElementById("root");
const div = document.createElement("div");

function createTree(array, parentNode) {
    array.forEach(element => {
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const p = document.createElement("p");
        if (element.folder) {
            p.innerHTML = element.title;
            li.appendChild(p);
            p.className = "folder folder_close";
            ul.appendChild(li);
            parentNode.appendChild(ul);
            if (element.children) {
                return createTree(element.children, li);
            } else {
                const liEmpty = document.createElement("li");
                const ulempty = document.createElement("ul");
                liEmpty.innerHTML = "folder is empty";
                ulempty.appendChild(liEmpty);
                li.appendChild(ulempty);
            }
        } else {
            p.innerHTML = element.title;
            li.appendChild(p);
            p.className = "file";
            ul.appendChild(li);
            parentNode.appendChild(ul);
            element.children && createTree(element.children, li);
        }
    });
    return parentNode;
}

rootNode.addEventListener("click", ({ target }) => {
    if (/folder/.test(target.className)) {
        target.classList.toggle("folder_close");
        target.classList.toggle("folder_open");
    }
});

rootNode.appendChild(createTree(structure, div));
