import { BallTriangle } from 'react-loader-spinner';

interface ILoaderProps {
  height?: number;
  width?: number;
  color?: string;
}

const Loader = ({ height, width, color }: ILoaderProps) => {
  return (
    <div className="flex justify-center items-center">
      <BallTriangle
        height={height || 50}
        width={width || 50}
        radius={5}
        color={color || '#D90368'}
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
};

export { Loader };
