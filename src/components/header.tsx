import React from "react";
import styles from "@/styles";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="w-full h-fit py-16 md:py-0 md:h-[450px] flex items-center relative bg-black">
      <div
        className="absolute top-0 left-0 w-2/3 h-full bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: 'url("/pattern.png")' }}
      />

      <div
        className="absolute top-0 right-0 md:-right-[100px] w-full md:w-1/2 h-full bg-cover z-40 bg-no-repeat opacity-90"
        style={{ backgroundImage: 'url("/globe.png")' }}
      />
      <div
        className={`${styles.boxWidth} z-60 mx-auto px-6 md:px-0 flex flex-col items-center justify-center mt-10`}
      >
        <h1 className="text-3xl text-white font-bold text-center">{title}</h1>
        <p className="text-white mt-4 text-center max-w-2xl">{description}</p>
      </div>
    </div>
  );
}
