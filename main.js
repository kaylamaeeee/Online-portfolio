// Create head element
const head = document.createElement("head");
document.documentElement.appendChild(head);

// Create meta elements
const metaCharset = document.createElement("meta");
metaCharset.setAttribute("charset", "UTF-8");
head.appendChild(metaCharset);

const metaViewport = document.createElement("meta");
metaViewport.setAttribute("name", "viewport");
metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");
head.appendChild(metaViewport);

// Create title element
const title = document.createElement("title");
title.textContent = "Online portfolio";
head.appendChild(title);

// Create link element for CSS
const linkCSS = document.createElement("link");
linkCSS.setAttribute("rel", "stylesheet");
linkCSS.setAttribute("href", "style.css");
head.appendChild(linkCSS);

// Append home section element to the document body
document.body.appendChild(homeSection);

// Create about section element
const aboutSection = document.createElement("section");
aboutSection.className = "about";
aboutSection.id = "about";

// Append about section element to the document body
document.body.appendChild(aboutSection);

const images = [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
    "image5.png",
    "image6.png",
    "image7.png"
];

const workSection = document.getElementById("work");

images.forEach((image) => {
    const img = document.createElement("img");
    img.setAttribute("src", image);
    img.style.objectFit = "cover";
    img.style.margin = "5px";
    img.style.width = "300px";
    img.style.height = "200px";
    
    const link = document.createElement("a");
    link.setAttribute("href", "https://kaylamaeeee.github.io/" + image.split(".")[0]);
    link.appendChild(img);
    
    workSection.appendChild(link);
});

