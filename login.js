

function login(username, pwd, func){
    const isSuccess = username === "admin" && pwd === "12345";
    func(isSuccess);
}



function doLogin() {
    var username = document.getElementById("InputEmail1");
    var pwd = document.getElementById("InputPassword1");

    login(username.value, pwd.value, function (isSuccess) {
        if (isSuccess) {
            window.location = "main.html";
        } else {
            alert("invalid credentials");
        }
    });

    return false;
}