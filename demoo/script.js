const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    document.body.style.background = "#000";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "#f8f9fc";
    document.body.style.color = "#222";
  }
});
