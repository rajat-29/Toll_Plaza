var submitStudent = document.getElementById('submitStudent');
var vehicle_category = document.getElementById('vehicle_category');
var reg_number = document.getElementById('reg_number');
var validity_from = document.getElementById('validity_from');
var validity_to = document.getElementById('validity_to');
var applicant_name = document.getElementById('applicant_name');
var applicant_age = document.getElementById('applicant_age');
var applicant_address = document.getElementById('applicant_address');
var applicant_phone = document.getElementById('applicant_phone');
var applicant_balance = document.getElementById('applicant_balance');

submitStudent.addEventListener("click", function() {

	var ph = applicant_phone.value;

	if(reg_number.value == '' || validity_from.value == ''|| 
	 	validity_to.value == '' || applicant_name.value == ''|| applicant_age.value == '' ||
	 	applicant_address.value == '' || applicant_phone.value == ''|| applicant_balance.value == '')
	{
		alert("Field is Empty");
	 	return;
	}
	else if(ph.length<10 || ph.length>10)
	{
		alert('Phone No should be of length 10');
		return;
	}

	var obj = new Object();
	obj.category = vehicle_category.value;
	obj.registration = reg_number.value;
	obj.validityFrom = validity_from.value;
	obj.validityTo = validity_to.value;
	obj.name = applicant_name.value
	obj.age = applicant_age.value;
	obj.address = applicant_address.value;
	obj.phone = applicant_phone.value;
	obj.balance = applicant_balance.value;

	var request = new XMLHttpRequest();
    request.open('POST',"/admin/addnewpass");
    request.setRequestHeader("Content-Type","application/json");
    request.send(JSON.stringify(obj))
    request.addEventListener("load",function() {
        alert("New Pass Is Registred");
        window.location = "/admin/addPass";
    });  
})

function fetchselectoptions()
{
	// to fetch categories select options
	var commArr;
	var request = new XMLHttpRequest();
    request.open('GET','/admin/categoryOptions');
    request.send();
    request.onload = function()
    {
        commArr = JSON.parse(request.responseText);
       for(i in commArr)
       {
       	vehicle_category.options[vehicle_category.options.length] = new Option(commArr[i].name,commArr[i].name);
       }
    }
}
