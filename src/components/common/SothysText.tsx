import Image from "next/image";

type SothysTextProps = {
  children: string;
  iconSize?: number;
  className?: string;
};

export function SothysText({ children, iconSize = 14, className = "" }: SothysTextProps) {
  if (!children.includes("SOTHYS")) {
    return <span className={className}>{children}</span>;
  }

  const parts = children.split("SOTHYS");

  return (
    <span className={className}>
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && (
            <>
              <Image
                src="/images/sothys-goddess.jpg"
                alt=""
                width={iconSize}
                height={Math.round(iconSize * 1.5)}
                className="inline-block object-contain mx-0.5"
                style={{ verticalAlign: "middle", marginBottom: "2px" }}
              />
              <span>SOTHYS</span>
            </>
          )}
        </span>
      ))}
    </span>
  );
}
