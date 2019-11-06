var email_add = document.getElementById('email_add');
var user_pass = document.getElementById('user_pass');
var submit_btn = document.getElementById('submit_btn');

submit_btn.addEventListener("click", function () {
	if(email_add.value == '' || user_pass.value == '')
	{
		alert("Fields are empty");
		return;
	}

	var request = new XMLHttpRequest();
	request.open('POST',"/login/checklogin");
	request.setRequestHeader("Content-Type", "application/json");
	request.send(JSON.stringify({name : email_add.value,password : user_pass.value}))
	request.addEventListener("load", function () {
		var data = JSON.parse(request.responseText)
		if(data.isLogin === 1) {
		    window.sessionStorage.setItem('email' , data.email);
            window.sessionStorage.setItem('name' , data.name);
            window.sessionStorage.setItem('role' , data.role);

            window.location = "/login/home";
        }
        else {
        	alert("Wrong Email or Password");
        }
	})
})