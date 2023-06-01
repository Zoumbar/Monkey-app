import { Container } from "@/ui/component/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

export const CurrentCourseCtaView = () => {
  return (
    <div className="bg-gray-300">
      <Container className="py-24 text-center">
        <Typography variant="h2" component="h2" className="mb-2.5">
          Formations React.js gratuite
        </Typography>
        <Typography variant="lead" component="h3" className="mb-5">
          Formations React.js gratuite
        </Typography>
        <Typography
          variant="caption3"
          component="p"
          theme="gray"
          className="mb-16"
        >
          Formations React.js gratuite
        </Typography>
        <a href="/#" target="_blank">
          <div className="relative bg-gray-400 rounded h-[626px]">
            <div className="flex flex-col items-center justify-center gap-2 relative z-10 h-full bg-gray rounded opacity-0 hover:opacity-50 text-white animate">
              <FaPlayCircle size={42} />
              <Typography
                variant="caption2"
                theme="white"
                className="uppercase"
                weight="medium"
              >
                Lire la formation
              </Typography>
            </div>
            <Image
              src="/assets/images/current-course-cta.png"
              alt="Call to action de formation"
              fill
            />
          </div>
        </a>
      </Container>
    </div>
  );
};
