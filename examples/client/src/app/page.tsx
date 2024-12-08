import { Main } from "@/components/shared/Main";

import { GetCategories } from "@/modules/categories/components/GetCategories";
// import Categories from "@/components/ui/categories/Categories";
import Testimonials from "@/components/ui/testimonials/Testimonials";
import Image from "next/image";
import { ArrowRight } from "lucide-react";


export default async function Home() {

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="relative flex flex-col h-screen w-screen overflow-hidden bg-[#030014]" id="about-me">
          <video
            autoPlay
            muted
            loop
            className="absolute md:top-[-225px] md:h-full h-screen md:w-full w-screen left-0 bottom-0 z-[1] object-cover "
          >
            <source src="/blackhole.webm" type="video/webm" />
          </video>
          <Main />
        </div>
      </div>
      {/* <Main /> */}

      <div className="p-4 text-white set-font">
        <div className="mx-auto container">
          <div className="grid gap-8 lg:grid-cols-3 place-content-baseline">
            {/* Main Content */}
            <div className="lg:col-span-2 h-full">
              <div className="overflow-hidden rounded-2xl custom-bg p-8 h-full">
                <div className="relative h-64 w-full sm:h-80">
                  <Image
                    src="/images/feature-image-01.png"
                    alt="DigitalOcean Bare Metal GPUs: Dedicated GPU machines for advanced AI workloads"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>

                <h1 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  DigitalOcean Bare Metal GPUs: Dedicated GPU machines for advanced AI workloads
                </h1>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8 h-full">
              {/* Categories */}
              <GetCategories />
              {/* CTA Card */}
              <div className="rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-300 p-6">
                <p className="text-lg font-medium text-blue-900">
                  You&apos;ve got unique business needs. We&apos;ve got powerful solutions to meet them. Chat with us to get started.
                </p>
                <button className="mt-4 flex items-center space-x-2 rounded-lg bg-blue-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-800">
                  <span>Contact sales</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        {/* <Categories status={categoriesResponseStatus} categories={categories} /> */}
        < Testimonials />
      </div>
    </>
  );
}
