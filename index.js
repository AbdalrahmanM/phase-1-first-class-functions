function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return function NAmedfun(){
        return 'Done'
    };
}

function returnsAnAnonymousFunction() {
    return ()=>''
  };