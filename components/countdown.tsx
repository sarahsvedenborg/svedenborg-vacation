"use client";

import { useEffect, useMemo, useState } from "react";

type Props = { targetDate: string };

function getRemaining(target: string) {
  const delta = new Date(target).getTime() - Date.now();
  if (delta <= 0) return { days: 0, hours: 0, minutes: 0 };
  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((delta / (1000 * 60)) % 60);
  return { days, hours, minutes };
}

export function Countdown({ targetDate }: Props) {
  const [remaining, setRemaining] = useState(() => getRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => setRemaining(getRemaining(targetDate)), 60000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const text = useMemo(
    () =>
      `${remaining.days} dager, ${remaining.hours} timer og ${remaining.minutes} minutter`,
    [remaining]
  );

  return (
    <div className="border-l-2 border-canal/50 pl-3">
      <p className="text-sm text-slate-600">Nedtelling til avreise</p>
      <p className="text-lg font-bold text-canal">{text}</p>
    </div>
  );
}
