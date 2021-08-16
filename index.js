const change = document.querySelector('.play')
const button = document.querySelectorAll(".btn")
const squares = document.querySelectorAll(".square")
const gridHeading = document.querySelector(".grid-heading")
var a = 0
var b
var c = []
var sortArrayC = []
var sortArrayD = []
var d = []
var noOfClicks = 0 
var playerAndComp = []
var playerx = []
var playero = []
var q = []
var p
var chkArray = [ [0,3,6], [1,4,7], [2,5,8], [0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6] ]

// var f = [1,2,3,4,5]

// var h = [9,8,3,7,6]

// var fStr = JSON.stringify(f).replace(/,/g,'')
// var hStr = JSON.stringify(h).replace(/,/g,'')
// console.log(hStr[1])
// console.log(fStr)
// console.log(JSON.stringify(chkArray[0]).replace(/,/g,""))

// for (var k = 1; k < 6; k++){
//     console.log(hStr[k])
//     console.log(fStr[k])
//     if (fStr[k] == hStr[k]) {
//         console.log("true")
//         // break
//     }
// }

// var s = JSON.stringify(chkArray[3])
// console.log(s.replace(/,/g,'').search(chkArray[3][0]))
// var g = JSON.stringify(f)
// var e = g.replace(/,/g,'')
// console.log(e.search('3'))
// console.log(e)
// console.log(s)
// console.log(g)

/* Write Function Below */

/* Logic Programming */
// squares.forEach for selecting each div.square#id
squares.forEach(square => {
    square.addEventListener('click', handleClick, { once: true})
    noOfClicks++
})

function handleClick(e) {

    b = e.target.id
    console.log("b= " + b)

    clickSquare = squares[b-1]
    playerAndComp.push(b-1)
    console.log(playerAndComp)
    
    /* For adding images randomly */    
    if (a == 0){

        a = 1

        clickSquare.classList.add("cross")
        clickSquare.setAttribute('title', 'Already Marked')
        clickSquare.style.cursor = 'not-allowed'
        
        playerx.push(b-1)
        console.log(playerx)
        
        if ( playerx.length == 3){

            c = playerx
            sortArrayC = c.sort()

            for (var i = 0; i < 9; i++){
                if (JSON.stringify(sortArrayC) === JSON.stringify(chkArray[i])) {
                    alert("x has won.")
                    change.innerHTML = "<span style= font-family:'Rammetto One', cursive; font-size:2.5rem> X </span> has won. Refresh To Start Again"
                    change.style.fontSize = "1.5rem"
                    change.style.color = "#E40017"
                    gridHeading.remove()
                    break
                }
            }

            console.log(sortArrayC)
        }
        else if ( playerx.length == 4){

            playerxStr = JSON.stringify(playerx).replace(/,/g, '')

            for ( var j = 0; j < 8; j++ ) {
                chkStr = JSON.stringify(chkArray[j]).replace(/,/g,'')
                p = 0
                for ( var k = 1; k<= playerx.length; k++){

                    for ( var t = 1; t <= 3; t++) {
                        
                        if ( playerxStr[k] == chkStr[t] ) {
                            console.log(k + " " + playerxStr[k] + " " + t + " " + chkStr[t] + " " + chkArray[j])
                            q.push(playerxStr[k])
                            console.log(q) 
                            p++
                            console.log(p)  
                        }
                        if ( p == 3) {
                            alert("x has won.")
                            change.innerHTML = "<span style= font-family:'Rammetto One', cursive; font-size:2.5rem> X </span> has won. Refresh To Start Again"
                            change.style.fontSize = "1.5rem"
                            change.style.color = "#E40017"
                            gridHeading.textContent = ""
                            break
                        }
                    } 
                }
            }

        }
        else if ( playerx.length == 5){

            playerxStr = JSON.stringify(playerx).replace(/,/g, '')

            for ( var j = 0; j < 8; j++ ) {
                chkStr = JSON.stringify(chkArray[j]).replace(/,/g,'')
                p = 0
                for ( var k = 1; k<= playerx.length; k++){

                    for ( var t = 1; t <= 3; t++) {
                        
                        if ( playerxStr[k] == chkStr[t] ) {
                            console.log(k + " " + playerxStr[k] + " " + t + " " + chkStr[t] + " " + chkArray[j])
                            q.push(playerxStr[k])
                            console.log(q) 
                            p++
                            console.log(p)  
                        }
                        if ( p == 3) {
                            alert("x has won.")
                            change.innerHTML = "<span style= font-family:'Rammetto One', cursive; font-size:2.5rem> X </span> has won. Refresh To Start Again"
                            change.style.fontSize = "1.5rem"
                            change.style.color = "#E40017"
                            gridHeading.textContent = ""
                            break
                            
                        }
                        else if ( noOfClicks == 9  && p!=3){
                            change.textContent = "DRAW. Refresh To Start Again"
                            change.style.fontSize = "1.5rem"
                            change.style.color = "#E40017"
                            gridHeading.textContent = ""
                        }
                    } 
                }
            }

            c = playerx.slice(2,5)
            d = playerx.slice(1,4)

            sortArrayC = c.sort()
            sortArrayD = d.sort()

            console.log("cx" + c)    
            console.log("dx" +  d)    
        // console.log(sortedArray)

        }

       
    }
    else if (a == 1){

        a = 0

        clickSquare.classList.add("circle")
        clickSquare.setAttribute('title', 'Already Marked')
        clickSquare.style.cursor = 'not-allowed'

        playero.push(b-1)
        console.log(playero)
        console.log("playero")


        if ( playero.length == 3){

            c = playero
            sortArrayC = c.sort()

            for (var i = 0; i < 9; i++){
                if (JSON.stringify(sortArrayC) === JSON.stringify(chkArray[i])) {
                    alert("o has won.")
                    change.innerHTML = "<span style= font-family:'Rammetto One', cursive; font-size:2.5rem> O </span> has won. Refresh To Start Again"
                    change.style.fontSize = "1.5rem"
                    change.style.color = "#E40017"
                    gridHeading.textContent = ""
                    break
                }
            }

            console.log("co" + c)   

        }
        else if ( playero.length == 4){

            playeroStr = JSON.stringify(playero).replace(/,/g, '')

            for ( var j = 0; j < 8; j++ ) {
                chkStr = JSON.stringify(chkArray[j]).replace(/,/g,'')
                p = 0
                for ( var k = 1; k<= playero.length; k++){

                    for ( var t = 1; t <= 3; t++) {
                        
                        if ( playeroStr[k] == chkStr[t] ) {
                            console.log(k + " " + playeroStr[k] + " " + t + " " + chkStr[t] + " " + chkArray[j])
                            q.push(playeroStr[k])
                            console.log(q) 
                            p++
                            console.log(p)  
                        }
                        if ( p == 3) {
                            alert("o has won.") 
                            change.innerHTML = "<span style= font-family:'Rammetto One', cursive; font-size:2.5rem> O </span> has won. Refresh To Start Again"
                            change.style.fontSize = "1.5rem"
                            change.style.color = "#E40017"
                            gridHeading.textContent = ""
                            break
                        }
                    } 
                }
            }

        }
    }
}
