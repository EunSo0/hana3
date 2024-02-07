const lis = document.querySelectorAll("ul.subjects li");

const selectedDiv = document.querySelector(".selected");

const setSelectedSubjects = () => {
  const selectedSubject = [...lis].filter((li) =>
    li.classList.contains("active").map((li) => textContent)
  );

  if (selectedSubject?.length) {
    selectedDiv.innerHTML = selectedSubject.join("<br>");
    selectedDiv.classList.remove("hide");
    selectedDiv.classList.add("show");
  }
};

const selectSubject = (e) => {
  const li = e.currentTarget;
  li.classList.toggle("active");

  setSelectedSubjects();
};

lis.forEach((li) => li.addEventListener("click", selectSubject));
