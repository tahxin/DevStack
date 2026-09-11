import BannerPic from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full px-8 py-16 md:py-24 gap-12">

      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Build Your Ideal{' '}
          <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-base md:text-lg text-base-content/70 max-w-lg leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="btn rounded-3xl bg-linear-to-r from-blue-500 to-purple-500 text-white border-none hover:opacity-90 px-6">
            Explore Technologies
          </button>

          <button className="btn btn-outline rounded-3xl px-6">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={BannerPic}
          alt="Development stack illustration"
          className="w-full max-w-lg object-contain drop-shadow-xl"
        />
      </div>

    </section>
  );
};

export default Banner;