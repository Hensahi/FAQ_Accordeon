const questionTitle = document.querySelectorAll(".questionTitle");
const answers = document.querySelectorAll(".answer");
const addIcon = document.querySelectorAll(".addIcon");
const removeIcon = document.querySelectorAll(".removeIcon");

console.log(questionTitle);

function closeOpenAnswer(event) {
  for (let i = 0; i < questionTitle.length; i++) {
    if (
      questionTitle[i] == event.target ||
      event.target.classList.contains("addIcon")
    ) {
      continue;
    } else if (!answers[i].classList.contains("hide")) {
      answers[i].classList.add("hide");

      for (let i = 0; i < questionTitle.length; i++) {
        if (addIcon[i].classList.contains("hide")) {
          addIcon[i].classList.remove("hide");
          removeIcon[i].classList.add("hide");
        }
      }
    }
  }
}

function resetIcon(event, index) {
  event.target.classList.add("hide");
  event.target.parentNode.children[index].classList.toggle("hide");
  event.target.parentNode.parentNode.nextElementSibling.classList.toggle(
    "hide"
  );
  console.log(event.target.parentNode.parentNode.nextElementSibling);
}

questionTitle.forEach((question) => {
  question.addEventListener("click", (e) => {
    closeOpenAnswer(e);
    if (e.target.classList.contains("questionTitle")) {
      e.target.nextElementSibling.classList.toggle("hide");
      e.target.firstElementChild.firstElementChild.classList.toggle("hide");
      e.target.firstElementChild.lastElementChild.classList.toggle("hide");
    }
  });
});

addIcon.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    closeOpenAnswer(e);

    resetIcon(e, 1);
    for (let i = 0; i < addIcon.length; i++) {
      if (addIcon[i] == e.target || e.target.classList.contains("removeIcon")) {
        continue;
      } else if (addIcon[i].classList.contains("hide")) {
        addIcon[i].classList.remove("hide");
        removeIcon[i].classList.add("hide");
        answers[i].classList.add("hide");
      }
      console.log(i);
    }
    // console.log(e.target.parentNode.parentNode.nextElementSibling);
  });
});

removeIcon.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    closeOpenAnswer(e);

    resetIcon(e, 0);
  });
});

//Ya quedo!!
