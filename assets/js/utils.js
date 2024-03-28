function query(selector, parent = document) {
  return parent.querySelector(selector)
}

function event(on, event, call) {
  on.addEventListener(event, call)
}

function log(...args) {
  console.log(...args)
}

export { query, event, log };