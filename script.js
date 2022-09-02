function table(number){
    for (let i = 1; i <= 10; i++) {
        setTimeout(function name() {
        var res = i* number;
        document.write(`${number} x ${i} =${res}<br>`);
    } ,1000*i)
}
}