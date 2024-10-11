import { SubmitHandler } from "react-hook-form";

export type Inputs = {
    username: string,
    password: string
};

export interface IAuthFormProps {
    onSubmit: SubmitHandler<Inputs>
    headline: string
    subtitle: string
    linkComponent: React.FC
    signupButtonText: string
    message: string
    isButtonDisabled: boolean
}