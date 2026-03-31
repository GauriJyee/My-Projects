let username = localStorage.getItem("user");
document.getElementById("name").textContent = `Welcome ${username}! ✌︎`;
const buttons = document.querySelectorAll(".popupBtn");
const popup = document.getElementById("popup");
const popupBox = document.getElementById("popupBox");
let outfits = [
  "Casual Chic",
  "Soft Girl Vibe",
  "Main Character",
  "Desi Diva",
  "Glam Night",
  "Sunny Vibes",
  "Effortless Look",
  "It Girl Fit"
];

// get today's date
let today = new Date().toDateString();

// get stored data
let savedDate = localStorage.getItem("outfitDate");
let savedOutfit = localStorage.getItem("outfitName");

if (savedDate === today && savedOutfit) {
  // show same outfit
  document.getElementById("outfitName").innerText = savedOutfit;
} else {
  // generate new outfit
  let random = outfits[Math.floor(Math.random() * outfits.length)];

  // save it
  localStorage.setItem("outfitDate", today);
  localStorage.setItem("outfitName", random);

  // show it
  document.getElementById("outfitName").innerText = random;
}

}
buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {

    e.stopPropagation();

    // content
    if (btn.dataset.type === "more") {
      popupBox.innerHTML = `
        <button class="settingsBtn">Settings</button>
        <button class="profileBtn">Profile</button>
        <button class="logoutBtn">Logout</button>`;
    }

    // show hidden to calculate width
    popup.style.visibility = "hidden";
    popup.classList.add("active");

    const rect = btn.getBoundingClientRect();

    let left = rect.left + window.scrollX + (btn.offsetWidth / 2) - (popup.offsetWidth / 2);
    let top = rect.bottom + window.scrollY + 8;


    const screenWidth = window.innerWidth;

    if (left + popup.offsetWidth > screenWidth - 10) {
      left = screenWidth - popup.offsetWidth - 10;
    }

    if (left < 10) left = 10;

    popup.style.left = left + "px";
    popup.style.top = top + "px";

    popup.style.visibility = "visible";
  });
});
document.addEventListener("click", (e) => {
  if (!popup.contains(e.target) && !e.target.closest(".popupBtn")) {
    popup.classList.remove("active");
  }
});