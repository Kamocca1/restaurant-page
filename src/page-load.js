import restaurantImg from "./jason-leung-poI7DelFiVA-unsplash-restaurant.jpg";

export default function loadPage() {
    const content = document.querySelector("#content");
    const headline = document.createElement("h1");
    headline.textContent = "Restaurant Page";
    const image = document.createElement("img");
    image.setAttribute("src", restaurantImg);
    const description = document.createElement("p");
    description.textContent =
        "Welcome to our cozy bistro, where every meal is a celebration! Enjoy fresh, locally sourced ingredients and a warm, inviting atmosphere. Join us for an unforgettable dining experience.";
    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(description);
}
