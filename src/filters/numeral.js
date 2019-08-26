import numeral from 'numeral'

export default function (value) {
  if (value === undefined || value === null) return ''
  return numeral(value).format('0,0.00')
}
