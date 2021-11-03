let arr = [];
for (let j = 2; j < process.argv.length; j++) {
  if(Number(process.argv[j]) && Number(process.argv[j]) > 0)
    arr.push(process.argv[j]);
}
arr.sort()

const beep = function () {
  process.stdout.write('\x07');
}

arr.forEach( val => {
  setTimeout(beep, val*1000)
  console.log(val)
})
