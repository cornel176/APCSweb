const form = document.getElementById("projectForm");
const projectList = document.getElementById("projectList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const card = document.createElement("div");

    card.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;

    card.style.background = "#f8fafc";
    card.style.padding = "15px";
    card.style.marginTop = "15px";
    card.style.borderRadius = "8px";
    card.style.border = "1px solid #ddd";

    projectList.appendChild(card);

    form.reset();
});