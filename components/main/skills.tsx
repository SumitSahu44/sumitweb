import fs from "fs";
import path from "path";
import Image from "next/image";

export const Skills = () => {
  // get all images from public/skills
  const skillsDir = path.join(process.cwd(), "public", "skills");
  const files = fs.readdirSync(skillsDir);

  // filter only images
  const skillImages = files.filter((file) =>
    [".png", ".jpg", ".jpeg", ".svg", ".webp"].some((ext) =>
      file.toLowerCase().endsWith(ext)
    )
  );

  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      {/* keep your SkillText */}
      <div className="text-4xl font-bold text-white mb-6">Skills</div>

      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center">
        {skillImages.map((img, i) => (
          <div key={i} className="p-2">
            <Image
              src={`/skills/${img}`}
              alt={img}
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* background video same */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
  
};
