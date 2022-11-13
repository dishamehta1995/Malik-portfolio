tailwind.config = {
  theme: {
    screens: {
      sm: "640px",
      md: "769px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
      display: ['"Playfair Display"'],
    },
    fontSize: {
      sx: ["12px", "20px"],
      sm: ["14px", "24px"],
      base: ["16px", "24px"],
      lg: ["18px", "30px"],
      xlg: ["28px", "48px"],
      "2lg": ["36px", "46px"],
      xl: ["20px", "30px"],
      xxl: ["40px", "48px"],
      "2xl": ["68px", "96px"],
    },
    extend: {
      colors: {
        clifford: "#da373d",
        dark: "#111",
        dark2: "#333",
        dark3: "#1e1e1e",
        gray: "#939393",
        lightGray: "#B8B8B8",
        blue: "#0057FF",
        darkBlue: "#0045c9",
        pink: "#E94C89",
        darkPink: "#e11f6b",
      },
      animation: {
        fade: "fadeOut 1s normal forwards ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 1, height: "100%" },
          "100%": { opacity: 0, height: "0" },
        },
      }),
    },
  },
};

window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading").classList.add("animate-fade");
    document.querySelector("body").classList.remove("overflow-hidden");
  }, 5000);
};

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
document.querySelector(".date").innerText = new Date().getFullYear();
