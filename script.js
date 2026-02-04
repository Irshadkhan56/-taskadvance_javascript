const users = [
  {
    id: 1,
    name: "Ali",
    profile: {
      email: "ali@gmail.com",
      age: 22
    }
  },
  {
    id: 2,
    name: "Sara",
    profile: {
      email: "sara@gmail.com",
      age: 19
    }
  },
  {
    // id: 3,
    name: "Ahmed"
    // profile missing on purpose
  }
];





const container = document.getElementById("cards");

users.forEach(user => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
      <span>${user?.id}</span>
    <h3>${user.name}</h3>
    <p>Email: ${user.profile?.email}</p>
    <p>Age: ${user.profile?.age}</p>
  `;

  container.appendChild(card);
});



// nulish oeprator      works with only null and undefined
let username = undefined;

let dispalyName = username ?? "Guest";

console.log(dispalyName);







