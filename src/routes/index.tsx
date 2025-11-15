import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
      <div className="max-w-xl space-y-4 text-center">
        <h1 className="text-3xl font-semibold">TanStack Start template</h1>
        <p className="text-slate-300">
          You&apos;re ready to build. Replace this route with your UI or ask the
          agent to create new components under <code>src/</code>.
        </p>
        <p className="text-sm text-slate-500">
          This template keeps things minimal so generated UIs can render without
          extra cleanup.
        </p>
      </div>
    </main>
  )
}
