const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeUpNoDelay = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easing,
    },
  },
};

export const fadeUp = (delay: number = 0, opposite: boolean = false) => ({
  hidden: {
    opacity: 0,
    y: !opposite ? 50 : -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: easing,
    },
  },
});

export const staggerContainer = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const slideRight = (delay: number) => ({
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: easing,
    },
  },
});
