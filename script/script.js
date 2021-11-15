"use strict";

document.addEventListener("DOMContentLoaded", () => {
  //Экранная клавиатура
  {
    const keyboardButton = document.querySelector(".search-form__keyboard");
    const keyboard = document.querySelector(".keyboard");
    const closeKeyboard = document.getElementById("close-keyboard");
    const searchInput = document.querySelector(".search-form__input");

    const toggleKeyboard = () => {
      keyboard.style.top = keyboard.style.top ? "" : "50%";
    };

    const typing = (event) => {
      const target = event.target;
      if (target.tagName.toLowerCase() === "button") {
        searchInput.value += target.textContent.trim();
      }
      // backspace
      // пробел
    };

    keyboardButton.addEventListener("click", () => {
      //   if (keyboard.style.top) {
      //     keyboard.style.top = "";
      //   } else {
      //     keyboard.style.top = "50%";
      //   }

      //   keyboard.style.top = keyboard.style.top ? "" : "50%";

      toggleKeyboard();
    });
    closeKeyboard.addEventListener("click", () => {
      //   keyboard.style.top = "";

      toggleKeyboard();
    });

    keyboard.addEventListener("click", typing);
  }

  //Меню
  {
    const burger = document.querySelector(".spinner");
    const sidebarMenu = document.querySelector(".sidebarMenu");
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      sidebarMenu.classList.toggle("rollUp");
    });
    sidebarMenu.addEventListener("click", (e) => {
      let target = e.target;

      target = target.closest('a[href="#"]');
      if (target) {
        const parentTarget = target.parentNode;
        sidebarMenu.querySelectorAll("li").forEach((elem) => {
          if (elem === parentTarget) {
            elem.classList.add("active");
          } else {
            elem.classList.remove("active");
          }
        });
      }
    });
  }

  //Модальное окно
  {
    const divYoutuber = document.createElement("div");
  }
});