let submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  let qna = {
    q1: "John Von Neuman",
    q2: "Tim Berners-Lee",
    q3: "2",
    q4: "RAM",
    q5: "Vacuum Tube",
  };

  let user_qna = {};

  let ansCorrect = 0;

  for (let i = 1; i <= 5; i++) {
    let question = document.querySelector(`.q${i}`);
    let answer = question.querySelector('input[type="radio"]:checked');

    user_qna[`q${i}`] = answer ? answer.value : null  // chhecking for null radios
    
  }

  for (let i = 1; i <= 5; i++) {
  
    // Ensure that both answer and user_qna are not null before comparison
    if (user_qna[`q${i}`] != null && qna[`q${i}`] != null && qna[`q${i}`]== user_qna[`q${i}`]) {
      ansCorrect += 1;
    }
  }

  if(document.querySelector('#scoreBar')){
    document.querySelector('#scoreBar').firstElementChild.innerHTML = `You got ${ansCorrect} questions correct and your score is ${ansCorrect*20} out of 100. <a class='again' href="main.html">Again</a>`
  }
  else{
    let helper = document.querySelector('.helper')
    let fragment = document.createDocumentFragment()
    let div = document.createElement('div')
    div.innerHTML = `
          <div id="scoreBar" >
          <p>You got ${ansCorrect} questions correct and your score is ${ansCorrect*20} out of 100. <a class='again' href="main.html">Again</a></p>
        </div>
    `
    fragment.appendChild(div)
    helper.append(fragment)
  } 

});


document.querySelector('#reset').addEventListener('click',()=>{
  location.reload()
})
