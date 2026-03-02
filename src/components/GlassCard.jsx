import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`glass-card p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
