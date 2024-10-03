// const btnGreat = document.querySelector('#btnGreat')

// btnGreat.addEventListener('click', great)

// function great () {
  //   alert(username.value)
  // }
  
  const username = document.getElementById('nombre')
  const data1 = document.getElementById('nota1')
  const data2 = document.getElementById('nota2')
  const data3 = document.getElementById('nota3')
  const btnCalculate = document.getElementById('btn-calculate')
  const response = document.getElementById('resultado')
  
  
  btnCalculate.addEventListener('click', calculateNote )

  function calculateNote(event) {

    event.preventDefault()

    let note1 = Number(data1.value)        
    let note2 = Number(data2.value)        
    let note3 = Number(data3.value)
    

    let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2)

    let validation

    if (result < 3.5) {
      validation = "perdió la materia"
      response.style.color = 'black'
      response.style.fontWeight = "800"

    } else if (result >= 3.5 && result <=4.5){
      validation = "ganó la materia"
      response.style.color = 'orange'
      
    } else {
      validation ="ganó la materia"
      response.style.color="green"
    }

    // template string o template literal
    
    response.textContent = `${username.value} su nota definitiva es: ${result}, ${validation}`    

  }

  const btnPredict = document.getElementById("btn-predict")
  btnPredict.addEventListener("click", predictNote)

  function predictNote(event) {
    
    event.preventDefault()

    let resultPredict = 3.5 - ((note1 * 0.3) + (note2 * 0.3))

    response.textContent = `${username.value} su nota minima para la tercera nota es: ${resultPredict}`   


  }

  




