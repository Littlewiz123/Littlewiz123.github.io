function deleteUser(index, r) {
    // Xóa dữ liệu trong mảng
    accounts.splice(index, 1);

    if (confirm("Are you sure?")) {
        // Cách 1: Render lại toàn bộ bảng dựa vào mảng sau khi bị xóa
        // renderContent();

        // Cách 2: Xóa dòng dựa trên phần tử đang được chọn (thẻ tr)
        $('#delete').parent().parent().parent().remove();
    }
}

let accounts = [
    {
        fullname: "Minh Duc",
        birthyear: "1996",
        email: "abc@gmail.com",
        phonenumber: "663456789"
    },
    {
        fullname: "Robin Huy",
        birthyear: "1990",
        email: "robin@github.com",
        phonenumber: "123456789"
    },
    {
        fullname: "Minh Anh",
        birthyear: "1998",
        email: "haha@gmail.com",
        phonenumber: "789654555"
    }
]

function getAccounts() {
    $("tbody .row").remove();
    $.each(accounts, function (index, val) {
        $('tbody').append('<tr class="row"><td class="filter">' + val.fullname + '</td><td class="filter">' + val.birthyear + '</td><td class="filter">' + val.email + '</td><td  class="filter">' + val.phonenumber +
        '</td><td><div class="link"><i class="fas fa-edit"></i><a href="#" id="edit">Chỉnh sửa</a><span> | </span><i class="fas fa-trash-alt"></i><a href="#" onclick="deleteUser(' + index + ',this)" id="delete">Xóa</a></div></td></tr>');
    });
}

getAccounts();

function sortByCol(col) {
    $(".row").remove();
    accounts.sort(
        function compare(a, b) {
            if (a[col] < b[col]) {
                return -1;
            }
            if (a[col] > b[col]) {
                return 1;
            }
            return 0;
        }
    );
    // $("th").prop('onclick', null);
    $.each(accounts, function (index, val) {
        $('tbody').append('<tr class="row"><td>' + val.fullname + '</td><td>' + val.birthyear + '</td><td>' + val.email + '</td><td>' + val.phonenumber +
        '</td><td><div class="link"><i class="fas fa-edit"></i><a href="#" id="edit">Chỉnh sửa</a><span> | </span><i class="fas fa-trash-alt"></i><a href="#" onclick="deleteUser('+ index + ',this)" id="delete">Xóa</a></div></td></tr>');
    });
}

function sortByColReverse(col) {
    $(".row").remove();
    accounts.sort(
        function compare(a, b) {
            if (a[col] < b[col]) {
                return -1;
            }
            if (a[col] > b[col]) {
                return 1;
            }
            return 0;
        }
    ).reverse();
    $.each(accounts, function (index, val) {
        $('tbody').append('<tr class="row"><td>' + val.fullname + '</td><td>' + val.birthyear + '</td><td>' + val.email + '</td><td>' + val.phonenumber +
        '</td><td><div class="link"><i class="fas fa-edit"></i><a href="#" id="edit">Chỉnh sửa</a><span> | </span><i class="fas fa-trash-alt"></i><a href="#" onclick="deleteUser('+ index + ',this)" id="delete">Xóa</a></div></td></tr>');
    });
}


// Clicks css changing
$('#fullname').click(function () {
    let click = $(this).data('clicks');

    if (click) {
        sortByCol('fullname');
        $("#fullname i").removeClass("fa-sort fa-sort-down").addClass("fa-sort-up");
        $("#birthyear i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#email i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#phonenumber i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
    }else{
        sortByColReverse('fullname');
        $("#fullname i").removeClass("fa-sort fa-sort-up").addClass("fa-sort-down");
        $("#birthyear i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#email i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#phonenumber i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
    };
    $(this).data('clicks', !click);
})

$('#birthyear').click(function () {
    let click = $(this).data('clicks');

    if (click) {
        sortByCol('birthyear');
        $("#fullname i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#email i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#phonenumber i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#birthyear i").removeClass("fa-sort fa-sort-down").addClass("fa-sort-up");
    }else{
        sortByColReverse('birthyear');
        $("#fullname i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#email i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#phonenumber i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#birthyear i").removeClass("fa-sort fa-sort-up").addClass("fa-sort-down");
    };
    $(this).data('clicks', !click);
})

$('#email').click(function () {
    let click = $(this).data('clicks');

    if (click) {
        sortByCol('email');
        $("#fullname i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#birthyear i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#phonenumber i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#email i").removeClass("fa-sort fa-sort-down").addClass("fa-sort-up");
    }else{
        sortByColReverse('email');
        $("#fullname i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#birthyear i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#phonenumber i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#email i").removeClass("fa-sort fa-sort-up").addClass("fa-sort-down");
    };
    $(this).data('clicks', !click);
})

$('#phonenumber').click(function () {
    let click = $(this).data('clicks');

    if (click) {
        sortByCol('phonenumber');
        $("#fullname i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#birthyear i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#email i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#phonenumber i").removeClass("fa-sort fa-sort-down").addClass("fa-sort-up");
    }else{
        sortByColReverse('phonenumber');
        $("#fullname i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#birthyear i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#email i").removeClass("fa-sort-up fa-sort-down").addClass("fa-sort");
        $("#phonenumber i").removeClass("fa-sort fa-sort-up").addClass("fa-sort-down");
    };
    $(this).data('clicks', !click);
})

// Search function
// function search() {
//     debugger
//     let input, filter, table, tr, td, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");

//     for(let i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }

$(document).ready(function () {
    $('#myInput').on('keyup', function () {
        // let value = $(this).val().toLowerCase();
        // $('#myTable tbody tr').filter(function () {
        //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        // })

        let  rows = $('#myTable').find("tbody tr");

        if (this.value.length > 0) {
            //First hide all an remove class used to identify matched rows
          rows.removeClass("match").hide().filter(function() {
              var match = false;
              $(this).find("td.filter").each(function() {
              var indexOf = $(this).text().toLowerCase().indexOf($("#myInput").val().toLowerCase());
              //Check with indexOf if this row cell include search string
              if(indexOf !== -1) {
                      match = true;
                 return;
              }	
            });
              return match;
          }).addClass("match").show();
        } else {
            //If filter not provided show all 
          rows.removeClass("match").show().find("span").contents().unwrap();
        }
        
        highlight(this.value);
    })
})

function highlight(string) {
    $("#myTable").find("tbody tr.match td.filter").each(function() {
    
        if($(this).text().indexOf(string) === -1)
          return;
    
      var matchStartIndex = $(this).text().toLowerCase().indexOf(string.toLowerCase());
      var matchEndIndex = matchStartIndex + string.length - 1;
  
      var beforeMatch = $(this).text().slice(0, matchStartIndex);
      var matchText = $(this).text().slice(matchStartIndex, matchEndIndex + 1);
      var afterMatch = $(this).text().slice(matchEndIndex + 1);
  
      //Here set selected text to e.g. bold style
      $(this).html(beforeMatch + "<span style='color: yellow;'>" + matchText + "</span>" + afterMatch);
    });
  };