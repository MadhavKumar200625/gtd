import Link from "next/link";

const CTA = () => {
  return (
    <>
      <section className="py-5 bg-slate-100">
        <div className="container mx-auto px-4 md:px-0 ">
          <div className="grid md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h4 className="text-2xl md:text-4xl font-bold leading-snug">
                GET GLOBAL TRADE DATA ONLINE AT YOUR FINGERTIPS!
              </h4>
              <div className="flex mt-4">
                <a
                  href="/contact"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Schedule a Demo →
                  </span>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 mb-6 md:mb-0">
              <img src="./images/girlwithlaptFop.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
