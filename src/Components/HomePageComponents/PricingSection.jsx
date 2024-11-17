import React from "react";
import Heading from "../Shared/Heading/Heading";

const PricingSection = () => {
  const plans = [
    {
      plan: "Starter Shopify Package",
      price: "$349/Per Website",
      details: [
        "Basic 5-7 Page Website with Few products",
        "Premium theme and Professional LOGO Design",
        "Stunning Homepage & Product Collection, Page Design",
        "Mobile-Responsive Design",
        "Basic SEO Optimization",
        "Social Media Integration",
        "Basic Analytics & Reporting",
        "Payment Gateway Integration",
        "Performance Optimization",
        "Shipping & Tax Setting",
        "Product Adding",
      ],
      cta: "Get Started",
    },
    {
      plan: "Advanced BigCommerce Package",
      price: "$449/Per Website",
      details: [
        "Basic 7-10 Page Website with Few products",
        "Premium theme and Professional LOGO Design",
        "Stunning Homepage & Product Collection, Page Design",
        "Mobile-Responsive Design",
        "Basic SEO Optimization",
        "Social Media Integration",
        "Basic Analytics & Reporting",
        "Payment Gateway Integration",
        "Shipping & Tax Setting",
        "Performance Optimization",
        "Add Products",
      ],
      cta: "Get Started",
    },
    {
      plan: "Pro WordPress Package",
      price: "$349/Per Website",
      details: [
        "Basic 5-8 Page Website",
        "Premium theme and Professional LOGO Design",
        "Stunning Homepage & Product Collection, Page Design",
        "Mobile-Responsive Design",
        "Basic SEO Optimization",
        "Social Media Integration",
        "Basic Analytics & Reporting",
        "Payment Gateway Integration",
        "Shipping & Tax Setting",
        "Performance Optimization",
        "Plugins Installations",
      ],
      cta: "Get Started",
    },
  ];

  return (
    <div className={"px-5 lg:px-0"}>
      <div className={"text-center my-16"}>
        <Heading heading={"Our Pricing"}></Heading>
      </div>
      <div
        className={
          "grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-6 lg:max-w-[90%] lg:mx-auto"
        }
      >
        {plans.map((plan, idx) => (
          <div key={idx} className="card bg-base-100 shadow-xl text-center ">
            <div className="card-body p-0">
              <h2 className="text-xl font-medium bg-gray-900 text-white py-5">
                {plan.plan}
              </h2>
              <p
                className={
                  "py-3 border-b border-slate-300 text-2xl font-semibold"
                }
              >
                {plan.price}
              </p>

              <ul>
                {plan.details.map((details, idx) => (
                  <li className={"py-2 border-b border-slate-200"} key={idx}>
                    {details}
                  </li>
                ))}
              </ul>

              <button className="btn btn-outline m-3">Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
