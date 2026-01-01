import Logo from "@/components/common/logo";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import {
  Building03Icon,
  CheckmarkCircle03Icon,
  UserGroupIcon,
  UserIcon,
} from "hugeicons-react";
import { ArrowRight, BadgeDollarSign, Check } from "lucide-react";
import { Img } from "react-image";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

// Pricing tiers data
const pricingTiers = [
  {
    name: "Free plan",
    icon: UserIcon,
    subtitle: "For individual creators.",
    price: "$0",
    period: "/month",
    cta: "Get started",
    ctaVariant: "default" as const,
    features: [
      "Free custom domain",
      "WYSIWYG editor with MDX support",
      "Advanced analytics",
      "AI assisted writing",
      "Image CDN and optimization",
      "Powerful docs dashboard",
    ],
    featuresTitle: "Free, forever:",
  },
  {
    name: "Startup",
    icon: UserGroupIcon,
    subtitle: "For small teams.",
    price: "$199",
    period: "/month",
    cta: "Get access",
    ctaVariant: "default" as const,
    popular: true,
    features: [
      "5 members included, $10 per extra seat",
      "AI search",
      "Publish from GitHub",
      "Realtime collaborative editing",
      "Inline review comments",
      "Unlimited versioning",
    ],
    featuresTitle: "Everything in free plan, plus:",
  },
  {
    name: "Enterprise",
    icon: Building03Icon,
    subtitle: "For large organizations.",
    price: "Custom",
    period: "",
    cta: "Contact founders",
    ctaVariant: "default" as const,
    features: [
      "Unlimited members",
      "Headless mode and subpath installation",
      "SSO, and Custom SLA",
      "Audit logs",
      "Content migration services",
      "Premium support over email and Slack",
    ],
    featuresTitle: "Everything in Startup plan, plus:",
  },
];

