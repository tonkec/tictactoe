import { AuthContainer } from "../../ui/auth"
import { Container } from "../../ui/container"
import { useForm, SubmitHandler } from "react-hook-form";
import {  FaUserCircle, FaKey } from "react-icons/fa";
import { buttonClassName, errorClassName, formClassName, inputClassName, inputWrapper, secondButtonClassName } from "./styles"

type Inputs = {
    username: string,
    password: string
};

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return <Container>
        <AuthContainer>
        <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-4xl text-center">Welcome back</h1>
            <p className="text-center">Login and start playing!</p>
                <fieldset>
                    <div className={inputWrapper}>
                        <label className="absolute left-2 top-3"><FaUserCircle fontSize="1rem"  /></label>
                        <input className={inputClassName} {...register("username", { required: true })} placeholder="Your username" />
                    </div>
                    {errors.username && <span className={errorClassName}>This field is required</span>}
                    </fieldset>
                   <fieldset>
                    <div className={inputWrapper}>
                    <label className="absolute left-2 top-3"><FaKey fontSize="1rem"  /></label>

                    <input type="password" className={inputClassName} {...register("password", { required: true })} placeholder="Your password" />
                    </div>
                   {errors.password && <span className={errorClassName}>This field is required</span>}
                </fieldset>
                <input type="submit" className={buttonClassName} value="Login" />
                <p className={secondButtonClassName}>New user? <span className="underline">Signup</span></p>
                </form>
                
        </AuthContainer>
    </Container>
}