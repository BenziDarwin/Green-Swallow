"use client"

import { Card } from '@/components/ui/card';

interface ForexChartProps {
  symbol: string;
  title: string;
}

export function ForexChart({ symbol, title }: ForexChartProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-[400px]">
        <div
          className="tradingview-widget-container"
          style={{ height: "100%", width: "100%" }}
        >
          <iframe
            key={symbol}
            src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${symbol}&symbol=FX_IDC:${symbol}&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=0&toolbarbg=f1f3f6&studies=[]&theme=light&style=1&timezone=exchange&withdateranges=1&showpopupbutton=1&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=en&utm_source=&utm_medium=widget&utm_campaign=chart&page-uri=${encodeURIComponent(window.location.href)}`}
            style={{
              width: "100%",
              height: "100%",
              border: "none"
            }}
            allowTransparency={true}
            scrolling="no"
            allowFullScreen={true}
          />
        </div>
      </div>
    </Card>
  );
}