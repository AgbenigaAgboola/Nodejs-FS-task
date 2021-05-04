var fs = require('fs');
var fetch = require('node-fetch');

fetch(
    "http://jsonplaceholder.typicode.com/posts"
)
    .then((response) => response.json())
    .then((data) => {
        fs.writeFile('result/posts.json', JSON.stringify(data), (err)=>{
            if(err) throw err;
            //if there is an error, throw error
            console.log('file created successfully');
        })
    })
    .catch((err) => console.log(err));

    
