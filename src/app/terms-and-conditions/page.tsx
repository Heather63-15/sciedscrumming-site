import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "SciEdScrumming terms and conditions for service.",
};

export default function TermsAndConditions() {
  return (
    <>
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold">Terms and Conditions</h1>
          <p className="mt-4 text-text-light">Last updated: February 17, 2024</p>
        </div>
      </section>

      <section className="py-16">
        <div className="prose prose-lg mx-auto max-w-3xl px-6 text-text-light">
          <h2 className="text-xl font-bold text-text">Disclaimer of Warranties</h2>
          <p>
            All content and services are provided &quot;as is&quot; without warranties of any kind,
            either express or implied.
          </p>

          <h2 className="mt-8 text-xl font-bold text-text">Account Creation</h2>
          <p>
            Minors may not create accounts. Users under 18 require a parent or guardian to
            act as the account holder and client.
          </p>

          <h2 className="mt-8 text-xl font-bold text-text">Account Security</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account and
            password and for restricting access to your computer.
          </p>

          <h2 className="mt-8 text-xl font-bold text-text">Products and Services</h2>
          <p>
            Our offerings include learning tools, coaching, learning materials, and video
            interviews. Customers are responsible for their own results. Product descriptions
            are provided in good faith.
          </p>

          <h2 className="mt-8 text-xl font-bold text-text">Payment</h2>
          <p>
            Payment may be made via monthly installments or full payment by credit or debit card.
          </p>

          <h2 className="mt-8 text-xl font-bold text-text">Refund Policy</h2>
          <p>
            Products and services are non-refundable unless stated otherwise for specific
            products. Please contact{" "}
            <a href="mailto:support@sciedscrumming.com" className="text-primary hover:underline">
              support@sciedscrumming.com
            </a>{" "}
            for any concerns.
          </p>

          <h2 className="mt-8 text-xl font-bold text-text">Copyright</h2>
          <p>
            All content is provided under a single-user license. Redistribution is prohibited.
            Content is protected under Canadian, U.S., and international intellectual property laws.
          </p>

          <h2 className="mt-8 text-xl font-bold text-text">Contact</h2>
          <p>
            For legal notices: P.O. Box 5667, Hanover, NH 03755, U.S.A.
            <br />
            Email:{" "}
            <a href="mailto:support@sciedscrumming.com" className="text-primary hover:underline">
              support@sciedscrumming.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
