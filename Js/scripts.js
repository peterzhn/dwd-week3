function catfact(){

const app = document.getElementById('root')

var request = new XMLHttpRequest()
request.open('GET','https://meowfacts.herokuapp.com/', true)
request.onload = function () {

    var cat = JSON.parse(this.response)
        console.log(cat.data[0])  

        const h1 = document.createElement('h1')
        h1.textContent = cat.data[0]    

                app.appendChild(h1)
         

      

}

request.send()

}
