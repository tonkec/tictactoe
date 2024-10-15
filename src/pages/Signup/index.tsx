import { AuthForm } from '@/components/AuthForm';
import { AuthContainer } from '@/ui/auth';
import { Container } from '@/ui/container';
import { AuthLink } from '@/components/AuthLink';
import { IUserProps } from './Signup.interface';
import { useCreateUser } from './hooks';
import { PageTitle } from '@/components/PageTitle';

export const Signup = () => {
  const { createUser, isCreating } = useCreateUser();

  const onSubmit = (data: IUserProps) => {
    createUser(data);
  };

  return (
    <Container isAuth>
      <PageTitle title="Signup" />

      <AuthContainer>
        <AuthForm
          isButtonDisabled={isCreating}
          signupButtonText="Signup"
          headline="Create an account"
          subtitle="Signup and start playing."
          onSubmit={onSubmit}
          linkComponent={() => (
            <AuthLink title="Already registered? Login" href="/login" />
          )}
        />
      </AuthContainer>
    </Container>
  );
};
