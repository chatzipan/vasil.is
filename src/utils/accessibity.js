// Removes outline when clicking focusable elements, but keeps them when using keyboard navigation

function userIsUsingMouse() {
  document.body.classList.remove('user-is-tabbing')
  window.removeEventListener('mousedown', userIsUsingMouse)

  window.addEventListener('keydown', userIsTabbing)
}

function userIsTabbing(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', userIsTabbing)
    window.addEventListener('mousedown', userIsUsingMouse)
  }
}

export default () => window.addEventListener('keydown', userIsTabbing)
