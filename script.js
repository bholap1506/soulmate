const profiles = [
  { name: "Priya", age: 25, city: "Delhi", job: "Designer" },
  { name: "Anjali", age: 27, city: "Mumbai", job: "Marketing" },
  { name: "Neha", age: 24, city: "Bangalore", job: "Software Engineer" },
  { name: "Kavya", age: 26, city: "Pune", job: "HR" }
];

let index = 0;

function showProfile() {
  if (index >= profiles.length) {
    document.querySelector(".card").innerHTML =
      "<h2>🎉 No more profiles</h2><p>Come back later!</p>";
    return;
  }

  const p = profiles[index];
  document.getElementById("name").innerText = `${p.name}, ${p.age}`;
  document.getElementById("details").innerText = `${p.city} | ${p.job}`;
}

function likeProfile() {
  alert(`💖 You liked ${profiles[index].name}!`);
  index++;
  showProfile();
}

function nextProfile() {
  index++;
  showProfile();
}

showProfile();
