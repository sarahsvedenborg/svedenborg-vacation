export default function OpplevelserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
      <div className="mx-auto w-full max-w-7xl px-6">{children}</div>
    </div>
  );
}
