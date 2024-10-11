import { AuthForm } from "../../components/AuthForm"
import { SubmitHandler } from "react-hook-form";
import { Inputs } from "../../components/AuthForm/AuthForm.interface";
import { AuthContainer } from "../../ui/auth";
import { Container } from "../../ui/container";
import { AuthLink } from "../../components/AuthLink";

export const Signup = () => {
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    return <Container>
        <AuthContainer>
            <AuthForm signupButtonText="Signup" headline="Create an account" subtitle="Signup and start playing."  onSubmit={onSubmit} linkComponent={() => <AuthLink title="Already registered? Login" href="/login" />}/>
        </AuthContainer>
    </Container>
}