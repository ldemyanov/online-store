const integersRegExp = /^\d+$/;
const lettersRegExp = /^[A-Za-z ]*$/;
const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function nameInitialValidator(
  event: React.ChangeEvent<HTMLInputElement>
) {
  const name: string = filterNumbersLettersOnly(event, lettersRegExp);
  event.target.value = name;
}

export function cardNumberInitialValidator(
  event: React.ChangeEvent<HTMLInputElement>
) {
  const number: string = filterNumbersLettersOnly(event, integersRegExp);
  highlightChosenCardSystem(number.slice(0, 1));
  if (number.length === 16) {
    event.target.value = addSpaces(number);
  } else event.target.value = number;
}

function addSpaces(strng: string) {
  //prettier-ignore
  return ( strng.slice(0, 4) + ' ' + strng.slice(4, 8) + ' ' + strng.slice(8, 12) + ' ' + strng.slice(12, 16));
}

function highlightChosenCardSystem(num: string) {
  document.querySelectorAll('.bank-system__sys-img').forEach((image) => {
    const imageElement = image as HTMLElement;
    if (num.length === 0) {
      imageElement.style.opacity = '1';
      imageElement.style.border = 'none';
      return;
    }
    if (imageElement.dataset.num === num) {
      imageElement.style.opacity = '1';
      imageElement.style.border = '1px solid black';
    } else {
      imageElement.style.border = 'none';
      imageElement.style.opacity = '0.3';
    }
  });
}

export function dateInitialValidator(
  event: React.ChangeEvent<HTMLInputElement>
) {
  const clearDate = filterNumbersLettersOnly(event, integersRegExp).slice(0, 4);
  const deletingMonth =
    clearDate.length === 2 &&
    event.target.value.indexOf('/') === event.target.value.length - 1;

  const month = deletingMonth
    ? clearDate.slice(0, 1)
    : (clearDate.length >= 2 && clearDate.slice(0, 2)) || clearDate;
  const year = clearDate.length > 2 && clearDate.slice(2);
  event.target.value =
    month.length === 2 ? `${month} / ${year ? year : ''}` : month;
}

export function cvvInitialValidator(
  event: React.ChangeEvent<HTMLInputElement>
) {
  const cvv = event.target.value;
  if (!integersRegExp.test(cvv) || cvv.length > 3)
    event.target.value = filterNumbersLettersOnly(event, integersRegExp);
}

function filterNumbersLettersOnly(
  event: React.ChangeEvent<HTMLInputElement>,
  regExp: RegExp
) {
  return event.target.value
    .split('')
    .filter((char) => regExp.test(char))
    .join('');
}

export function validateForm() {
  const fullName = document.getElementById('customer-name') as HTMLInputElement;
  const ifNameValid = colorFieldDisplayMessage(fullName, isNameValid);
  const phoneNum = document.getElementById(
    'customer-number'
  ) as HTMLInputElement;
  const ifPhoneValid = colorFieldDisplayMessage(phoneNum, isNumberValid);
  const address = document.getElementById(
    'customer-address'
  ) as HTMLInputElement;
  const ifAddressValid = colorFieldDisplayMessage(address, isAddressValid);
  const email = document.getElementById('customer-email') as HTMLInputElement;
  const ifEmailValid = colorFieldDisplayMessage(email, isEmailValid);
  const cardNum = document.getElementById('customer-card') as HTMLInputElement;
  const ifCardValid = colorFieldDisplayMessage(cardNum, isCardValid);
  const expiration = document.getElementById('expiry-date') as HTMLInputElement;
  const ifExpiryDateValid = colorFieldDisplayMessage(expiration, isDateValid);
  const cvv = document.getElementById('card-cvv') as HTMLInputElement;
  const ifCvvValid = colorFieldDisplayMessage(cvv, isCvvValid);
  return (
    ifNameValid &&
    ifPhoneValid &&
    ifAddressValid &&
    ifEmailValid &&
    ifCardValid &&
    ifExpiryDateValid &&
    ifCvvValid
  );
}

function colorFieldDisplayMessage(
  field: HTMLInputElement,
  validator: (strng: string) => boolean
) {
  const fieldType: string = field.id.split('-')[1];
  const thisFieldErrorMsg = document.querySelector(
    `.error-msg__${fieldType}`
  ) as Element;

  if (!validator(field.value)) {
    thisFieldErrorMsg.classList.remove('hidden');
    field.style.borderColor = 'red';
    return false;
  } else {
    field.style.borderColor = 'green';
    thisFieldErrorMsg.classList.add('hidden');
    return true;
  }
}

function isNameValid(strng: string) {
  const nameParts: string[] = strng
    .trim()
    .split(' ')
    .filter((str) => str.length > 0);
  if (nameParts.length !== 2) return false;
  if (!lettersRegExp.test(nameParts.join(''))) return false;
  if (nameParts[0].length < 3 || nameParts[1].length < 3) return false;
  return true;
}

function isNumberValid(strng: string) {
  const phoneNumber: string = strng.trim();
  if (phoneNumber.slice(0, 1) !== '+') return false;
  if (!integersRegExp.test(phoneNumber.slice(1))) return false;
  if (phoneNumber.slice(1).length < 9) return false;
  return true;
}

function isAddressValid(strng: string) {
  const addressParts: string[] = strng
    .trim()
    .split(' ')
    .filter((str) => str.length > 0);
  if (addressParts.length < 3) return false;
  if (addressParts.some((str) => str.length < 5)) return false;
  return true;
}

function isEmailValid(strng: string) {
  if (!emailRegExp.test(strng)) return false;
  return true;
}

function isCardValid(strng: string) {
  const cardNum = strng.trim().split(' ').join('');
  if (!integersRegExp.test(cardNum)) return false;
  if (cardNum.length !== 16) return false;
  return true;
}

function isDateValid(strng: string) {
  const expiryDate = strng.split(' / ');
  if (expiryDate.join('').length !== 4) return false;
  if (!integersRegExp.test(expiryDate.join(''))) return false;
  if (+expiryDate[0] > 12) return false;
  if (+expiryDate[1] < 22) return false;
  return true;
}

function isCvvValid(strng: string) {
  const cvvNumber = strng.trim();
  if (cvvNumber.length !== 3) return false;
  if (!integersRegExp.test(cvvNumber)) return false;
  return true;
}
