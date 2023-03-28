import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = "https://api.pokemontcg.io/v2/cards?page=1&pageSize=250";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(baseURL);
      setData(result.data.data)
      console.log(result.data);
    };

    fetchData();
  }, []);

  if (!data) return null;

  return (
    // <div>
    //   <ul>
    //   {data.map(item => (
    //     <li key={item.id}>{item.name}
    //       <img alt='pokemon' src={item.images.large}></img>
    //     </li>
    //   ))}
    //   </ul>
    // </div>

    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between flex-wrap py-4">
            <div className="flex items-center flex-shrink-0">
              <span className="font-bold text-xl">My App</span>
            </div>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-black hover:border-black">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
              </button>
            </div>
            <div className="hidden lg:block lg:flex-grow lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black mr-4">
                  Link 1
                </a>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black mr-4">
                  Link 2
                </a>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black">
                  Link 3
                </a>
              </div>
              <div>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign In
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

            {/* Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel ex nunc. In hac habitasse platea dictumst.
          </p>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
            Learn More
          </button>
        </div>
      </main>

            {/* Footer */}
      <footer className="bg-white border-t border-gray-300">
        <div className="container mx-auto px-4 py-8">
          <p className="text-sm text-gray-600 mb-2">
            &copy; 2023 My App. All rights reserved.
          </p>
          <nav className="flex justify-center">
            <a href="#" className="text-gray-600 hover:text-black mx-3">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-black mx-3">
            Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-black mx-3">
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App;
