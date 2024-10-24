function op() {
  let a = document.querySelector("#sidebar");
  a.style.display = "block";
}

function cl() {
  let b = document.querySelector("#sidebar");
  {
    b.style.display = "none";
  }
}

var loginmail, loginpswd, rname, rpswd, rcpswd, email;
var lerror = document.querySelector(".error");
var rerror = document.querySelector("#rerror");
var welcome = document.getElementById("welcome");

function login() {
  loginmail = document.getElementById("loginemail").value;
  loginpswd = document.getElementById("loginpswd").value;

  if (loginmail == "" || loginpswd == "") {
    lerror.innerHTML = "Enter email and password";
  } else if (loginmail == email && loginpswd == rpswd) {
    window.location.href = "main.html";
  } else {
    lerror.innerHTML = "Please Register";
  }
  event.preventDefault();
}

function registration() {
  rname = document.getElementById("rname").value;
  email = document.getElementById("email").value;
  rpswd = document.getElementById("rpswd").value;
  rcpswd = document.getElementById("rcpswd").value;

  if (rname == "" || email == "" || rpswd == "" || rcpswd == "") {
    rerror.innerHTML = "Please enter all fields";
  } else if (rcpswd != rpswd) {
    rerror.innerHTML = "Password and confirm password not matched ";
  } else {
    sessionStorage.setItem(
      "storedname",
      document.getElementById("rname").value
    );
    alert(`Registration Successful ${rname}`);
    var a = document.getElementById("registration");
    a.style.display = "none";
    var logi = document.getElementById("login");
    logi.style.display = "block";
  }
  event.preventDefault();
}

function navigation() {
  var a = document.getElementById("registration");
  a.style.display = "block";
  var logi = document.getElementById("login");
  logi.style.display = "none";
}

function welcomefun() {
  var welcome = documment.getElementById("welcome");
  welcome.innerHTML = "Welcome" + sessionStorage.getItem("storedname") + "!";
}
function cart() {
  alert("Cart section will be available soon");
}
let style = document.querySelector(".style");
style.style.display = "none";

let test = document.querySelector(".test");

// test.addEventListener("mousemove", function (details) {
//   style.style.display = "block";
//   let cur = details.clientX;

//   let pos = gsap.utils.mapRange(
//     0,
//     window.innerWidth,
//     50,
//     window.innerWidth - 50,
//     cur
//   );

//   gsap.to(".style", {
//     left: pos + "px",
//     ease: Power3,
//     top: details.clientY + "px",
//   });
// });
// test.addEventListener("mouseout", function (details) {
//   style.style.display = "none";
// });
