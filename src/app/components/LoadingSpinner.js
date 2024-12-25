export default function LoadingSpinner() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="animate-pulse flex items-center space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
}
