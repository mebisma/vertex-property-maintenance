import {
  Zap,
  Hammer,
  Wind,
  Wrench,
  Sparkles,
  TreePine,
  Snowflake,
  PaintRoller,
  Droplets,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  blurb: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "electrical",
    title: "Electrical",
    icon: Zap,
    blurb:
      "Licensed electricians for panels, lighting, EV chargers and code corrections across residential and commercial sites.",
    points: ["Panel upgrades & repairs", "Interior/exterior lighting", "EV charger installs", "Code violation fixes"],
  },
  {
    slug: "carpentry",
    title: "Carpentry & Lumber",
    icon: Hammer,
    blurb:
      "Framing, decks, doors, trim and structural lumber repairs finished to a standard that lasts through every season.",
    points: ["Framing & structural repair", "Decks, stairs & railings", "Doors, trim & millwork", "Fence & gate builds"],
  },
  {
    slug: "hvac",
    title: "HVAC",
    icon: Wind,
    blurb:
      "Heating, ventilation and cooling installed, tuned and monitored so tenants never call about the temperature.",
    points: ["Furnace & AC service", "Rooftop unit maintenance", "Ductwork & ventilation", "Seasonal tune-up plans"],
  },
  {
    slug: "handyman",
    title: "Handyman",
    icon: Wrench,
    blurb:
      "One call for the long punch list — drywall, fixtures, hardware, assembly and the hundred small things in between.",
    points: ["Drywall & patch repair", "Fixture replacement", "Locks & hardware", "Turnover punch lists"],
  },
  {
    slug: "cleaning",
    title: "Cleaning",
    icon: Sparkles,
    blurb:
      "Janitorial crews and deep-clean specialists for common areas, unit turnovers and post-construction sites.",
    points: ["Nightly janitorial", "Unit turnover cleans", "Post-construction", "Carpet & floor care"],
  },
  {
    slug: "tree-removal",
    title: "Tree Removal",
    icon: TreePine,
    blurb:
      "Certified crews for hazardous removals, pruning and stump grinding — fully insured, fully cleaned up.",
    points: ["Hazard & storm removal", "Pruning & canopy work", "Stump grinding", "Debris haul-away"],
  },
  {
    slug: "snow-removal",
    title: "Snow Removal",
    icon: Snowflake,
    blurb:
      "Route-based plowing, salting and sidewalk clearing with 24/7 storm dispatch and time-stamped service logs.",
    points: ["Lot plowing & salting", "Sidewalk & entry clearing", "24/7 storm dispatch", "Service logging"],
  },
  {
    slug: "painting",
    title: "Painting & Drywall",
    icon: PaintRoller,
    blurb:
      "Interior and exterior painting, drywall repair and coatings that make a building read new again.",
    points: ["Interior repaints", "Exterior & coatings", "Drywall & texture", "Common-area refresh"],
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    icon: Droplets,
    blurb: "Leaks, drains, water heaters and fixture work handled fast to keep small problems small.",
    points: ["Leak & drain service", "Water heaters", "Fixture replacement", "Backflow & shutoffs"],
  },
  {
    slug: "emergency",
    title: "24/7 Emergency",
    icon: ShieldCheck,
    blurb: "One emergency line, real dispatchers, crews on the road while the ticket is still being written.",
    points: ["Live 24/7 dispatch", "Water & storm response", "Board-up & make-safe", "Insurance documentation"],
  },
];

export const WORK_ORDER_TYPES = SERVICES.map((s) => s.title).concat("Other / Not sure");

export const PRIORITIES = ["Routine", "Scheduled", "Urgent", "Emergency"] as const;

