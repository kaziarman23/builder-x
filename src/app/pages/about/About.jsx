function About() {
  return (
    <div className="p-6 w-full h-full bg-black text-white">
      <div className=" max-w-7xl mx-auto space-y-12">
        <h1 className="text-3xl font-bold text-indigo-600 text-center">
          About Builder X
        </h1>

        {/* What We Do */}
        <section className="bg-black p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">What We Do</h2>
          <p className="text-white">
            We empower creators and small businesses to **launch their online
            platforms without writing a single line of code**. BuilderX provides
            essential building blocks like:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-white">
            <li>Responsive Navbar & Hero sections</li>
            <li>Banners for promotions and announcements</li>
            <li>Course or product listing sections</li>
            <li>Shopping cart, payment pages, and order history</li>
            <li>Filters, search, and other interactive elements</li>
          </ul>
        </section>

        {/* How We Do */}
        <section className="bg-black p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            How We Do It
          </h2>
          <p className="text-white mb-2">
            BuilderX provides a **no-code platform** for building online
            marketplaces, course platforms, and service websites. Our intuitive
            **drag-and-drop editor** allows you to visually design your site by
            choosing components from a pre-defined library and arranging them
            exactly how you want. You can see your changes **instantly** in a
            live preview.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nulla aperiam ullam alias, repellat distinctio! Libero, porro sit exercitationem quod repudiandae nihil quas alias voluptatibus ad voluptatum assumenda iste veniam!
          Unde earum corporis voluptas assumenda tenetur ullam fugiat rem, eos, aliquid ducimus deleniti voluptatibus iusto? Distinctio quasi magnam natus? Similique commodi quis dolorem cum tempore soluta! Animi illo dolorem ipsum.</p>
        </section>

        {/* What Users Can Do */}
        <section className="bg-black p-6 rounded-lg shadow-md text-indigo-600">
          <h2 className="text-2xl font-semibold mb-4">What You Can Do</h2>
          <p className="text-white">As a BuilderX user, you can:</p>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-white">
            <li>
              Create your own **custom online marketplace or course platform**
              in minutes
            </li>
            <li>Drag and drop components to **design your pages visually**</li>
            <li>
              Arrange sections in the order you want and **preview changes
              live**
            </li>
            <li>Save your configurations and continue editing later</li>
            <li>
              Launch your platform to sell courses, products, or services
              effortlessly
            </li>
          </ul>
          <p className="mt-4 text-white">
            BuilderX gives you all the tools you need to **focus on your content
            and customers**, not on coding.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
