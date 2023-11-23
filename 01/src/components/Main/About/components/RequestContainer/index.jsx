export default function RequestContainer() {
  return (
    <div className="w-1/3 flex justify-center items-center">
      <form className="w-full rounded bg-[#fff] px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-lg mb-2" for="username">
            Your Name
          </label>
          <input
            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg mb-2" for="username">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phonenumber"
            type="text"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg mb-2" for="username">
            Email address
          </label>
          <input
            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phonenumber"
            type="text"
          />
        </div>

        <div className="flex justify-center">
            <button className="bg-buttonDarkText hover:bg-buttonBgDarkHover text-xl py-2 px-8 rounded-full border-2 border-gray-900 text-[#fff]">
            SEND
            </button>
        </div>

      </form>
    </div>
  );
}
