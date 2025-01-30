
function setData() {
    personal_data.firstName = document.getElementById("name").value;
    personal_data.lastName = document.getElementById("surname").value;
    personal_data.age = document.getElementById("age").value;
    personal_data.email = document.getElementById("email").value;
    personal_data.login = document.getElementById("login").value;
    personal_data.password = document.getElementById("password").value;
    personal_data.driving_license = true;

    console.log("User Data:", personal_data);
}