function showMessage(marks) {
  const message = marks ?? "Absent" ;
  console.log(`Marks ${message}`);
}


showMessage(29);
showMessage();
showMessage(46);

console.log(typeof 0)