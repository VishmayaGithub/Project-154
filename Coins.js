AFRAME.registerComponent("coin",{
    init : function(){

        for (var i = 1; i <=10; i++) {
            var id = `coin${i}`

            var posX = (Math.random() * 100 + (-50))
            var posY = (Math.random() * 5 + 5)
            var posZ = (Math.random() * 60 + (-40))

            var position = { x: posX, y: posY, z: posZ }

            this.createCoins(id,position)

        }


    },
    createCoins : function(id,position){
        var coin1 = document.createElement("a-entity")
        const treasureEntity = document.querySelector("#Island")

        coin1.setAttribute("id",id)
        coin1.setAttribute("position",position)
        coin1.setAttribute("material","color","#ff9100")

        coin1.setAttribute("geometry",{primitive : "circle",radius : "1.2"})

        coin1.setAttribute("animation",{property : "rotation",to: "0 360 0", loop : true, dur : 1000})

        treasureEntity.appendChild(coin1)


    }
})