import { Nav } from "../../components/Nav";
import { Container } from "../container";

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
    return  <>
        <Nav />
        <Container>
            {children}
        </Container>
    </>
}

export { Layout };