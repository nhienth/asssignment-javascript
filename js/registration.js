var hobbyOtherDisplay = document.getElementById("hobby-other");
var hobbyOther = document.getElementById("cb5");
hobbyOther.addEventListener("click", function () {
  hobbyOtherDisplay.style.display = hobbyOther.checked ? "block" : "none";
});

function kiem_tra() {
  var maSV = document.getElementById("maSV");
  var name = document.getElementById("nameSV");
  var email = document.getElementById("emailSV");
  var national = document.getElementById("national");

  var error1 = document.getElementById("error1");
  var error2 = document.getElementById("error2");
  var error3 = document.getElementById("error3");
  var error4 = document.getElementById("error4");
  var error5 = document.getElementById("error5");
  var error6 = document.getElementById("error6");
  var error7 = document.getElementById("error7");

  var gender = document.getElementsByName("gender");
  var hobby = document.getElementsByName("hobby");
  var note = document.getElementById("note");

  //Kiem tra ma sinh vien
  if (maSV.value == "") {
    maSV.style.borderColor = "#f16543";
    maSV.style.backgroundColor = "#fffd70";
    error1.innerHTML = "Mã sinh viên không được để trống";
    return false;
  } else {
    maSV.style.borderColor = "lightgray";
    maSV.style.backgroundColor = "white";
    error1.innerHTML = "";
  }

  //Kiem tra ho ten
  if (name.value == "") {
    name.style.borderColor = "#f16543";
    name.style.backgroundColor = "#fffd70";
    error2.innerHTML = "Họ tên sinh viên không được để trống";
    return false;
  } else {
    name.style.borderColor = "lightgray";
    name.style.backgroundColor = "white";
    error2.innerHTML = "";
  }

  //Kiem tra email
  if (email.value.length == 0) {
    email.style.borderColor = "#f16543";
    email.style.backgroundColor = "#fffd70";
    error3.innerHTML = "Email không được để trống";
    return false;
  } else if (email.value.indexOf("@") == 0) {
    email.style.borderColor = "#f16543";
    email.style.backgroundColor = "#fffd70";
    error3.innerHTML = "Vui lòng nhập phần đứng trước '@'";
    return false;
  } else if (email.value.indexOf("@") == -1) {
    email.style.borderColor = "#f16543";
    email.style.backgroundColor = "#fffd70";
    error3.innerHTML = "Vui lòng bao gồm '@' trong địa chỉ email";
    return false;
  } else if (
    email.value.slice(email.value.length - 1, email.value.length) == "@"
  ) {
    email.style.borderColor = "#f16543";
    email.style.backgroundColor = "#fffd70";
    error3.innerHTML = "Vui lòng nhập phần đứng sau '@' ";
    return false;
  } else {
    email.style.borderColor = "lightgray";
    email.style.backgroundColor = "white";
    error3.innerHTML = "";
  }

  //Kiem tra gioi tinh
  if (!gender[0].checked && !gender[1].checked) {
    error4.innerHTML = "Vui lòng chọn giới tính";
    return false;
  } else {
    error4.innerHTML = "";
  }

  //Kiem tra so thich
  var isChecked = 0;
  for (var i = 0; i < hobby.length; i++) {
    if (hobby[i].checked) {
      isChecked++;
    }
  }
  if (isChecked == 0) {
    error5.innerHTML = "Vui lòng chọn ít nhất một sở thích";
    return false;
  } else if (hobby[hobby.length - 1].checked) {
    var valuehobbyother = document.getElementById("hobby-othervalue");
    if (valuehobbyother.value == "") {
      error5.innerHTML = "Vui lòng nhập sở thích khác";
      valuehobbyother.style.backgroundColor = "#fffd70";
      valuehobbyother.style.borderColor = "#f16543";
      return false;
    } else {
      error5.innerHTML = "";
      valuehobbyother.style.backgroundColor = "white";
      valuehobbyother.style.borderColor = "lightgray";
    }
  } else {
    error5.innerHTML = "";
  }

  //Kiem tra quoc tich
  if (national.value == 0) {
    error6.innerHTML = "Vui lòng chọn quốc tịch";
    return false;
  } else {
    error6.innerHTML = "";
  }

  //Kiem tra ghi chu

  if (note.value.length >= 200) {
    error7.innerHTML =
      "Bạn đã nhập " +
      note.value.length +
      " ký tự" +
      "<br>" +
      "<br>" +
      "Bạn chỉ được nhập tối đa 200 ký tự";
    note.style.borderColor = "#f16543";
    note.style.backgroundColor = "#fffd70";
    return false;
  } else {
    error7.innerHTML = "";
    note.style.backgroundColor = "white";
    note.style.borderColor = "lightgray";
  }

  alert("Đăng ký thành công");

  return true;
}
