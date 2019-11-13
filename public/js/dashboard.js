function addCategory() {
	window.location = "/admin/addCategory";
}

function manageCategory() {
	window.location = "/admin/manageCategory";
}

function addStaff() {
	window.location = "/admin/addStaff";
}

function manageStaff() {
	window.location = "/admin/manageStaff";
}

function addPass() {
	window.location = "/admin/addPass";
}

function managePass() {
	window.location = "/admin/managePass";
}

function betweenDatesPass() {
	window.location = "/admin/betweenDatesPass";
}

function passCount() {
	window.location = "/admin/passCount";
}

function passSales() {
	window.location = "/admin/passSales";
}

function changePassword() {
	window.location = "/login/changePassword";
}

function openlogoutpage()
{
    $.confirm({
    theme: 'supervan',
    title: 'Confirm Logout!',
    content: 'Do you really want logout?',
    draggable: true,
    buttons: {
        Yes: {
            action: function () {
            	window.sessionStorage.removeItem('email');
            	window.sessionStorage.removeItem('name');
            	window.sessionStorage.removeItem('role');
             	window.location = "/login/logout_person";
        }
    },
        No: {
             action: function () {}
    },
    }
    });
}

