import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 py-4 px-6 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">Rankingeek</h1>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Logout
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h2 className="text-5xl font-extrabold mb-6">Empowering Your Digital Growth</h2>
        <p className="text-lg max-w-2xl mb-6">
          At Rankingeek, we provide cutting-edge digital solutions to help your business reach new heights. Let's build your success story together.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md text-lg">
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Rankingeek. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
