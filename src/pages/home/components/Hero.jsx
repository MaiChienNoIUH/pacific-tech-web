import heroImg from "../../../assets/hero.png";

export default function Hero() {
  return (
    <section
      className="relative min-h-[95vh] w-full pt-24 pb-20"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
