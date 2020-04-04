module objects{

    
export class Student extends Person{
    //private instance
    private _studentID:string;
    //public properties
    get studentID():string{
        return this._studentID;
    }
    set studentID(newID:string)
    {
        this._studentID=newID;
    }
    //constructor
    constructor(age:number, name:string,studentID:string)
    {
        super(age,name);
        this.studentID=studentID;
    }
    //privat method
    //public method
    public studies():void{
        console.log(`${this.name} has id number ${this.studentID}`)
    }
}
}