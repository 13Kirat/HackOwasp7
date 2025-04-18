import { PricingCard } from "@/components/ui/dark-gradient-pricing"
import { faL } from "@fortawesome/free-solid-svg-icons"

function PricingDemo() {
  return (
    <section className="relative overflow-hidden bg-transparent text-foreground">
      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-20 pt-10 md:px-8">
        <div className="mb-12 ">
          <h2 className="text-center text-3xl text-zinc-50 font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Prizes
          </h2>
          {/* <p className="text-center text-base text-muted-foreground md:text-lg">
            Use it for free for yourself, upgrade when your team needs advanced
            control.
          </p> */}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PricingCard
            tier="1st Prize"
            prize="15,000rs"
            bestFor="Best for 1-5 users"
            CTA="Get started free"
            benefits={[
              { text: "TIM HORTONS Coupons 20% OFF", checked: true },
              { text: "TIM HORTONS Magnets", checked: true },
              { text: ".xyz Domain", checked: true },
              { text: "Goodies", checked: false },
              { text: "Industry Mentors Support", checked: false },
              { text: "Rust Workshop", checked: false },
              { text: "3x Ledger Nano", checked: false },
            ]}
          />
          <PricingCard
            tier="2nd Prize"
            prize="10,000rs"
            bestFor="Best for 5-50 users"
            CTA="14-day free trial"
            benefits={[
              { text: "TIM HORTONS Coupons 20% OFF", checked: true },
              { text: "TIM HORTONS Magnets", checked: true },
              { text: ".xyz Domain", checked: true },
              { text: "Goodies", checked: false },
              { text: "Industry Mentors Support", checked: false },
              { text: "Rust Workshop", checked: false },
              { text: "3x Ledger Nano", checked: false},
            ]}
          />
          <PricingCard
            tier="3rd Prize"
            prize="5,000rs"
            bestFor="Best for 50+ users"
            CTA="Contact us"
            benefits={[
              { text: "TIM HORTONS Coupons 20% OFF", checked: true },
              { text: "TIM HORTONS Magnets", checked: true },
              { text: ".xyz Domain", checked: true },
              { text: "Goodies", checked: false },
              { text: "Industry Mentors Support", checked: false },
              { text: "Rust Workshop", checked: false },
              { text: "3x Ledger Nano", checked: false},
            ]}
          />
        </div>
        <div className="grid grid-cols-1 mt-10 gap-6 md:grid-cols-3">
          <PricingCard
            tier="Best First Year"
            prize="2,000rs"
            bestFor="Best for 1-5 users"
            CTA="Get started free"
            benefits={[
              { text: "TIM HORTONS Coupons 20% OFF", checked: true },
              { text: "TIM HORTONS Magnets", checked: true },
              { text: ".xyz Domain", checked: true },
              { text: "Goodies", checked: false },
              { text: "Industry Mentors Support", checked: false },
              { text: "Rust Workshop", checked: false },
              { text: "3x Ledger Nano", checked: false },
            ]}
          />
          <PricingCard
            tier="Hardware"
            prize="2,000rs"
            bestFor="Best for 5-50 users"
            CTA="14-day free trial"
            benefits={[
              { text: "TIM HORTONS Coupons 20% OFF", checked: true },
              { text: "TIM HORTONS Magnets", checked: true },
              { text: ".xyz Domain", checked: true },
              { text: "Goodies", checked: false },
              { text: "Industry Mentors Support", checked: false },
              { text: "Rust Workshop", checked: false },
              { text: "3x Ledger Nano", checked: false},
            ]}
          />
          <PricingCard
            tier="Web3 Overall"
            prize="85,000rs"
            bestFor="Best for 50+ users"
            CTA="Contact us"
            benefits={[
              { text: "TIM HORTONS Coupons 20% OFF", checked: false },
              { text: "TIM HORTONS Magnets", checked: false },
              { text: ".xyz Domain", checked: false },
              { text: "Goodies", checked: true },
              { text: "Industry Mentors Support", checked: true },
              { text: "Rust Workshop", checked: true },
              { text: "3x Ledger Nano", checked: true },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export { PricingDemo }