import Link from "next/link";
function NotFoundPage() {
  return (
    <main className="not-found">
      <h1>404</h1>
      <p>Meal not found</p>
      <Link href="/">👈 Go back home</Link>
    </main>
  );
}

export default NotFoundPage;
