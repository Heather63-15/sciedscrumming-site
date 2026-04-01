"use client";

import Script from "next/script";

export default function ThankYouEvents() {
  return (
    <>
      {/* Meta Pixel Lead event */}
      <Script id="fb-lead" strategy="afterInteractive">{`
        if(typeof fbq === 'function') { fbq('track', 'Lead'); }
      `}</Script>

      {/* GA4 purchase event */}
      <Script id="ga4-purchase" strategy="afterInteractive">{`
        if(typeof gtag === 'function') {
          gtag('event', 'purchase', {
            currency: 'USD',
            value: 18.00,
            items: [{
              item_name: 'Executive Function Email Course',
              price: 18.00,
              quantity: 1
            }]
          });
        }
      `}</Script>
    </>
  );
}
