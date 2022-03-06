AFRAME.registerComponent("fish",{
    init : function(){

        for (var i = 1; i <=8; i++) {
            var id = `fish${i}`
            var posX = (Math.random() * 100 + (-50))
            var posY = (Math.random() * 5 + 5)
            var posZ = (Math.random() * 60 + (-40))

            var position = { x: posX, y: posY, z: posZ }

            this.createCoins(id,position)

        }


    },
    createCoins : function(id,position){
        var fish1 = document.createElement("a-entity")
        var terrain1 = document.querySelector("#Island")
        fish1.setAttribute("id", id)

        fish1.setAttribute("gltf-model", "models/fish/scene.gltf")
        fish1.setAttribute("animation-mixer", {})
        fish1.setAttribute("scale", { x: 1.5, y: 1.5, z: 1.5 })

        fish1.setAttribute("position", position)

        terrain1.appendChild(fish1)


    }
})