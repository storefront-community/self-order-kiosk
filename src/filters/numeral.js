import numeral from 'numeral'

numeral.register('locale', 'br', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  abbreviations: {
    thousand: 'mil',
    million: 'milhões',
    billion: 'bilhões',
    trillion: 'trilhões'
  },
  ordinal: function () {
    return 'º'
  },
  currency: {
    symbol: 'R$'
  }
})

export default function (value, locale) {
  numeral.locale(locale)

  if (value === undefined || value === null) return ''

  return numeral(value).format('0,0.00')
}
