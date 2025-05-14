import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const Benefit = ({
  text,
  checked
}) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span
          className="grid size-4 place-content-center rounded-full bg-primary text-sm text-primary-foreground">
          <Check className="size-3" />
        </span>
      ) : (
        <span
          className="grid size-4 place-content-center rounded-full bg-zinc-800 text-sm text-zinc-400 ">
          <X className="size-3" />
        </span>
      )}
      <span className="text-sm text-zinc-300">{text}</span>
    </div>
  );
}

export const PricingCard = ({
  tier,
  prize,
  benefits,
  className,
  team, person
}) => {
  return (
    <motion.div
      initial={{ filter: "blur(2px)", display: "relative", marginTop: "30px" }}
      whileInView={{ filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}>
      {team && <div className="text-xl -mt-5 absolute top-0 left-1/2 -translate-x-1/2 z-10 text-white text-center border border-gray-300 rounded-full w-[80%] px-4 py-1">Team : {team}</div>}
      <Card
        className={cn(
          "relative h-full w-full overflow-hidden border",
          "border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80",
          "p-3 md:p-6 pt-8 md:pt-12",
          className
        )}>
        {(tier || prize) && <div
          className={`flex flex-col items-center ${benefits ? "border-b pb-3 md:pb-6 border-zinc-700" : ""}`}>
          {tier && <span className="mb-3 md:mb-6 inline-block text-zinc-50 ">
            {tier}
          </span>}
          {person && <span className="mb-3 md:mb-6  inline-block text-zinc-50 ">
            Person : {person}
          </span>}
          {prize && <span className="mb-1.5 md:mb-3 inline-block text-4xl font-medium text-zinc-50">
            {prize}
          </span>}
        </div>}
        {benefits && <div className="space-y-2 md:space-y-4 py-3 md:py-9">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>}
      </Card>
    </motion.div>
  );
}
