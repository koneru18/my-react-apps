import { useState } from "react";
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage, Form } from 'formik';

interface TodoType {
    id: number,
    name: string
}

const schema = Yup.object({
    item: Yup.string().required("Item is Required")
});

const ToDo = () => {
    const [list, setList] = useState<TodoType[]>([]);
    const [counter, setCounter] = useState<number>(0);

    const addToList = (name: string) => {
        const newItem = {id: counter, name}
        setList((prev) => [ ...prev, newItem ]);
        setCounter(prev => prev + 1);
    }

    return(
        <div>
            <h5>Enter a ToDo Item</h5>
            <Formik
                initialValues={ {item: ''}}
                validationSchema={schema}
                onSubmit={(values, {resetForm, setSubmitting}) => {
                    // console.log(values);
                    addToList(values.item);
                    resetForm();
                    setSubmitting(false);
                }}

            >
                {({isSubmitting}) => (
                    <Form>
                        <div>
                            <label htmlFor="item">Item</label>
                            <Field name="item" />
                            <ErrorMessage name="item" />
                        </div>

                         <button type="submit" disabled={isSubmitting} style={{ marginTop: '10px' }}>
                            Add Item
                        </button>
                    </Form>
                )}
                
            </Formik>

            <h5>ToDo List</h5>
            {list.map((todo, index) =>
                <p>
                    {index + 1}. {todo.name}
                    <button style={{ marginLeft: '10px' }} onClick={() => setList(list.filter((t) => t.id !== todo.id))}>
                            Delete
                    </button>
                </p>
            )}
        </div>
    )
};

export default ToDo;
