const createElement = (tag, attr, ...child) => {
    const element = document.createElement(tag);
    for (key in attr) {
        element.setAttribute([key], attr[key]);
    }
    child.forEach(elem => {
        typeof elem === "string" || typeof elem === "number"
            ? element.appendChild(document.createTextNode(elem))
            : element.appendChild(elem);
    });
    return element;
};

const root = document.querySelector("#root");

const createTankItem = ({ preview, country_image, model, level, country }) => {
    const tankImage = createElement("img", { class: "item__image", src: preview });
    const countryImage = createElement("img", {
        class: "item__info-country-image",
        src: country_image,
        title: country
    });
    const tankDescription = createElement(
        "span",
        { class: "item__info-description", title: model },
        `${level} ${model.length > 14 ? model.slice(0, 11) + "..." : model}`
    );
    const divInfo = createElement("div", { class: "item__info" }, countryImage, tankDescription);
    const tankItem = createElement(
        "div",
        { class: "item", "data-hash": `${model.replace(/\s/g, "_")}` },
        tankImage,
        divInfo
    );
    return tankItem;
};

const createTankList = tanks => {
    const tankList = tanks.map(tank => createTankItem(tank));
    const heading = createElement("h2", null, "Most popular tank");
    return createElement("div", { class: "tank-list__wrap" }, heading, ...tankList);
};

//Tank Details
const createTableCharacteristic = tank => {
    const tbody_tr = createElement("tr", { class: "table__tbody-tr" });
    const thead_tr = createElement("tr", { class: "table__thead-tr" });
    for (let key in tank) {
        const tbody_th = createElement("th", { class: "table__tbody-th" }, tank[key]);
        tbody_tr.appendChild(tbody_th);
        const thead_th = createElement("th", { class: "table__thead-th" }, key.replace(/_/g, " "));
        thead_tr.appendChild(thead_th);
    }
    const tbody = createElement("tbody", { class: "table__tbody" }, tbody_tr);
    const thead = createElement("thead", { class: "table__thead" }, thead_tr);
    const table = createElement("table", { class: "table" }, thead, tbody);
    return table;
};

const createTankDetails = ({ model, preview, country, country_image, level, details }) => {
    const countryImage = createElement("img", {
        class: "tank-details__country-image",
        src: country_image,
        title: country
    });
    const tankModel = createElement(
        "h2",
        { class: "tank-details__model" },
        `${model.toUpperCase()} (level ${level})`
    );
    const heading = createElement(
        "div",
        { class: "tank-details__heading" },
        countryImage,
        tankModel
    );
    const tankImage = createElement("img", { class: "item__image", src: preview });
    const headingPreview = createElement("h3", null, "Preview");
    const divPreview = createElement(
        "div",
        { class: "tank-details__preview" },
        headingPreview,
        tankImage
    );
    const headingCharacteristic = createElement("h3", null, "Characteristic");
    const divCharacteristic = createElement(
        "div",
        { class: "tank-details__characteristic" },
        headingCharacteristic,
        createTableCharacteristic(details)
    );
    const linkBackToList = createElement("a", { class: "link", href: "" }, "Back to list view");
    return createElement(
        "div",
        { class: "tank-details-wrap" },
        heading,
        divPreview,
        divCharacteristic,
        linkBackToList
    );
};

root.addEventListener("click", e => {
    e.preventDefault();
    const { target } = e;
    if (/item/.test(target.className)) {
        const hash = target.closest(".item").dataset.hash;
        location.hash = hash;
    } else if (target.className === "link") {
        location.href = location.href.slice(0, location.href.indexOf("#"));
    }
});

window.addEventListener("hashchange", ({ newURL }) => {
    renderPage(newURL);
});

window.addEventListener("load", e => {
    renderPage(location.href);
});
const renderPage = url => {
    const ind = url.indexOf("#");
    if (ind === -1) {
        const page = createTankList(tanks);
        root.firstElementChild
            ? root.replaceChild(page, root.firstElementChild)
            : root.appendChild(page);
    } else {
        const hash = url.slice(ind + 1).replace(/_/g, " ");
        const tank = tanks.reduce((prev, tank) => {
            tank.model === hash && (prev = tank);
            return prev;
        });
        const page = createTankDetails(tank);
        root.firstElementChild
            ? root.replaceChild(page, root.firstElementChild)
            : root.appendChild(page);
    }
};
