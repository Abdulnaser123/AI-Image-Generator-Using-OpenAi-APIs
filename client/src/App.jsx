import {Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import {logo} from './assets';
import Home from './Pages/Home';
import CreatePost from './Pages/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e5e5e5]">
        <Link to={'./'}>
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link
          to={'./create-post'}
          className="font-inter font-medium bg-[#6469ff] px-4 py-2 rounded-md text-white"
        >
          Create
        </Link>
      </header>{' '}
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
