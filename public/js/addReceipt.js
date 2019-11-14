var submitStudent = document.getElementById('submitStudent');
var vehicle_category = document.getElementById('vehicle_category');
var vehicle_number = document.getElementById('vehicle_number');
var trip_way = document.getElementById('trip_way');
var receipt_cost = document.getElementById('receipt_cost');

function catValue() 
{
	if(vehicle_category.value == 'Car/Jeep')
	{
		receipt_cost.value = 40;
	}
	if(vehicle_category.value == 'Bus/Truck')
	{
		receipt_cost.value = 50;
	}
	if(vehicle_category.value == 'Light Commercial Vehicle')
	{
		receipt_cost.value = 85;
	}
	if(vehicle_category.value == 'Heavy Construction Vehicles')
	{
		receipt_cost.value = 100;
	}
	if(vehicle_category.value == 'OverSized Vehicles')
	{
		receipt_cost.value = 150;
	}
	if(vehicle_category.value == 'Three axle Vehicles')
	{
		receipt_cost.value = 180;
	}
}

submitStudent.addEventListener("click", function() {

	if(vehicle_number.value == '' || receipt_cost.value == '')
	{
		alert("Field is Empty");
		return;
	}

	var obj = new Object();
	obj.category = vehicle_category.value;
	obj.vehicleNumber = vehicle_number.value;
	obj.entryDate = new Date();
	obj.trip = trip_way.value;
	obj.cost = receipt_cost.value;

	var request = new XMLHttpRequest();
    request.open('POST',"/staff/addnewreceipt");
    request.setRequestHeader("Content-Type","application/json");
    request.send(JSON.stringify(obj))
    request.addEventListener("load",function() {
        alert("New Receipt Is Added");
        window.location = "/staff/addReceipts";
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
