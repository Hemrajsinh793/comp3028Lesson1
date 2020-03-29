//self executing function, when html page loads->it calls appropriate js file and this function will run immediate, default function
(function(){
    let myVariable=14;
    /*function Start()
    {
        console.log(`Application Started....${myVariable}`);
    }
    window.addEventListener("load", Start);*/
   /* let Start=function()
    {
        console.log(`Application started part 2..${myVariable}`);
    }
    window.addEventListener("load",Start());*/
    
    /*
    window.addEventListener("load", function(){
        console.log(`Application started 3..${myVariable}`)
    })*/

    window.addEventListener("load",()=>//lambda function
    console.log(`Applicaton Started..4${myVariable}`))
})();