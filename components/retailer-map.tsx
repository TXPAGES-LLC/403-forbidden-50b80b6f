"use client";

import { useEffect, useRef } from "react";

const retailers = [
  { name: "Belton Feed and Supply",          address: "410 E 2nd Ave, Belton, TX 76513",             phone: "(254) 939-3636", lat: 31.0563, lng: -97.4602 },
  { name: "Keith Ace Hardware",              address: "525 N Main St, Belton, TX 76513",              phone: "(254) 613-4235", lat: 31.0611, lng: -97.4655 },
  { name: "Expo Quik Stop",                  address: "308 W Loop 121, Belton, TX 76513",             phone: "(254) 933-3976", lat: 31.0527, lng: -97.4748 },
  { name: "Keith Ace Hardware",              address: "213 Mill Creek Dr, Salado, TX 76571",          phone: "(254) 947-4008", lat: 30.9471, lng: -97.5402 },
  { name: "Keith Ace Hardware",              address: "402 Church Ave., Troy, TX 76579",              phone: "(254) 566-9355", lat: 31.2038, lng: -97.3002 },
  { name: "Central Texas Feed and Supply",   address: "5303 S Fort Hood St, Killeen, TX 76542",      phone: "(254) 628-1002", lat: 31.0679, lng: -97.7290 },
  { name: "Murdoch's Ranch and Home Supply", address: "701 E Central TX Expressway, Killeen, TX 76541", phone: "(254) 312-4300", lat: 31.1171, lng: -97.7176 },
  { name: "D and D Feed Store",              address: "2744 FM 3046, Copperas Cove, TX 76522",        phone: "(254) 547-4812", lat: 31.1218, lng: -97.8796 },
  { name: "Florence Grain Co.",              address: "600 E Main St., Florence, TX 76527",           phone: "(254) 793-2595", lat: 30.8377, lng: -97.7936 },
  { name: "Niemeier Feed and Grain",         address: "103 S. Main St., McGregor, TX 76657",         phone: "(254) 840-4106", lat: 31.4368, lng: -97.3964 },
  { name: "Murdoch's Ranch and Home Supply", address: "4001 Sunset Dr. Ste 4200, San Angelo, TX 76904", phone: "",           lat: 31.4359, lng: -100.4545 },
  { name: "Murdoch's Ranch and Home Supply", address: "2500 S Bypass 35, Alvin, TX 77511",            phone: "",           lat: 29.3733, lng: -95.2571 },
  { name: "Murdoch's Ranch and Home Supply", address: "516 IH 10 E, Seguin, TX 78155",                phone: "",           lat: 29.5735, lng: -97.9608 },
  { name: "Murdoch's Ranch and Home Supply", address: "4200 IH 35 South, San Marcos, TX 78666",       phone: "",           lat: 29.8627, lng: -97.9407 },
  { name: "Murdoch's Ranch and Home Supply", address: "17975 IH 35 N Ste B200, Schertz, TX 78154",   phone: "",           lat: 29.5530, lng: -98.2703 },
  { name: "Murdoch's Ranch and Home Supply", address: "7508 N Navarro St., Victoria, TX 77904",       phone: "",           lat: 28.8602, lng: -97.0036 },
  { name: "Murdoch's Ranch and Home Supply", address: "1502 Harvey Rd. Suite 200, College Station, TX 77840", phone: "",  lat: 30.6280, lng: -96.3344 },
  { name: "Murdoch's Ranch and Home Supply", address: "311 S Bryan Rd. Suite 200A, Mission, TX 78572", phone: "",         lat: 26.2034, lng: -98.3254 },
];

export default function RetailerMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (mapInstanceRef.current || !mapRef.current) return;

    // Dynamically load Leaflet CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
    link.crossOrigin = "";
    document.head.appendChild(link);

    // Dynamically load Leaflet JS
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV/XN/WPeE=";
    script.crossOrigin = "";
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const L = (window as any).L;
      if (!mapRef.current || mapInstanceRef.current) return;

      // Centre on Central Texas
      const map = L.map(mapRef.current, { scrollWheelZoom: false }).setView([31.05, -97.8], 7);
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);

      // Custom burnt-orange marker SVG
      const pinSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="38" viewBox="0 0 28 38">
        <path d="M14 0C6.27 0 0 6.27 0 14c0 9.63 12.6 22.67 13.13 23.22a1.25 1.25 0 0 0 1.74 0C15.4 36.67 28 23.63 28 14 28 6.27 21.73 0 14 0z" fill="#c85a00"/>
        <circle cx="14" cy="14" r="6" fill="#ffffff"/>
      </svg>`;
      const pinUrl = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(pinSvg);
      const icon = L.icon({ iconUrl: pinUrl, iconSize: [28, 38], iconAnchor: [14, 38], popupAnchor: [0, -40] });

      retailers.forEach((r) => {
        const phoneHtml = r.phone
          ? `<a href="tel:${r.phone.replace(/[^0-9+]/g, "")}" style="color:#c85a00;font-size:12px;">${r.phone}</a>`
          : "";
        const popup = `
          <div style="font-family:sans-serif;min-width:180px;">
            <p style="font-weight:700;font-size:13px;margin:0 0 4px;">${r.name}</p>
            <p style="font-size:12px;color:#555;margin:0 0 4px;">${r.address}</p>
            ${phoneHtml}
            <p style="font-size:11px;color:#888;margin:4px 0 0;border-top:1px solid #eee;padding-top:4px;">Gold &amp; Blue Formula</p>
          </div>`;
        L.marker([r.lat, r.lng], { icon }).addTo(map).bindPopup(popup);
      });
    };
    document.head.appendChild(script);

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const m = mapInstanceRef.current as any;
      if (m) { m.remove(); mapInstanceRef.current = null; }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full rounded-lg overflow-hidden border border-[#2e2820]"
      style={{ height: "480px" }}
      aria-label="Interactive map showing all 18 Outlaw Feed retail locations across Texas"
      role="application"
    />
  );
}
