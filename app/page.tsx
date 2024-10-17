
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <button type="button" className="nes-btn is-primary">Primary</button>
      <button type="button" className="nes-btn is-success">Success</button>
      <button type="button" className="nes-btn is-warning">Warning</button>
      <button type="button" className="nes-btn is-error">Error</button>
      <button type="button" className="nes-btn is-disabled">Disabled</button>
    </main>
    </div>
  );
}
