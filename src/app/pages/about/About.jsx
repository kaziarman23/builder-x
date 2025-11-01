import toast from "../../components/Notifications";

function About() {
  const { toastInvalidLink } = toast;

  return (
    <div className="p-8 w-full min-h-screen bg-black text-white flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-indigo-600 mb-4">
            About Builder X
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Builder X is your all-in-one platform to create, customize, and
            launch stunning online platforms — no coding required.
          </p>
        </div>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* What We Do */}
          <div className="bg-linear-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-lg hover:shadow-indigo-700/30 transition-transform duration-300 hover:-translate-y-2">
            <h2 className="text-3xl font-bold mb-4 text-indigo-500">
              What We Do
            </h2>
            <p className="text-gray-300 mb-4">
              We empower creators and small businesses to{" "}
              <span className="text-indigo-400 font-semibold">
                launch their online platforms without code
              </span>
              . Builder X offers all the essential building blocks you need.
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-300">
              <li>Responsive Navbar & Hero sections</li>
              <li>Banners for promotions and announcements</li>
              <li>Course or product listing sections</li>
              <li>Shopping cart, payments, and order history</li>
              <li>Filters, search, and other interactive tools</li>
            </ul>
          </div>

          {/* How We Do */}
          <div className="bg-linear-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-lg hover:shadow-indigo-700/30 transition-transform duration-300 hover:-translate-y-2">
            <h2 className="text-3xl font-bold mb-4 text-indigo-500">
              How We Do It
            </h2>
            <p className="text-gray-300 mb-4">
              Builder X uses a{" "}
              <span className="text-indigo-400 font-semibold">
                no-code visual editor
              </span>{" "}
              where you can drag, drop, and arrange components. Instantly
              preview your design changes as you build your dream platform.
            </p>
            <p className="text-gray-400">
              Our infrastructure ensures top-notch security and performance,
              letting you focus entirely on your creativity while Builder X
              handles the complexity under the hood.
            </p>
          </div>

          {/* What Users Can Do */}
          <div className="bg-linear-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-lg hover:shadow-indigo-700/30 transition-transform duration-300 hover:-translate-y-2">
            <h2 className="text-3xl font-bold mb-4 text-indigo-500">
              What You Can Do
            </h2>
            <p className="text-gray-300 mb-4">
              As a Builder X user, you have full control over your platform —
              from layout to functionality.
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-300">
              <li>
                Create your own{" "}
                <span className="text-indigo-400 font-semibold">
                  marketplace or course platform
                </span>{" "}
                in minutes
              </li>
              <li>Visually design and arrange your sections</li>
              <li>Preview changes live as you build</li>
              <li>Save, edit, and publish anytime</li>
              <li>Launch and manage your business effortlessly</li>
            </ul>
            <p className="mt-4 text-gray-400">
              Builder X helps you focus on your vision — we handle the tech.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400 mb-4 text-lg">
            Ready to start building with Builder X Club ?
          </p>
          <button
            onClick={toastInvalidLink}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 cursor-pointer px-8 rounded-xl transition"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
