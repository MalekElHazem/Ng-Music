const express = require('express');

require('./config/connect');

const app = express();


app.post( '/add', ()=>{
    console.log('add');
});


app.get( '/get', ()=>{
    console.log('get');
}
);


app.put( '/update', ()=>{
    console.log('update');
}
);


app.delete( '/delete', ()=>{
    console.log('delete');
}  
);

app.listen( 3000 , ()=>{
    console.log('work');
});