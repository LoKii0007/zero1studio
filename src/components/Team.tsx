"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { teamMembers } from "@/lib/team";

export default function Team() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="border-t border-white/10 bg-background/80 px-6 py-5 backdrop-blur-md md:py-24"
    >
      <div className="mx-auto max-w-[90rem]">
        <div className="flex flex-col gap-5 md:gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p
            id="team-heading"
            className="shrink-0 border-l-2 border-accent pl-4 font-display text-[10px] font-bold uppercase tracking-widest text-white/40 md:text-xs"
          >
            Meet the Team
          </p>

          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:ml-auto lg:max-w-3xl">
            {teamMembers.map((member, index) => (
              <motion.a
                key={member.name}
                href={member.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="group flex items-center gap-4 rounded-sm border border-white/10 p-4 transition-all duration-300 hover:border-accent/40 hover:bg-white/5 focus-ring"
                data-hover="true"
                aria-label={`View ${member.name}'s portfolio`}
              >
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/20 transition-colors duration-300 group-hover:border-accent">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-display text-sm font-bold uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-accent md:text-base">
                    {member.name}
                  </h3>
                  <p className="truncate font-mono text-[10px] uppercase tracking-widest text-white/40">
                    {member.role}
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden="true"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
