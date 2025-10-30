"use client";
/* eslint-disable @next/next/no-img-element */
import { industries, ourSolutions } from "@/constants";
import { useInView } from "@/hooks/useInView";
import styles from "@/styles";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { ref: aboutRef, isInView: aboutInView } = useInView();
  const { ref: solutionsRef, isInView: solutionsInView } = useInView();
  const { ref: industriesRef, isInView: industriesInView } = useInView();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black min-h-screen">
        <div
          className="absolute top-0 left-0 w-2/3 h-full bg-cover bg-center bg-no-repeat hidden md:block"
          style={{ backgroundImage: 'url("/pattern.png")' }}
        />

        <div
          className="absolute top-0 right-0 md:-right-[100px] w-full md:w-1/2 h-full bg-cover z-10 bg-no-repeat opacity-90"
          style={{ backgroundImage: 'url("/globe.png")' }}
        />

        {/* Content */}
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="relative flex items-center min-h-screen px-6 md:px-6 lg:px-0 z-20">
            <div className=" text-white text-center md:text-left">
              <h1 className="text-3xl md:text-6xl font-bold mb-6 animate-in slide-in-from-left duration-500">
                Powering Global Fintech <br />
                Expansion
              </h1>
              <p className="text-md md:text-xl max-w-3xl mb-6 text-gray-300 leading-6 md:leading-9 animate-in fade-in duration-1000">
                We help fintechs, payment companies, and financial institutions
                launch, scale, and optimize operations across emerging and
                developed markets. At Paypers Partners Limited, we connect
                global fintech innovation with local market execution. From
                compliance frameworks and licensing to merchant acquisition and
                FX advisory, we enable sustainable growth across regulated
                markets.
              </p>

              <Link href={"/pricing"}>
                <button className="px-10 py-3 rounded-full bg-[#0075C4] border-2 border-white/50 font-bold flex flex-row items-center gap-2 mx-auto md:mx-0 z-150 cursor-pointer hover:bg-[#0066b0] hover:scale-105 hover:shadow-lg transition-all duration-300 animate-bounce-in animation-delay-500 group">
                  Get Started
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-[#000010] py-16 md:py-20" ref={aboutRef}>
        <div
          className={`${styles.boxWidth} mx-auto ${aboutInView ? "animate-in fade-in slide-in-from-bottom-30 duration-500" : "opacity-0 translate-y-[50px]"}`}
        >
          <div className="flex flex-row px-6 md:px-0">
            <div>
              <h2 className="text-xl md:text-2xl text-white font-bold mb-4">
                About Us
              </h2>

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
      </section>

      {/* Our Solutions */}
      <section className="bg-[#000010] py-16 md:py-20" ref={solutionsRef}>
        <div
          className={`${styles.boxWidth} mx-auto ${solutionsInView ? "animate-in fade-in slide-in-from-bottom-30 duration-500" : "opacity-0 translate-y-[50px]"}`}
        >
          <div className="px-6 md:px-0">
            <div>
              <h2 className="text-xl md:text-2xl text-white font-bold mb-4">
                Our Solutions
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                From strategic consultation to full-service market entry, we
                provide comprehensive solutions tailored to your fintech
                expansion needs. Our expertise spans regulatory compliance,
                partnership development, merchant acquisition, and operational
                optimization across multiple jurisdictions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {ourSolutions.map((solution, index) => (
                <div
                  key={index}
                  className="h-[300px] md:h-[350px] bg-[#0f0f1a] relative"
                >
                  <div
                    className="p-2 rounded-t-2xl"
                    style={{ backgroundColor: `${solution.bgColor}` }}
                  >
                    <h2 className="text-white text-center">{solution.title}</h2>
                  </div>

                  <div className="p-4">
                    <ul className="list-disc leading-loose px-4">
                      {solution.points.map((point, idx) => (
                        <li
                          key={`point-${solution.title}-${idx}`}
                          className="text-white text-md"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span
                    className="absolute bottom-2 right-2 text-6xl font-extrabold text-transparent"
                    style={{
                      WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                      color: "transparent",
                    }}
                  >
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries we serve */}
      <section
        className="bg-[#000010] py-16 md:py-20 relative"
        ref={industriesRef}
      >
        <div
          className={`${styles.boxWidth} mx-auto px-6 md:px-0 ${industriesInView ? "animate-in fade-in slide-in-from-bottom-30 duration-500" : "opacity-0 translate-y-[50px]"}`}
        >
          <div className="px-6 md:px-0">
            <div>
              <h2 className="text-xl md:text-2xl text-white font-bold mb-4">
                Industries We Serve
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We partner with forward-thinking companies across diverse
                industries, helping them leverage fintech innovations to enhance
                customer experiences, streamline operations, and unlock new
                revenue opportunities in global markets.
              </p>
            </div>
          </div>

          <div className="">
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat md:block"
              style={{ backgroundImage: 'url("/pattern.png")' }}
            />

            <div className="flex flex-row flex-wrap gap-y-4">
              {industries.map((industry, index) => (
                <div
                  key={`industry-${index}`}
                  className="flex flex-row items-center"
                >
                  <div
                    className="flex flex-row gap-2 p-2 rounded-full border items-center"
                    style={{ borderColor: `${industry.color}` }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-full"
                      style={{ backgroundColor: industry.color }}
                    >
                      <img src={industry.svg} alt={`svg-${index}`} />
                    </div>
                    <p className="text-white">{industry.title}</p>
                  </div>
                  {index !== industries.length - 1 && (
                    <div className="h-0 border-white w-12 border border-dashed"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
