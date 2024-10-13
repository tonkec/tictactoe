import { useForm } from 'react-hook-form';
import { FaUserCircle, FaKey } from 'react-icons/fa';
import {
  buttonClassName,
  errorClassName,
  inputClassName,
  inputWrapper,
  formClassName,
} from './AuthForm.styles';
import { IAuthFormProps, Inputs } from './AuthForm.interface';

export const AuthForm = ({
  onSubmit,
  headline,
  subtitle,
  linkComponent: LinkComponent,
  signupButtonText,
  message,
  isButtonDisabled,
}: IAuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
      <p>{message}</p>
      <h1 className="text-4xl text-center">{headline}</h1>
      <p className="text-center">{subtitle}</p>
      <fieldset>
        <div className={inputWrapper}>
          <label className="absolute left-2 top-3">
            <FaUserCircle fontSize="1rem" />
          </label>
          <input
            className={inputClassName}
            {...register('username', { required: true })}
            placeholder="Your username"
          />
        </div>
        {errors.username && (
          <span className={errorClassName}>This field is required</span>
        )}
      </fieldset>
      <fieldset>
        <div className={inputWrapper}>
          <label className="absolute left-2 top-3">
            <FaKey fontSize="1rem" />
          </label>

          <input
            type="password"
            className={inputClassName}
            {...register('password', { required: true })}
            placeholder="Your password"
          />
        </div>
        {errors.password && (
          <span className={errorClassName}>This field is required</span>
        )}
      </fieldset>
      <input
        type="submit"
        className={buttonClassName}
        value={signupButtonText}
        disabled={isButtonDisabled}
      />
      <LinkComponent />
    </form>
  );
};
