import Link from "next/link";

export default function Another() {
  return (
    <>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/upload">Upload widget</Link></li>
        <li><Link href="/another">Another page</Link></li>
      </ul>
      <h1>Another page</h1>
    </>
  )
}
