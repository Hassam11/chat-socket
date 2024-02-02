export default function TerminalViews() {
  return (
    <div className="flex bg-gray-800 p-4">
      <div className="mr-4 cursor-pointer transition duration-300 ease-in-out hover:text-green-400">
        <span className="border-r-2 border-transparent pr-2 hover:border-green-400">
          Terminal 1
        </span>
      </div>
      <div className="mr-4 cursor-pointer transition duration-300 ease-in-out hover:text-green-400">
        <span className="border-r-2 border-transparent pr-2 hover:border-green-400">
          Terminal 2
        </span>
      </div>
      <div className="mr-4 cursor-pointer transition duration-300 ease-in-out hover:text-green-400">
        <span className="border-r-2 border-transparent pr-2 hover:border-green-400">
          Terminal 3
        </span>
      </div>
    </div>
  );
}
