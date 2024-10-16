import { Link } from 'react-router-dom';
import { IAuthLinkProps } from './AuthLink.interface';
import { secondButtonClassName } from './AuthLink.styles.ts';

export const AuthLink = ({ href, title }: IAuthLinkProps) => {
  return (
    <p className={secondButtonClassName}>
      {title}{' '}
      <Link to={href} className="underline dark:text-white">
        {' '}
        here
      </Link>
      .
    </p>
  );
};
