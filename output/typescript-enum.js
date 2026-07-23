"use strict";
var poststatus;
(function (poststatus) {
    poststatus[poststatus["Draft"] = 0] = "Draft";
    poststatus[poststatus["Published"] = 1] = "Published";
    poststatus[poststatus["Unpublished"] = 2] = "Unpublished";
})(poststatus || (poststatus = {}));
const article1 = {
    id: 1,
    title: "My First Article",
    status: poststatus.Draft
};
const article2 = {
    id: 2,
    title: "My Second Article",
    status: poststatus.Published
};
const article3 = {
    id: 3,
    title: "My Third Article",
    status: poststatus.Unpublished
};
console.log(article1);
