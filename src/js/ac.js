const temp_sensor_F = document.querySelector(".temp_sensor_F")
const temp_sensor_C = document.querySelector(".temp_sensor_C")
const set_temp_h3_F = document.querySelector(".set_temp_h3_F")

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

const status_temp_sensor_main = document.querySelector(".status_temp_sensor_main")
const status_temp_sensor_si = document.querySelector(".status_temp_sensor_si")
const status_temp_sensor_no = document.querySelector(".status_temp_sensor_no")
            
const set_temp_footer = document.querySelector(".set_temp_footer")
const fa_temp_up = document.querySelector(".fa-temp-up")
const fa_temp_down = document.querySelector(".fa-temp-down")

const set_temp_main = document.querySelector(".set_temp_main")
const set_temp_box_F = document.querySelector(".set_temp_box_F")
const set_temp_box_C = document.querySelector(".set_temp_box_C")
const set_temp_btn_aceptar = document.querySelector(".set_temp_btn_aceptar")
const set_temp_btn_cancelar = document.querySelector(".set_temp_btn_cancelar")




/*const temp_0 = document.querySelector("#display_temp0");
const temp_1 = document.querySelector("#display_temp1");
const temp_2 = document.querySelector("#display_temp2");*/




/*function update_values( temp1, temp2, temp3 ){
    temp_0.innerHTML = (temp1);
    temp_1.innerHTML = (temp2);
    temp_2.innerHTML = (temp3);
}

function process_msg(topic, message){
    if (topic == "values"){
        var msg = message.toString();
        var sp = msg.split(",");
        var temp1 = sp[0];
        var temp2 = sp[1];
        var temp3 = sp[2];
        update_values(temp1, temp2, temp3);
    }
}*/





// Initialize a mqtt variable globally
// const mqtt = require('mqtt')

// connection option
const options = {
    clean: true, // retain session
connectTimeout: 4000, // Timeout period
// Authentication information
//clientId: 'iot01',
//username: 'emqx_test',
//password: 'emqx_test',
Keepalive: '60',
}

// Connect string, and specify the connection method by the protocol
// ws Unencrypted WebSocket connection
// wss Encrypted WebSocket connection
// mqtt Unencrypted TCP connection
// mqtts Encrypted TCP connection
// wxs WeChat applet connection
// alis Alipay applet connection
const connectUrl = 'ws://public.mqtthq.com:1883/mqtt'
const client = mqtt.connect(connectUrl, options)

client.on('connect', () => {
console.log('Conectado con Exito')

client.subscribe('Casa_001/#', { qos: 0 }, (error) => {
  if ( !error ){
      console.log('Suscripción Exitosa')

  }
  else{
      console.log('Suscripción Fallida')
  }

  
})

client.publish('topic', 'message', (error) => {
  console.log(error || 'Mensaje Enviado')
})

})



/*function valueTemp(){
  temp = process_msg(topic, message);
  document.getElementById("display_temp").innerHTML = temp;
}


valueTemp();*/

client.on('reconnect', (error) => {
console.log('Error al Reconectar:', error)
})

client.on('error', (error) => {
console.log('Error de Conexión:', error)
})






















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

var idPower_Status
function circle_icon_power_status(){
    var id = document.getElementsByClassName("circle_icon_power").id
        if(id == 1){
            document.getElementsByClassName("circle_icon_power").id=0
            idPower_Status = 0
            console.log("Button Power" + idPower_Status)

            client.publish('Casa_001/Led1', 'off', (error) => {
                console.log(error || 'Mensaje Enviado')
            })
        }
        else{
            document.getElementsByClassName("circle_icon_power").id=1
            idPower_Status = 1
            console.log("Button Power" + idPower_Status)

            client.publish('Casa_001/Led1', 'on', (error) => {
                console.log(error || 'Mensaje Enviado')
            })
        }
}

function ADD_ON_POWER(){
    circle_icon_power.classList.add("box_shadown", document.getElementsByClassName("circle_icon_power").id=1)
    fa_power.classList.add("color")
    idPower_Status = 1
    
}

function REMOVE_ON_POWER(){
    circle_icon_power.classList.remove("box_shadown", document.getElementsByClassName("circle_icon_power").id=0)
    fa_power.classList.remove("color")
    idPower_Status = 0
    
}

circle_icon_power.addEventListener('click', () => {
    circle_icon_power.classList.toggle("box_shadown")
    fa_power.classList.toggle("color")
    circle_icon_power_status()
})

status_temp_sensor_si.addEventListener('click', () => {
    ADD_ON_POWER()
    status_temp_sensor_main.classList.remove("status_temp_sensor_main_display")

    client.publish('Casa_001/Led1', 'on', (error) => {
        console.log(error || 'Mensaje Enviado')
    })
})

status_temp_sensor_no.addEventListener('click', () => {
    REMOVE_ON_POWER()
    status_temp_sensor_main.classList.remove("status_temp_sensor_main_display")

    client.publish('Casa_001/Led1', 'off', (error) => {
        console.log(error || 'Mensaje Enviado')
    })
})


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



