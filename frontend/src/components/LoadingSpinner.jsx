import { FaSpinner } from "react-icons/fa";

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-[300px]">
      <FaSpinner
        className="
          text-5xl
          text-blue-600
          animate-spin
        "
      />
    </div>
  );
}

export default LoadingSpinner;