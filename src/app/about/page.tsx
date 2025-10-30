import PageHeader from "@/components/header";
import styles from "@/styles";

export default function AboutPage() {
  return (
    <div className="bg-[#000010]">
      <PageHeader
        title="About Us"
        description="At Paypers Partners Limited, we connect global fintech innovation with local market execution. From compliance frameworks and licensing to merchant acquisition and FX advisory, we enable sustainable growth across regulated markets."
      />

      <div className={`${styles.boxWidth} mx-auto bg-[#000010] py-12`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="flex flex-row px-6 md:px-0">
            <div>
              {/* <h2 className="text-xl md:text-2xl text-white font-bold mb-4">
                About Us
              </h2> */}

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                With proven expertise across Africa, the UK, Europe, and North
                America, we bridge the gap between global fintech innovation and
                local market requirements. Our deep understanding of regulatory
                landscapes, payment infrastructures, and market dynamics enables
                us to deliver tailored solutions that drive sustainable growth
                and long-term success.
              </p>

              <div className="flex flex-col gap-y-12">
                <div className="flex flex-row items-start justify-start gap-x-4">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.4"
                      cx="40"
                      cy="40"
                      r="40"
                      fill="#28282E"
                    />
                    <path
                      d="M51.7865 31.1467C51.1055 30.4653 50.297 29.9249 49.407 29.5561C48.5171 29.1874 47.5632 28.9976 46.5999 28.9976C45.6366 28.9976 44.6827 29.1874 43.7927 29.5561C42.9028 29.9249 42.0942 30.4653 41.4132 31.1467L39.9999 32.56L38.5865 31.1467C37.211 29.7711 35.3453 28.9983 33.3999 28.9983C31.4545 28.9983 29.5888 29.7711 28.2132 31.1467C26.8376 32.5222 26.0648 34.3879 26.0648 36.3333C26.0648 38.2787 26.8376 40.1444 28.2132 41.52L29.6265 42.9333L39.9999 53.3067L50.3732 42.9333L51.7865 41.52C52.4679 40.839 53.0083 40.0304 53.3771 39.1405C53.7458 38.2505 53.9356 37.2966 53.9356 36.3333C53.9356 35.37 53.7458 34.4161 53.3771 33.5262C53.0083 32.6362 52.4679 31.8277 51.7865 31.1467V31.1467Z"
                      stroke="#20BFA9"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Our mission
                    </h3>
                    <p className="text-gray-400 max-w-200 leading-relaxed">
                      To accelerate global fintech expansion by providing expert
                      consultancy, strategic partnerships, and localization
                      support across diverse markets.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-x-4">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.4"
                      cx="40"
                      cy="40"
                      r="40"
                      fill="#28282E"
                    />
                    <path
                      d="M41.5 25L26.5 43H40L38.5 55L53.5 37H40L41.5 25Z"
                      stroke="#FF794D"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Who we are
                    </h3>
                    <p className="text-gray-400 max-w-200 leading-relaxed">
                      Paypers Partners Limited is a global fintech consultancy
                      specializing in payments, licensing, and partnerships. We
                      bring hands-on experience across Africa, the UK, Europe,
                      and North America helping businesses navigate regulation,
                      build infrastructure, and scale responsibly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div
              className="w-full h-80 md:h-120 bg-cover bg-center"
              style={{ backgroundImage: 'url("/about_us_img.jpg")' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
