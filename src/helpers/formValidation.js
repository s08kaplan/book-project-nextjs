import { object, string, number } from "yup"


export const contactSchema = object({
    firstName: string().required("Enter your name"),
    lastName: string().required("Enter your last name"),
    title: string().required("Enter a title"),
    content: string().required("Enter your opinion"),
    phone: number().required("Enter your contact number"),
    email: string()
    .email("Enter your email")
    .required("Email must be provided 😉")
    .test('email-validation', 'Invalid email address', function (value) {
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
    })
  });
  


  export const schema = object({
    username: string().required("Enter your username"),
    email: string()
    .email("Enter your email")
    .required("Email must be provided 😉")
    .test('email-validation', 'Invalid email address', function (value) {
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
    }),
    password: string()
      .required("Password is required and must be 6 characters")
      .max(20, "Maximum 20 characters can be entered")
      .matches(/\d+/, "at least one number")
      .matches(/[a-z]/, "at least one lowercase letter")
      .matches(/[A-Z]/, "at least one UPPERCASE letter")
      .matches(
        /[@$!%*?&]+/,
        "at least one special character (@$!%*?&) must be provided"
      ),
  });
  