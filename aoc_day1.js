const {readFileSync, promises: fsPromises} = require('fs')

let arrOfSortedElvesFood = []

async function readFile() {
    try {
        const contents = await fsPromises.readFile('./aoc_day1.txt', 'utf-8')
        const arrOfUnsortedElvesFood = contents.split(/\n/)

        let tempArr = []
        for (i = 0; i < arrOfUnsortedElvesFood.length; i++) {
            if (arrOfUnsortedElvesFood[i]) {
                tempArr.push(parseInt(arrOfUnsortedElvesFood[i]))
            } else {
                arrOfSortedElvesFood.push(tempArr)
                tempArr = []
            }
        }

        const arrOfSumsOfElvesFood = arrOfSortedElvesFood.map((arr, index) => {
            return arr.reduce((acc, currentVal) => acc + currentVal, 0)
        })
        console.log(Math.max(...arrOfSumsOfElvesFood))
      } catch(err) {
        console.log(err)
    }
}

console.log(readFile())
