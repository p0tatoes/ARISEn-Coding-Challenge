window.onload = () => {
    let input = {
        usr_names: [],
        usr_gender: [],
        usr_age: [],
    }

    table = document.querySelector(".table");

    function showTable() {
        let tbl_header, tbl_row;

        tbl_header = "<thead>";
        tbl_header += "<tr>";
        tbl_header += "<th>No.</th>";
        tbl_header += "<th>Name</th>";
        tbl_header += "<th>Gender</th>";
        tbl_header += "<th>Age</th>";
        tbl_header += "</tr>"
        tbl_header += "</thead>";

        tbl_row = "<tbody>";
        for (let i = 0; i < input.usr_names.length; i++) {
            row_num = i + 1;

            tbl_row += "<tr>";
            tbl_row += "<td>"+row_num+"</td>";

            tbl_row += "<td>"+input.usr_names[i]+"</td>";
            tbl_row += "<td>"+input.usr_gender[i]+"</td>";
            tbl_row += "<td>"+input.usr_age[i]+"</td>";

            tbl_row += "</tr>"; 
        }
        tbl_row += "</tbody>";
    
        table.innerHTML = "<table>"+tbl_header+tbl_row+"</table>";
    }

    document.getElementById("btn_Add").addEventListener("click", () => {
        let in_name = document.getElementById("in_Name");
        let in_gender = document.getElementById("in_Gender");
        let in_age = document.getElementById("in_Age");

        if ((in_name != null && in_name != "") && (in_gender != null && (in_gender.value.toLowerCase() == "male" || in_gender.value.toLowerCase() == "female")) && (in_age != null && in_age != 0)) {
            input.usr_names.push(in_name.value);
            input.usr_gender.push(in_gender.value);
            input.usr_age.push(in_age.value);
            showTable();
        }
        
    })

    document.getElementById("btn_DelLine").addEventListener("click", () => {
        let removeLine = document.getElementById("in_DelLine").value - 1;
        console.log(removeLine);
        if (document.getElementById("in_DelLine").value > 0) {
            input.usr_names.splice(removeLine, 1);
            input.usr_gender.splice(removeLine, 1);
            input.usr_age.splice(removeLine, 1);
            showTable();
        }
    })
}