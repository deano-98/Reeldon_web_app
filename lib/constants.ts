import type { Product } from "@/types";
export const primaryNav = [
  ["Home", "/"],
  ["Structural Timber", "/structural-timber"],
  ["Explore Timber", "/explore-timber"],
  ["Projects", "/projects"],
  ["About Us", "/about"],
] as const;
export const utilityNav = [
  ["CSR", "/csr"],
  ["Size Conversions", "/structural-timber/size-conversions"],
  ["Doors", "/projects/doors"],
  ["Contact", "/contact"],
] as const;
export const products: Product[] = [
  {
    id: "brandering",
    name: "Brandering",
    description:
      "Timber members fixed to the underside of joists to support ceilings.",
    image: "/images/structural.png",
    sizes: ["38 × 38", "38 × 50", "50 × 50", "38 × 76"],
    category: "Structural",
  },
  {
    id: "rafters",
    name: "Rafters",
    description:
      "Sloped structural members supporting roof coverings and associated loads.",
    image: "/images/structural.png",
    sizes: ["38 × 114"],
    category: "Structural",
  },
  {
    id: "wall-plates",
    name: "Wall Plates",
    description:
      "Horizontal load-bearing members forming part of a timber framework.",
    image: "/images/structural.png",
    sizes: ["38 × 152"],
    category: "Structural",
  },
  {
    id: "fascia",
    name: "Fascia Boards",
    description: "Boards used at roof edges and to support guttering.",
    image: "/images/structural.png",
    sizes: ["38 × 228"],
    category: "Structural",
  },
  {
    id: "purlins",
    name: "Purlins",
    description: "Horizontal roof support members used in timber structures.",
    image: "/images/structural.png",
    sizes: ["50 × 76", "50 × 114"],
    category: "Structural",
  },
  {
    id: "beams",
    name: "Beams",
    description:
      "Structural elements designed to resist bending and carry loads.",
    image: "/images/structural.png",
    sizes: ["50 × 152"],
    category: "Structural",
  },

  // Aesthetic products

  
  {
    id: "mouldings",
    name: "Pine & Saligna Mouldings",
    description:
      "Tongue & groove, skirting, cornice, quadrant and coverstrip profiles.",
    image: "/images/mouldings.png",
    category: "Aesthetic",
  },
  {
    id: "doors",
    name: "Timber Doors",
    description: "Standard-dimension timber doors in Pine and Saligna.",
    image: "/images/doors.png",
    category: "Aesthetic",
  },
  {
    id: "decking",
    name: "Decking & Flooring",
    description:
      "Durable treated hardwood for outdoor and interior applications.",
    image: "/images/decking.png",
    category: "Aesthetic",
  },
];
export const conversionRows = [
  ["38 × 38", "692.52", "115.42", "336", "2.911"],
  ["38 × 50", "526.32", "87.72", "252", "2.870"],
  ["38 × 76", "346.26", "57.71", "168", "2.911"],
  ["38 × 114", "230.84", "38.47", "108", "2.800"],
  ["38 × 152", "173.13", "28.85", "84", "2.910"],
  ["38 × 228", "115.42", "19.23", "60", "3.110"],
  ["50 × 50", "400.00", "66.66", "252", "3.780"],
  ["50 × 76", "263.20", "43.86", "140", "3.190"],
  ["50 × 114", "175.44", "29.24", "90", "3.070"],
  ["50 × 152", "132.00", "22.00", "70", "3.190"],
  ["50 × 228", "87.71", "14.61", "50", "3.420"],
];
