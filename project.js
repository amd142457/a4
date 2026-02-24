let interviewList = [];
let rejectedList = [];

const total = document.getElementById("total");
const interviewLength = document.getElementById("Interview-length");
const rejectedLength = document.getElementById("Rejected-length");

const jobCollection = document.getElementById("job-collection");

const totalBtn = document.getElementById("total-all");
const interviewFilterBtn = document.getElementById("selected-item");
const rejectedFilterBtn = document.getElementById("Rejected-btn");

function updateCount() {
  total.innerText = jobCollection.children.length;
  interviewLength.innerText = interviewList.length;
  rejectedLength.innerText = rejectedList.length;
}

updateCount();

function toggleStyle(activeBtn) {
  const buttons = [totalBtn, interviewFilterBtn, rejectedFilterBtn];

  buttons.forEach((btn) => {
    btn.classList.remove("bg-black", "text-white");
    btn.classList.add("bg-gray-300");
  });

  activeBtn.classList.remove("bg-gray-300");
  activeBtn.classList.add("bg-black", "text-white");
}

totalBtn.addEventListener("click", () => {
  toggleStyle(totalBtn);

  Array.from(jobCollection.children).forEach((card) => {
    card.classList.remove("hidden");
  });
});

interviewFilterBtn.addEventListener("click", () => {
  toggleStyle(interviewFilterBtn);

  Array.from(jobCollection.children).forEach((card) => {
    if (card.classList.contains("interviewed")) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});

rejectedFilterBtn.addEventListener("click", () => {
  toggleStyle(rejectedFilterBtn);

  Array.from(jobCollection.children).forEach((card) => {
    if (card.classList.contains("rejected")) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});

jobCollection.addEventListener("click", function (event) {
  const card = event.target.closest("#job-collection > div");
  if (!card) return;

  const title = card.querySelector("h3").innerText;

  if (event.target.classList.contains("Interview-1")) {
    if (!interviewList.includes(title)) {
      interviewList.push(title);
    }

    rejectedList = rejectedList.filter((item) => item !== title);

    card.classList.add("interviewed");
    card.classList.remove("rejected");

    const applyBtn = card.querySelector(".apply-btn, .Applied");
    if (applyBtn) applyBtn.innerText = "Applied";

    updateCount();
  }

  // ===== REJECT CLICK =====
  if (event.target.classList.contains("Rejected-1")) {
    if (!rejectedList.includes(title)) {
      rejectedList.push(title);
    }

    interviewList = interviewList.filter((item) => item !== title);

    card.classList.add("rejected");
    card.classList.remove("interviewed");

    const applyBtn = card.querySelector(".apply-btn, .Applied");
    if (applyBtn) applyBtn.innerText = "Rejected";

    updateCount();
  }

  // ===== DELETE BUTTON =====

  if (event.target.innerText.toLowerCase() === "delet") {
    interviewList = interviewList.filter((item) => item !== title);
    rejectedList = rejectedList.filter((item) => item !== title);

    card.remove();

    updateCount();
  }
});
