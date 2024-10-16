import { useLocalStorage } from '@uidotdev/usehooks';
import { BallTriangle } from 'react-loader-spinner';

interface ILoaderProps {
  height?: number;
  width?: number;
  color?: string;
}

const Loader = ({ height, width, color }: ILoaderProps) => {
  const [isDarkMode] = useLocalStorage('isDarkMode');
  const colorFromDarkMode = isDarkMode ? '#ffffff' : '#D90368';
  return (
    <div className="flex justify-center items-center">
      <BallTriangle
        height={height || 50}
        width={width || 50}
        radius={5}
        color={color || colorFromDarkMode}
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
};

export { Loader };
