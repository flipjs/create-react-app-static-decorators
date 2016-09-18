export function inputs () {
  let o
  let i
  let l = document.querySelectorAll('input:not([type=submit])')
  for (i of l) { o = { ...o, [i.name]: i.value } }
  return o
}

