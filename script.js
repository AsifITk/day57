let input = document.querySelector(".input");
let searchBtn = document.querySelector(".searchBtn");


// !Get the images.

let getImages = async (searchBy) => {
    console.log(searchBy)
    const token = "563492ad6f9170000100000131608255ce3043fdb25e82bfb76e71a2";
    return await fetch(`https://api.pexels.com/v1/search?query=${searchBy}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: token,
        },
    })
        .then((res) => res.json())
        .then((json) => json);
};

let getfeatured = async () => {
    const token = "563492ad6f9170000100000131608255ce3043fdb25e82bfb76e71a2";
    return fetch(`https://api.pexels.com/v1/curated`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: token,
        },
    })
        .then((res) => res.json())
        .then((json) => json);
};


let searchImg = () => {
    input.addEventListener("keypress", async (e) => {
        if (e.key === "Enter") {
            console.log(e.target.value)
            let images = await getImages(e.target.value)
            console.log(images);
            display(images.photos);
            // the code you want to run
        }
    })
    searchBtn.addEventListener("click", async (e) => {
        console.log(input.value)

        let images = await getImages(input.value)
        console.log(images);
        display(images.photos);
        // the code you want to run

    })
}


let display = (arr) => {
    document.querySelector('.images').innerHTML = "";

    for (let i = 0; i < arr.length; i++) {

        let img = document.createElement('img');
        img.src = arr[i].src.large;
        document.querySelector('.images').appendChild(img);


    }

}




let main = async () => {
    let images = 0;
    if (!images) {
        console.log('loading')
    }
    images = await getImages();
    // console.log(images.photos)
    let featured = await getfeatured()
    console.log(featured.photos)
    display(featured.photos)
    searchImg();


}
main();
// !show images.
