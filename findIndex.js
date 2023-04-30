
/* 
The javascript findIndex() is similar to find() method. find() method returns the matching element where findIndex()
returns the index of the matching element


*/

const obj_arr = [
    {
        id: 1,
        name: "shakib",
        roll: "1"

    },
    {
        id: 2,
        name: "rakib",
        roll: "2"
    },
    {
        id: 3,
        name: "sifat",
        roll: "3"
    }, 
    {
        id: 4,
        name: "jakir",
        roll: "4"

    },
    {
        id: 5,
        name: "raihan",
        roll: "5"
    },

]

const findRoll = obj_arr.find(st => st.id == 4) // { id: 4, name: 'jakir', roll: '4' }
const find_roll = obj_arr.findIndex(st => st.id == 4) // 3

