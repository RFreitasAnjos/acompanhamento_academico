export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-700 bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col gap-2 text-center text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>&copy; {new Date().getFullYear()} Academic Project.</p>
        <p>Built for academic tracking, services, and market exploration.</p>
      </div>
    </footer>
  );
}