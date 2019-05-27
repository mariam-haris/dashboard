(function () {
    $(document).ready(function () {
         $.ajax({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/",
            success: function (res) {
                // console.log(res[0].title);
                for (var i = 0; i < res.length; i++) {
                    var id = res[i].id;
                    //bring post's title 
                    var pTitle = document.createElement("p");
                    pTitle.innerHTML = res[i].title;
                    pTitle.classList.add("p-title")
                    //bring post's body
                    var pbody = document.createElement("p");
                    pbody.innerHTML = res[i].body;
                    pbody.classList.add("p-body")
                    var section = document.createElement("section")
                    $(".post").append(section)
                    section.appendChild(pTitle);
                    section.appendChild(pbody);
                    section.setAttribute("class", "style");
                }
            },
            error: function (err) {
                console.log("error");
            }
        })
        var signUp=document.getElementById("signup")
        console.log(signUp)
        signUp.addEventListener("click",function(){
            location.href="index.html";
        })
    })
})();