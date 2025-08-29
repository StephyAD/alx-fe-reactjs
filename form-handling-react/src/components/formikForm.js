import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function formikForm() {
  return React.createElement(
    Formik,
    {
      initialValues: { username: "", email: "", password: "" },
      validationSchema: validationSchema,
      onSubmit: (values, { setSubmitting }) => {
        console.log("Formik Form Submitted:", values);
        alert("Formik registration successful!");
        setSubmitting(false);
      },
    },

    (formikProps) =>
      React.createElement(
        Form,
        {
          className:
            "bg-white shadow-lg rounded-xl p-6 w-80 flex flex-col gap-4",
        },
        [
          React.createElement(
            "h2",
            {
              key: "title",
              className: "text-xl font-bold text-gray-700 text-center",
            },
            "Formik & Yup Form"
          ),

          React.createElement("div", { key: "username", className: "" }, [
            React.createElement(
              "label",
              {
                htmlFor: "username",
                key: "ulabel",
                className: "block mb-1 font-medium text-sm",
              },
              "Username"
            ),
            React.createElement(Field, {
              key: "ufield",
              type: "text",
              name: "username",
              className:
                "w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500",
            }),
            React.createElement(ErrorMessage, {
              key: "uerror",
              name: "username",
              component: "p",
              className: "text-red-500 text-sm mt-1",
            }),
          ]),

          React.createElement("div", { key: "email", className: "" }, [
            React.createElement(
              "label",
              {
                htmlFor: "email",
                key: "elabel",
                className: "block mb-1 font-medium text-sm",
              },
              "Email"
            ),
            React.createElement(Field, {
              key: "efield",
              type: "email",
              name: "email",
              className:
                "w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500",
            }),
            React.createElement(ErrorMessage, {
              key: "eerror",
              name: "email",
              component: "p",
              className: "text-red-500 text-sm mt-1",
            }),
          ]),

          React.createElement("div", { key: "password", className: "" }, [
            React.createElement(
              "label",
              {
                htmlFor: "password",
                key: "plabel",
                className: "block mb-1 font-medium text-sm",
              },
              "Password"
            ),
            React.createElement(Field, {
              key: "pfield",
              type: "password",
              name: "password",
              className:
                "w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500",
            }),
            React.createElement(ErrorMessage, {
              key: "perror",
              name: "password",
              component: "p",
              className: "text-red-500 text-sm mt-1",
            }),
          ]),

          React.createElement(
            "button",
            {
              type: "submit",
              key: "button",
              className:
                "mt-1 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition",
            },
            "Register"
          ),
        ]
      )
  );
}

export default formikForm;