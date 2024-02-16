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

