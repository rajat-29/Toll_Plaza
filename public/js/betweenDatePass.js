var validity_From = document.getElementById('validity_From');
var validity_To = document.getElementById('validity_To');
var submitbtn = document.getElementById('submitbtn');

submitbtn.addEventListener("click", function () {
	
	if(validity_From.value == '' || validity_To.value == '')
    {
        alert("Field  is Empty");
        return;
    }

    $('#studentListing').DataTable().destroy()
        $(document).ready(function() {
      var table = $('#studentListing').DataTable({
      "processing": true,
      "serverSide": true,
      "searching" : false,
      "dataSrc":"",
      "ajax": {
        "url": "/admin/findBetweenDatePass",
        "Content-Type" : "application/json",
        "data" : {validityFrom : validity_From.value,validityTo : validity_To.value},
        "type": "POST",
      },
      "columns": [
      {
        "data" : "category"
      },
      {
        "data" : "registration"
      },
      {
        "data" : "validityFrom"
      },
      {
        "data" : "validityTo", "orderable": false
      },
      {
        "data" : "name", "orderable": false
      },
      {
        "data" : "address", "orderable": false
      },
      {
        "data" : "phone", "orderable": false
      },
      {
        "data" : "balance", "orderable": false
      },
      ],
    });
  });
})