//const person=new Person(20, "Hem");
//person.sayHello();
//IIFE
(function () {
    function Start() {
        var student;
        student = new objects.Student(25, "Raj", "abcabc");
        student.sayHello();
        student.studies();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map