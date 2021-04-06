const sentence = "hello there from lighthouse labs";
let delay = 50
let sentence1 = sentence + "\n"
for (const char of sentence1) {
  setTimeout(() => {
  process.stdout.write(char)
  }, delay)
  delay += 50
}