// "use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-white h-60" id="d">
        <Link href="#a">안녕하세요1</Link>
      </div>
      <div className="bg-white h-60" id="c">
        <Link href="#b"> 안녕하세요2</Link>
      </div>
      <div className="bg-white h-60" id="b">
        <Link href="#c">안녕하세요3</Link>
      </div>
      <div className="bg-white h-60" id="a">
        <Link href="#d">안녕하세요4</Link>
      </div>
    </div>
  );
}
