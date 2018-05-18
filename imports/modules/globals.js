import validator from "validator";

export const invalidPhone = "Invalid Phone";
export const invalidEmail = "Invalid Email";

export function validatePhone(phone) {
  if (!validator.isMobilePhone(phone, "en-US")) {
    console.log("VALIDATOR--invalid");
    return false;
  }else return true;
}

export function validateEmail(email) {
  if (!validator.isEmail(email)) {
    return false;
  }else return true;
}

export const ValidationLang = {

    required: "'{label}' ir required!",
    email: "'{label}' should be a valid e-mail address!",
    tel: "'{label}' is not a valid telephone number!",
    maxLength: "'{label}' length must be < '{maxLength}'",
    minLength: "'{label}' length must be > '{minLength}'",
    maxFileSize: "Max file size must be < {maxFileSize}MB, uploaded {fileSize}MB",
    image: "'{label}' should be an image (JPG or PNG)",
    minImageDimensions: "'{label}' must be > {minWidth}x{minHeight}, uploaded {width}x{height}",
    maxImageDimensions: "'{label}' must be < {maxWidth}x{maxHeight}, uploaded {width}x{height}",
    requiredFromList: "Select '{label}' from list",
    confirmation: "'{label}' is not equal to '{originalLabel}'",
    minOptions: "Please select at least {minOptionsCount} options"

};
