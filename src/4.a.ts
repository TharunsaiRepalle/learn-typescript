//if we pass function as argument in ts.
function runAfter1sec(fn: () => void) {
    setTimeout(fn,1000);
}

runAfter1sec(function() {
    console.log("Hi there")
})