export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  let helperText = "";
  if (!rules) {
    helperText = "";
    return true;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
    if ((!isValid === true ) &&  value.length >= rules.maxLength){
      helperText =
        "En fazla " + rules.maxLength + " karakter uzunluğunda olmalı";
    }
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
    if (!isValid && value.length <= rules.minLength){
      helperText = "En az " + rules.minLength + " karakter uzunluğunda olmalı";
    }
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
    if (!isValid) {
        helperText = "Girilen adres geçerli bir e-mail adresi değil";}
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
    if (!isValid){
         helperText = "Lütfen bir sayı değeri giriniz";}
  }

  if (rules.isString) {
    const pattern = /^[A-Za-z]+$/;
    isValid = pattern.test(value) && isValid && !value.trim() !== "";
    if (!isValid && !pattern.test(value)&& value.trim() !== ""){
         helperText = "Lütfen yalnızca alfabetik karakter giriniz";}
  }

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
    if (!isValid && value.trim() === "" ) {
        helperText = "Bu alan boş bırakılamaz!";}
  }


  if (isValid){
    helperText = "";
}


  return { isValid: isValid, helperText: helperText };
};
