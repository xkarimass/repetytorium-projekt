const items = [
  {
    id: 1,
    title: "Death Note",
    type: "anime",
    ratingSum: 45,
    ratingCount: 5
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    type: "game",
    ratingSum: 40,
    ratingCount: 5
  },{
    id: 3,
    title: "Femboy Futa House",
    type: "game",
    ratingSum: 50,
    ratingCount: 5
  },{
    id: 4,
    title: "Miside",
    type: "game",
    ratingSum: 30,
    ratingCount: 5
  },{
    id: 5,
    title: "Garden warefare 2",
    type: "game",
    ratingSum: 25,
    ratingCount: 5
  }
];

const list = document.getElementById("list");

function render() {
  list.innerHTML = "";

  items.forEach(item => {
    const avg = (item.ratingSum / item.ratingCount).toFixed(1);

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h2>${item.title}</h2>
      <p>Średnia: ⭐ ${avg}</p>
      <div class="rating">
        ${[1,2,3,4,5,6,7,8,9,10].map(n =>
          `<span onclick="rate(${item.id}, ${n})">⭐</span>`
        ).join("")}
      </div>
    `;

    list.appendChild(div);
  });
}

function rate(id, value) {
  const item = items.find(i => i.id === id);
  item.ratingSum += value;
  item.ratingCount++;
  render();
}
