// import { data as homeData } from "../common/homeData";

const homeData = [
    {
        title: "Улс төр",
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

function createListItem(label, index) {
    const listItem = document.createElement("li");
    const catButton = document.createElement("button");
    const mLabel = document.createTextNode(label);
    catButton.appendChild(mLabel);
    catButton.className = "catButton";
    catButton.onclick = () => {
        renderItems(homeData[index].items);
    };

    listItem.appendChild(catButton);
    return listItem;
}

function createCategories() {
    homeData.map((e, i) => {
        categories.appendChild(createListItem(e.title, i));
    });

    main.appendChild(categories);
    main.appendChild(itemsContainer);
    renderItems(homeData[0].items);
}

createCategories();
