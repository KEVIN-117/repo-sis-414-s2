import { Main } from "@/components/shared/Main";

import { GetCategories } from "@/modules/categories/components/GetCategories";
import Categories, { CategoriesProps } from "@/components/ui/categories/Categories";
import Testimonials from "@/components/ui/testimonials/Testimonials";

import { fetcher } from "@/utils/fetcher"

interface Error {
  errors: string[];
  message: string;
}
interface BaseType {
  status: number;
  data: CategoriesProps;
  error: Error;
}

export default async function Home() {
  const { data, error, status } = await fetcher<BaseType, Error, CategoriesProps>({
    url: '/categories',
    method: 'GET'
  });

  if (error.message) {
    return (
      <div>{error.message}</div>
    )
  }

  if (status !== 200) {
    return (
      <div>Something went wrong</div>
    )
  }
  const { categories, status: categoriesResponseStatus } = data;
  return (
    <>
      <Main />
      <GetCategories />
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

      <div className="mt-10">
        <Categories status={categoriesResponseStatus} categories={categories} />
        < Testimonials />
      </div>
    </>
  );
}
