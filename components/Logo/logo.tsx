import Image from "next/image";

export function Logo() {
  return (
    <div className="font-bold flex gap-2 items-center">
      <Image
        src="/logo.svg"
        width={70}
        height={50}
        alt="Open Waitlist"
        className="block dark:hidden"
      />
      Open Waitlist
    </div>
  );
}
