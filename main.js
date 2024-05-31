// ROOT ELEMENT
var root = document.querySelector(":root");

const menuItems = document.querySelectorAll(".menu-item");

// remove active class
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// MESSAGES
var messageNotification = document.getElementById("message-notifications");
const messageBox = document.querySelector(".messages");
messageNotification.addEventListener("click", () => {
  messageBox.style.boxShadow = "0 0 1rem var(--primary-color)";
  document.querySelector(
    "#message-notifications .notification-count"
  ).style.display = "none";
  setTimeout(() => {
    messageBox.style.boxShadow = "none";
  }, 2000);
});

// MESSAGES
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#messages-search");

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};
messageSearch.addEventListener("keyup", searchMessage);

// THEMES SCRIPT
let themeContainer = document.querySelector(".customize-theme");
let themeMenu = document.querySelector("#theme");

// OPEN THEME CONATINER
themeMenu.addEventListener("click", () => {
  themeContainer.style.display = "grid";
});

// CLOSING THEME CONTAINER
themeContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeContainer.style.display = "none";
  }
});

//FONT SIZE
let fontSizes = document.querySelectorAll(".choose-sizes span");

// REMOVE ACTIVE CLASSES
const removeActive = () => {
  fontSizes.forEach((fontSize) => {
    fontSize.classList.remove("active");
  });
};

// SET ACTVE TO A CLASS
let newFont;
fontSizes.forEach((font) => {
  font.addEventListener("click", () => {
    removeActive();
    font.classList.add("active");

    if (font.classList.contains("font-size-1")) {
      newFont = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (font.classList.contains("font-size-2")) {
      newFont = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (font.classList.contains("font-size-3")) {
      newFont = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (font.classList.contains("font-size-4")) {
      newFont = "19px";
      root.style.setProperty("--sticky-top-left", "5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (font.classList.contains("font-size-5")) {
      newFont = "22px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }

    document.querySelector("html").style.fontSize = newFont;
  });
});

//CHNAGE PRIMARY COLOR
var colors = document.querySelectorAll(".choose-color span");

const removeBoder = () => {
  colors.forEach((color) => {
    color.style.border = "none";
  });
};

colors.forEach((color) => {
  color.addEventListener("click", () => {
    removeBoder();
    color.style.border = "4px solid white";
    if (color.classList.contains("color-1")) {
      root.style.setProperty("--primary-color", "hsl(252, 75%, 60%)");
    } else if (color.classList.contains("color-2")) {
      root.style.setProperty("--primary-color", "hsl(52, 75%, 60%)");
    } else if (color.classList.contains("color-3")) {
      root.style.setProperty("--primary-color", "hsl(352, 75%, 60%)");
    } else if (color.classList.contains("color-4")) {
      root.style.setProperty("--primary-color", "hsl(152, 75%, 60%)");
    } else if (color.classList.contains("color-5")) {
      root.style.setProperty("--primary-color", "hsl(202, 75%, 60%)");
    }
  });
});

// BACKGROUND COLOR
const bgColors = document.querySelectorAll(".choose-bg > div");

const removeBgBorder = () => {
  bgColors.forEach((bgColor) => {
    bgColor.classList.remove("active");
  });
};

bgColors.forEach((bgColor) => {
  bgColor.addEventListener("click", () => {
    removeBgBorder();
    bgColor.classList.add("active");
    if (bgColor.classList.contains("bg-1")) {
      window.location.reload();
    } else if (bgColor.classList.contains("bg-2")) {
      root.style.setProperty("--light-color", "hsl(220, 30%, 15%)");
      root.style.setProperty("--dark-color", "hsl(220, 30%, 95%)");
      root.style.setProperty("--white-color", "hsl(220, 30%, 20%)");
    } else if (bgColor.classList.contains("bg-3")) {
      root.style.setProperty("--light-color", "hsl(220, 30%, 0%)");
      root.style.setProperty("--dark-color", "hsl(220, 30%, 95%)");
      root.style.setProperty("--white-color", "hsl(220, 30%, 10%)");
    }
  });
});
