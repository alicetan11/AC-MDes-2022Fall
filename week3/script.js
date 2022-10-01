<script>
let colorBtn = document.getElementById("colorChange")
        const mainSct = document.getElementById("mainSection")
        const textBtn = document.getElementById("addText")
        const imgBtn = document.getElementById("imageBtn")

        console.log(colorBtn)

         const addSomeText = () = > {        
            const someText ="Here is a bit of text."
            const htmlElem = document.createElement("h1")
            htmlElem.innerText = someText 

            mainSct.appendChild(htmlElem)

         }
        const addImage = () => {
            const imgURL ="https://www.pngkey.com/png/full/14-148130_minion-imagenes-de-100x100-pixeles.png"
            const imgElem = document.createElement("img")
            imgElem.src = imgURL 
            imgElem.alt = "circle logo"

            mainSct.apendChild(imgElem)
        }
         imgBtn.addEventListener("click" addImage)
        textBtn.addEventListener("click", addSomeText)
        colorBtn.addEventListener("click", ()=>{

            let num1 = Math.random()*255;
            let num2 = Math.random()*255
            let num3 = Math.random()*255
            

            mainSct.style.backgroundColor = "rgb(" + num2 + "," + num1 + "," +  num3 +")"


        })
        </script>