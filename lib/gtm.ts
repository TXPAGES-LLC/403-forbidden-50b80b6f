/**
 * GTM dataLayer utility.
 * All conversion events flow through this function so event names and
 * parameters are defined in one place.
 */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function pushEvent(
  event: string,
  params: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

// ── Typed helpers for each conversion event ──────────────────────────────────

/** User clicks any tel: link. */
export function trackCallClick(location: string) {
  pushEvent("click_to_call", {
    call_location: location,     // e.g. "nav", "contact_hero", "where_to_buy", "footer", "city_page"
    phone_number: "+12549393957",
  });
}

/** User clicks a primary "Find a Store" / "Where to Buy" CTA. */
export function trackFindStoreCta(location: string) {
  pushEvent("find_store_cta_click", {
    cta_location: location,      // e.g. "nav", "homepage_hero", "product_gold", "city_page_bottom"
  });
}

/** User clicks an external "Get Directions" link to Google Maps. */
export function trackGetDirections(storeName: string, city: string) {
  pushEvent("get_directions_click", {
    store_name: storeName,
    store_city: city,
  });
}

/** User clicks the Bell County delivery call CTA on where-to-buy. */
export function trackDeliveryCallClick(location: string) {
  pushEvent("delivery_call_click", {
    call_location: location,
  });
}
