const GA4_ID = import.meta.env.VITE_GA4_ID;
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

let initialized = false;

function appendScript(src, id) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

export function initializeAnalytics() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  if (GA4_ID) {
    appendScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`, "xrf-ga4");
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID, { send_page_view: true });
  }

  if (META_PIXEL_ID) {
    const fbq = function fbq() {
      fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
    };
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = window.fbq || fbq;
    appendScript("https://connect.facebook.net/en_US/fbevents.js", "xrf-meta-pixel");
    window.fbq("init", META_PIXEL_ID);
    window.fbq("track", "PageView");
  }
}

const META_STANDARD_EVENTS = {
  view_content: "ViewContent",
  add_to_cart: "AddToCart",
  begin_checkout: "InitiateCheckout",
  generate_lead: "Lead",
};

export function trackEvent(name, parameters = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...parameters });
  window.gtag?.("event", name, parameters);

  if (window.fbq) {
    const standardEvent = META_STANDARD_EVENTS[name];
    if (standardEvent) {
      window.fbq("track", standardEvent, parameters);
    } else {
      window.fbq("trackCustom", name, parameters);
    }
  }
}
