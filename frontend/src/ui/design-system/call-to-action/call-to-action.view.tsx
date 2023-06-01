import { Container } from "@/ui/component/container/container";
import { Typography } from "../typography/typography";
import { Button } from "../button/button";
import { LinkTypes } from "@/lib/link-types";
import Image from "next/image";

export const CallToActionView = () => {
  return (
    <div className="relative overflow-hidden bg-primary">
      <Container className="py-20">
        <div className="relative z-10 max-w-3xl space-y-5">
          <Typography variant="h2" theme="white" component="h2">
            N'attends pas pour développer tes compétences...
          </Typography>
          <div>
            <Button variant="success" baseUrl="#" linkType={LinkTypes.EXTERNAL}>
              Formations React.js gratuite
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="assets/svg/bomber.svg"
            height={1210}
            width={1210}
            alt="bomber"
            className="absolute -bottom-[470px] -right-[150px]"
          />
        </div>
      </Container>
    </div>
  );
};