/* function set_frio_manual_on(){
    var frioManualOn = "frioManualOn"
    localStorage.setItem("frio_manual", frioManualOn)
    console.log(frioManualOn)
}

function set_frio_manual_off(){
    var frioManualOff = "frioManualOff"
    localStorage.setItem("frio_manual", frioManualOff)
    console.log(frioManualOff)
} */


function status_temp_sensor_main_display(){
    status_temp_sensor_main.classList.add("status_temp_sensor_main_display")
}



var idtoggle_Status = 0
function toggle_cool_status(){
    var id = document.getElementsByClassName("toggle_cool").id
    if(id == 1){
        document.getElementsByClassName("toggle_cool").id=0
        idtoggle_Status = 0
        console.log("If" + idtoggle_Status)

        //set_frio_manual_on()

        

    }
    else{
        document.getElementsByClassName("toggle_cool").id=1
        idtoggle_Status = 1
        console.log("Else" + idtoggle_Status)

        //set_frio_manual_off()

        status_temp_sensor_main_display()
    

    }
}

/* (() => {
    var frioManual = localStorage.getItem("frio_manual")

    if(frioManual == "frioManualOn"){
        ADD_MANUAL_TOGGLE()
    }
    else if(frioManual == "frioManualOff"){
        REMOVE_MANUAL_TOGGLE()
    }

    
})() */



toggle_cool.addEventListener('click', () =>{
    setTemp.classList.toggle("set_temp_hidde")
    barra_divide.classList.toggle("barra_divide_hidde")

    toggle_cool.classList.toggle("toggle_box_off");
    toggle_circle_cool.classList.toggle("toggle_circle_off");
    toggle_cool_status()

    circle_icon_temp.classList.toggle("circle_icon_hidde")
    circle_icon_power.classList.toggle("circle-icon-display")

    document.getElementsByClassName("circle_icon_power").id=0

})

toggle_fan.addEventListener('click', () => {
    toggle_fan.classList.toggle("toggle_box_on");
    toggle_circle_fan.classList.toggle("toggle_circle_on");
})

/************************************

            BOTON TOGGLE
                FINAL

 *************************************/


/************************************

            SET TEMP FOOTER
                INICIO

 *************************************/

set_temp_footer.addEventListener('click', () => {
    set_temp_main.classList.add("set_temp_main_display")

    set_temp_box_F.innerHTML = set_temp_h3_F.innerHTML
})


var i = 50
fa_temp_up.addEventListener('click', () => {
    fa_temp_up.classList.add("fa-temp-up-down-color")

    setTimeout(() => {
        fa_temp_up.classList.remove("fa-temp-up-down-color")
    }, 150)

    
    set_temp_box_F.innerHTML = i += 2
    
})


fa_temp_down.addEventListener('click', () => {
    fa_temp_down.classList.add("fa-temp-up-down-color")

    setTimeout(() => {
        fa_temp_down.classList.remove("fa-temp-up-down-color")
    }, 150)

    set_temp_box_F.innerHTML= i -= 2

})


set_temp_btn_aceptar.addEventListener('click', () => {

    set_temp_h3_F.innerHTML = set_temp_box_F.innerHTML

    set_temp_main.classList.remove("set_temp_main_display")

     
})

set_temp_btn_cancelar.addEventListener('click', () => {

    set_temp_main.classList.remove("set_temp_main_display")

})





/****************************
 * 
 ***       MQTT
 * 
*****************************/


client.on('message', (topic, message) => {
    console.log('Mensaje Recibido:', topic, '=>' , message.toString())
            //process_msg(topic, message);
        
    var msj = message.toString();
    var msj1 = Math.trunc((msj * 9/5) + 32);
    var msj2 = message.toString();

    if(msj != "on" && msj != "off"){
        temp_sensor_F.innerHTML = msj1;
        temp_sensor_C.innerHTML = msj2;
    }

    var valueTemp = set_temp_h3_F.innerHTML.toString()
    console.log("VALUE TEMP :"  + valueTemp)
    if(msj1 >= valueTemp && idtoggle_Status == 0){
       
        if(idtoggle_Status == 1){
            
        }
        else{
            ADD_ON_TEMP();
            console.log("STATE BUTTON" + idPower_Status);
            client.publish('Casa_001/Led1', 'on', (error) => {
            console.log(error || 'Mensaje Enviado')
            });
        }
    }
    else if(msj1 <= valueTemp && idtoggle_Status == 0){
        REMOVE_ON_TEMP();
        console.log("STATE BUTTON" + idPower_Status);
        client.publish('Casa_001/Led1', 'off', (error) => {
            console.log(error || 'Mensaje Enviado')
        });
    }

    /* if(idstatustoggleTemp0 == 1){
        idstatustoggleTemp0 = 0;

        if(idstatustoggleTemp0 == 0){
            ADD_BUTTON_POWER();
        }
        
    } */

    if(msj1 <= valueTemp && msj == "on" && idtoggle_Status == 1){
        ADD_BUTTON_POWER();
        client.publish('Casa_001/Led1', 'on', (error) => {
            console.log(error || 'Mensaje Enviado')
            });
    }

    
});

/****************************
 *                          * 
 *         MQTT           ***
 *                          *
*****************************/