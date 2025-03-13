"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ForexChart } from "@/components/forex-chart";

const forexPairs = [
  { symbol: "XAUUSD", title: "Gold/USD" },
  { symbol: "EURUSD", title: "EUR/USD" },
  { symbol: "GBPUSD", title: "GBP/USD" },
];

export function ForexCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {forexPairs.map((pair) => (
          <CarouselItem key={pair.symbol} className="basis-full">
            <ForexChart symbol={pair.symbol} title={pair.title} />
          </CarouselItem>
        ))}
        <CarouselItem className="basis-full">
          <div className="h-[468px] flex items-center justify-center bg-muted rounded-lg">
            <div className="text-center p-6">
              <h3 className="text-lg font-semibold mb-2">BTC/USD</h3>
              <p className="text-muted-foreground">Coming Soon</p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}