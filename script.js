let items = [
  { title: "Death Note", type: "anime" },
  { title: "Attack on Titan", type: "anime" },
  { title: "Cyberpunk 2077", type: "game" },
  { title: "The Witcher 3", type: "game" }
];

let searchInput = document.getElementById("search");
let suggestions = document.getElementById("suggestions");

searchInput.addEventListener("input", () => {
  let query = searchInput.value.toLowerCase();
  suggestions.innerHTML = "";

  if (!query) {
    suggestions.style.display = "none";
    return;
  }

  let matches = items.filter(item => item.title.toLowerCase().includes(query));

  matches.forEach(item => {
    let div = document.createElement("div");
    div.textContent = item.title + " (" + item.type + ")";
    div.addEventListener("click", () => {
      window.location.href = "details.html? title=" + encodeURIComponent(item.title);
    });
    suggestions.appendChild(div);
  });

  suggestions.style.display = matches.length ? "block" : "none";
});
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let value = searchInput.value.trim();
        if (value){
        window.location.href = "details.html?title=" + encodeURIComponent(value);
    }
}
});
