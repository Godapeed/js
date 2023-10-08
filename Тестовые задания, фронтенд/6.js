function fibonacci(i) {
    if (i < 2) {
        switch(i) {
            case 1: return 1;
            case 0: return 0;
        }
    }
    else {
        return fibonacci(i-1)+fibonacci(i-2);
    }
}

for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}