function show(p) {
    // console.log(p);
    // $("#" + p).slideToggle(400);
    // console.log($("#" + p).parent());
    let row = $("body").find("div div");

    for (let  i = 0; i < row.length; i++) {
        // console.log(row[i].id)
        if (row[i].id == p) {
            $("#" + p).toggle("200");
        }
        if (row[i].id != p) {
            $("#" + row[i].id).hide("slow");
        }
    }
}