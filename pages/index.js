import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/linting">
        <a>Linting</a>
      </Link>
      <Link href="/separate-read-write">
        <a>Separate Read Write</a>
      </Link>
      <Link href="/typescript">
        <a>TypeScript</a>
      </Link>
    </div>
  );
}
