
function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto, my-20 rounded-lg shadow-lg sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm">
        <img src="https://www.alxafrica.com/wp-content/uploads/2023/12/logo-black.svg" alt="User" className="rounded-full w-36 h-36 mx-auto sm:h-24 md:h-36"/>
        <h1 className="text-xl text-blue-800 my-4 sm:text-lg md:text-xl">John Doe</h1>
        <p className="text-gray-600 text-base sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;