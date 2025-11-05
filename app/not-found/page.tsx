// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1F1F1]">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="mb-8 text-gray-600">
          The page youre looking for doesnt exist.
        </p>
        <Link 
          href="/"
          className="inline-block bg-[#D87D4A] text-white px-8 py-3 uppercase tracking-wider hover:bg-[#FBAF85] transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}