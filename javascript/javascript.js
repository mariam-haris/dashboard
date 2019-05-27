(function () {
    var passwordCheck = document.querySelector(".password-input");
    var emailCheck = document.querySelector(".email-input");
    var btnClick = document.querySelector(".submit");
    btnClick.addEventListener("click", function (e) {
        e.preventDefault();
        var mail = emailCheck.value;
        var search = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gmi;
        var check = search.test(mail);
        console.log(check);
        if (check) {
            console.log("right")
        }
        else {
            var elements = document.getElementsByClassName("display")[0];
            elements.style.display="block";

        }
    });
    btnClick.addEventListener("click", function (e) {
        e.preventDefault();
        var password = passwordCheck.value;
        console.log(password)
        var searchpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,12})/;
        var passcheck = searchpass.test(password);
        console.log(passcheck)
        if (passcheck) {
            console.log("right")
        }
        else {
            var elementsPass = document.getElementsByClassName("display")[1];
            elementsPass.style.display="block";
        }
    });
    btnClick.addEventListener("click", function () {
        var mail = emailCheck.value;
        var search = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/gmi;
        var check = search.test(mail);
        var password = passwordCheck.value;
        console.log(password)
        var searchpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,12})/;
        var passcheck = searchpass.test(password);
        if (check && passcheck) {
            location.href = "dashboard.html"
        }
    })
})
    ();