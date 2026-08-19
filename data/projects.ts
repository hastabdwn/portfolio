export interface Project {
  title: string;
  desc: string;
  tech: string[];
  github: string;
  image: string;
  link?: string;
}

export const projects = [
  {
    title: "Inventory System",
    desc: "A full-stack warehouse inventory management system featuring multi-warehouse support, purchase order approval workflows, barcode/QR generation, and an audit trail system for precise stock movement tracking.",
    tech: ["Laravel", "Laravel Breeze", "Spatie Laravel Permission", "MySQL", "Tailwind CSS"],
    github: "https://github.com/hastabdwn/inventory-gudang.git",
    image: "/images/inventory-gudang.jpeg",
  },
  {
    title: "DashStack",
    desc: "An admin dashboard UI built from a Figma design, featuring revenue and sales analytics charts, customer and deals tables, and a light/dark theme toggle.",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Recharts"],
    github: "https://github.com/hastabdwn/dashstack-react",
    image: "/images/dashstack-react.png",
  },
  {
    title: "ERP System",
    desc: "A full-stack enterprise resource planning system covering Finance, Inventory, Sales, Purchasing, Production (BOM & work orders), HR, Payroll (incl. BPJS & PPh 21), and Invoicing — with JWT authentication and a company-wide activity log for audit trail.",
    tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "JWT", "Tailwind CSS", "Recharts"],
    github: "https://github.com/hastabdwn/erp-backend",
    image: "/images/erp-system.png",
  },
];
