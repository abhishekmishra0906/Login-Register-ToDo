  let todo = document.getElementById("todoapp");
 let inputBox = document.getElementById("inputbox");
let listContainer = document.getElementById("listcontainer");
 let btn = document.getElementById("btn");

 btn.addEventListener("click",addTask)
 function addTask(){
    if(inputBox.value === ""){              // input box empty rhega toh alert ka popup aayega
        alert("Please Enter Your Task!");
    }
        else{
            let li = document.createElement("li"); //list create krta hai
            li.innerText = inputBox.value;          // Input box me jo type krenge wo store hoga 
            listContainer.appendChild(li);          // list me show hoga
            inputBox.value = "";                    // add hone ke baad input box empty ho jayega

        li.addEventListener("click" , function(){       // list me click krne pr whi input box me aa jayega or click krne pr ek new list add hoga
            inputBox.value = li.innerText.replace("❌","");
        })   

        let span = document.createElement("span");      // delete icon ka element store krta hai span ke andar
            span.innerText = "❌";                      // delete icon create krta hai

            span.addEventListener("click" , function(e){        // function chalega delete icon me click krne pr list delte ho jaaye
                e.stopPropagation();                            // li ko input box me jaane se rokta hai
                let dlt = confirm("Are you sure you want to delete"); //list delete krne ke liye confirmation mangta hai
                if(dlt){                                                // agar yes kiye 
                     li.remove();                                       // toh list remove ho jayega
                }
            })
            li.appendChild(span)                    // delete icon add krta hai list me right side
        }
 }