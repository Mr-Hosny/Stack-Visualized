const push = document.querySelector('.push')
const pop = document.querySelector('.pop')
const reset = document.querySelector('.reset')
const input = document.querySelector('.input')
const bucket = document.querySelector('.main-stack-bucket')
const message = document.querySelector('.message')
const messageBox = document.querySelector('.message-box')
const box = document.querySelectorAll('.box')
const stack = []

const buttonDisabled = () => {
  push.disbaled = true
  push.classList.add('button-disabled')
  reset.disbaled = true
  reset.classList.add('button-disabled')
  pop.disbaled = true
  pop.classList.add('button-disabled')
  input.disbaled = true
}
const buttonEnabled = () => {
  push.disbaled = false
  push.classList.add('button-disabled')
  pop.disbaled = false
  pop.classList.add('button-disabled')
  reset.disbaled = false
  reset.classList.add('button-disabled')
  input.disbaled = false
}

push.addEventListener('click', () => {
  const valueIn = input.value

  if (!valueIn) {
    message.innerHTML = 'Please Enter a value'
    messageBox.classList.add('error-message')
    setTimeout(() => {
      messageBox.classList.remove('error-message')
    }, 1200)
    return
  }

  if (stack.length == 5) {
    input.value = ''
    message.innerHTML = 'Stack Overflow'
    messageBox.classList.add('error-message')
    setTimeout(() => {
      messageBox.classList.remove('error-message')
    }, 1200)
    return
  }
  stack.push(valueIn)

  const element = document.createElement('div')
  element.classList.add('ele')
  element.innerHTML = stack[stack.length - 1]

  bucket.appendChild(element)

  element.classList.add('ele-add')

  box[0].innerHTML = stack[stack.length - 1]

  input.value = ''
  buttonDisabled()

  setTimeout(() => {
    element.classList.remove('ele-add')
    message.innerHTML = `Item ${stack[stack.length - 1]} is pushed`
    box[1].innerHTML = valueIn

    buttonEnabled()
  }, 1500)
})

pop.addEventListener('click', () => {
  if (stack.length == 0) {
    message.innerHTML = 'Stack underflow'
    messageBox.classList.add('error-message')
    setTimeout(() => {
      messageBox.classList.remove('error-message')
    }, 1200);
  }
  bucket.lastElementChild.classList.add('ele-remove')
  buttonDisabled()

  setTimeout(() => {
    // bucket.lastElementChild.classList.remove('ele-remove')
    bucket.removeChild(bucket.lastElementChild)

    const itemValue = stack.pop()
    box[2].innerHTML = itemValue

    if (stack.length == 0) {
      box[0].innerHTML = ''
    } else {
      box[0].innerHTML = `Item ${itemValue} is poped`
    }

    buttonEnabled()
  }, 1500);
})

reset.addEventListener('click', () => {
  while (stack.length > 0) {
    stack.pop()
  }

  box[0].innerHTML = ''
  box[1].innerHTML = ''
  box[2].innerHTML = ''

  while (bucket.firstChild) {
    bucket.removeChild(bucket.firstChild)
  }
})