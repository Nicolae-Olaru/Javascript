class PersonalData {
    constructor(firstName, lastName, age, login, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.login = login;
        this.email = email;
        this.password = password;
    }
}

function saveData() {
    const person = new PersonalData(
        document.getElementById("name").value,
        document.getElementById("surname").value,
        document.getElementById("age").value,
        document.getElementById("login").value,
        document.getElementById("email").value,
        document.getElementById("password").value
    );

    const jsonData = JSON.stringify(person, null, 4);
    downloadJSON(jsonData);
}

function downloadJSON(data, filename = "data.json") {
    const blob = new Blob([data], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}