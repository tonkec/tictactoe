import { Helmet } from 'react-helmet';

interface IPageTitleProps {
  title: string;
}

const mainTitlePage = 'Tic Tac Toe';

const PageTitle = ({ title }: IPageTitleProps) => {
  return (
    <Helmet>
      <title>
        {mainTitlePage} | {title}{' '}
      </title>
    </Helmet>
  );
};

export { PageTitle };
