// (function () {
//     $(document).ready(function () {
//         $.ajax({
//             method: "GET",
//             url: "https://jsonplaceholder.typicode.com/posts/",
//             success: function (res) {
//                 // console.log(res[0].title);
//                 for (var i = 0; i < res.length; i++) {
// var id = res[i].id;
// // console.log(id)
//  //bring post's title 
// var pTitle = document.createElement("p");
// pTitle.innerHTML = res[i].title;
// pTitle.classList.add("p-title")
// //bring post's body
// var pbody = document.createElement("p");
// pbody.innerHTML = res[i].body;
// pbody.classList.add("p-body")
// // create elements in html
// var mydiv = document.createElement("div");
// var btnedit = document.createElement("button");
// var btndelete = document.createElement("button");
// //create buttons names
// btnedit.appendChild(document.createTextNode("Edit"));
// btndelete.appendChild(document.createTextNode("Delete"));
// //add classes to buttons
// btnedit.setAttribute("class", "btn-action")
// btnedit.classList.add("edit")
// btndelete.setAttribute("class", "btn-action")
// btndelete.classList.add("delete")
// //add buttons to div
// mydiv.appendChild(btnedit);
// mydiv.appendChild(btndelete);
// //add class to div that hold 2 buttons
// mydiv.setAttribute("class", "center")
// //create section that hold title and body and 2 buttons 
// var section = document.createElement("section")
// $(".background").append(section)
// section.appendChild(pTitle);
// section.appendChild(pbody);
// section.appendChild(mydiv);
// section.setAttribute("class", "grid");
//             },
//             error: function (err) {
//                 console.log("error");
//             }
//         });
//     });
//         var deleteButtons = document.getElementsByClassName("delete");
//         console.log(deleteButtons)
//         var editButtons =document.getElementsByClassName("edit")
// })();

(function () {
    $(document).ready(function () {
        var result = $.ajax({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/",
        });

        result.fail(
            function (er) {
                console.log("error");
            }
        )
        result.done(function (res) {
            for (var i = 0; i < res.length; i++) {
                var id = res[i].id;
                // console.log(id)
                //bring post's title 
                var pTitle = document.createElement("p");
                pTitle.innerHTML = res[i].title;
                pTitle.classList.add("p-title")
                //bring post's body
                var pbody = document.createElement("p");
                pbody.innerHTML = res[i].body;
                pbody.classList.add("p-body")
                // create elements in html
                var mydiv = document.createElement("div");
                var btnedit = document.createElement("button");
                var btndelete = document.createElement("button");
                //create buttons names
                btnedit.appendChild(document.createTextNode("Edit"));
                btndelete.appendChild(document.createTextNode("Delete"));
                //add classes to buttons
                btnedit.setAttribute("class", "btn-action")
                btnedit.classList.add("edit")
                btndelete.setAttribute("class", "btn-action")
                btndelete.classList.add("delete")
                //add buttons to div
                mydiv.appendChild(btnedit);
                mydiv.appendChild(btndelete);
                //add class to div that hold 2 buttons
                mydiv.setAttribute("class", "center")
                //create section that hold title and body and 2 buttons 
                var section = document.createElement("section")
                $(".background").append(section)
                section.appendChild(pTitle);
                section.appendChild(pbody);
                section.appendChild(mydiv);
                section.setAttribute("class", "grid");
            }
            //bring all delete buttons
            var deleteButtons = document.getElementsByClassName("delete");
            // console.log(deleteButtons)
            //listen on delete buttons
            $(".delete").on("click", function () {
                var check = confirm("are you sure you want to delete this section?");
                // console.log(check)
                if (check) {
                    $(this).parent().parent().slideUp();
                }
            })
            //bring all edit buttons
            var editButtons = document.getElementsByClassName("edit");

            // console.log(editButtons);
            //listen on edit buttons
            $(".edit").on("click", function () {
                localStorage.setItem("input1", $(this).parent().siblings(".p-title").text());
                localStorage.setItem("input2", $(this).parent().siblings(".p-body").text());
                location.href = "edit.html"
                console.log($(this).parent().siblings(".p-title"))
                console.log(this.id)
            })
            $("#input1").val(localStorage.getItem("input1"))
            $("#input2").val(localStorage.getItem("input2"))
            var finalEdit = document.getElementById("edit-button");
            var titleInput = document.getElementById("input1");
            // console.log(titleInput)
            var bodyInput = document.getElementById("input2");
            // console.log(finalEdit.value);
            finalEdit.addEventListener("click", function (e) {
                e.preventDefault();

                if (titleInput.value === "" || bodyInput.value === "") {
                    alert("you must add text");
                }
                else {
                    alert("thank you")
                    localStorage.setItem("input1", titleInput.value)
                    localStorage.setItem("input2", bodyInput.value)
                }
                location.href="dashboard.html" ;
            })
        })
    });

})();