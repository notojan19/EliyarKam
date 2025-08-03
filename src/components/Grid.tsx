"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Code, FileText, Layers, Palette, Zap } from "lucide-react";

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
}

const BentoGridItem = ({
  title,
  description,
  icon,
  className,
  size = "small",
}: BentoGridItemProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 25 },
    },
  };

  return (
    <motion.div
      variants={variants}
      className={cn(
        "group border-primary/10 bg-background hover:border-primary/30 relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border px-6 pt-6 pb-10 shadow-md transition-all duration-500",
        className
      )}
    >
      <div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]"></div>

      <div className="text-primary/5 group-hover:text-primary/10 absolute right-1 bottom-3 scale-[6] transition-all duration-700 group-hover:scale-[6.2]">
        {icon}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="bg-primary/10 text-primary shadow-primary/10 group-hover:bg-primary/20 group-hover:shadow-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all duration-500">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        <div className="text-primary mt-4 flex items-center text-sm">
          <span className="mr-1">Learn more</span>
          <ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
        </div>
      </div>
      <div className="from-primary to-primary/30 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </motion.div>
  );
};

const items = [
  {
    title: "Full North America Coverage",
    description:
      "No matter where your LTL freight is destined, X&Y Logistics has you covered. Our North America LTL services offer full coverage of the U.S., Canada and Mexico with unbeatable shipping rates. Coast to coast or across the borders, freight shipping with X&Y Logistics is easy. X&Y Logistics Group provides container drayage, dedicated truckload, LTL, truck brokerage, managed transportation, last mile and freight forwarding in U.S.A. The company also manages multimodal solutions, such as road-rail and road-short sea combinations. We can help you import from Japan and deliver to any location in U.S.A. No matter what your need is, we can help.",
    icon: <Code className="size-6" />,
    size: "large" as const,
  },
  {
    title: "Interesting Quizzes",
    description:
      "X&Y Logistics Group freestanding distribution platforms create high-speed cross docking and transloading capabilities on any property. These modular structures allow forklifts to quickly service incoming shipping containers and transfer loads across the facility into outbound trailers. They can be covered in a partial canopy or full enclosure, giving you a complete, cost-effective warehouse in a fraction of the time it takes for new construction.",
    icon: <Layers className="size-6" />,
    size: "small" as const,
  },
  {
    title: "International Solutions",
    description:
      "X&Y Logistics Group is a leading provider of international freight forwarding services, including multi-mode air, ocean, ground, and rail.",
    icon: <Layers className="size-6" />,
    size: "medium" as const,
  },
  {
    title:
      "Purchase of equipment and furnishings for facility about 3 to 5 months prior to launch date",
    description:
      "After completing the above tasks, the final decision is what type of arcade games and other types of amusement equipment to purchase for your facility, which will be determined usually by the size and type of facility you are opening. This can range from video arcade games, redemption arcade games, motion simulators and large attraction rides and machines, to token machines or newer swipe card systems that eliminate the hassle and security issues with token use, while providing real-time data on the profitability of your games, and the ability to re-program game prices remotely, so you can offer special game prices for happy hour or set all games on free-play for parties or other types of game promotions, which is time consuming for token-operated games.",
    icon: <Palette className="size-6" />,
    size: "medium" as const,
  },
  {
    title:
      "Guidelines For Starting / Planning Family Entertainment Centers and Commercial Arcades",
    description: "Optimized for speed and efficiency across all devices.",
    icon: <Zap className="size-6" />,
    size: "small" as const,
  },
];

export default function BentoGrid1() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            size={item.size}
            className={cn(
              item.size === "large"
                ? "col-span-4"
                : item.size === "medium"
                ? "col-span-3"
                : "col-span-2",
              "h-full"
            )}
          />
        ))}
      </motion.div>
    </div>
  );
}
