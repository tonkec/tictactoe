import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <BallTriangle
        height={50}
        width={50}
        radius={5}
        color="#D90368"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
};

export { Loader };
