let websiteData = "Secret Data"

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data: ",websiteData);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        websiteData = "newData";
        console.log("data: ",websiteData);
    }
}

const student1 = new User("Ali", "ali@ali.ali")
const student2 = new User("Ahmed", "ahmed@ahmed.ahmed")

const teacher1 = new User("Mohammed", "mohammad@mohammad.mohammad")

const admin1 = new Admin("admin", "admin@admin.admin");


console.log(student1);
console.log(student1.viewData());

console.log(student2);
console.log(student2.viewData());

console.log(teacher1);
console.log(teacher1.viewData());

console.log(admin1.editData());


