import * as React from 'react';

import { Card, CardContent } from '@/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/_components/ui/carousel';
import Image from 'next/image';
import coffeImageSlide from '../../../public/coffe_image_slide.png';
import Link from 'next/link';
import RadioGroupProduct from '../_components/RadioGroupProduct';
import SelectQuantityProduct from '../_components/SelectQuantityProduct';

export default function CarouselVertical() {
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-6xl font-besley mb-4 text-center">
        Our Populars Coffee<span className="text-amber-600">.</span>
      </h2>
      <Carousel
        opts={{
          align: 'start',
        }}
        orientation="vertical"
        className="w-full max-w-7xl shadow-sm"
      >
        <div className="grid grid-cols-[auto,1fr] bg-coffe-primary-50 rounded-md border px-6 shadow-sm">
          <CarouselDots />
          <CarouselContent className="h-[450px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent
                      className="flex items-center justify-center 
                pt-12 pb-8 rounded-md"
                    >
                      <div className="text-slate-950 grid grid-cols-[300px,1fr] w-full justify-center items-center">
                        <div className="w-[390px] my-auto">
                          <Image
                            src={coffeImageSlide}
                            width={320}
                            height={384}
                            alt="Image Product NextCoffe"
                          />
                        </div>
                        <div className="max-w-xl flex flex-col gap-y-2 border-l rounded-md border-opacity-30 border-l-coffe-primary-500 pl-6 pr-2">
                          <div className="w-full flex justify-between items-center">
                            <h4 className="text-2xl font-semibold">
                              {'Morning Brew'}
                            </h4>
                            <div className="relative">
                              <span className="-top-4 absolute text-base font-light line-through text-gray-800 opacity-30">
                                $ 19.99
                              </span>
                              <p className=" flex text-3xl font-extrabold text-orange-400">
                                $ <span className="inline-block">14.99</span>
                              </p>
                            </div>
                          </div>
                          <p className="my-4">
                            {
                              'Indulge in the luxurious experience of our Premium Coffee Blend, meticulously crafted to elevate your coffee ritual to new heights. Sourced from the finest coffee estates around the globe, our blend features a harmonious combination of hand-selected Arabica and Robusta beans, expertly roasted to perfection.'
                            }
                          </p>
                          <div className="flex gap-x-4">
                            <SelectQuantityProduct />
                            <RadioGroupProduct />
                          </div>
                          <div className="flex gap-x-4 mt-8">
                            <Link
                              className="transition-all duration-300 text-center text-coffe-primary-800 border border-coffe-primary-600 bg-coffe-primary-200 py-3 px-5 rounded-md hover:bg-coffe-primary-600 hover:text-slate-100"
                              href={'/'}
                            >
                              View shop
                            </Link>
                            <Link
                              className="transition-all duration-300 text-center bg-coffe-primary-900 hover:bg-coffe-primary-700 py-3 px-5 rounded-md text-slate-100 hover:text-slate-50"
                              href={'/'}
                            >
                              Order now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
}
