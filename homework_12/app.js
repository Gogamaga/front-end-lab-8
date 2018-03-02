const createElement = (tag, attr, ...child) => {
    const element = document.createElement(tag);
    for (key in attr) {
        element.setAttribute([key], attr[key]);
    }
    child.forEach(elem => {
        typeof elem === "string"
            ? element.appendChild(document.createTextNode(elem))
            : element.appendChild(elem);
    });
    return element;
};

const root = document.querySelector("#root");

const createTankItem = ({ preview, country_image, model, level }) => {
    const tankImage = createElement("img", { class: "item__image", src: preview });
    const countryImage = createElement("img", {
        class: "item__info-country-image",
        src: country_image
    });
    const tankDescription = createElement(
        "span",
        { class: "item__info-description" },
        `${level} ${model.length > 14 ? model.slice(0, 11) + "..." : model}`
    );
    const divInfo = createElement("div", { class: "item__info" }, countryImage, tankDescription);
    const tankItem = createElement("div", { class: "item" }, tankImage, divInfo);
    return tankItem;
};

const createTankList = tanks => {
    const tankList = tanks.map(tank => createTankItem(tank));
    return createElement("div", { class: "tank-list__wrap" }, ...tankList);
};

root.appendChild(createTankList(tanks));

root.addEventListener("click", ({ target }) => {
    if (/item/.test(target.className)) {
        console.log("sdgg");
    }
});
