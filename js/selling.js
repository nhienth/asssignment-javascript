//Hien thi san pham theo muc gia

function filterProduct(objSelect) {
  var list_tr = document.getElementsByName("product");

  switch (objSelect.value) {
    case "0":
      for (var i = 0; i < list_tr.length; i++) {
        list_tr[i].style.display = "table-row";
      }
      break;

    case "1":
      for (var i = 0; i < list_tr.length; i++) {
        var td_dongia = list_tr[i].children[2].innerHTML;
        if (Number(td_dongia) < 100) {
          list_tr[i].style.display = "table-row";
        } else {
          list_tr[i].style.display = "none";
        }
      }
      break;

    case "2":
      for (var i = 0; list_tr.length; i++) {
        var td_dongia = list_tr[i].children[2].innerHTML;
        if (Number(td_dongia) >= 100 && Number(td_dongia) <= 500) {
          list_tr[i].style.display = "table-row";
        } else {
          list_tr[i].style.display = "none";
        }
      }
      break;

    case "3":
      for (var i = 0; i < list_tr.length; i++) {
        var td_dongia = list_tr[i].children[2].innerHTML;
        if (Number(td_dongia) > 500) {
          list_tr[i].style.display = "table-row";
        } else {
          list_tr[i].style.display = "none";
        }
      }
      break;

    default:
      for (var i = 0; i < list_tr.length; i++) {
        list_tr[i].style.display = "table-row";
      }
  }
}

//----------------------------------------------------------------
function initTable() {
  //Lay danh sach cac the tr product
  var list_tr = document.getElementsByName("product");
  //Duyet list_tr va chon the input la checkbox trong cac tr
  for (var i = 0; i < list_tr.length; i++) {
    var the_tr = list_tr[i];

    var ipcheck = the_tr.querySelector("input[type=checkbox]");

    //gan thuoc tinh onchane de goi ham xu ly khi kich chuot thay doi checkbox o moi dong`
    ipcheck.setAttribute("onchange", "changeCheckbox(this)");
    //Chon tiep the nhap so luong de gan thuoc tinh onchange
    var ipnumber = the_tr.querySelector("input[type=number]");
    ipnumber.setAttribute("onchange", "changeNumber(this)");
  }
}

initTable();

// var list_tr = document.getElementsByName("product");
// console.log(list_tr)

function checkAll(objCHECK) {
  var check_true = objCHECK.checked;
  //Lay danh sach cac the tr product
  var list_tr = document.getElementsByName("product");
  // duyet mang the tr sau do tim the input checkbox trong the tr
  for (var i = 0; i < list_tr.length; i++) {
    var the_tr = list_tr[i];
    var ipcheck = the_tr.querySelector("input[type=checkbox]");
    ipcheck.checked = check_true;

    var ipnumber = the_tr.querySelector("input[type=number]");
    ipnumber.disabled = !check_true ? true : false;
  }
}

function changeNumber(objNumber) {
  var soLuong = objNumber.value;
  var td_dongia = objNumber.parentElement.previousElementSibling.innerHTML;
  var td_thanh_tien = objNumber.parentElement.nextElementSibling;
  var tong_thanh_tien = Number(td_dongia) * soLuong;

  td_thanh_tien.innerHTML = tong_thanh_tien;

  // tongTien();

  var tong_tien = 0;
  list_tr = document.getElementsByName("product");
  for (var i = 0; i < list_tr.length; i++) {
    the_tr = list_tr[i];
    var ipnumber = the_tr.querySelector("input[type=number]");

    if (ipnumber.disabled == false) {
      var the_th = the_tr.lastElementChild.innerHTML;
      tong_tien = tong_tien + Number(the_th);
    }
  }
  document.getElementById("tongtien").innerHTML = tong_tien;
}

function changeCheckbox(objCheckbox) {
  //lay the tr
  var the_tr = objCheckbox.parentElement.parentElement;
  var check_true = objCheckbox.checked;
  var ipnumber = the_tr.querySelector("input[type=number]");
  console.log(ipnumber);
  ipnumber.disabled = !check_true ? true : false;

  tong_tien = document.getElementById("tongtien").innerHTML;

  if (!check_true) {
    ipnumber.disabled = true;
    if (ipnumber.disabled) {
      var the_th = the_tr.lastElementChild.innerHTML;
      tong_tien = tong_tien - Number(the_th);
    }
  }

  document.getElementById("tongtien").innerHTML = tong_tien;
}

// function tongTien() {
//     var list_tr = document.getElementsByName("product");
//     var tong_tien = 0;
//     for(var i = 0; i<list_tr.length; i++) {
//         var the_tr = list_tr[i];
//         // console.log([the_tr.querySelector("input[type=number]")])
//         the_tr.querySelector("input[type=number]").checked;
//         if(the_tr.firstElementChild.firstElementChild.checked) {
//             var the_th = the_tr.lastElementChild.innerHTML;
//             // if(the_tr.firstElementChild)
//             // console.log(the_tr.firstElementChild);
//             tong_tien = tong_tien + Number(the_th);
//         // }else{
//         //     var the_th = the_tr.lastElementChild.innerHTML;
//         //     tong_tien = tong_tien - Number(the_th);

//         }
//     }
//     document.getElementById("tongtien").innerHTML = tong_tien;

// }
