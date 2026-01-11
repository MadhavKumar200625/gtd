// lib/gtag.js
//export const GA_TRACKING_ID = 'G-13JNHDWS48'; // Replace with your GTag ID
export const GA_TRACKING_ID = 'G-WF2JQZTT4N'; // Replace with your GTag ID

// Pageview tracking
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

