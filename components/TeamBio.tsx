"use client";
import { useEffect, useRef, useState } from "react";

export function TeamBio({ name, bio }: { name: string; bio: string }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className={`team-bio-wrap ${open ? "is-open" : ""}`}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-label={`Reseña profesional de ${name}`}
      onClick={() => setOpen((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((prev) => !prev);
        }
      }}
    >
      <p className="team-bio-preview">{bio}</p>
      <div className="team-bio-popover">
        <p>{bio}</p>
      </div>
    </div>
  );
}
