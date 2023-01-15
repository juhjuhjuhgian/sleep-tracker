const deleteBtn = document.querySelectorAll('.del')
// const updateBtn = document.querySelectorAll('.update')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteEntry)
})

// Array.from(updateBtn).forEach((el)=>{
//     el.addEventListener('click', updateEntry)
// })

async function deleteEntry(){
    const sleepId = this.parentNode.childNodes[1].dataset.id
    try{
        const response = await fetch('sleep/deleteSleepEntry', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'sleepIdFromJSFile': sleepId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// async function updateEntry(){
//     const sleepId = this.parentNode.childNodes[1].dataset.id
//     try{
//         const response = await fetch('sleep/updateEntry', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'sleepIdFromJSFile': sleepId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }