import { FaLaptopCode, FaPaintBrush, FaWordpressSimple } from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    description:
      "I create websites based on your ready-made design. Whether it's a landing page or a business card website, I make it look great and work smoothly on any device.",
    icon: <FaLaptopCode className="text-blue-400 text-2xl" />,
  },
  {
    title: "Web Design",
    description:
      "I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals.",
    icon: <FaPaintBrush className="text-blue-400 text-2xl" />,
  },
  {
    title: "WordPress Development",
    description:
      "I build websites on WordPress, making them easy to update and manage. It's a great choice for blogs, small businesses, or portfolios.",
    icon: <FaWordpressSimple className="text-blue-400 text-2xl" />,
  },
];

export default function MyServices() {
  return (
    <section className="bg-transparent py-12 md:py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-12 md:mb-20 text-center tracking-widest">
        MY SERVICES
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#2a2d3a]" />

        <div className="flex flex-col gap-12 md:gap-20">
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div
                  className={`md:w-1/2 w-full px-4 ${
                    isLeft ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-[#131622] border border-[#2a2d3a] rounded-xl p-4 sm:p-6 md:p-8 text-white shadow-md">
                    <div className="flex items-start gap-4">
                      {service.icon}
                      <div>
                        <h3 className="text-xl md:text-2xl tracking-widest mb-1">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector dot */}
                <div className="hidden md:flex flex-col items-center absolute left-1/2 transform -translate-x-1/2">
                  <span className="w-4 h-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full border-4 border-[#0f111a]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
