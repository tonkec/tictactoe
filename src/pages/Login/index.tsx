import { AuthContainer } from "../../ui/auth"
import { Container } from "../../ui/container"
import { AuthForm } from "../../components/AuthForm";
import { AuthLink } from "../../components/AuthLink";
import { useLoginUser } from "./hooks";
import { IUserProps } from "./Login.interface";

export const Login = () => {
    const { loginUser, isSignupError, isCreating, isSuccess } = useLoginUser();
    const message = isSignupError ? "Something went wrong" : isSuccess ? "You are logged in" : ""

    const onSubmit = (data: IUserProps) => {
        loginUser(data)
    }

    return <Container>
        <AuthContainer>
            <AuthForm isButtonDisabled={isCreating} message={message} signupButtonText="Login" onSubmit={onSubmit} headline="Welcome back!" subtitle="Login and start playing." linkComponent={() => <AuthLink title="New user? Signup" href="/signup" />} />
        </AuthContainer>
    </Container>
}