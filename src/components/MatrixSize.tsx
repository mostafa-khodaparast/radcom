import { ErrorMessage } from "@hookform/error-message"
import { useForm } from "react-hook-form"
import { MatrixSizeProps } from "../types"
import styles from './MatrixSize.module.css'


function MatrixSize({ setMatrixSize }: { setMatrixSize: MatrixSizeProps }) {

    const { handleSubmit, register, formState: { errors } } = useForm()

    const formSubmit = (formData: MatrixSizeProps) => {
        setMatrixSize(formData)
    }

    return (
        <>
            <form onSubmit={handleSubmit(formSubmit)}>
                <div className={styles.getDimension}>
                    <div className={styles.dimensionErr}>
                        <label htmlFor="row">سطر:</label>
                        <input
                            id="row"
                            type='number'
                            {...register('row',
                                {
                                    required: 'وارد کردن سطر اجباریست',
                                    min: {
                                        value: 3,
                                        message: 'حداقل سه سطر نیاز است'
                                    },
                                    max: {
                                        value: 10,
                                        message: 'حداکثر ده سطر مقدور است'
                                    }
                                }
                            )}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="row"
                            render={({ message }) => <span className="errorMsg">{message}</span>}
                        />
                    </div>
                    <div className={styles.dimensionErr}>
                        <label htmlFor="col">ستون:</label>
                        <input
                            type='number'
                            id="col"
                            {...register('col',
                                {
                                    required: 'وارد کردن ستون اجباریست',
                                    min: {
                                        value: 3,
                                        message: 'حداقل سه ستون نیاز است'
                                    },
                                    max: {
                                        value: 10,
                                        message: 'حداکثر ده ستون مقدور است'
                                    }
                                }
                            )}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="col"
                            render={({ message }) => <span className="errorMsg">{message}</span>}
                        />
                    </div>
                    <button type="submit">ایجاد</button>
                </div>
            </form>
        </>
    )
}

export default MatrixSize