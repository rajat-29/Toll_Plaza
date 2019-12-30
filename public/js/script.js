var email_add = document.getElementById('email_add');
var user_pass = document.getElementById('user_pass');
var submit_btn = document.getElementById('submit_btn');

submit_btn.addEventListener("click", function () {
	if(email_add.value == '' || user_pass.value == '')
	{
		$.confirm({
	      title: 'Fields ?',
	      content: "Field is Empty !! ",
	      draggable: true,
	      buttons: {
	        OK: {
	            btnClass: 'btn-danger any-other-class',
	             action: function () {      
	          }
	          },
	          }
	    });
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
        	$.confirm({
		      title: 'Fields ?',
		      content: "Wrong Email or Password !! ",
		      draggable: true,
		      buttons: {
		        OK: {
		            btnClass: 'btn-danger any-other-class',
		             action: function () {      
		          }
		          },
		          }
		    });
        }
	})
})