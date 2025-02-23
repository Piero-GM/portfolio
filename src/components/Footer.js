import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-12 py-6 text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/projects" className="hover:underline">Projects</Link></li>
          <li><Link href="/uses" className="hover:underline">Uses</Link></li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          &copy; 2024 John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