// Comparison features data
const comparisonFeatures = [
  {
    category: "Workspace",
    features: [
      {
        name: "Seats",
        free: "Single seat",
        startup: "5 seats, $10 per extra seat",
        enterprise: "Unlimited",
      },
      {
        name: "Guides and API ref.",
        free: "One guide and one API ref",
        startup: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Custom pages",
        free: "1",
        startup: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Permissions and roles",
        free: false,
        startup: false,
        enterprise: true,
        badge: "Upcoming",
      },
      {
        name: "SSO",
        free: false,
        startup: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Customization & branding",
    features: [
      {
        name: "Custom Domain",
        free: "Codexa subdomain",
        startup: true,
        enterprise: true,
      },
      {
        name: "Codexa branding",
        free: "Branding on footer",
        startup: "No Codexa branding",
        enterprise: "No Codexa branding",
      },
      {
        name: "Headless mode and /subpath installation",
        free: false,
        startup: false,
        enterprise: true,
      },
    ],
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen font-inter bg-white">
      <section className="pt-16 pb-12 sm:px-6 lg:px-8 border-b border-border bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-300 gap-20 px-4 mx-auto flex items-end">
          <div className="flex flex-5">
            <div className="max-w-3xl mx-auto mb-8">
              <div className="flex items-center gap-1 mb-4">
                <BadgeDollarSign className="size-4 text-slate-600" />
                <span className="text-sm text-slate-600">Pricing</span>
              </div>
              <h1 className="text-5xl max-w-md font-bold text-slate-900 mb-8">
                Find the plan that suits your needs.
              </h1>
              <div className="flex items-center mb-8">
                <div className="p-1 rounded-full border border-border shadow-sm bg-white">
                  <div
                    className={cn(
                      buttonVariants({
                        variant: "secondary",
                      }),
                      "bg-slate-900 cursor-text text-white rounded-full px-6 py-1 h-9 font-medium"
                    )}
                  >
                    Blogs by Codexa
                  </div>
                </div>
              </div>
              <p className="text-lg font-medium text-slate-600">
                Choose the perfect plan to build your{" "}
                <span className="font-semibold text-slate-800">
                  Blogs on Codexa
                </span>
                . <br />
                Start today, no credit card required.
              </p>
            </div>
          </div>
          <div className="flex-6">
            <Img
              src="/pricing.webp"
              width={1200}
              height={720}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingTiers.map((tier, idx) => {
              const Icon = tier.icon;
              return (
                <div
                  key={idx}
                  className={`relative rounded-3xl border-2 p-2 transition-all duration-300 hover:shadow-xl
                  ${tier.popular && "border-primary/50 shadow-md"}
                  `}
                >
                  <div className="relative bg-zinc-100/50 p-6 rounded-2xl mb-6">
                    {tier.popular && (
                      <Badge className="absolute top-2 right-2 bg-primary/10 border border-primary/30 text-primary">
                        Most popular
                      </Badge>
                    )}
                    <div className="mb-6">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                          tier.popular ? "bg-purple-100" : "bg-white"
                        }`}
                      >
                        <Icon
                          className={
                            tier.popular ? "text-purple-600" : "text-slate-600"
                          }
                          size={24}
                        />
                      </div>
                      <h3
                        className={`text-2xl font-bold mb-2 ${"text-slate-900"}`}
                      >
                        {tier.name}
                      </h3>
                      <p className={`text-sm ${"text-slate-600"}`}>
                        {tier.subtitle}
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span
                          className={`text-5xl font-bold ${"text-slate-900"}`}
                        >
                          {tier.price}
                        </span>
                        {tier.period && (
                          <span className={`text-lg ${"text-slate-600"}`}>
                            {tier.period}
                          </span>
                        )}
                      </div>
                    </div>

                    <Button
                      className={`w-full rounded-xl py-6 font-medium text-base group ${
                        tier.popular
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      {tier.cta}
                      <ArrowRight
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        size={18}
                      />
                    </Button>
                  </div>

                  <div className="px-4 mb-6">
                    <h4
                      className={`text-sm font-semibold mb-4 ${"text-slate-700"}`}
                    >
                      {tier.featuresTitle}
                    </h4>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-3">
                          <CheckmarkCircle03Icon
                            className={`flex-shrink-0 mt-0.5 ${"text-green-600"}`}
                            size={18}
                          />
                          <span className={`text-sm ${"text-slate-700"}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Compare plans
            </h2>
            <p className="text-lg text-slate-600">
              See what's included in each plan and find the right fit for you.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-200 rounded-xl">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">
                  </th>
                  <th className="text-center py-6 px-6">
                    <div className="font-bold text-slate-900 text-lg mb-1">Free</div>
                    <div className="text-sm text-slate-600">For individuals</div>
                  </th>
                  <th className="text-center py-6 px-6 bg-blue-50">
                    <div className="font-bold text-slate-900 text-lg mb-1">Startup</div>
                    <div className="text-sm text-slate-600">$199/month</div>
                  </th>
                  <th className="text-center py-6 px-6">
                    <div className="font-bold text-slate-900 text-lg mb-1">Enterprise</div>
                    <div className="text-sm text-slate-600">Custom pricing</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, categoryIdx) => (
                  <>
                    <tr key={`category-${categoryIdx}`}>
                      <td
                        colSpan={4}
                        className="py-3 px-6 font-medium text-slate-700 bg-slate-50/50 text-xs"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIdx) => (
                      <tr
                        key={`feature-${categoryIdx}-${featureIdx}`}
                        className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                      >
                        <td className="py-4 px-6 text-slate-700">
                          <div className="flex items-center gap-2">
                            {feature.name}
                            {/* {feature.badge && (
                              <Badge className="bg-purple-100 text-purple-700 border-purple-200 text-xs">
                                {feature.badge}
                              </Badge>
                            )} */}
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          {typeof feature.free === "boolean" ? (
                            feature.free ? (
                              <Check
                                className="inline-block text-blue-600"
                                size={20}
                              />
                            ) : (
                              <span className="inline-block text-slate-400 font-bold">-</span>
                            )
                          ) : (
                            <span className="text-sm text-slate-700">
                              {feature.free}
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center bg-blue-50">
                          {typeof feature.startup === "boolean" ? (
                            feature.startup ? (
                              <Check
                                className="inline-block text-blue-600"
                                size={20}
                              />
                            ) : (
                              <span className="inline-block text-slate-400 font-bold">-</span>
                            )
                          ) : (
                            <span className="text-sm text-slate-700">
                              {feature.startup}
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {typeof feature.enterprise === "boolean" ? (
                            feature.enterprise ? (
                              <Check
                                className="inline-block text-blue-600"
                                size={20}
                              />
                            ) : (
                              <span className="inline-block text-slate-400 font-bold">-</span>
                            )
                          ) : (
                            <span className="text-sm text-slate-700">
                              {feature.enterprise}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Logo />
              </div>
              <p className="text-sm text-slate-600 mb-6 max-w-xs">
                Hassle-free blogging platform that developers and teams love.
              </p>

              <div className="flex items-center gap-4 mb-4">
                <a
                  href="#"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>

              <div className="">
                <div className="flex items-center gap-2 w-fit border border-green-600 px-3 py-1 rounded-md">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-green-600">
                    All services are online
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Blogs by Codexa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    AI Markdown Editor
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    About Codexa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Logos and media
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Feature Requests
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Support docs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Join discord
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Blogs</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Official Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Engineering Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Codexa Townhall
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="mb-8" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600">
              © Codexa {new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
