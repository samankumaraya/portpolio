let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

var i = 0;
var txt = 'Lorem ipsum typing effect!'; 
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("sanana").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// samana

const container = document.querySelector(".skill-per");

const courses = [
  { course: "HTML", percent: 99, color: "#f9ca24" },
  { course: "CSS", percent: 65, color: "#78e08f" },
  { course: "JavaScript", percent: 35, color: "#c56cf0" },
  { course: "Bootstrap", percent: 85, color: "#badc58" },
];

courses.forEach((course) => {
  container.innerHTML += `
  <div class="progess-group">
  <div class="circular-progress" >
    
  </div>
  <label class="text" style="color:${course.color}">${course.course}</label>
</div>
  `;
});

//style="  background: conic-gradient(${course.color} ${3.6 * course.percent}deg, #fff 0deg);"

const progressGroups = document.querySelectorAll(".progess-group");

progressGroups.forEach((progress, index) => {
  let progressStartValue = 0;
  let progressStartEnd = courses[index].percent;
  let speed = 50;
  let progessTimer = setInterval(() => {
    progressStartValue++;
    if (progressStartValue == progressStartEnd) {
      clearInterval(progessTimer);
    }
    progress.querySelector(".circular-progress").style.background = `
    conic-gradient(${courses[index].color} ${3.6 * progressStartValue}deg, #fff 0deg)`;

    progress.querySelector(".course-value").innerHTML = progressStartValue + "%";
  }, speed);
});

// kumaraya

const container1 = document.querySelector(".skill-per1");

const courses1 = [
  { course: "React", percent: 80, color: "#f9ca24" },
  { course: "Spring boot", percent: 20, color: "#78e08f" },
  { course: "angular", percent: 30, color: "#c56cf0" },
  { course: "Node js", percent: 30, color: "#badc58" },
];

courses1.forEach((course) => {
  container1.innerHTML += `
  <div class="progess-group1">
  <div class="circular-progress1" >
    
  </div>
  <label class="text1" style="color:${course.color}">${course.course}</label>
</div>
  `;
});
const progressGroups1 = document.querySelectorAll(".progess-group1");

progressGroups1.forEach((progress, index) => {
  let progressStartValue1 = 0;
  let progressStartEnd1 = courses1[index].percent;
  let speed1 = 50;
  let progessTimer1 = setInterval(() => {
    progressStartValue1++;
    if (progressStartValue1 == progressStartEnd1) {
      clearInterval(progessTimer1);
    }
    progress.querySelector(".circular-progress1").style.background = `
    conic-gradient(${courses[index].color} ${3.6 * progressStartValue1}deg, #fff 0deg)`;

    progress.querySelector(".course-value").innerHTML = progressStartValue1 + "%";
  }, speed1);
});

document.getElementById("homeButton").addEventListener("click", function() {
  var menu = document.getElementById("home-section");
  if (menu.style.display === "none") {
      menu.style.display = "block";
  } else {
      menu.style.display = "none";
  }
});

document.getElementById("aboutButton").addEventListener("click", function() {
  var menu = document.getElementById("about-section");
  if (menu.style.display === "none") {
      menu.style.display = "block";
  } else {
      menu.style.display = "none";
  }
});

document.getElementById("skillButton").addEventListener("click", function() {
  var menu = document.getElementById("skills-section");
  if (menu.style.display === "none") {
      menu.style.display = "block";
  } else {
      menu.style.display = "none";
  }
});

document.getElementById("serviceButton").addEventListener("click", function() {
  var menu = document.getElementById("services-section");
  if (menu.style.display === "none") {
      menu.style.display = "block";
  } else {
      menu.style.display = "none";
  }
});

document.getElementById("projectButton").addEventListener("click", function() {
  var menu = document.getElementById("projects-section");
  if (menu.style.display === "none") {
      menu.style.display = "block";
  } else {
      menu.style.display = "none";
  }
});

document.getElementById("blogButton").addEventListener("click", function() {
  var menu = document.getElementById("blog-section");
  if (menu.style.display === "none") {
      menu.style.display = "block";
  } else {
      menu.style.display = "none";
  }
});

document.getElementById("contactButton").addEventListener("click", function() {
  var menu = document.getElementById("contact-section");
  if (menu.style.display === "none") {
      menu.style.display = "block";
  } else {
      menu.style.display = "none";
  }
});

// 
