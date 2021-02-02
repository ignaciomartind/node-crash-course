const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog1.txt', { encoding: 'utf8'})
const writeStream = fs.createWriteStream('./docs/blog2.txt')

// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----')
//     console.log(chunk/*.toString() no necesario si esta encoding */)
    
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)
// })

// PIPE, es lo mismo solo usar en readStream a writeStream

readStream.pipe(writeStream)