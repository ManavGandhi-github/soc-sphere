//this function viz. isValidEmail allows me to add the functionality to determine which email is valid
//notice application of learned concepts
export const isValidEmail = (email) => {
    const test =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return test.test(email);
  };
  
  export const nFormatter = (num) => {
    if (num < 1e3) return num.toLocaleString();
    else if (num >= 1e6) return `${(num / 1e6).toString().slice(0, 4)}m`;
    else if (num >= 1e3) return `${(num / 1e3).toString().slice(0, 3)}k`;
  };
  