/* eslint-disable @next/next/no-img-element */
export function SitePartner() {
  return (
    <section className="py-6 border-t border-b border-gray-100 dark:border-gray-800 w-full px-6 sm:px-30">
      <div className="container relative">
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-7.5">
          <div className="mx-auto py-4">
            <img src="images/clients/amazon.svg" className="h-6" alt="" />
          </div>

          <div className="mx-auto py-4">
            <img src="images/clients/google.svg" className="h-6" alt="" />
          </div>

          <div className="mx-auto py-4">
            <img src="images/clients/lenovo.svg" className="h-6" alt="" />
          </div>

          <div className="mx-auto py-4">
            <img src="images/clients/paypal.svg" className="h-6" alt="" />
          </div>

          <div className="mx-auto py-4">
            <img
              src="images/clients/shopify.svg"
              className="h-6"
              alt=""
            />
          </div>

          <div className="mx-auto py-4">
            <img
              src="images/clients/spotify.svg"
              className="h-6"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
