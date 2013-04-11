// problem: why does it log out out 1000?
// fix it to log 100, 200, 300, 400, 500 etc

// loops 10 times from 0 - 1000 in increments of 100
for (var i = 0; i < 1000; i += 100) {
  waitFor(i);
}

// this will run a callback function after waiting milliseconds
function waitFor(milliseconds) {
  setTimeout(function () {
    console.log(milliseconds);
  }, milliseconds)
}
