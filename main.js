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

// Selecting the elements from the HTML structure
const socialLinks = document.querySelectorAll("#contact .social a");
const contactInfo = document.querySelectorAll("#contact ul li");
const endText = document.querySelector("#contact .end-text p");

// Applying styles or functionality to the selected elements
socialLinks.forEach(link => {
    link.style.color = "blue"; // Example style change
    link.addEventListener("click", function() {
        // Example event listener for clicking on social links
        console.log("You clicked on a social link!");
    });
});

contactInfo.forEach(info => {
    info.style.fontWeight = "bold"; // Example style change
});

endText.style.color = "green"; // Example style change

document.getElementById("contact").querySelector("h5").style.textAlign = "center";
document.getElementById("contact").querySelector("h5").style.marginTop = "50px";
document.getElementById("contact").querySelector("h5").style.fontSize = "20px";

document.getElementById("contact").getElementsByClassName("social")[0].style.textAlign = "center";
document.getElementById("contact").getElementsByClassName("social")[0].style.marginTop = "10px";

document.getElementById("contact").querySelector("h4").style.textAlign = "center";
document.getElementById("contact").querySelector("h4").style.marginTop = "50px";
document.getElementById("contact").querySelector("h4").style.fontSize = "20px";

document.getElementById("contact").querySelector("ul").style.textAlign = "center";
document.getElementById("contact").querySelector("ul").style.marginTop = "20px";

var listItems = document.getElementById("contact").getElementsByTagName("li");
for (var i = 0; i < listItems.length; i++) {
    listItems[i].style.marginTop = "20px";
}

document.getElementsByClassName("end-text")[0].style.textAlign = "center";
document.getElementsByClassName("end-text")[0].style.marginTop = "30px";

