"use client";
import { useEffect } from "react";

export default function KitForm() {
  useEffect(() => {
    const container = document.getElementById("kit-form-container");
    if (!container) return;
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", "b4119f8132");
    script.src = "https://sciedscrumming.kit.com/b4119f8132/index.js";
    container.appendChild(script);
  }, []);

  return <div id="kit-form-container" className="w-full" />;
}
