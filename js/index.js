var cats = [{
    name: "Tom",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tiggy_the_talking_cat.JPG/1024px-Tiggy_the_talking_cat.JPG",
    counter: 0
}, {
    name: "Captain McFurry",
    imgSrc: "https://newevolutiondesigns.com/images/freebies/cat-wallpaper-preview-24.jpg",
    counter: 0
}, {
    name: "Snowball",
    imgSrc: "http://mypetforumonline.com/wp-content/uploads/2014/08/fat-cat.jpg",
    counter: 0
}, ];

var createCatElem = function(cat) {
    var container, nameLabel, catImg, counterLabel;

    container = document.createElement("div");
    container.className = "container text-center";

    nameLabel = document.createElement("h2");
    nameLabel.className = "name";
    nameLabel.innerHTML = cat.name;

    catImg = document.createElement("img");
    catImg.className = "cat-img";
    catImg.alt = "Cat Image";
    catImg.src = cat.imgSrc;

    counterLabel = document.createElement("h2");
    counterLabel.className = "counter";
    counterLabel.innerHTML = cat.counter;

    catImg.addEventListener("click", function() {
        counterLabel.innerHTML = ++cat.counter;
    }, false);

    container.appendChild(nameLabel);
    container.appendChild(catImg);
    container.appendChild(counterLabel);

    return container;
};

var createCatListItem = function(cat) {
    var catListItem;

    catListItem = document.createElement("li");
    catListItem.className = "cats-list-item";
    catListItem.innerHTML = cat.name;

    catListItem.addEventListener("click", function() {
        $content.innerHTML = "";
        $content.appendChild(createCatElem(cat));
    }, false);

    return catListItem;
};

var $content = document.getElementById("content"),
    $catsList = document.getElementById("cats-list");

for (var i = 0; i < cats.length; i++) {
    $catsList.appendChild(createCatListItem(cats[i]));
}
