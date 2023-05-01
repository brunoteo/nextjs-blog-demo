function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Site Title</h1>
        <h2 className="mt-5 md:mt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
        neque volutpat quam vestibulum finibus a ut turpis.
      </p>
    </div>
  );
}

export default Banner;
