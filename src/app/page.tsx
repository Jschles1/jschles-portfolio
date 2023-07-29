import Image from "next/image";
import Skills from "@/components/pages/About/Skills/Skills";

export default function Home() {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <Skills />
        </div>
      </div>
    </section>
  );
}
