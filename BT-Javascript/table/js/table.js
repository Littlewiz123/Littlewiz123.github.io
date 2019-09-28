function deleteUser(r) {
    let i = r.parentNode.parentNode.parentNode;
    console.log(i);
    i.remove();
    // document.getElementById("myTable").deleteRow(i);
}

let accounts = [
    {
        fullname: "Minh Duc",
        birthyear: "1996",
        email: "abc@gmail.com",
        phonenumber: "123456789"
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
        email: "abc@gmail.com",
        phonenumber: "0123456789"
    }
]

function getAccounts() {
    $(".row").remove();
    $.each(accounts, function (index, val) {
        $('tbody').append('<tr class="row"><td>' + val.fullname + '</td><td>' + val.birthyear + '</td><td>' + val.email + '</td><td>' + val.phonenumber +
        '</td><td><div class="link"><i class="fas fa-edit"></i><a href="#" id="edit">Chỉnh sửa</a><span> | </span><i class="fas fa-trash-alt"></i><a href="#" onclick="deleteUser(this)" id="delete">Xóa</a></div></td></tr>');
    });
}

getAccounts();

function sortFullname() {
    $(".row").remove();
    accounts = accounts.sort(
        function compareFullname(a, b) {
            if (a.fullname < b.fullname) {
                return -1;
            }
            if (a.fullname > b.fullname) {
                return 1;
            }
            return 0;
        }
    );
    $.each(accounts, function (index, val) {
        $('tbody').append('<tr class="row"><td>' + val.fullname + '</td><td>' + val.birthyear + '</td><td>' + val.email + '</td><td>' + val.phonenumber +
        '</td><td><div class="link"><i class="fas fa-edit"></i><a href="#" id="edit">Chỉnh sửa</a><span> | </span><i class="fas fa-trash-alt"></i><a href="#" onclick="deleteUser(this)" id="delete">Xóa</a></div></td></tr>');
    });
}

function sortBirthyear() {
    $(".row").remove();
    accounts = accounts.sort(
        function compareFullname(a, b) {
            if (a.birthyear < b.birthyear) {
                return -1;
            }
            if (a.birthyear > b.birthyear) {
                return 1;
            }
            return 0;
        }
    );
    $.each(accounts, function (index, val) {
        $('tbody').append('<tr class="row"><td>' + val.fullname + '</td><td>' + val.birthyear + '</td><td>' + val.email + '</td><td>' + val.phonenumber +
        '</td><td><div class="link"><i class="fas fa-edit"></i><a href="#" id="edit">Chỉnh sửa</a><span> | </span><i class="fas fa-trash-alt"></i><a href="#" onclick="deleteUser(this)" id="delete">Xóa</a></div></td></tr>');
    });
}

function sortEmail() {
    $(".row").remove();
    accounts = accounts.sort(
        function compareFullname(a, b) {
            if (a.email < b.email) {
                return -1;
            }
            if (a.email > b.email) {
                return 1;
            }
            return 0;
        }
    );
    $.each(accounts, function (index, val) {
        $('tbody').append('<tr class="row"><td>' + val.fullname + '</td><td>' + val.birthyear + '</td><td>' + val.email + '</td><td>' + val.phonenumber +
        '</td><td><div class="link"><i class="fas fa-edit"></i><a href="#" id="edit">Chỉnh sửa</a><span> | </span><i class="fas fa-trash-alt"></i><a href="#" onclick="deleteUser(this)" id="delete">Xóa</a></div></td></tr>');
    });
}

function sortPhonenumber() {
    $(".row").remove();
    accounts = accounts.sort(
        function compareFullname(a, b) {
            if (a.phonenumber < b.phonenumber) {
                return -1;
            }
            if (a.phonenumber > b.phonenumber) {
                return 1;
            }
            return 0;
        }
    );
    $.each(accounts, function (index, val) {
        $('tbody').append('<tr class="row"><td>' + val.fullname + '</td><td>' + val.birthyear + '</td><td>' + val.email + '</td><td>' + val.phonenumber +
        '</td><td><div class="link"><i class="fas fa-edit"></i><a href="#" id="edit">Chỉnh sửa</a><span> | </span><i class="fas fa-trash-alt"></i><a href="#" onclick="deleteUser(this)" id="delete">Xóa</a></div></td></tr>');
    });
}

