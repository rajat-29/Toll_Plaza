var catname = document.getElementById('catname');
var submitbtn = document.getElementById('submitbtn');
var flag = 0;

submitbtn.addEventListener("click", function () {
	
	if(catname.value == '')
  {
      $.confirm({
      title: 'Category ?',
      content: "Category is Empty !! ",
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
        $.confirm({
          title: 'Status ?',
          content: "Status is Empty !! ",
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

  if(flag == 1)
  {
        $.confirm({
          title: 'Category ?',
          content: "Category already Registered !! ",
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
  else {
        var request = new XMLHttpRequest();
        request.open('POST',"/admin/addnewCategory");
        request.setRequestHeader("Content-Type","application/json");
        request.send(JSON.stringify(obj))
        request.addEventListener("load",function() {
            $.confirm({
              title: 'Category ?',
              content: "New Category Is Registred !! ",
              draggable: true,
              buttons: {
                OK: {
                    btnClass: 'btn-danger any-other-class',
                     action: function () {      
                        location.reload();
                  }
                  },
                  }
                });
        }); 
  }  
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
            flag = 1;
        }
        else {
           document.getElementById("email_info").style.display = 'none'; 
           flag = 0;
        }
    });  
}