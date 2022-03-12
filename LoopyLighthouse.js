/* Done with a if else loop. Below is practice using nested ternary operators.
for(let i = 100; i <= 200; i++) {
  if (i % 12 === 0){
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0) {
    console.log("Loopy");
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(i);
  }
}
*/

for (let i = 100; i <= 200; i++) {
  i % 3 === 0 ? (i % 4 === 0 ? console.log("LoopyLighthouse") : console.log("Loopy")) : (i % 4 === 0 ? console.log("Lighthouse") : console.log(i));
}