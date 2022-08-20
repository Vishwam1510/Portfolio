function validateForm() {
    let name = document.forms["myForm"]["vname"].value;
    let email = document.forms["myForm"]["vemail"].value;
    let message = document.forms["myForm"]["vmsg"].value;
    let address = document.forms["myForm"]["vaddress"].value;
    let postcode = document.forms["myForm"]["vpostcode"].value;
    let city = document.forms["myForm"]["vcity"].value;
    let rate = document.forms["myForm"]["rate"].value;
    let cpost =
      /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] ?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i;
  
    //validate every field
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (message == "") {
      alert("Message must be filled out");
      return false;
    }
    if (postcode == "") {
      alert("Postcode must be filled out");
      return false;
    }
    if(address == ""){
      alert("Address must be filled out");
      return false;
    }
    if (city == "") {
      alert("City must be filled out");
      return false;
    }
    if (flag == 1 && rate == "") {
      alert("Rate must be filled out");
      return false;
    }
  
    if (!cpost.test(postcode)) {
      alert("Postcode must be valid");
      return false;
    }
  
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Please enter a valid email address");
      return false;
    }
  }
  
  function addHourlyrate(z) {
    if (z == 0) {
      flag = 1;
      document.querySelector("#hrate").style.display = "block";
      document.querySelector("#lbl-hrate").style.display = "block";
    } else {
      flag = 0;
      document.querySelector("#hrate").style.display = "none";
      document.querySelector("#lbl-hrate").style.display = "none";
    }
    return;
  }
  
  function openMenu() {
    var x = document.getElementById("menu-mobile");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  