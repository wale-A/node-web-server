var jsonPromise = new Promise(function(resolve, reject){
    resolve(JSON.parse('this is not a json'))
});

jsonPromise.then(function(data){
    console.log('it worked!', data);
}
// , function(err){
//     console.log('1. error occurred - ', err);
// }
).catch(function(err){
    console.log('2. error occurred', error);
}).catch(function(err){
    console.log('Another ERROR!!!')   
});