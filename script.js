function addNum(a,b)
{
    let ans=a+b;
    return ans.toFixed(5);
}
function subNum(a,b)
{
    let ans=a-b;
    return ans.toFixed(5);
}
function Multiply(a,b)
{
    let ans=a*b;
    return ans.toFixed(5);
}
function divide(a,b)
{
    let ans=a/b;
    return ans.toFixed(5);
}
let value=document.querySelector(".input");
value.textContent="0";
let button=document.querySelectorAll('.btn.num');
button.forEach(button =>
{
    button.addEventListener("click", (event) =>
    {
        let cName=event.target.className;
        switch(true)
        {
            case cName.includes("zero"):
                decide_num("0");
                break;

            case cName.includes("one"):
                 decide_num("1");
                break;

            case cName.includes("two"):
                 decide_num("2");
                break;

            case cName.includes("three"):
                 decide_num("3");
                break;

            case cName.includes("four"):
                 decide_num("4");
                break;

            case cName.includes("five"):
                 decide_num("5");
                break;

            case cName.includes("six"):
                 decide_num("6");
                break;

            case cName.includes("seven"):
                decide_num("7");
                break;

            case cName.includes("eight"):
                 decide_num("8");
                break;
            case cName.includes("nine"):
                 decide_num("9");
                break;
        }
    })
}
)
let obj={
    firstNum:"",
    operator:"",
    SecondNum:""
};
let symbol_button=document.querySelectorAll(".operations>.btn");
symbol_button.forEach((symbol) =>
{
    
    symbol.addEventListener("click", (event)=>
    {
        let cName=event.target.className;
        switch(true)
        {
        case cName.includes("add"):
            if (obj.operator=="" && obj.firstNum!="")
            {
                obj.operator="+";
            }
            break;
        case cName.includes("subtract"):
            if (obj.operator=="" && obj.firstNum!="")
            {
                obj.operator="-";
            }
            break;
        case cName.includes("multiply"):
            if (obj.operator=="" && obj.firstNum!="")
            {
                obj.operator="*";
            }
            break;
        case cName.includes("divide"):
            if (obj.operator=="" && obj.firstNum!="")
            {
                obj.operator="/";
            }
            break;
        }
        console.log(obj.operator);
    }
    )
}
)
let AC=document.querySelector(".AC");
AC.addEventListener("click", ()=>
{
    value.textContent="0";
    obj.firstNum="";
    obj.operator="";
    obj.SecondNum="";
})
function decide_num(s)
{
    if(obj.operator=="")
    {
        obj.firstNum+=s;
        value.textContent=obj.firstNum;
    }
    else if(obj.SecondNum=="")
    {
        value.textContent=s;
        obj.SecondNum=s;
    }
    else{
        value.textContent+=s;
        obj.SecondNum+=s;
    }
}
let equal=document.querySelector(".equal");
equal.addEventListener("click",() =>
{
    if (obj.firstNum!="" && obj.SecondNum!="" && obj.operator!="")
    {
        let ans="";
        switch(obj.operator)
        {
            case "+":
            ans=addNum(parseFloat(obj.firstNum),parseFloat(obj.SecondNum));
            break;
            case "-":
            ans=subNum(parseFloat(obj.firstNum),parseFloat(obj.SecondNum));
            break;
            case "*":
            ans=Multiply(parseFloat(obj.firstNum),parseFloat(obj.SecondNum)); 
            break;
            case "/":
            ans=divide(parseFloat(obj.firstNum),parseFloat(obj.SecondNum));   
        }
        value.textContent=ans;
        obj.firstNum="";
        obj.operator="";
        obj.SecondNum="";
    }
})