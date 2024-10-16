interface IContainerProps {
  children: React.ReactNode;
  isAuth?: boolean;
}

export const Container = ({ children, isAuth }: IContainerProps) => (
  <div
    className={`max-w-[1000px] mx-auto ${isAuth ? 'h-full' : 'h-full pt-16 pb-16'}`}
  >
    {children}
  </div>
);
