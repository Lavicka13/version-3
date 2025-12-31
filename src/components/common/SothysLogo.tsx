import Image from "next/image";

type SothysLogoProps = {
  size?: number;
  className?: string;
};

export function SothysLogo({ size = 16, className = "" }: SothysLogoProps) {
  return (
    <Image
      src="/images/sothys-goddess.jpg"
      alt="SOTHYS"
      width={size}
      height={Math.round(size * 1.5)}
      className={`inline-block object-contain ${className}`}
      style={{ verticalAlign: "middle" }}
    />
  );
}
