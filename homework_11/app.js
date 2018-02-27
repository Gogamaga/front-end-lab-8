const rootNode = document.getElementById("root");
const div = document.createElement("div");

function createTree(array, parentNode) {
    array.forEach(({ title, folder, children }) => {
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = title;
        li.appendChild(p);
        p.className = folder ? "folder folder_close" : "file";
        ul.appendChild(li);
        parentNode.appendChild(ul);
        if (children) {
            return createTree(children, li);
        } else if (!children && folder) {
            const liEmpty = document.createElement("li");
            const ulempty = document.createElement("ul");
            liEmpty.innerHTML = "folder is empty";
            ulempty.appendChild(liEmpty);
            li.appendChild(ulempty);
        }
    });
    return parentNode;
}

rootNode.addEventListener("click", ({ target }) => {
    /folder/.test(target.className) && target.classList.toggle("folder_close");
    target.classList.toggle("folder_open");
});
rootNode.appendChild(createTree(structure, div));
