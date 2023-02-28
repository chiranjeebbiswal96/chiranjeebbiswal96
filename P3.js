function converter(celsius,kg,ft)
converter(30,80,6)
{
    function temperature(celsius)
    {
        console.log("The temperature in faranhit is ",celsius*1.8+32);
    }
    temperature(celsius)//function declaration
    const weight=function(kg)
    {
        console.log("The weight in pounds is" ,kg*2.205);
    }
    weight(kg)//function expression
    const length = (ft)=>
    {
        console.log("The length in cm is",ft*30.48)
    }
    length(ft)//arrow function
}
