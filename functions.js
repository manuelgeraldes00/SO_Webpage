function showMsg() {
    document.getElementById("demo").innerHTML = "Hello World!";
    sleep(1000).then(() => {
        document.getElementById("demo").innerHTML = "Bye World!"; });
    sleep(2000).then(() => {
        document.getElementById("demo").innerHTML = ""; });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}