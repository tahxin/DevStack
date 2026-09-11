import BannerPic from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full p-8 gap-8">

      <div className="flex-1">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Build Your Ideal Development Stack
        </h1>

        <p className="text-md mb-6">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="flex gap-4">
          <button className="btn btn-primary">
            Explore Technologies
          </button>

          <button className="btn btn-secondary">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex-1">
        <img src={BannerPic} alt="Banner" className="w-full" />
      </div>

    </div>
  );
};

export default Banner;