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


