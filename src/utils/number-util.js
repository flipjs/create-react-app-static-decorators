export function toCommaFormat (num) {
  if (typeof num !== 'number') return '--'
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

