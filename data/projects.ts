export interface Project {
  title: string;
  desc: string;
  tech: string[];
  github: string;
  image: string;
  link?: string; // Tanda tanya (?) membuat field ini opsional
}

export const projects = [
  {
    title: "Inventory Gudang",
    desc: "A full-stack warehouse inventory management system featuring multi-warehouse support, purchase order approval workflows, barcode/QR generation, and an audit trail system for precise stock movement tracking.",
    tech: ["Laravel", "Laravel Breeze", "Spatie Laravel Permission", "MySQL", "Tailwind CSS"], 
    github: "https://github.com/hastabdwn/inventory-gudang.git",
    image: "/images/inventory-gudang.jpeg",
  },
];