import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner"
import Highlights from "./Components/Highlights"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  return (
    <div className="App">
      <Navbar >
        <div>
          <Banner />
          <div className="my-10 mx-5">
            <Highlights />
          </div>
          <section className='grid lg:grid-cols-2 gap-5 place-items-center my-10'>
            <div className="w-4/5 h-64 border border-dashed border-gray-600 relative bg-[url(https://img.freepik.com/free-photo/cosmic-background-with-dark-light-blue-laser-lights-perfect-digital-wallpaper_181624-23690.jpg?t=st=1655361753~exp=1655362353~hmac=b4b344952e7e9c0564e89d8e366aed9a5d9a01f2424d0aaee903cb2504c700c6&w=900)] text-white bg-center">
              <h1 className='text-center text-3xl font-bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>Explore</h1>
              <div className='flex items-center justify-between absolute bottom-2 w-full px-8'>
                <div className="rounded-full bg-gray-400 h-16 w-16 leading-4 flex items-center justify-center text-center font-bold">Friends only</div>
              </div>
            </div>
            <div className="w-4/5 h-64 border border-dashed border-gray-600 relative bg-[url(https://img.freepik.com/free-photo/cosmic-background-with-colorful-orange-blue-laser-lights_181624-26045.jpg?t=st=1655361753~exp=1655362353~hmac=27445cecac7c259f009a09776351c65626f19b9e29ba4a8ae22e205993854277&w=900)] text-white bg-center">
              <h1 className='text-center text-3xl font-bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>Gaming</h1>
              <div className='flex items-center justify-between absolute bottom-2 w-full px-8'>
                <div className="rounded-full bg-gray-400 h-16 w-16"></div>
                <div className="bg-gray-400 px-3 py-1 cursor-pointer font-bold">Leaderboard</div>
              </div>
            </div>
          </section>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
