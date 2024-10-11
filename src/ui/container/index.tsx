interface IContainerProps {
    children: React.ReactNode;
}

export const Container = ({ children }: IContainerProps) => <div className="max-w-[1000px] mx-auto h-full">{children}</div>