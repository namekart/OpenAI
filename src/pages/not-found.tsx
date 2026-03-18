import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link href="/" className="px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}
