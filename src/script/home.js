// import { data as homeData } from "../common/homeData";

const homeData = [
    {
        title: "Улс төр",
        category: "politic",
        items: [
            {
                imgSrc: "../assets/cardimg.png",
                section: {
                    title: "“АМАРГҮЙ” АМЛАГЧ",
                    description: "Тэр бол амлагч. “Шударга тав”-ын нэг.",
                },
            },
            {
                imgSrc: "../assets/cardimg.png",
                section: {
                    title: "“АМАРГҮЙ” АМЛАГЧ",
                    description: "Тэр бол амлагч. “Шударга тав”-ын нэг.",
                },
            },
            {
                imgSrc: "../assets/cardimg.png",
                section: {
                    title: "“АМАРГҮЙ” АМЛАГЧ",
                    description: "Тэр бол амлагч. “Шударга тав”-ын нэг.",
                },
            },
            {
                imgSrc: "../assets/cardimg.png",
                section: {
                    title: "“АМАРГҮЙ” АМЛАГЧ",
                    description: "Тэр бол амлагч. “Шударга тав”-ын нэг.",
                },
            },
        ],
    },
    {
        title: "Технологи",
        category: "technology",
        items: [
            {
                imgSrc: "../assets/cardimg.png",
                section: {
                    title: "Ангараг руу аялах тасалбарын үнэ 100 мянган доллар",
                    description:
                        "Элон Маскийн “SpaceX” компани ирээдүйд Ангараг гариг дээр бие даасан хот байгуулахаар төлөвлөж буй.",
                },
            },
            {
                imgSrc: "../assets/cardimg.png",
                section: {
                    title: "Ангараг руу аялах тасалбарын үнэ 100 мянган доллар",
                    description:
                        "Элон Маскийн “SpaceX” компани ирээдүйд Ангараг гариг дээр бие даасан хот байгуулахаар төлөвлөж буй.",
                },
            },
        ],
    },
    {
        title: "Спорт",
        category: "sport",
        items: [
            {
                imgSrc: "../assets/cardimg.png",
                section: {
                    title: "САГСАН БӨМБӨГИЙН ХОЛБООНЫ ШИНЭ ЕРӨНХИЙЛӨГЧ ТОДОРНО",
                    description:
                        "Монголын сагсан бөмбөгийн холбооны ээлжит бус өнөөдөр/2022.04.20/ болно.",
                },
            },
            {
                imgSrc: "../assets/cardimg.png",
                section: {
                    title: "САГСАН БӨМБӨГИЙН ХОЛБООНЫ ШИНЭ ЕРӨНХИЙЛӨГЧ ТОДОРНО",
                    description:
                        "Монголын сагсан бөмбөгийн холбооны ээлжит бус өнөөдөр/2022.04.20/ болно.",
                },
            },
            {
                imgSrc: "../assets/cardimg.png",
                section: {
                    title: "САГСАН БӨМБӨГИЙН ХОЛБООНЫ ШИНЭ ЕРӨНХИЙЛӨГЧ ТОДОРНО",
                    description:
                        "Монголын сагсан бөмбөгийн холбооны ээлжит бус өнөөдөр/2022.04.20/ болно.",
                },
            },
        ],
    },
];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const categoryType = urlParams.get("category");

const main = document.getElementById("main");

const categories = document.createElement("ul");
categories.className = "category";

const itemsContainer = document.createElement("div");
itemsContainer.className = "grid-container";

function renderItems(items = []) {
    var child = itemsContainer.lastElementChild;
    while (child) {
        itemsContainer.removeChild(child);
        child = itemsContainer.lastElementChild;
    }
    items.map((e, i) => {
        const card = document.createElement("div");
        card.className = "card";
        const img = document.createElement("img");
        img.src = e.imgSrc;
        img.alt = "contentImage" + (i + 1);

        const section = document.createElement("div");
        const title = document.createElement("h4");
        const bTag = document.createElement("b");
        const mTitle = document.createTextNode(e.section.title);
        bTag.appendChild(mTitle);
        title.appendChild(bTag);

        const description = document.createElement("p");
        description.appendChild(document.createTextNode(e.section.description));

        section.appendChild(title);
        section.appendChild(description);

        card.appendChild(img);
        card.appendChild(section);

        itemsContainer.appendChild(card);
    });
}

function onCategory(index) {
    const buttonList = document.querySelectorAll("button");
    buttonList.forEach((e, i) => {
        i === index
            ? (e.style.backgroundColor = "blue")
            : (e.style.backgroundColor = "gray");
    });

    renderItems(homeData[index].items);
}

function createListItem(label, index) {
    const listItem = document.createElement("li");
    const catButton = document.createElement("button");
    const mLabel = document.createTextNode(label);
    catButton.appendChild(mLabel);
    catButton.className = "catButton";
    catButton.onclick = () => onCategory(index);

    listItem.appendChild(catButton);
    return listItem;
}

function createCategories() {
    homeData.map((e, i) => {
        categories.appendChild(createListItem(e.title, i));
    });

    main.appendChild(categories);
    main.appendChild(itemsContainer);

    const index = homeData.findIndex((e) => e.category === categoryType);

    onCategory(index > -1 ? index : 0);
}

createCategories();
