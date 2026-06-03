"use client";

import { useEffect, useMemo, useState } from "react";

type Props = { targetDate: string; variant?: "default" | "overlay" };

function getRemaining(target: string) {
  const delta = new Date(target).getTime() - Date.now();
  if (delta <= 0) return { days: 0, hours: 0, minutes: 0 };
  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((delta / (1000 * 60)) % 60);
  return { days, hours, minutes };
}

export function Countdown({ targetDate, variant = "default" }: Props) {
  const [remaining, setRemaining] = useState(() => getRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => setRemaining(getRemaining(targetDate)), 60000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const text = useMemo(
    () =>
      `${remaining.days} dager · ${remaining.hours} timer · ${remaining.minutes} min`,
    [remaining]
  );

  if (variant === "overlay") {
    return (
      <div className="space-y-1 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
          Nedtelling til avreise
        </p>
        <p className="font-serif text-xl font-medium text-white md:text-2xl">{text}</p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <p className="section-label">Nedtelling til avreise</p>
      <p className="font-serif text-2xl font-medium">{text}</p>
    </div>
  );
}
