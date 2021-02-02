const fs = require('fs')

// READING FILES

// fs.readFile('./docs/blog1.txt', (err, data)=>{

//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString())
//     }
// })

//  WRITING FILES

// fs.writeFile('./docs/blog1.txt', 'Rewriting everything', () => {
//     console.log('The file was written')
// })


//  CREATING / DELETING DIRECTOY

// if(fs.existsSync('./docs/dirExample2')){
//     console.log('The directory already exists!')
// }else{
//     fs.mkdir('./docs/dirExample2', (err)=>{
//         if(err){
//             console.log('Error ocurred')
//         }else{
//             console.log('Successfully created the folder')
//         }
//     })
// }

//  DELETING FILES

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Successfully deleted file!')
        }
    })
}