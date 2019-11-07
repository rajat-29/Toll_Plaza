var catname = document.getElementById('catname');
var submitbtn = document.getElementById('submitbtn');

submitbtn.addEventListener("click", function () {
	
	if(catname.value == '')
    {
        alert("Category is Empty");
        return;
    }

    var obj = new Object();
	obj.name = catname.value;

	if(document.getElementById('activestatus').checked)
	{
		obj.status = "Active";
	}
	else if(document.getElementById('inactivestatus').checked)
	{
		obj.status = "Inactive";
	}
    else
    {
        alert("Status is Empty");
        return;
    }
    obj.createBy = window.sessionStorage.getItem('name');

    var request = new XMLHttpRequest();
    request.open('POST',"/admin/addnewCategory");
    request.setRequestHeader("Content-Type","application/json");
    request.send(JSON.stringify(obj))
    request.addEventListener("load",function() {
        alert("New Category Is Registred");
        window.location = "/admin/addCategory";
    });  
})


function cat_check()
{
    document.getElementById("email_info").style.display = 'visible';
    document.getElementById("email_info").style.display = 'block';
    document.getElementById("email_info").style.marginTop = '10px';
    document.getElementById("email_info").style.marginBottom = '10px';
    
    var request = new XMLHttpRequest();
    request.open('POST',"/admin/checkcategory");
    request.setRequestHeader("Content-Type","application/json");
    request.send(JSON.stringify({name: catname.value}));
    request.addEventListener("load",function() {
        var data = request.responseText;
        if(data === 'true') {
            display_email.innerHTML= "Category " + catname.value + " is already exist";
        }
        else
           document.getElementById("email_info").style.display = 'none'; 
    });  
}