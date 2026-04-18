import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    username: '',
    email: '',
    acceptTerms: false
}

const schema = Yup.object({
    username: Yup.string().min(5).max(10).required('Username is required'),
    email: Yup.string().email("INvalid email").required("Email is required"),
    acceptTerms: Yup.boolean().oneOf([true], 'You must accept terms')
})

const SignupForm = () => (
    <div>
        <h1>Component-Based Formik</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={async (values, { setSubmitting }) => {
                // 1. Logic starts: isSubmitting becomes true automatically
                console.log(values);

                // 2. Simulate a 2-second API delay
                await new Promise((resolve) => setTimeout(resolve, 2000));

                // 3. Logic ends: Manually set to false
                setSubmitting(false);
            }}>
            {({ isSubmitting }) => (
                <Form style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '300px' }}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <Field name="username" />
                        <ErrorMessage name="username" component="div" className="error" />
                    </div>
                    
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />          
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="acceptTerms">I accept the terms and conditions</label>
                        <Field type="checkbox" name="acceptTerms" />
                        <ErrorMessage name="acceptTerms" component="div" className="error" />
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Please wait..." : "Submit"}
                    </button>
                </Form>
            )}
        </Formik>
    </div>
)

export default SignupForm;
