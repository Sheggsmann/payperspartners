import PageHeader from "@/components/header";
import styles from "@/styles";

export default function ContactPage() {
  return (
    <div className="bg-[#000010]">
      <PageHeader
        title="Contact Us"
        description="Let's build your Fintect Growth Story."
      />

      <div className={`${styles.boxWidth} mx-auto bg-[#000010] py-12`}>
        <div className="grid md:grid-cols-3 gap-4 px-6 md:px-0">
          <div className="rounded-md p-4 flex flex-col min-h-[250px] md:min-h-[300px] bg-black border border-white/20">
            <div className="w-[50px] h-[50px] rounded-md flex items-center justify-center bg-[#000010]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.555 11.1675L16.555 3.16748C16.3907 3.05784 16.1975 2.99933 16 2.99933C15.8025 2.99933 15.6093 3.05784 15.445 3.16748L3.445 11.1675C3.30801 11.2589 3.19572 11.3827 3.11809 11.5279C3.04046 11.6731 2.99989 11.8353 3 12V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H27C27.5304 27 28.0391 26.7893 28.4142 26.4142C28.7893 26.0391 29 25.5304 29 25V12C29.0001 11.8353 28.9595 11.6731 28.8819 11.5279C28.8043 11.3827 28.692 11.2589 28.555 11.1675ZM12.09 19L5 24V13.9412L12.09 19ZM14.1362 20H17.8638L24.9425 25H7.0575L14.1362 20ZM19.91 19L27 13.9412V24L19.91 19Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="mt-auto">
              <h1 className="text-white font-bold">Email</h1>
              <p className="text-white/70">Get the latest updates and offers</p>

              <h1 className="font-bold text-white">
                info@payperspartners.co.uk
              </h1>
            </div>
          </div>
          <div className="rounded-md p-4 flex flex-col min-h-[250px] md:min-h-[300px] bg-black border border-white/20">
            <div className="w-[50px] h-[50px] rounded-md flex items-center justify-center bg-[#000010]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9999 16C16.7333 16 17.361 15.7389 17.8833 15.2167C18.4055 14.6945 18.6666 14.0667 18.6666 13.3334C18.6666 12.6 18.4055 11.9722 17.8833 11.45C17.361 10.9278 16.7333 10.6667 15.9999 10.6667C15.2666 10.6667 14.6388 10.9278 14.1166 11.45C13.5944 11.9722 13.3333 12.6 13.3333 13.3334C13.3333 14.0667 13.5944 14.6945 14.1166 15.2167C14.6388 15.7389 15.2666 16 15.9999 16ZM15.9999 29.3334C12.4221 26.2889 9.74992 23.4611 7.98325 20.85C6.21659 18.2389 5.33325 15.8222 5.33325 13.6C5.33325 10.2667 6.40547 7.61113 8.54992 5.63335C10.6944 3.65558 13.1777 2.66669 15.9999 2.66669C18.8221 2.66669 21.3055 3.65558 23.4499 5.63335C25.5944 7.61113 26.6666 10.2667 26.6666 13.6C26.6666 15.8222 25.7833 18.2389 24.0166 20.85C22.2499 23.4611 19.5777 26.2889 15.9999 29.3334Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="mt-auto">
              <h1 className="text-white font-bold">Address</h1>
              <p className="text-white/70">Message us anytime for quick help</p>

              <h1 className="font-bold text-white">London, United Kingdom</h1>
            </div>
          </div>
          <div className="rounded-md p-4 flex flex-col min-h-[250px] md:min-h-[300px] bg-black border border-white/20">
            <div className="w-[50px] h-[50px] rounded-md flex items-center justify-center bg-[#000010]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.985 21.885C28.7621 23.5788 27.9303 25.1335 26.6449 26.2588C25.3595 27.3841 23.7084 28.0031 22 28C12.075 28 4.00001 19.925 4.00001 9.99999C3.99695 8.2916 4.61587 6.64052 5.74118 5.35511C6.86649 4.0697 8.42122 3.23787 10.115 3.01499C10.5433 2.96269 10.9771 3.05032 11.3515 3.26479C11.7259 3.47926 12.0209 3.80907 12.1925 4.20499L14.8325 10.0987V10.1137C14.9639 10.4168 15.0181 10.7477 14.9904 11.0768C14.9627 11.406 14.8539 11.7231 14.6738 12C14.6513 12.0337 14.6275 12.065 14.6025 12.0962L12 15.1812C12.9363 17.0837 14.9263 19.0562 16.8538 19.995L19.8963 17.4062C19.9261 17.3811 19.9574 17.3578 19.99 17.3362C20.2666 17.1517 20.5849 17.0391 20.916 17.0086C21.2471 16.978 21.5806 17.0305 21.8863 17.1612L21.9025 17.1687L27.7913 19.8075C28.1879 19.9785 28.5185 20.2732 28.7337 20.6477C28.9489 21.0222 29.037 21.4562 28.985 21.885Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="mt-auto">
              <h1 className="text-white font-bold">Phone</h1>
              <p className="text-white/70">Speak to our team for support</p>

              <h1 className="font-bold text-white">+44 (0)20 1234 5678</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
