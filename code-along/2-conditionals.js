document.querySelector('.nom-nom-nom').addEventListener('click', (event) => {
  const dinner = document.querySelector('.dinner').value
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // The variable 'dinner' is already set to the value in the text input
  // console.log(dinner)
  
  let output

  let quantity = 5

  if (dinner == 'tacos') {

    if (quantity > 3){
      output = 'too many'
    } else {
      output = '🌮'
  } 
}
  else if (dinner == 'broccoli') {
output = '🥦'
  } else if (dinner == 'cookies' || dinner =='icecream'){
    output = '😂'
  }

// control + command + space is the shortcut for getting to emojis in vscode
  


  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
  /*
    this code does the work of writing the output to screen...
    so leave it alone :) this code expects a variable named
    'output' to be declared
  */
  document.querySelector('.output').innerHTML = output
})