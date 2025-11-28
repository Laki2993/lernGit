function Create_Stike(){
    let Stick = document.createElement("div");
    Stick.classList.add("Stick");
    Stick.style.backgroundImage = "url(Orange1.png)";
    document.getElementById("Zoom_Zone").appendChild(Stick);
}

document.getElementById("Add").addEventListener("click", function () {
    document.getElementById("Add").style.width = "250px";
    document.getElementById("Add").style.justifyContent = "center"
    document.getElementById("Add").style.backgroundImage = "url(ndsjfnd)";
    document.getElementById("icon").style.display = "none";
});

document.getElementById("Add-Stiker").addEventListener("click", function () {
    Create_Stike(); 
})

document.getElementById("Add").addEventListener("mouseleave", function () {
    document.getElementById("Add").style.width = "50px";
    document.getElementById("Add").style.justifyContent = "start";
    document.getElementById("icon").style.display = "block";
});

document.getElementById("Sticker_Size").addEventListener("click", function () {
    document.getElementById("Sticker_Size").style.width = "120px";
})

let Zone_Elem = document.getElementById("Zoom_Zone"); 
let Zoom = 1.0;

document.getElementById("Plus").addEventListener("click", function () {
    Zoom += 0.1;
    document.getElementById("Zoom_Zone").style.transform = `scale(${Zoom})`;    
})

document.getElementById("Minus").addEventListener("click", function () {
    Zoom -= 0.1;
    document.getElementById("Zoom_Zone").style.transform = `scale(${Zoom})`;
})



