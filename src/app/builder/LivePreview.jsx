function RenderComponent({ type }) {
  switch (type) {
    case "Navbar":
      return (
        <nav className="flex justify-between items-center p-4 bg-blue-500 shadow-md rounded-md">
          <div className="font-bold text-xl text-white">Builder X</div>
          <ul className="flex space-x-6 text-white font-medium">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Courses</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Register</li>
          </ul>
        </nav>
      );

    case "Hero":
      return (
        <section className="relative p-12 rounded-lg text-black bg-white shadow-lg flex flex-col justify-center items-start space-y-4">
          <h1 className="text-4xl font-extrabold leading-tight">
            Build Your Platform Easily
          </h1>
          <p className="text-lg max-w-lg">
            Drag and drop components to design your custom online marketplace or
            course platform without coding.
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 cursor-pointer transition">
            Get Started
          </button>
        </section>
      );

    case "Banner":
      return (
        <div className="p-6 bg-blue-500 text-white rounded-md shadow-md flex justify-between items-center">
          <span className="font-semibold text-lg">
            Special Offer: 50% off all courses!
          </span>
          <button className="px-4 py-2 bg-white text-black font-bold rounded-lg hover:bg-blue-600 cursor-pointer transition">
            Enroll Now
          </button>
        </div>
      );

    case "NewCourse":
      return (
        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col space-y-3 hover:shadow-xl transition">
          <div className="text-xl font-bold text-black">
            React for Beginners
          </div>
          <p className="text-gray-600">
            Learn the basics of React and build your first web app.
          </p>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      );

    case "AvailableCourses":
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["React Basics", "Advanced JS", "Node.js"].map((course, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between"
            >
              <div className="font-bold text-black">{course}</div>
              <p className="text-gray-500 text-sm">
                High quality course content
              </p>
              <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer transition">
                Enroll
              </button>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

function LivePreview({ components }) {
  return (
    <div className="p-4 bg-blue-200 rounded-2xl h-full overflow-auto">
      {components.map((c, i) => (
        <div key={i} className="mb-3">
          <RenderComponent type={c} />
        </div>
      ))}
    </div>
  );
}

export default LivePreview;
