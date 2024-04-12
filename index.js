function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function named(){
    console.log("before hook")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("before all")
    }
}