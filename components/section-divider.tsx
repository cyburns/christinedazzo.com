"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  title?: string;
}

export default function SectionDivider({ title }: Props) {
  return (
    <motion.div
      className="my-5 w-[40rem] rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      {title}
    </motion.div>
  );
}
