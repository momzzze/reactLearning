function foo(x) {
    return x * x
}

function bar(y){
    return foo(y+2)
}

console.log(bar(8))