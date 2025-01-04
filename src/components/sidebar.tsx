import React from "react";
import user from "../assets/usericon.png";

const Sidebar = () => {
  return (
    <div className="h-screen relative bg-white text-gray-900 w-56  border shadow ">
      <div className="rounded-full w-8 h-8 p-3 flex justify-center items-center absolute right-[-35px] mt-3 bg-white shadow-md border ">
        <button onClick={}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.75 16.5162L1.25 9.01624L8.75 1.51624"
              stroke="#5D6679"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-start h-full justify-between">
        <div className="">
          <div className="text-2xl font-bold  w-full  flex  items-center gap-x-4 p-3  text-blue-500">
            {" "}
            <svg
              width="20"
              height="30"
              viewBox="0 0 30 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.474 1.48017C12.0035 3.6732 12.1012 3.38256 12.1012 11.5178C12.1012 15.0772 12.1563 17.9892 12.2238 17.9892C12.4782 17.9892 16.046 15.7619 16.5493 15.2885C16.8387 15.0166 17.269 14.3955 17.5054 13.9087C17.9035 13.0893 17.931 12.5374 17.8759 6.51165L17.8163 0L15.474 1.48017ZM1.46841e-05 17.22C0.000687047 20.5718 0.101543 23.6962 0.224361 24.1629C0.561215 25.4438 1.68989 26.6037 3.88246 27.9227C4.97079 28.5773 5.90359 29.1129 5.95558 29.1129C6.00735 29.1129 6.04994 26.2494 6.04994 22.7497V16.3864L5.43361 15.1448C4.89482 14.0595 4.54945 13.7302 2.68812 12.5272C1.51709 11.7703 0.433017 11.1453 0.278822 11.1384C0.0616487 11.1285 -0.00110592 12.4948 1.46841e-05 17.22ZM23.981 17.1017C23.9821 23.4233 24.1056 24.4583 25.0077 25.7209C25.4216 26.3005 28.6826 28.5525 29.8684 29.0781C29.9719 29.1241 30.0257 26.1337 29.9879 22.4333L29.9188 15.7051L29.3274 14.7619C28.9139 14.1023 28.0938 13.414 26.5991 12.4723C25.4239 11.7315 24.3537 11.1256 24.221 11.1256C24.0549 11.1256 23.9801 12.9899 23.981 17.1017ZM15.9113 23.2084C14.8635 23.8519 13.7144 24.6684 13.3579 25.0227C12.1649 26.2078 12.1012 26.643 12.1012 33.6022C12.1012 37.1211 12.164 40 12.2404 40C12.317 40 13.2808 39.4507 14.3823 38.7795C16.5218 37.4754 17.6278 36.3107 17.8246 35.1543C17.8916 34.7605 17.9172 31.6482 17.8813 28.238L17.8163 22.038L15.9113 23.2084Z"
                fill="#2F7BEB"
              />
            </svg>
            <h1>D _OTEL.</h1>
          </div>
        </div>
        <div className=" w-full p-3 h-full">
          <ul className="flex flex-col h-full  text-gray-600">
            <li className="hover:bg-blue-100 hover:text-blue-500 gap-x-6 flex cursor-pointer rounded-lg pl-2 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="18"
                height="22"
                viewBox="0 0 50 50"
                className="hover:text-blue-500"
              >
                <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
              </svg>

              <h2>Dashboard</h2>
            </li>
            <li className=" hover:bg-blue-100 hover:text-blue-500 gap-x-6 flex cursor-pointer rounded-lg pl-2  p-2">
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.75 5.01624C12.75 6.0108 12.3549 6.96462 11.6516 7.66789C10.9484 8.37115 9.99454 8.76624 8.99998 8.76624C8.00541 8.76624 7.05159 8.37115 6.34833 7.66789C5.64506 6.96462 5.24998 6.0108 5.24998 5.01624C5.24998 4.02167 5.64506 3.06785 6.34833 2.36458C7.05159 1.66132 8.00541 1.26624 8.99998 1.26624C9.99454 1.26624 10.9484 1.66132 11.6516 2.36458C12.3549 3.06785 12.75 4.02167 12.75 5.01624ZM1.50098 19.1342C1.53311 17.1666 2.33731 15.2904 3.74015 13.9103C5.14299 12.5302 7.03206 11.7567 8.99998 11.7567C10.9679 11.7567 12.857 12.5302 14.2598 13.9103C15.6626 15.2904 16.4668 17.1666 16.499 19.1342C14.1464 20.213 11.5881 20.7697 8.99998 20.7662C6.32398 20.7662 3.78398 20.1822 1.50098 19.1342Z"
                  stroke="#5D6679"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h2>Employees</h2>
            </li>
            <li className="hover:bg-blue-100 hover:text-blue-500 gap-x-6 flex cursor-pointer rounded-lg pl-2  p-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.35 9.45V7C16.35 5.9 15.45 5 14.35 5H11C10.63 5 10.28 5.12 10 5.32C9.72 5.12 9.37 5 9 5H5.65C4.55 5 3.65 5.9 3.65 7V9.45C3.25 9.91 3 10.51 3 11.17V15H4.5V13.5H15.5V15H17V11.17C17 10.51 16.75 9.91 16.35 9.45ZM14.75 8.5H10.75V6.5H14.75V8.5ZM5.25 6.5H9.25V8.5H5.25V6.5ZM15.5 12H4.5V11C4.5 10.45 4.95 10 5.5 10H14.5C15.05 10 15.5 10.45 15.5 11V12ZM18 2V18H2V2H18ZM18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0Z"
                  fill="#5D6679"
                />
              </svg>

              <h2>Rooms</h2>
            </li>
            <li className="hover:bg-blue-100 hover:text-blue-500 gap-x-6 flex cursor-pointer rounded-lg pl-2 p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.568 3H5.25C4.65326 3 4.08097 3.23705 3.65901 3.65901C3.23705 4.08097 3 4.65326 3 5.25V9.568C3 10.165 3.237 10.738 3.659 11.159L13.24 20.74C13.939 21.439 15.02 21.612 15.847 21.07C17.9286 19.7066 19.7066 17.9286 21.07 15.847C21.612 15.02 21.439 13.939 20.74 13.24L11.16 3.66C10.951 3.45077 10.7029 3.28478 10.4297 3.17154C10.1565 3.05829 9.86371 3 9.568 3Z"
                  stroke="#5D6679"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6H6.008V6.008H6V6Z"
                  stroke="#5D6679"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h2>Bookings</h2>
            </li>
            <li className="hover:bg-blue-100 hover:text-blue-500 gap-x-6 flex cursor-pointer rounded-lg pl-2 p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.35 3.836C11.285 4.046 11.25 4.269 11.25 4.5C11.25 4.914 11.586 5.25 12 5.25H16.5C16.6989 5.25 16.8897 5.17098 17.0303 5.03033C17.171 4.88968 17.25 4.69891 17.25 4.5C17.2501 4.27491 17.2164 4.05109 17.15 3.836M11.35 3.836C11.492 3.3767 11.7774 2.97493 12.1643 2.68954C12.5511 2.40414 13.0192 2.25011 13.5 2.25H15C16.012 2.25 16.867 2.918 17.15 3.836M11.35 3.836C10.974 3.859 10.6 3.886 10.226 3.916C9.095 4.01 8.25 4.973 8.25 6.108V8.25M17.15 3.836C17.526 3.859 17.9 3.886 18.274 3.916C19.405 4.01 20.25 4.973 20.25 6.108V16.5C20.25 17.0967 20.0129 17.669 19.591 18.091C19.169 18.5129 18.5967 18.75 18 18.75H15.75M8.25 8.25H4.875C4.254 8.25 3.75 8.754 3.75 9.375V20.625C3.75 21.246 4.254 21.75 4.875 21.75H14.625C15.246 21.75 15.75 21.246 15.75 20.625V18.75M8.25 8.25H14.625C15.246 8.25 15.75 8.754 15.75 9.375V18.75M7.5 15.75L9 17.25L12 13.5"
                  stroke="#5D6679"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h2>Customers</h2>
            </li>
            <li className="hover:bg-blue-100 hover:text-blue-500 gap-x-6 flex cursor-pointer rounded-lg pl-2 p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.593 3.32206C18.693 3.45006 19.5 4.39906 19.5 5.50706V21.0001L12 17.2501L4.5 21.0001V5.50706C4.5 4.39906 5.306 3.45006 6.407 3.32206C10.1232 2.89069 13.8768 2.89069 17.593 3.32206Z"
                  stroke="#5D6679"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h2>Report</h2>
            </li>
          </ul>
        </div>
        <div className="flex w-full p-5 gap-3 items-center  text-gray-600">
          <img src={user} alt="user" className="w-[24px] h-[24px]  " />
          <h1 className="font-bold">John Doe</h1>
          <h1 className="bg-gray-400 rounded-2xl max-h-fit text-sm px-2 ">
            admin
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
