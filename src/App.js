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
            <div className="w-4/5 h-64 border border-dashed border-gray-600 relative">
              <h1 className='text-center text-3xl font-bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>Explore</h1>
              <div className='flex items-center justify-between absolute bottom-2 w-full px-8'>
                <div className="rounded-full bg-gray-400 h-16 w-16 leading-4 flex items-center justify-center text-center font-bold">Friends only</div>
              </div>
            </div>
            <div className="w-4/5 h-64 border border-dashed border-gray-600 relative">
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
