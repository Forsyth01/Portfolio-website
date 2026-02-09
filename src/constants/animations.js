// Reusable animation variants for framer-motion

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const viewportOnce = { once: true };

export const staggerDelay = (index, baseDelay = 0.05) => ({
  delay: index * baseDelay,
});
