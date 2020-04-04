//const person=new Person(20, "Hem");
//person.sayHello();

//IIFE
(function () {
    function Start() {

        let student: objects.Student;
        student = new objects.Student(25, "Raj", "abcabc");
        student.sayHello();
        student.studies();

    }
    window.addEventListener("load", Start);

})();
