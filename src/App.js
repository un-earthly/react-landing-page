import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner"
import HIghlightSlider from "./Components/HIghlightSlider"

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
          <HIghlightSlider />
          <section className='grid lg:grid-cols-2 gap-5 place-items-center my-10'>
            <div className="w-4/5 h-64 border border-dashed border-gray-600">
              <h1 className='text-center text-3xl font-bold'>Explore</h1>
              <div className='flex items-center justify-between mt-28 p-8'>
                <div className="rounded-full bg-gray-300 h-16 w-16"></div>
                <div className="bg-gray-300 h-8 w-24"></div>
              </div>
            </div>
            <div className="w-4/5 h-64 border border-dashed border-gray-600">
              <h1 className='text-center text-3xl font-bold'>Explore</h1>
              <div className='flex items-center justify-between mt-28 p-8'>
                <div className="rounded-full bg-gray-300 h-16 w-16"></div>
                <div className="bg-gray-300 h-8 w-24"></div>
              </div>
            </div>
          </section>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
