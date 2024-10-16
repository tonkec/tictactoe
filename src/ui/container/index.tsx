interface IContainerProps {
  children: React.ReactNode;
  isAuth?: boolean;
}

export const Container = ({ children, isAuth }: IContainerProps) => (
  <div
    className={`max-w-[1000px] mx-auto pt-16 pb-16 ${isAuth ? 'h-full' : 'h-auto'}`}
  >
    {children}
  </div>
);
