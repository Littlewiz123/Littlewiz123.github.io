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
        $('tbody').append('<tr class="row"><td>' + val.fullname + '</td><td>' + val.birthyear + '</td><td>' + val.email + '</td><td>' + val.phonenumber +
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

$('#fullname').click(function () {
    let click = $(this).data('clicks');

    if (click) {
        sortByCol('fullname');
        $("#fullname .fa-sort").css("display", "none");
        $("#fullname .fa-sort-up").css("display", "block");
        $("#fullname .fa-sort-down").css("display", "none");
    }else{
        sortByColReverse('fullname');
        $("#fullname .fa-sort").css("display", "none");
        $("#fullname .fa-sort-up").css("display", "none");
        $("#fullname .fa-sort-down").css("display", "block");
    };
    $(this).data('clicks', !click);
})

$('#birthyear').click(function () {
    let click = $(this).data('clicks');

    if (click) {
        sortByCol('birthyear');
        $("#birthyear .fa-sort").css("display", "none");
        $("#birthyear .fa-sort-up").css("display", "block");
        $("#birthyear .fa-sort-down").css("display", "none");
    }else{
        sortByColReverse('birthyear');
        $("#birthyear .fa-sort").css("display", "none");
        $("#birthyear .fa-sort-up").css("display", "none");
        $("#birthyear .fa-sort-down").css("display", "block");
    };
    $(this).data('clicks', !click);
})

$('#email').click(function () {
    let click = $(this).data('clicks');

    if (click) {
        sortByCol('email');
        $("#email .fa-sort").css("display", "none");
        $("#email .fa-sort-up").css("display", "block");
        $("#email .fa-sort-down").css("display", "none");
    }else{
        sortByColReverse('email');
        $("#email .fa-sort").css("display", "none");
        $("#email .fa-sort-up").css("display", "none");
        $("#email .fa-sort-down").css("display", "block");
    };
    $(this).data('clicks', !click);
})

$('#phonenumber').click(function () {
    let click = $(this).data('clicks');

    if (click) {
        sortByCol('phonenumber');
        $("#phonenumber .fa-sort").css("display", "none");
        $("#phonenumber .fa-sort-up").css("display", "block");
        $("#phonenumber .fa-sort-down").css("display", "none");
    }else{
        sortByColReverse('phonenumber');
        $("#phonenumber .fa-sort").css("display", "none");
        $("#phonenumber .fa-sort-up").css("display", "none");
        $("#phonenumber .fa-sort-down").css("display", "block");
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
        let value = $(this).val().toLowerCase();
        $('#myTable tbody tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        })
    })
})