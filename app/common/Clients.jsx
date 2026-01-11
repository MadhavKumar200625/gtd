import React from "react";

const Clients = () => {
  return (
    <>
      {/* ---------Clients start--------------  */}
      <section className="bg-white">
        <div className="container px-3 md:px-0 mx-auto py-10 md:py-20">
          <h3 className="text-primary text-center text-lg text-gray-400 font-medium tracking-tight">
            Our Clients
          </h3>
          <h2 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-tight">
            Trusted By Top Brands
          </h2>
          <p className="text-base text-gray-700 text-center max-w-5xl mx-auto">
            We are proud to serve some of the industry's most prestigious customers.
            Our vision is to provide rapid and timely and accurate information that
            adds value to their business.
          </p>
          <div className="grid grid-cols-5 md:grid-cols-5 mt-10 gap-10">
            <div className="client_logo_new">
              <img src="/images/clients/IDC-TECHNOLOGIES.webp" alt="" />
            </div>
            <div className="client_logo_new">
              <img src="/images/clients/BANK-OF-AMERICA.webp" alt="" />
            </div>
            <div className="client_logo_new">
              <img src="/images/clients/MERCK.webp" alt="" />
            </div>
            <div className="client_logo_new">
              <img src="/images/clients/AMD.webp" alt="" />
            </div>
            <div className="client_logo_new">
              <img src="/images/clients/IHC.webp" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------Clients end--------------  */}
    </>
  );
};

export default Clients;
