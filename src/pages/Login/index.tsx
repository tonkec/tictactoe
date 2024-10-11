import { AuthContainer } from "../../ui/auth"
import { Container } from "../../ui/container"
import { AuthForm } from "../../components/AuthForm";
import { SubmitHandler } from "react-hook-form";
import { Inputs } from "../../components/AuthForm/AuthForm.interface";
import { AuthLink } from "../../components/AuthLink";

export const Login = () => {
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    return <Container>
        <AuthContainer>
            <AuthForm signupButtonText="Login" onSubmit={onSubmit} headline="Welcome back!" subtitle="Login and start playing." linkComponent={() => <AuthLink title="New user? Signup" href="/signup" />} />
        </AuthContainer>
    </Container>
}