document.getElementById("Board").addEventListener("mousedown", function (EVENT) {
    if (EVENT.button === 0 && EVENT.target.classList.contains("Stick")) {
        document.getElementById("SettingBar").style.display = "none";
        document.getElementById("Close_Setting_Bar").addEventListener('click',()=>{document.getElementById("SettingBar").style.display = "none";});
        let El = EVENT.target; 
        El.style.position = 'absolute'; 
        El.style.cursor = 'grabbing';


        function Targ(event) {
            let X = event.clientX;
            let Y = event.clientY;
            El.style.left = X - (El.offsetWidth / 2) + "px"; 
            El.style.top = Y - (El.offsetHeight / 2) + "px";
        }

        
        document.getElementById("Sticker_Size").addEventListener("mouseleave",()=>{
            document.getElementById("Sticker_Size").style.width = "50px";
        })

        document.getElementById("Text_Size").addEventListener("click",()=>{
            document.getElementById("Text_Size").style.width = "120px";
        });

        document.getElementById("Text_Size").addEventListener("mouseleave",()=>{
            document.getElementById("Text_Size").style.width = "50px";
        })

        document.getElementById("ChoouseColor").addEventListener("click",()=>{
            document.getElementById("ChoouseColor").style.width = "400px";
        });

        document.getElementById("ChoouseColor").addEventListener("mouseleave",()=>{
            document.getElementById("ChoouseColor").style.width = "50px";
        })





        document.addEventListener("mousemove", Targ);

        function MouseUpHandler() {
            document.removeEventListener("mousemove", Targ);
            document.removeEventListener("mouseup", MouseUpHandler); 
            El.style.cursor = 'default';
        }
        document.addEventListener("mouseup", MouseUpHandler, { once: true }); 




document.getElementById("Board").addEventListener("contextmenu", function (contextEvent) {
    const El = contextEvent.target; 
    let foundStick = null; 

    if (El.classList.contains("Stick")) { 
        foundStick = El;
    } else {
        const allSticks = document.querySelectorAll(".Stick");
        for (let i = 0; i < allSticks.length; i++) {
            const stick = allSticks[i];
            if (stick.contains(El)) { 
                foundStick = stick;
                break; 
            }
        }
    }

    if (foundStick) {
        let X_string = foundStick.style.left;
        let Y_string = foundStick.style.top;
        let X_num = parseInt(X_string, 10);
        let Y_num = parseInt(Y_string, 10);

        if (isNaN(X_num)) X_num = 0;
        if (isNaN(Y_num)) Y_num = 0;

        const settingBar = document.getElementById("SettingBar");
        if (settingBar) {
            settingBar.style.left = `${X_num + 10}px`; 
            settingBar.style.top = `${Y_num - 100}px`;
            settingBar.style.display = "flex"; 
        }
    } 

    contextEvent.preventDefault(); 
});




let foundStick = null; 
document.getElementById("Board").addEventListener("click", function (event) {
    const El = event.target; 

    if (El.classList.contains("Stick")) { 
        foundStick = El;
    } else {
        const allSticks = document.querySelectorAll(".Stick");
        for (let i = 0; i < allSticks.length; i++) {
            const stick = allSticks[i];
            if (stick.contains(El)) { 
                foundStick = stick;
                break; 
            }
        }
    }

    document.getElementById("red").addEventListener("click",()=>{
        foundStick.style.backgroundImage = "url('Sticker_Red.png')";
    });
    document.getElementById("orange").addEventListener("click",()=>{
        foundStick.style.backgroundImage = "url('Orange1.png')";
    });
        document.getElementById("blue").addEventListener("click",()=>{
        foundStick.style.backgroundImage = "url('Sticker_Blue.png')";
    });
    document.getElementById("green").addEventListener("click",()=>{
        foundStick.style.backgroundImage = "url('Sticker_Green.png')";
    });
        document.getElementById("yellow").addEventListener("click",()=>{
        foundStick.style.backgroundImage = "url('Sticker_Yellow.png')";
    });
    document.getElementById("gray").addEventListener("click",()=>{
        foundStick.style.backgroundImage = "url('Sticker_Gray.png')";
    });

    document.getElementById("Del_Sticker").addEventListener("click", function () {
        if (foundStick) {
            document.getElementById("SettingBar").style.display = "none";
            foundStick.remove();
            foundStick = null;
        }
    })

        switch (foundStick.style.width) {
            case "100px":
                document.getElementById("Inp_Sticker_Size").value = "1";
                break;
        
            case "200px":
                document.getElementById("Inp_Sticker_Size").value = "2";
                break;

            case "300px":
                document.getElementById("Inp_Sticker_Size").value = "3";
                break;
            case "400px":
                document.getElementById("Inp_Sticker_Size").value = "4";
                break;
            case "500px":
                document.getElementById("Inp_Sticker_Size").value = "5";
                break;
            case "600px":
                document.getElementById("Inp_Sticker_Size").value = "6";
                break;
            case "700px":
                document.getElementById("Inp_Sticker_Size").value = "7";
                break;
        }

    document.getElementById("Inp_Sticker_Size").addEventListener("input", function () {
    switch (document.getElementById("Inp_Sticker_Size").value){
        case "1":
            foundStick.style.width = "100px";
            foundStick.style.height = "100px";
            break;
        case "2":
            foundStick.style.width = "200px";
            foundStick.style.height = "200px";
            break;
        case "3":
            foundStick.style.width = "300px";
            foundStick.style.height = "300px";
            break;
        case "4":
            foundStick.style.width = "400px";
            foundStick.style.height = "400px";
            break;
        case "5":
            foundStick.style.width = "500px";
            foundStick.style.height = "500px";
            break;
        case "6":
            foundStick.style.width = "600px";
            foundStick.style.height = "600px";
            break;
        case "7":
            foundStick.style.width = "700px";
            foundStick.style.height = "700px";
            break;
    }
    
    });

    document.getElementById("Inp_Text_Size").addEventListener("input", function () {
        let Pt_Text = document.getElementById("Inp_Text_Size").value;
        foundStick.children[0].style.fontSize = Pt_Text + "px";
    });

});

foundStick = null; 

document.getElementById("Board").addEventListener("click", function (event) {
    const El = event.target; 
    if (El.classList.contains("Stick")) { 
        foundStick = El;
    } else {
        const allSticks = document.querySelectorAll(".Stick");
        for (let i = 0; i < allSticks.length; i++) {
            const stick = allSticks[i];
            if (stick.contains(El)) { 
                foundStick = stick;
                break; 
            }
        }
    }
});

document.getElementById("Add_Text").addEventListener("click", function () {
    if (foundStick) {
        const existingInput = foundStick.querySelector(".Text_Input");
        if (!existingInput) { 
            let Inp = document.createElement("textarea");
            Inp.classList = ("Text_Input");
            Inp.maxLength = 100;
            Inp.placeholder = "Enter text";
            foundStick.appendChild(Inp);
            let Link_Stick = foundStick;

            document.getElementById("Board").addEventListener("click", function () {
                if (Inp && Inp.value.trim() !== "") {
                    let Value_Input = Inp.value;
                    let TEXT = document.createElement("p");
                    TEXT.classList = ("Text_P");
                    TEXT.innerText = Value_Input;
                    Inp.remove();
                    Link_Stick.appendChild(TEXT);
                    Inp.value = "";
                    document.getElementById("SettingBar").style.display = "none";
                }
            });
        }
        foundStick = null; 
    }
});
    }
});