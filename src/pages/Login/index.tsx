import { AuthContainer } from '@/ui/auth';
import { Container } from '@/ui/container';
import { AuthForm } from '@/components/AuthForm';
import { AuthLink } from '@/components/AuthLink';
import { useLoginUser } from './hooks';
import { IUserProps } from './Login.interface';
import { PageTitle } from '@/components/PageTitle';

export const Login = () => {
  const { loginUser, isCreating } = useLoginUser();

  const onSubmit = (data: IUserProps) => {
    loginUser(data);
  };

  return (
    <Container isAuth>
      <PageTitle title="Login" />

      <AuthContainer>
        <AuthForm
          isButtonDisabled={isCreating}
          signupButtonText="Login"
          onSubmit={onSubmit}
          headline="Welcome back!"
          subtitle="Login and start playing."
          linkComponent={() => (
            <AuthLink title="New user? Signup" href="/signup" />
          )}
        />
      </AuthContainer>
    </Container>
  );
};
