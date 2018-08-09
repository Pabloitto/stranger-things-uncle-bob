const BobChallenge = passwordSystem => {
  const getFourDigits = (...digits) => digits.join('')

  const checkPasswordMatch = fourDigitPassword => passwordSystem === fourDigitPassword

  const burstPassword = () => {
    let fourDigitPassword = null
    for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) {
        for (let k = 0; k <= 9; k++) {
          for (let l = 0; l <= 9; l++) {
            fourDigitPassword = getFourDigits(i, j, k, l)
            if (checkPasswordMatch(fourDigitPassword) === true) {
              return fourDigitPassword
            }
          }
        }
      }
    }
    return null
  }

  return {
    burstPassword
  }
}

const generateSystemPassword = () => (
  Array(4).fill()
          .map(item => ~~(Math.random() * 9) + 1)
          .join('')
)

const password = generateSystemPassword()

const instance = BobChallenge(password)

console.log('System password', password)
console.time('Start')
const passwordFound = instance.burstPassword()
console.timeEnd('Start')
console.log(passwordFound ? `Password found: ${passwordFound}` : 'Password not found')
