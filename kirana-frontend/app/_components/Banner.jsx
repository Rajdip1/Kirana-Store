import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"


const Banner = () => {
  return (
    <>
    <div className="container pl-20">
    <Carousel>
     <CarouselContent>
      <CarouselItem>
        <div className="Banner1 p-10">
          <div className="grid grid-cols-2 items-center">
          <div className="row-span-1 gap-x-4">

            <Badge variant="outline" className="text-sm border-gray-700">
              Sales up to 20% off
            </Badge>
            <h1 className="text-5xl font-bold py-6">
              Get fresh Organic Food Everyday
            </h1>
            <p>
              Making Grocerry Food Errands Worth Your While
            </p>
            <Button className="bg-green-700 mt-5">Buy Products</Button>

          </div>

          <div className="row-span-2">
          <img src="/assests/banner1.png" width={1000} height={400} />
          </div>
          </div>
        </div>

      </CarouselItem>

      <CarouselItem>
      <div className="Banner2 p-10">
          <div className="grid grid-cols-2 items-center">
          <div className="row-span-1 gap-x-4">

            <Badge variant="outline" className="text-sm border-gray-700">
              Sales up to 20% off
            </Badge>
            <h1 className="text-5xl font-bold py-6">
              Get fresh Organic Food Everyday
            </h1>
            <p>
              Making Grocerry Food Errands Worth Your While
            </p>
            <Button className="bg-green-700 mt-5">Buy Products</Button>

          </div>

          <div className="row-span-2">
          <img src="/assests/banner1.png" width={1000} height={400} />
          </div>
          </div>
        </div>
      </CarouselItem>

      <CarouselItem>
        <div className="Banner3 p-10">
          <div className="grid grid-cols-2 items-center">
          <div className="row-span-1 gap-x-4">

            <Badge variant="outline" className="text-sm border-gray-700">
              Sales up to 20% off
            </Badge>
            <h1 className="text-5xl font-bold py-6">
              Get fresh Organic Food Everyday
            </h1>
            <p>
              Making Grocerry Food Errands Worth Your While
            </p>
            <Button className="bg-green-700 mt-5">Buy Products</Button>

          </div>

          <div className="row-span-2">
          <img src="/assests/banner1.png" width={1000} height={400} />
          </div>
          </div>
        </div>
      </CarouselItem>

    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
   </Carousel>
    </div>
    </>
  )
}

export default Banner