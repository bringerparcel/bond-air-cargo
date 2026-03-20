export interface FleetHighlight {
  label: string;
  value: string;
}

export interface SpecCard {
  label: string;
  value: string;
  unit: string;
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface FleetAircraft {
  slug: string;
  name: string;
  type: string;
  image: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  role: string;
  highlights: FleetHighlight[];
  specCards: SpecCard[];
  specTable: SpecRow[];
  useCases: string[];
  ctaHeading: string;
  ctaText: string;
  prevSlug: string | null;
  prevName: string | null;
  nextSlug: string | null;
  nextName: string | null;
}

export const fleetData: FleetAircraft[] = [
  {
    slug: "seneca-ii",
    name: "Piper PA-34-200T Seneca\u00a0II",
    type: "Light Twin",
    image: "/images/fleet-seneca-ii.jpg",
    title: "Piper PA-34-200T Seneca\u00a0II",
    metaTitle: "Piper PA-34-200T Seneca II | Bond Air Cargo Fleet",
    metaDescription:
      "Piper Seneca II specifications \u2014 light twin for urgent small cargo, medical samples, organs, documents, jewelry, and high-value items. 600 lb payload, 810 NM range.",
    role: "Light Twin \u2014 Urgent small cargo, medical samples, organs, documents, jewelry, and high-value items",
    highlights: [
      { label: "Payload", value: "600 lb" },
      { label: "Range", value: "810 NM" },
      { label: "Speed", value: "177 kts" },
      { label: "Role", value: "Urgent Small" },
    ],
    specCards: [
      { label: "Max Payload", value: "600", unit: "pounds (cargo, short-range mission)" },
      { label: "Range (No Refuel)", value: "810", unit: "nautical miles (932 statute miles)" },
      { label: "Cruise Speed", value: "177", unit: "knots (204 mph)" },
      { label: "Max Flight Time", value: "4.5", unit: "hours (at 75% power)" },
    ],
    specTable: [
      { label: "Engines", value: "2 x Continental TSIO-360-E, 200 HP each" },
      { label: "Max Gross Weight", value: "4,570 lb (2,073 kg)" },
      { label: "Useful Load", value: "1,400 lb (635 kg)" },
      { label: "Cargo Payload", value: "~600 lb (reduced fuel for short missions)" },
      { label: "Range", value: "810 NM / 932 mi (at 75% power, full fuel)" },
      { label: "Cruise Speed", value: "177 KTAS / 204 mph" },
      { label: "Service Ceiling", value: "25,000 ft" },
      { label: "Fuel Capacity", value: "128 US gallons" },
      { label: "Cabin Width", value: '49 in (1.24 m)' },
      { label: "Cabin Height", value: '42 in (1.07 m)' },
      { label: "Cabin Length", value: '100 in (2.54 m) \u2014 seats removed for cargo' },
      { label: "Cargo Door (Cabin)", value: '42" x 33" (passenger door, used for loading)' },
      { label: "Rear Baggage Door", value: '24" x 19"' },
      { label: "Cargo Volume", value: "~60 cu ft (cabin + rear baggage)" },
      { label: "Aircraft Length", value: "28 ft 7 in (8.72 m)" },
      { label: "Wingspan", value: "38 ft 11 in (11.86 m)" },
      { label: "Height", value: "9 ft 11 in (3.02 m)" },
    ],
    useCases: [
      "Organ Transport",
      "Medical Samples",
      "Documents & Legal Files",
      "Jewelry & Gems",
      "Cash & Valuables",
      "Emergency Parts (small)",
      "Pharmaceutical Samples",
      "Film & Media Rush",
    ],
    ctaHeading: "Need a Seneca II for an Urgent Shipment?",
    ctaText: "Tell us the origin, destination, and cargo details. We\u2019ll have a quote to you within minutes.",
    prevSlug: null,
    prevName: null,
    nextSlug: "737-400f",
    nextName: "Boeing 737-400F",
  },
  {
    slug: "737-400f",
    name: "Boeing 737-400F",
    type: "Narrowbody Freighter",
    image: "/images/fleet-737-400f.jpg",
    title: "Boeing 737-400F Freighter",
    metaTitle: "Boeing 737-400F Freighter | Bond Air Cargo Fleet",
    metaDescription:
      "Boeing 737-400SF freighter specifications \u2014 44,000 lb payload, 11 pallets, 2,080 NM range. Ideal for mid-weight charter cargo and gateway-to-gateway freight.",
    role: "Narrowbody Freighter \u2014 Mid-weight charter cargo, gateway-to-gateway linehaul, pharma shipments",
    highlights: [
      { label: "Payload", value: "44,000 lb" },
      { label: "Range", value: "2,080 NM" },
      { label: "Pallets", value: "11" },
      { label: "Door", value: '86" x 140"' },
    ],
    specCards: [
      { label: "Max Payload", value: "44,000", unit: "pounds (20,000 kg)" },
      { label: "Range (No Refuel)", value: "2,080", unit: "nautical miles (2,394 statute miles)" },
      { label: "Pallet Positions", value: "11", unit: "main deck (10 AAA + 1 AEP)" },
      { label: "Max Flight Time", value: "4.5", unit: "hours (at max payload)" },
      { label: "Cargo Door", value: '86" x 140"', unit: "main deck, left side, hydraulic" },
      { label: "Cargo Volume", value: "5,440", unit: "cu ft (154 m\u00B3)" },
    ],
    specTable: [
      { label: "Aircraft Type", value: "Boeing 737-400SF (Special Freighter conversion)" },
      { label: "Engines", value: "2 x CFM56-3C1, 23,500 lb thrust each" },
      { label: "MTOW", value: "150,000 lb (68,039 kg)" },
      { label: "Max Payload", value: "44,000 lb (20,000 kg)" },
      { label: "Range at Max Payload", value: "2,080 NM / 2,394 mi (3,850 km)" },
      { label: "Cruise Speed", value: "Mach 0.745 / ~450 KTAS" },
      { label: "Service Ceiling", value: "37,000 ft" },
      { label: "Main Deck Cargo Door", value: '86" H x 140" W (2.18 m x 3.56 m) \u2014 left side, hydraulic operation' },
      { label: "Main Deck Pallet Positions", value: '10 x AAA (88" x 125") full height + 1 x AEP/AEH' },
      { label: "Max Pallet Weight", value: "8,000 lb per position" },
      { label: "Pallet Size (Standard)", value: '88" x 125" (AAA / P6 container)' },
      { label: "Cargo Volume (Main Deck)", value: "5,440 cu ft (154 m\u00B3)" },
      { label: "Main Deck Floor Load", value: "250 lb/sq ft" },
      { label: "Aircraft Length", value: "119 ft 7 in (36.45 m)" },
      { label: "Wingspan", value: "94 ft 9 in (28.88 m)" },
      { label: "Height", value: "36 ft 6 in (11.13 m)" },
    ],
    useCases: [
      "Gateway to Gateway Linehaul",
      "Pharmaceutical Freight",
      "E-Commerce Fulfillment",
      "Automotive Parts (AOG)",
      "Same-Day Charter (Large)",
      "General Cargo",
      "Perishables",
    ],
    ctaHeading: "Need a 737-400F for Your Cargo?",
    ctaText: "44,000 lbs of capacity, ready to fly. Get a quote now.",
    prevSlug: "seneca-ii",
    prevName: "Piper Seneca II",
    nextSlug: "737-800f",
    nextName: "Boeing 737-800F",
  },
  {
    slug: "737-800f",
    name: "Boeing 737-800F",
    type: "Narrowbody Freighter",
    image: "/images/fleet-737-800f.jpg",
    title: "Boeing 737-800F Freighter",
    metaTitle: "Boeing 737-800F Freighter | Bond Air Cargo Fleet",
    metaDescription:
      "Boeing 737-800BCF freighter specifications \u2014 52,800 lb payload, 12 pallets, 1,995 NM range. Next-gen narrowbody freighter for high-capacity charter operations.",
    role: "Narrowbody Freighter \u2014 High-capacity charter, palletized freight, same-day large shipments",
    highlights: [
      { label: "Payload", value: "52,800 lb" },
      { label: "Range", value: "1,995 NM" },
      { label: "Pallets", value: "12" },
      { label: "Door", value: '86" x 137"' },
    ],
    specCards: [
      { label: "Max Payload", value: "52,800", unit: "pounds (23,950 kg)" },
      { label: "Range (No Refuel)", value: "1,995", unit: "nautical miles (2,296 statute miles)" },
      { label: "Pallet Positions", value: "12", unit: "main deck (11 standard + 1 contoured)" },
      { label: "Max Flight Time", value: "4.4", unit: "hours (at max payload)" },
      { label: "Cargo Door", value: '86" x 137"', unit: "main deck, left side" },
      { label: "Total Cargo Volume", value: "6,540", unit: "cu ft (185 m\u00B3) main + lower deck" },
    ],
    specTable: [
      { label: "Aircraft Type", value: "Boeing 737-800BCF (Boeing Converted Freighter)" },
      { label: "Engines", value: "2 x CFM56-7BE, 27,300 lb thrust each" },
      { label: "MTOW", value: "174,200 lb (79,000 kg)" },
      { label: "Max Landing Weight", value: "146,300 lb (66,350 kg)" },
      { label: "Max Payload", value: "52,800 lb (23,950 kg)" },
      { label: "Range at Max Payload", value: "1,995 NM / 2,296 mi (3,700 km)" },
      { label: "Cruise Speed", value: "Mach 0.785 / ~453 KTAS" },
      { label: "Service Ceiling", value: "41,000 ft" },
      { label: "Main Deck Cargo Door", value: '86" H x 137" W (2.18 m x 3.48 m) \u2014 left side' },
      { label: "Main Deck Pallet Positions", value: '11 x standard (88" x 125") + 1 x contoured (88" x 62")' },
      { label: "Pallet Size (Standard)", value: '88" x 125" (AAA / P6 container)' },
      { label: "Main Deck Volume", value: "4,999 cu ft (141.5 m\u00B3)" },
      { label: "Lower Deck Volume (Bulk)", value: "1,543 cu ft (43.7 m\u00B3)" },
      { label: "Total Cargo Volume", value: "6,542 cu ft (185.2 m\u00B3)" },
      { label: "Aircraft Length", value: "129 ft 6 in (39.5 m)" },
      { label: "Wingspan", value: "117 ft 5 in (35.8 m)" },
      { label: "Height", value: "41 ft 2 in (12.6 m)" },
    ],
    useCases: [
      "High-Volume Same-Day Charter",
      "Gateway to Gateway",
      "Pharmaceutical Bulk",
      "E-Commerce Peak Surge",
      "Automotive & Industrial Parts",
      "Humanitarian / Relief",
      "High-Value Palletized Freight",
    ],
    ctaHeading: "Need a 737-800F for Your Shipment?",
    ctaText: "52,800 lbs of payload across 12 pallet positions. Tell us what you need moved.",
    prevSlug: "737-400f",
    prevName: "Boeing 737-400F",
    nextSlug: "a321f",
    nextName: "Airbus A321F",
  },
  {
    slug: "a321f",
    name: "Airbus A321F",
    type: "Narrowbody Freighter",
    image: "/images/fleet-a321f.jpg",
    title: "Airbus A321F Freighter",
    metaTitle: "Airbus A321F Freighter | Bond Air Cargo Fleet",
    metaDescription:
      "Airbus A321F freighter specifications \u2014 62,000 lb payload, 14+10 pallet positions, 2,300 NM range. Our largest capacity narrowbody freighter.",
    role: "Narrowbody Freighter \u2014 Maximum capacity, long-range charter, full pallet operations",
    highlights: [
      { label: "Payload", value: "62,000 lb" },
      { label: "Range", value: "2,300 NM" },
      { label: "Pallets", value: "14 + 10" },
      { label: "Door", value: '83" x 143"' },
    ],
    specCards: [
      { label: "Max Payload", value: "62,000", unit: "pounds (28,000 kg)" },
      { label: "Range (No Refuel)", value: "2,300", unit: "nautical miles (2,647 statute miles)" },
      { label: "Main Deck Pallets", value: "14", unit: 'full container positions (88" x 125")' },
      { label: "Lower Deck Positions", value: "10", unit: "LD3-45 containers" },
      { label: "Cargo Door", value: '83" x 143"', unit: "main deck, left side" },
      { label: "Total Cargo Volume", value: "7,345", unit: "cu ft (208 m\u00B3)" },
    ],
    specTable: [
      { label: "Aircraft Type", value: "Airbus A321P2F / A321F (Passenger-to-Freighter conversion)" },
      { label: "Engines", value: "2 x CFM56-5B or IAE V2500, ~33,000 lb thrust each" },
      { label: "MTOW", value: "196,200 lb (89,000 kg)" },
      { label: "Max Payload", value: "62,000 lb (28,000 kg)" },
      { label: "Range at Max Payload", value: "2,050 NM / 2,359 mi (3,796 km)" },
      { label: "Range (Reduced Payload)", value: "2,300 NM / 2,647 mi (4,260 km)" },
      { label: "Cruise Speed", value: "Mach 0.78 / ~450 KTAS" },
      { label: "Max Flight Time", value: "~5 hours" },
      { label: "Service Ceiling", value: "39,800 ft" },
      { label: "Main Deck Cargo Door", value: '83" H x 143" W (2.13 m x 3.65 m) \u2014 left side' },
      { label: "Main Deck Positions", value: '14 x AAA (88" x 125" x 82")' },
      { label: "Lower Deck Positions", value: '10 x LD3-45 (60.4" x 61.5" x 45")' },
      { label: "Pallet Size (Main Deck)", value: '88" x 125" (AAA / P6 container)' },
      { label: "Container Size (Lower)", value: '60.4" x 61.5" x 45" (LD3-45)' },
      { label: "Total Cargo Volume", value: "7,345 cu ft (208 m\u00B3)" },
      { label: "Aircraft Length", value: "146 ft (44.51 m)" },
      { label: "Wingspan", value: "111 ft 10 in (34.1 m)" },
      { label: "Height", value: "38 ft 7 in (11.76 m)" },
    ],
    useCases: [
      "Maximum Capacity Charter",
      "Gateway to Gateway (Long Range)",
      "Pharmaceutical Bulk Shipments",
      "E-Commerce / Express Freight",
      "High-Value Palletized Cargo",
      "Automotive & Aerospace Parts",
      "Humanitarian & Disaster Relief",
      "Military / Government Logistics",
    ],
    ctaHeading: "Need Our Largest Freighter?",
    ctaText: "62,000 lbs across 24 total positions \u2014 main deck and lower deck. The A321F is our heaviest lifter.",
    prevSlug: "737-800f",
    prevName: "Boeing 737-800F",
    nextSlug: null,
    nextName: null,
  },
];

export function getFleetBySlug(slug: string): FleetAircraft | undefined {
  return fleetData.find((a) => a.slug === slug);
}

export function getAllFleetSlugs(): string[] {
  return fleetData.map((a) => a.slug);
}
