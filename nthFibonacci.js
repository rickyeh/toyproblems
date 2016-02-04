function nthFibonacci(n) {

    var curr = 1;
    var prev = 1;
    var prevPrev = 0;

    if (!n) {
        return prevPrev;
    }

    for (var i = 0; i < n; i++) {
        curr = prev + prevPrev;

        prevPrev = prev;
        prev = curr;
    }

    return curr
}