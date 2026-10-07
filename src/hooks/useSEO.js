/**
 * useSEO — per-page SEO hook
 * Dynamically sets <title>, <meta name="description">, canonical, OG + Twitter tags.
 * Call it at the top of each page component.
 *
 * @param {Object} options
 * @param {string} options.title         — Full page title (shown in browser tab & SERP)
 * @param {string} options.description   — Meta description (150-160 chars ideal)
 * @param {string} [options.canonical]   — Canonical URL (defaults to current URL)
 * @param {string} [options.ogImage]     — OG image URL (defaults to site default)
 * @param {string} [options.ogType]      — OG type (defaults to "website")
 */

const SITE_URL = "https://brandbros.vercel.app";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

function setMeta(name, content, attr = "name") {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO({ title, description, canonical, ogImage, ogType = "website" }) {
  // Run synchronously on every render (no useEffect needed — fast enough)
  if (typeof document === "undefined") return; // SSR guard

  // Title
  if (title) document.title = title;

  const canon = canonical || `${SITE_URL}${window.location.pathname}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  // Primary meta
  setMeta("description", description);

  // Canonical
  setLink("canonical", canon);

  // Open Graph
  setMeta("og:title", title, "property");
  setMeta("og:description", description, "property");
  setMeta("og:url", canon, "property");
  setMeta("og:image", image, "property");
  setMeta("og:type", ogType, "property");

  // Twitter
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
  setMeta("twitter:image", image);
}
