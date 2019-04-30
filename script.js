;(function() {
  // get spans hex value text will be placed in
  const hexVal1 = document.getElementById('hex-val-1')
  const hexVal2 = document.getElementById('hex-val-2')
  const hexVal3 = document.getElementById('hex-val-3')

  // get each box from the div based on id
  const box1 = document.getElementById('box-1')
  const box2 = document.getElementById('box-2')
  const box3 = document.getElementById('box-3')

  // get button from div based on id
  const btn = document.getElementById('btn')

  // listen for button click event
  btn.addEventListener('click', createHex)

  function createHex() {
    // array the hex values will be generated from
    const hexVals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

    // display for generated hex values
    let hexColor1 = '#'
    let hexColor2 = '#'
    let hexColor3 = '#'

    for (let i = 0; i < 6; i++) {
      // calculate random hex values
      let random1 = Math.floor(Math.random() * hexVals.length)
      let random2 = Math.floor(Math.random() * hexVals.length)
      let random3 = Math.floor(Math.random() * hexVals.length)

      // generate random hex colors from values
      hexColor1 += hexVals[random1]
      hexColor2 += hexVals[random2]
      hexColor3 += hexVals[random3]
    }
    // Apply generated hex colors to each box
    box1.style.backgroundColor = hexColor1
    box2.style.backgroundColor = hexColor2
    box3.style.backgroundColor = hexColor3
    // Display generated hex values in each box
    hexVal1.textContent = hexColor1
    hexVal2.textContent = hexColor2
    hexVal3.textContent = hexColor3
  }
})()
