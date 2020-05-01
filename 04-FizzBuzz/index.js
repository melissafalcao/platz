//insira o codigo aqui


function fizzBuzz () {
    for(var i = 1; i <= 100; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            document.write( i + ": FizzBuzz")
            document.write("<br>");
        } else if (i % 3 == 0) {
            document.write( i + ": Fizz")
            document.write("<br>");
        } else if ((i % 5 == 0)) {
            document.write( i + ": Buzz")
            document.write("<br>");
        }
    }
}

fizzBuzz();