const isRequired = str => str.length > 0
const isValidPhone = str => str.length === 12
const isValidEmail = str =>
  !str ||
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    str
  )

export function validate() {
  const phone = '+7' + this.phone.value.replace(/\D+/g, '')
  const email = this.email.value
  const name = this.name.value

  if (!isValidName(name)) {
    this.name.focus()
    return false
  } else {
    this.nameCache = name
  }

  if (!isValidPhone(phone)) {
    this.phone.focus()
    return false
  }

  if (!isValidEmail(email)) {
    this.email.focus()
    return false
  }

  return true
}
