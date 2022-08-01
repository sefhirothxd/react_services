import React from 'react';

const Card = ({ response, loading }) => {
  console.log(response);
  console.log(loading);
  return (
    <>
      {loading ? (
        <div className="text-white text-2xl bg-transparent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center mr-2inline-flex items-center">
          <svg
            role="status"
            className="inline mr-3 w-6 h-6 text-white animate-spin "
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Loading...
        </div>
      ) : (
        <div className="relative max-w-md mx-auto md:max-w-2xl  min-w-0 break-words bg-gray-700 w-full mb-6 shadow-lg rounded-xl mt-16">
          <div className="sm:px-6 px-2">
            <div className="flex flex-wrap justify-center">
              <div className="w-full flex justify-center">
                <div className="mt-8">
                  <img
                    src={response.user.avatar}
                    className="rounded-full h-48 w-48 object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <h3 className="text-2xl text-white font-bold leading-normal mb-1">
                {response.user.fullName}
              </h3>
              <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75" />
                {response.discordUsername}
              </div>
            </div>
            <div className="overflow-x-auto relative mt-10 mb-10 rounded-lg border-2 border-gray-500 ">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg ">
                <tbody className="text-center">
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Email
                    </th>
                    <td className="py-4 px-6">{response.user.email}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Level
                    </th>
                    <td className="py-4 px-6">{response.level}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Hobbies
                    </th>
                    <td className="py-4 px-6">{response.hobbies}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Last login
                    </th>
                    <td className="py-4 px-6">
                      {new Date(response.user.lastLogin).toLocaleDateString() +
                        ' ' +
                        new Date(response.user.lastLogin).toLocaleTimeString()}
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Create
                    </th>
                    <td className="py-4 px-6">
                      {' '}
                      {new Date(response.user.createdAt).toLocaleDateString() +
                        ' ' +
                        new Date(response.user.createdAt).toLocaleTimeString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
