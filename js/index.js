const menu = document.querySelector("#header-menu");
const btn = document.querySelector("#hamburger");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  menu.classList.toggle("open");

  if (menu.classList.contains("open")) {
    menu.style.height = menu.scrollHeight + "px";
  } else {
    menu.style.height = "0";
  }
});

const speech = document.getElementById("speech");
const imageBox = document.getElementById("imageBox");

const patterns = [
  {
    text: "ようこそ\n東洋大ボカロ同好会\nWebサイトへ！",
    image: `<img src="img/miku_mainvis1.png">`,
  },
  {
    text: "ミクに\n会いに来てくれて\nありがとね！",
    image: `<img src="img/miku_mainvis2.png">`,
  },
  {
    text: "楽しんでくれたら\n嬉しいな♪",
    image: `<img src="img/miku_mainvis3.png">`,
  },
];

let currentIndex = 0;

function updateContent() {
  currentIndex = (currentIndex + 1) % patterns.length;
  const pattern = patterns[currentIndex];
  speech.innerHTML = pattern.text.replace(/\n/g, "<br>");
  imageBox.innerHTML = pattern.image;
}

speech.addEventListener("click", updateContent);
imageBox.addEventListener("click", updateContent);

// 初期表示設定
imageBox.innerHTML = patterns[0].image;

// Eventのモーダル設定
jQuery(document).ready(function ($) {
  "use strict";

  $("#customers-testimonials").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  });

  $(".testimonial-name").on("click", function () {
    const modalTargetId = $(this).parent(".item").data("modal-target");
    const modal = $("#" + modalTargetId);
    const clickedImageSrc = $(this).siblings("img").attr("src");

    modal.find(".modal-image").attr("src", clickedImageSrc);

    modal.addClass("show");
  });

  $(".activity-close-button").on("click", function () {
    $(this).closest(".modal").removeClass("show");
  });

  $(".modal").on("click", function (event) {
    if (!$(event.target).closest(".modal-content").length) {
      $(this).removeClass("show");
    }
  });

  $(document).on("keydown", function (event) {
    if (event.key === "Escape") {
      $(".modal.show").removeClass("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeButton = document.querySelector(".event-close-button");
  const galleryImages = document.querySelectorAll(".gallery-image");

  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImage.src = image.src;
    });
  });

  closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});

const scrollWrappers = document.querySelectorAll(".scroll-wrapper");

scrollWrappers.forEach((wrapper) => {
  const scrollBox = wrapper.querySelector(".scroll-content");
  const arrow = wrapper.querySelector(".scroll-arrow");

  if (scrollBox && arrow) {
    scrollBox.addEventListener("scroll", function () {
      if (scrollBox.scrollTop > 20) {
        arrow.classList.add("is-hidden");
      } else {
        arrow.classList.remove("is-hidden");
      }
    });
  }
});
