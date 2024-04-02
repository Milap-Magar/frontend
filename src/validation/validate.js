const validate = (values) => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (!values.email) {
      errors.email = 'Email must not be empty';
    } else if (!emailPattern.test(values.email)) {
      errors.email = 'Invalid email format';
    }
  
    if (!values.password) {
      errors.password = 'Password must not be empty';
    } else if (!passwordPattern.test(values.password)) {
      errors.password = 'Password pattern incorrect';
    }
    return errors;
  };
  
  export default validate