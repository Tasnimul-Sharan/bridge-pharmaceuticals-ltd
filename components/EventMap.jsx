// "use client";

// import dynamic from "next/dynamic";
// import "leaflet/dist/leaflet.css";
// import { useEffect, useState } from "react";

// const MapContainer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.MapContainer),
//   { ssr: false }
// );
// const TileLayer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.TileLayer),
//   { ssr: false }
// );
// const Marker = dynamic(
//   () => import("react-leaflet").then((mod) => mod.Marker),
//   { ssr: false }
// );
// const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
//   ssr: false,
// });

// export default function EventMap() {
//   const [customIcon, setCustomIcon] = useState(null);

//   const printersBuilding = [23.729465, 90.417043];

//   useEffect(() => {
//     const L = require("leaflet");

//     const svgIcon = `
//       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
//         viewBox="0 0 24 24">
//         <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z"
//           fill="#0284c7"/>
//         <circle cx="12" cy="9" r="3" fill="#0c4a6e"/>
//       </svg>
//     `;

//     setCustomIcon(
//       L.divIcon({
//         html: svgIcon,
//         iconSize: [40, 40],
//         iconAnchor: [20, 40],
//       })
//     );
//   }, []);

//   return (
//     <div className="w-full h-[480px]">
//       <MapContainer
//         center={printersBuilding}
//         zoom={15}
//         scrollWheelZoom={false}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//         {customIcon && (
//           <Marker position={printersBuilding} icon={customIcon}>
//             <Popup>
//               <strong>Printers Building</strong> <br />5 Rajuk Avenue,
//               Motijheel, Dhaka
//             </Popup>
//           </Marker>
//         )}
//       </MapContainer>
//     </div>
//   );
// }

"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

export default function EventMap() {
  const [customIcon, setCustomIcon] = useState(null);

  // 📍 Locations
  const office = [23.729465, 90.417043]; // Printers Building
  const factory = [23.7096997, 90.4909427]; // Bahir Tengra

  useEffect(() => {
    const L = require("leaflet");

    const svgIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
    <path
      fill="#dc2626" 
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
    />
    <circle cx="12" cy="9" r="3" fill="#7f1d1d"/>
  </svg>
`;

    setCustomIcon(
      L.divIcon({
        html: svgIcon,
        className: "bg-transparent", // ❌ no bg
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36],
      })
    );
  }, []);

  return (
    <div className="w-full h-[500px]">
      <MapContainer
        center={[23.72, 90.45]}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {customIcon && (
          <>
            {/* 🏢 Office */}
            <Marker
              position={office}
              icon={customIcon}
              eventHandlers={{
                mouseover: (e) => e.target.openPopup(),
                mouseout: (e) => e.target.closePopup(),
              }}
            >
              <Popup closeButton={false}>
                <strong>Corporate Office</strong>
                <br />
                Printers Building, 5 Rajuk Avenue,
                <br />
                Motijheel, Dhaka
              </Popup>
            </Marker>

            {/* 🏭 Factory */}
            <Marker
              position={factory}
              icon={customIcon}
              eventHandlers={{
                mouseover: (e) => e.target.openPopup(),
                mouseout: (e) => e.target.closePopup(),
              }}
            >
              <Popup closeButton={false}>
                <strong>Factory</strong>
                <br />
                Bahir Tengra, Sarulia,
                <br />
                Demra, Dhaka
              </Popup>
            </Marker>
          </>
        )}
      </MapContainer>
    </div>
  );
}
