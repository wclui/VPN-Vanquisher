const quit = (err) => {
    console.log(err)
    process.exit()
}

var user = {}
const fetch = require('node-fetch')
fetch('http://127.0.0.1:5000/api').then((response)=>{
    return response.json()
}).then((user)=>{
    this.user = user
})

const firebase = require('firebase')
const config = {
    apiKey: "AIzaSyA0kNyJpC-3VSPQRhcXFmre3Vwq7Pijiww",
    authDomain: "bigsad-ff378.firebaseapp.com",
    databaseURL: "https://bigsad-ff378.firebaseio.com",
    storageBucket: "bigsad-ff378.appspot.com",
}
firebase.initializeApp(config)
const database = firebase.database() //db ref

const NodeRSA = require('node-rsa')

var key2 = ""
database.ref('rsaKey').on('value', function(snapshot){
    key2 = new NodeRSA(snapshot.val())
    console.log(key2.decrypt(encrypted, 'utf8'))
})