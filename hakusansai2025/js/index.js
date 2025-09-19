var tabs = document.getElementById("tabcontrol").getElementsByTagName("a");
var pages = document.getElementById("tabbody").children;

function changeTab() {
  var targetid = this.href.substring(
    this.href.indexOf("#") + 1,
    this.href.length
  );

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  this.classList.add("active");

  for (var i = 0; i < pages.length; i++) {
    if (pages[i].id != targetid) {
      pages[i].style.display = "none";
    } else {
      pages[i].style.display = "block";
    }
  }

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.zIndex = "0";
  }
  this.style.zIndex = "10";

  return false;
}

for (var i = 0; i < tabs.length; i++) {
  tabs[i].onclick = changeTab;
}

changeTab.call(tabs[0]);

window.onload = function () {
  const spinner = document.getElementById("loading");
  setTimeout(() => {
    spinner.classList.add("loaded");
  }, 1500);
};
