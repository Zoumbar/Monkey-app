import { CallToActionView } from "@/ui/design-system/call-to-action/call-to-action.view";
import { CurrentCourseCtaView } from "./current-course-cta/current-course-cta.view";
import { FeaturedView } from "./featured/featured.view";
import { HeroTopView } from "./hero-top/hero-top.view";
import { HighlightListView } from "./highlight-list/highlight-list.view";
import { SlackView } from "./slack/slack.view";

export const LandingPageView = () => {
  return (
    <>
      <HeroTopView />
      <FeaturedView />
      <SlackView />
      <CurrentCourseCtaView />
      <HighlightListView />
      <CallToActionView />
    </>
  );
};
