
async function findRandom () {
    let fetchlist = fetch('./valid-wordle-words.txt')
    .then(response => response.text())
    .then((data) => {
        let words = data.match(/.{1,5}/g);
        let random = (Math.round(words.length * Math.random()))
        let randomWord = words[random]
        return randomWord
    })
    console.log(fetchlist)
    return fetchlist
}

async function makeWords () {
    let fetchlist = fetch('./valid-wordle-words.txt')
    .then(response => response.text())
    .then((data) => {
        let words = data.match(/.{1,5}/g);
        return words
    })
    return fetchlist
}

let otherPromise = makeWords ()

let wordList = ''

otherPromise.then (data => {
    wordList = data
})

let mypromise = findRandom()

let chosen = ''

mypromise.then(data => {
    chosen = data   
})


let rowNum = 1

function check () {
    let letters = chosen.split("")
    if (((document.getElementById("box_" + rowNum + "x" + 1).value) == "") || ((document.getElementById("box_" + rowNum + "x" + 2).value) == "") || ((document.getElementById("box_" + rowNum + "x" + 3).value) == "") || ((document.getElementById("box_" + rowNum + "x" + 4).value) == "") || ((document.getElementById("box_" + rowNum + "x" + 5).value) == "")) {
        console.log("not done")
        alert ("Finish the line before checking")
        return 
    }
    let inputArr = []
    for (i=1; i < 6; i ++) {
        inputArr.push((document.getElementById("box_" + rowNum + "x" + i).value))
    }
    let inputWord = inputArr.join("")
    console.log(inputWord)
    if (wordList.includes(inputWord) == true) {
        loop:
        for (let cell = 1; cell < 6; cell ++) {
            if ((document.getElementById("box_" + rowNum + "x" + cell).value) == "") {
                console.log("hello")

            }   
            
            else if (letters [cell - 1] == (document.getElementById("box_" + rowNum + "x" + cell).value)) {
                console.log("match!")
                document.getElementById("box_" + rowNum + "x" + cell).className = "correct"
                document.getElementById("box_" + rowNum + "x" + cell).disabled = true
        
            }

            else if (letters [0] == (document.getElementById("box_" + rowNum + "x" + cell).value) || (document.getElementById("box_" + rowNum + "x" + cell).value) == letters[1] || (document.getElementById("box_" + rowNum + "x" + cell).value) == letters[2] || (document.getElementById("box_" + rowNum + "x" + cell).value) == letters[3] || (document.getElementById("box_" + rowNum + "x" + cell).value) == letters[4]) {
                console.log("almost")
                document.getElementById("box_" + rowNum + "x" + cell).className = "almost"
                document.getElementById("box_" + rowNum + "x" + cell).disabled = true
                
            }

            else if ((document.getElementById("box_" + rowNum + "x" + cell).value) != letters [cell - 1]) {
                    console.log("no luck!")
                    document.getElementById("box_" + rowNum + "x" + cell).className = "false"
                    document.getElementById("box_" + rowNum + "x" + cell).disabled = true
                    
            }
            if (cell == 5 && ((document.getElementById("box_" + rowNum + "x" + 1).value) != "") && ((document.getElementById("box_" + rowNum + "x" + 2).value) != "") && ((document.getElementById("box_" + rowNum + "x" + 3).value) != "") && ((document.getElementById("box_" + rowNum + "x" + 4).value) != "") && ((document.getElementById("box_" + rowNum + "x" + 5).value) != "")) {
                console.log("it's me!")
                if ((document.getElementById("box_" + rowNum + "x" + 1)).classList.contains('correct') == true && (document.getElementById("box_" + rowNum + "x" + 2)).classList.contains('correct') == true && (document.getElementById("box_" + rowNum + "x" + 3)).classList.contains('correct') == true && (document.getElementById("box_" + rowNum + "x" + 4)).classList.contains('correct') == true && (document.getElementById("box_" + rowNum + "x" + 5)).classList.contains('correct') == true) {
                    alert ('You won!');
                    break loop;   
                              
                }
                rowNum += 1
                console.log(rowNum)
                for (i = 1; i < 6; i++) {
                    document.getElementById("box_" + (rowNum) + "x" + i).removeAttribute("readonly");
                }
            }
            
            

        }
        
             
    }
    
    else {
        alert ("Invalid word")
    }
}

// function check (rowNum) {
//     let stopFunction = 0
//     reset (stopFunction)
//     console.log("stop" + stopFunction)
//     let done = 0
//     reset (done)
//     console.log("done" + done)
//     let letters = chosen.split("")
//     rows:
//     for (rowNum; rowNum < 7; rowNum ++) {
//     if (stopFunction == 1) {
//             alert ("Finish the line before checking")
//             break rows;
//         }
//         else {
//         letters:
//         for (let cell = 1; cell < 6; cell ++) {
//             if (done == 0 && ((document.getElementById("box_" + rowNum + "x" + 1).value) == "") || done == 0 && ((document.getElementById("box_" + rowNum + "x" + 2).value) == "") || done == 0 && ((document.getElementById("box_" + rowNum + "x" + 3).value) == "") || done == 0 && ((document.getElementById("box_" + rowNum + "x" + 4).value) == "") || done == 0 && ((document.getElementById("box_" + rowNum + "x" + 5).value) == "")) {
//                 stopFunction = 1
//                 break letters;
                
//             }
            
//             else {
//                 if ((document.getElementById("box_" + rowNum + "x" + cell).value) == "") {
//                     console.log("hello")
    
//                 }
                    
                
//                 else if (letters [cell - 1] == (document.getElementById("box_" + rowNum + "x" + cell).value)) {
//                     console.log("match!")
//                     document.getElementById("box_" + rowNum + "x" + cell).className = "correct"
//                     document.getElementById("box_" + rowNum + "x" + cell).disabled = true
            
//                 }
    
//                 else if (letters [0] == (document.getElementById("box_" + rowNum + "x" + cell).value) || (document.getElementById("box_" + rowNum + "x" + cell).value) == letters[1] || (document.getElementById("box_" + rowNum + "x" + cell).value) == letters[2] || (document.getElementById("box_" + rowNum + "x" + cell).value) == letters[3] || (document.getElementById("box_" + rowNum + "x" + cell).value) == letters[4]) {
//                     console.log("almost")
//                     document.getElementById("box_" + rowNum + "x" + cell).className = "almost"
//                     document.getElementById("box_" + rowNum + "x" + cell).disabled = true
                   
//                 }
    
//                 else if ((document.getElementById("box_" + rowNum + "x" + cell).value) != letters [cell - 1]) {
//                         console.log("no luck!")
//                         document.getElementById("box_" + rowNum + "x" + cell).className = "false"
//                         document.getElementById("box_" + rowNum + "x" + cell).disabled = true
                      
//                 }

//                 if (rowNum < 6 && ((document.getElementById("box_" + rowNum + "x" + 1).value) != "") && ((document.getElementById("box_" + rowNum + "x" + 2).value) != "") && ((document.getElementById("box_" + rowNum + "x" + 3).value) != "") && ((document.getElementById("box_" + rowNum + "x" + 4).value) != "") && ((document.getElementById("box_" + rowNum + "x" + 5).value) != "")) {
//                     done = 1
//                     document.getElementById("box_" + (rowNum + 1) + "x" + cell).removeAttribute("readonly");
                    
//                 } 
    
                
                    
//             }
     
//         } 
//     }       
//     }
// }



