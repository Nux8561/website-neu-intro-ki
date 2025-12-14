/**
 * Attio Keyframes
 * Basierend auf Analyse der HTML-Datei
 * 
 * Gefundene Keyframes:
 * - fadeIn / fadeOut
 * - slideFromBottom / slideToBottom
 * - slideFromTop / slideToTop
 * - slideFromLeft / slideToLeft
 * - slideFromRight / slideToRight
 */

export const attioKeyframes = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  fadeOut: {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
  slideFromBottom: {
    from: { transform: "translate3d(0, 100%, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
  },
  slideToBottom: {
    from: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    to: { transform: "translate3d(0, 100%, 0)", opacity: 0 },
  },
  slideFromTop: {
    from: { transform: "translate3d(0, -100%, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
  },
  slideToTop: {
    from: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    to: { transform: "translate3d(0, -100%, 0)", opacity: 0 },
  },
  slideFromLeft: {
    from: { transform: "translate3d(-100%, 0, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
  },
  slideToLeft: {
    from: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    to: { transform: "translate3d(-100%, 0, 0)", opacity: 0 },
  },
  slideFromRight: {
    from: { transform: "translate3d(100%, 0, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
  },
  slideToRight: {
    from: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    to: { transform: "translate3d(100%, 0, 0)", opacity: 0 },
  },
}

