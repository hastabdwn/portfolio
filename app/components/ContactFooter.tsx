"use client";
import { useState } from "react";

export default function ContactFooter() {
  const email = "hastabudiawan7@gmail.com";
  const whatsappNumber = "+6282310090188";

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWA, setCopiedWA] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyWA = () => {
    navigator.clipboard.writeText(whatsappNumber);
    setCopiedWA(true);
    setTimeout(() => setCopiedWA(false), 3000);
  };

  return (
    <footer className="pt-40 pb-12 px-6" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's work together
          </h3>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>

          {/* <div className="flex flex-col md:flex-row justify-center gap-4">
            <div className="flex items-center gap-4 bg-muted border border-border px-6 py-4 rounded-full">
              <a
                href={`mailto:${email}`}
                className="text-foreground font-medium hover:text-primary transition"
              >
                {email}
              </a>
              <button
                onClick={handleCopyEmail}
                className={`text-xs font-semibold px-3 py-1 rounded-full border transition ${copiedEmail ? "border-green-500 text-green-500" : "border-border hover:border-foreground"}`}
              >
                {copiedEmail ? "Copied!" : "Copy"}
              </button>
            </div>

            <div className="flex items-center gap-4 bg-muted border border-border px-6 py-4 rounded-full">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-green-500 transition"
              >
                {whatsappNumber}
              </a>
              <button
                onClick={handleCopyWA}
                className={`text-xs font-semibold px-3 py-1 rounded-full border transition ${copiedWA ? "border-green-500 text-green-500" : "border-border hover:border-foreground"}`}
              >
                {copiedWA ? "Copied!" : "Copy"}
              </button>
            </div>
          </div> */}
          <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
            {/* Email Container */}
            <div className="flex items-center justify-between bg-muted border border-border px-4 py-3 rounded-full w-full">
              <a
                href={`mailto:${email}`}
                className="text-foreground font-medium hover:text-primary transition truncate mr-2"
              >
                {email}
              </a>
              <button
                onClick={handleCopyEmail}
                className={`text-xs font-semibold px-3 py-1 rounded-full border transition shrink-0 ${copiedEmail ? "border-green-500 text-green-500" : "border-border hover:border-foreground"}`}
              >
                {copiedEmail ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* WhatsApp Container */}
            <div className="flex items-center justify-between bg-muted border border-border px-4 py-3 rounded-full w-full">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-green-500 transition truncate mr-2"
              >
                {whatsappNumber}
              </a>
              <button
                onClick={handleCopyWA}
                className={`text-xs font-semibold px-3 py-1 rounded-full border transition shrink-0 ${copiedWA ? "border-green-500 text-green-500" : "border-border hover:border-foreground"}`}
              >
                {copiedWA ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Hasta Budiawan. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="https://github.com/hastabdwn"
              target="_blank"
              className="hover:text-foreground transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hasta-budiawan/"
              target="_blank"
              className="hover:text-foreground transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
