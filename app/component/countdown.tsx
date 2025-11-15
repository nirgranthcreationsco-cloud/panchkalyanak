"use client";

interface CountdownTime {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CompactCountdown = ({ timeLeft }: { timeLeft: CountdownTime }) => {
  const items = [
    { label: "दिन", value: timeLeft.days ?? 0 },
    { label: "घंटे", value: timeLeft.hours ?? 0 },
    { label: "मिनट", value: timeLeft.minutes ?? 0 },
    { label: "सेकंड", value: timeLeft.seconds ?? 0 },
  ];

  return (
    <div
      className="
        mt-8 px-4 py-3 
        bg-white/10 backdrop-blur-md 
        border border-[#FFD76A]/40 
        rounded-2xl shadow-lg 
        flex items-center justify-center gap-4 md:gap-8
        w-auto mx-auto
      "
    >
      {items.map((item, i) => (
        <div key={i} className="text-center">
          <div
            className="
              text-2xl md:text-4xl font-extrabold 
              text-transparent bg-clip-text 
              bg-gradient-to-br from-[#FFD76A] via-[#FAD2C1] to-[#C04878]
              drop-shadow-[0_0_10px_rgba(255,215,106,0.5)]
            "
          >
            {item.value}
          </div>
          <div className="text-xs md:text-sm text-[#FAD2C1] tracking-wide">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompactCountdown;
