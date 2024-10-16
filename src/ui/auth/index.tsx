interface IAuthContainerProps {
  children: React.ReactNode;
}

export const AuthContainer = ({ children }: IAuthContainerProps) => {
  return (
    <div className="flex h-full justify-center items-center h-screen">
      {children}
    </div>
  );
};
