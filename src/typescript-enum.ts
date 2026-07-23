enum poststatus {
    Draft,
    Published,
    Unpublished
}

type Article = {
    id: number;
    title: string;
    status: poststatus;
}

const article1: Article = {
    id: 1,
    title: "My First Article",
    status: poststatus.Draft
};

const article2: Article = {
    id: 2,
    title: "My Second Article",
    status: poststatus.Published
};

const article3: Article = {
    id: 3,
    title: "My Third Article",
    status: poststatus.Unpublished
};

console.log(article1);