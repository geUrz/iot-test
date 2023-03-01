const setTemp = document.querySelector(".set_temp")
const barra_divide = document.querySelector(".barra_divide")

const fa_temp = document.querySelector(".fa-temperature-half")
const fa_power = document.querySelector(".fa-power-off")
const circle_icon_power = document.querySelector(".circle_icon_power")
const circle_icon_temp = document.querySelector(".circle_icon_temp")

const toggle_cool = document.querySelector(".toggle_cool")
const toggle_circle_cool = document.querySelector(".toggle_circle_cool")
const toggle_fan = document.querySelector(".toggle_fan")
const toggle_circle_fan = document.querySelector(".toggle_circle_fan")
            






/************************************

                SET TEMP
                INICIO

 *************************************/





/************************************

                SET TEMP
                FINAL

 *************************************/

/************************************

            BOTON CENTRAL TEMP
                INICIO

 *************************************/


function ADD_ON_TEMP(){
    circle_icon_temp.classList.add("box_shadown")
    fa_temp.classList.add("color")
}

function REMOVE_ON_TEMP(){
    circle_icon_temp.classList.remove("box_shadown")
    fa_temp.classList.remove("color")
}

/************************************

            BOTON CENTRAL TEMP
                FINAL

 *************************************/

 /************************************

            BOTON CENTRAL POWER
                INICIO

 *************************************/

circle_icon_power.addEventListener('click', () => {
    circle_icon_power.classList.toggle("box_shadown")
    fa_power.classList.toggle("color")
})


function ADD_ON_POWER(){
    circle_icon_power.classList.add("box_shadown")
    fa_power.classList.add("color")
}

function REMOVE_ON_POWER(){
    circle_icon_power.classList.remove("box_shadown")
    fa_power.classList.remove("color")
}


 /************************************

            BOTON CENTRAL POWER
                FINAL

 *************************************/


/************************************

            BOTON TOGGLE
                INICIO

 *************************************/


function ADD_MANUAL_TOGGLE(){
    setTemp.classList.add("set_temp_hidde")
    barra_divide.classList.add("barra_divide_hidde")
    
    toggle_cool.classList.add("toggle_box_off");
    toggle_circle_cool.classList.add("toggle_circle_off");

    circle_icon_temp.classList.add("circle_icon_hidde")
    circle_icon_power.classList.add("circle-icon-display")
}

function REMOVE_MANUAL_TOGGLE(){
    setTemp.classList.remove("set_temp_hidde")
    barra_divide.classList.remove("barra_divide_hidde")

    toggle_cool.classList.remove("toggle_box_off");
    toggle_circle_cool.classList.remove("toggle_circle_off");
    toggle_cool_status()

    circle_icon_temp.classList.remove("circle_icon_hidde")
    circle_icon_power.classList.remove("circle-icon-display")
}



function set_frio_manual_on(){
    var frioManualOn = "frioManualOn"
    localStorage.setItem("frio_manual", frioManualOn)
    console.log(frioManualOn)
}

function set_frio_manual_off(){
    var frioManualOff = "frioManualOff"
    localStorage.setItem("frio_manual", frioManualOff)
    console.log(frioManualOff)
}




var idStatus = 1
function toggle_cool_status(){
    var id = document.getElementsByClassName("toggle_cool").id
    if(id == 1){
        document.getElementsByClassName("toggle_cool").id=0
        idStatus = 1

        REMOVE_ON_POWER()

        set_frio_manual_on()
        

    }
    else{
        document.getElementsByClassName("toggle_cool").id=1
        idStatus = 0 

        set_frio_manual_off()
    

    }
}

(() => {
    var frioManual = localStorage.getItem("frio_manual")

    if(frioManual == "frioManualOn"){
        ADD_MANUAL_TOGGLE()
    }
    else if(frioManual == "frioManualOff"){
        REMOVE_MANUAL_TOGGLE()
    }

    
})()



toggle_cool.addEventListener('click', () =>{
    setTemp.classList.toggle("set_temp_hidde")
    barra_divide.classList.toggle("barra_divide_hidde")
    
    toggle_cool.classList.toggle("toggle_box_off");
    toggle_circle_cool.classList.toggle("toggle_circle_off");
    toggle_cool_status()

    circle_icon_temp.classList.toggle("circle_icon_hidde")
    circle_icon_power.classList.toggle("circle-icon-display")
})

toggle_fan.addEventListener('click', () => {
    toggle_fan.classList.toggle("toggle_box_on");
    toggle_circle_fan.classList.toggle("toggle_circle_on");
})

/************************************

            BOTON TOGGLE
                FINAL

 *************************************/