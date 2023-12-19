function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("show-menu");

  const downIcon = dropdown.parentElement.querySelector("#down-icon");

  if (!downIcon.classList.contains("rotate-icon")) {
    downIcon.classList.add("rotate-icon");
  } else {
    downIcon.classList.remove("rotate-icon");
  }
}