export type Project = {
  client: string;
  title: string;
  scope: string;
  result: string;
  year: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    client: "Northgate Residential Group",
    title: "42-building portfolio maintenance program",
    scope: "HVAC, electrical, handyman and turnover cleaning under a single contract.",
    result: "Average work-order close time cut from 6.2 days to 1.4 days.",
    year: "2025",
    tags: ["HVAC", "Electrical", "Cleaning"],
  },
  {
    client: "Harbor Point Commercial",
    title: "Winter operations for 1.2M sq ft of lots",
    scope: "24/7 plowing, salting and sidewalk crews across nine commercial sites.",
    result: "Zero slip-and-fall claims across two full winter seasons.",
    year: "2024",
    tags: ["Snow Removal", "Emergency"],
  },
  {
    client: "Cedar Row Property Trust",
    title: "Storm damage recovery, 300+ trees",
    scope: "Emergency tree removal, make-safe electrical and structural carpentry.",
    result: "All sites reopened to tenants within 72 hours.",
    year: "2024",
    tags: ["Tree Removal", "Carpentry"],
  },
  {
    client: "Millbrook Student Housing",
    title: "Summer turnover of 640 units",
    scope: "Punch lists, painting, drywall, fixtures and deep cleaning on a nine-week clock.",
    result: "100% of units delivered move-in ready ahead of schedule.",
    year: "2025",
    tags: ["Handyman", "Painting", "Cleaning"],
  },
  {
    client: "Vantage Industrial Parks",
    title: "Rooftop HVAC replacement program",
    scope: "Phased replacement of 58 rooftop units with zero tenant downtime.",
    result: "Energy spend down 21% year over year.",
    year: "2023",
    tags: ["HVAC"],
  },
  {
    client: "Lakeside Medical Offices",
    title: "Nightly janitorial + compliance program",
    scope: "Medical-grade cleaning, logs and inspection-ready documentation.",
    result: "Passed every facility audit for three consecutive years.",
    year: "2023",
    tags: ["Cleaning"],
  },
];

export const REVIEWS = [
  {
    name: "Dana Whitfield",
    role: "Regional Director, Northgate Residential",
    rating: 5,
    quote:
      "Vertex took over 42 buildings and our work-order backlog disappeared in a month. Their dispatch team is the most responsive vendor relationship we have.",
  },
  {
    name: "Marcus Lee",
    role: "Facilities Manager, Harbor Point Commercial",
    rating: 5,
    quote:
      "Two winters, not one missed plow. They send time-stamped photos before I even think to ask for them.",
  },
  {
    name: "Priya Raman",
    role: "Asset Manager, Cedar Row Trust",
    rating: 5,
    quote:
      "After the storm they had crews on site before sunrise. Trees cleared, power made safe, tenants back in three days.",
  },
  {
    name: "Tom Alvarez",
    role: "Owner, Millbrook Student Housing",
    rating: 5,
    quote:
      "640 units turned in nine weeks with one point of contact. That is the whole pitch and they actually delivered it.",
  },
  {
    name: "Sarah Kingsley",
    role: "VP Operations, Vantage Industrial",
    rating: 5,
    quote:
      "Clean scopes, honest pricing, no change-order games. Our energy bill dropped 21% after their HVAC program.",
  },
  {
    name: "Elliot Ng",
    role: "Practice Administrator, Lakeside Medical",
    rating: 5,
    quote:
      "Inspection-ready every single time. Their documentation is better than our internal records were.",
  },
];

export const LAYERS = [
  {
    n: "01",
    label: "Who we are",
    title: "Vertex Property Maintenance Inc.",
    body:
      "A single accountable trades partner for owners, managers and facility teams. Licensed, bonded and insured, operating our own crews rather than brokering your building out to strangers.",
    stat: { v: 22, s: "+", k: "Years operating" },
  },
  {
    n: "02",
    label: "What we do",
    title: "Every trade under one contract",
    body:
      "Electrical, carpentry and lumber, HVAC, handyman, cleaning, tree removal, snow removal, painting and plumbing — dispatched from one queue, invoiced on one statement.",
    stat: { v: 10, s: "", k: "Trades in-house" },
  },
  {
    n: "03",
    label: "How we work",
    title: "Dispatch, document, close",
    body:
      "Every request enters a tracked queue with a named coordinator, photo documentation before and after, and a close-out log your auditors will actually accept.",
    stat: { v: 4, s: "h", k: "Avg. response" },
  },
  {
    n: "04",
    label: "Why it matters",
    title: "Buildings that stay ahead of failure",
    body:
      "Preventive programs replace emergency spending. Our clients see fewer callbacks, longer equipment life and tenants who stop noticing the building at all.",
    stat: { v: 98, s: "%", k: "Client retention" },
  },
];
