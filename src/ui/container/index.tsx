interface IContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerProps) => (
  <div className="max-w-[1000px] mx-auto pt-16 pb-16">{children}</div>
);
