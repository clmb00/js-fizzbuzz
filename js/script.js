const container = document.querySelector(".container");

for (let i = 1; i <= 100; i++){
  const box = document.createElement('div');
  box.classList = "box";
  box.innerHTML = i;

  if ((i%3==0) && (i%5==0)) {
    box.innerHTML = "FizzBuzz";
    box.classList += " bg-qui";
  } else if (i%3 == 0) {
    box.innerHTML = "Fizz";
    box.classList += " bg-ter";
  } else if (i%5 == 0) {
    box.innerHTML = "Buzz";
    box.classList += " bg-qua";
  }

  container.append(box);
};

/* PER FARE RUOTARE I BOX AL CLICK DEL BOX, FUNZIONA 

const boxClickList = document.querySelectorAll(".box");
boxClickList.forEach(box => {
  box.addEventListener('click', function(){
    box.classList.add("animation");
    setTimeout(function() {
      box.classList.remove("animation");
    }, 1000)
  });
});
*/