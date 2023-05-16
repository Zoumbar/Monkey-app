import { Seo } from "@/ui/component/seo";
import { Button } from "@/ui/design-system/button/button";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import { MdNotificationsActive } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Seo title="Monkey's" description="Description..." />
      <div className="max-w-6xl mx-auto space-y-5 py-10">
        {/* Typography */}
        <div className="space-y-2">
          <Typography weight="medium" variant="caption2">
            Typography :
          </Typography>
          <div className="flex flex-col gap-2 p-5 border border-gray-700  rounded">
            <div className="pb-5 space-y-2">
              <Typography weight="medium" variant="caption3">
                Display
              </Typography>
              <Typography variant="display" weight="medium">
                Ut fringilla tristique ipsum et finibus. Orci varius natoque
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography weight="medium" variant="caption3">
                h1
              </Typography>
              <Typography variant="h1" weight="medium">
                Ut fringilla tristique ipsum et finibus. Orci varius natoque
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography weight="medium" variant="caption3">
                h2
              </Typography>
              <Typography variant="h2" weight="medium">
                Ut fringilla tristique ipsum et finibus. Orci varius natoque
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography weight="medium" variant="caption3">
                h3
              </Typography>
              <Typography variant="h3" weight="medium">
                Ut fringilla tristique ipsum et finibus. Orci varius natoque
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography weight="medium" variant="caption3">
                h4
              </Typography>
              <Typography variant="h4" weight="medium">
                Ut fringilla tristique ipsum et finibus. Orci varius natoque
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography weight="medium" variant="caption3">
                h5
              </Typography>
              <Typography variant="h5" weight="medium">
                Ut fringilla tristique ipsum et finibus. Orci varius natoque
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography weight="medium" variant="caption3">
                lead
              </Typography>
              <Typography variant="lead" weight="medium">
                Ut fringilla tristique ipsum et finibus. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography weight="medium" variant="caption3">
                lead-bold
              </Typography>
              <Typography variant="lead-bold" weight="medium">
                Ut fringilla tristique ipsum et finibus. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography weight="medium" variant="caption3">
                body-lg
              </Typography>
              <Typography variant="body-lg" weight="medium">
                Ut fringilla tristique ipsum et finibus. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography weight="medium" variant="caption3">
                body-base
              </Typography>
              <Typography variant="body-base" weight="medium">
                Ut fringilla tristique ipsum et finibus. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography weight="medium" variant="caption3">
                body-sm
              </Typography>
              <Typography variant="body-sm" weight="medium">
                Ut fringilla tristique ipsum et finibus. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography weight="medium" variant="caption3">
                caption1
              </Typography>
              <Typography variant="caption1" weight="medium">
                Ut fringilla tristique ipsum et finibus. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography weight="medium" variant="caption3">
                caption2
              </Typography>
              <Typography variant="caption2" weight="medium">
                Ut fringilla tristique ipsum et finibus. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography weight="medium" variant="caption3">
                caption3
              </Typography>
              <Typography variant="caption3" weight="medium">
                Ut fringilla tristique ipsum et finibus. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography weight="medium" variant="caption3">
                caption4
              </Typography>
              <Typography variant="caption4" weight="medium">
                Ut fringilla tristique ipsum et finibus. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </Typography>
            </div>
          </div>
        </div>
        {/* Spinners */}
        <div className="flex items-start gap-7">
          <div className="space-y-2">
            <Typography component="p" weight="medium" variant="caption2">
              Spinners
            </Typography>
            <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
              <Spinner size="large" />
              <Spinner size="medium" />
              <Spinner size="small" />
            </div>
            <div className="flex items-center gap-2 p-5 border border-gray-400 bg-gray rounded">
              <Spinner size="large" variant="white" />
              <Spinner size="medium" variant="white" />
              <Spinner size="small" variant="white" />
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-start flex-col">
          <Typography component="p" weight="medium" variant="caption2">
            Buttons :
          </Typography>

          <div className="flex items-start gap-2 p-5 border border-gray-400 rounded flex-col">
            <Typography className="" weight="medium" variant="caption3">
              Small
            </Typography>
            <div className="flex items-center gap-2">
              <Button size="small" variant="accent" isLoading>
                Accent
              </Button>
              <Button size="small" variant="accent" isLoading>
                Accent
              </Button>
              <Button size="small" variant="secondary" isLoading>
                Secondary
              </Button>
              <Button
                size="small"
                variant="icon"
                isLoading
                iconTheme="accent"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button
                size="small"
                variant="icon"
                isLoading
                iconTheme="secondary"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button
                size="small"
                variant="icon"
                isLoading
                iconTheme="gray"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button size="small" variant="outline" isLoading>
                Outline
              </Button>
              <Button size="small" variant="disabled" isLoading>
                Disabled
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button size="small" variant="accent">
                Accent
              </Button>
              <Button size="small" variant="accent">
                Accent
              </Button>
              <Button size="small" variant="secondary">
                Secondary
              </Button>
              <Button
                size="small"
                variant="icon"
                iconTheme="accent"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button
                size="small"
                variant="icon"
                iconTheme="secondary"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button
                size="small"
                variant="icon"
                iconTheme="gray"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button size="small" variant="outline">
                Outline
              </Button>
              <Button size="small" variant="disabled">
                Disabled
              </Button>
            </div>
          </div>
          <div className="flex items-start gap-2 p-5 border border-gray-400 rounded flex-col">
            <Typography className="" weight="medium" variant="caption3">
              Medium
            </Typography>
            <div className="flex items-center gap-2">
              <Button size="medium" variant="accent" isLoading>
                Accent
              </Button>
              <Button size="medium" variant="accent" isLoading>
                Accent
              </Button>
              <Button size="medium" variant="secondary" isLoading>
                Secondary
              </Button>
              <Button
                size="medium"
                variant="icon"
                isLoading
                iconTheme="accent"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button
                size="medium"
                variant="icon"
                isLoading
                iconTheme="secondary"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button
                size="medium"
                variant="icon"
                isLoading
                iconTheme="gray"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button size="medium" variant="outline" isLoading>
                Outline
              </Button>
              <Button size="medium" variant="disabled" isLoading>
                Disabled
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button size="medium" variant="accent">
                Accent
              </Button>
              <Button size="medium" variant="accent">
                Accent
              </Button>
              <Button size="medium" variant="secondary">
                Secondary
              </Button>
              <Button
                size="medium"
                variant="icon"
                iconTheme="accent"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button
                size="medium"
                variant="icon"
                iconTheme="secondary"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button
                size="medium"
                variant="icon"
                iconTheme="gray"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button size="medium" variant="outline">
                Outline
              </Button>
              <Button size="medium" variant="disabled">
                Disabled
              </Button>
            </div>
          </div>
          <div className="flex items-start gap-2 p-5 border border-gray-400 rounded flex-col">
            <Typography className="" weight="medium" variant="caption3">
              Large
            </Typography>
            <div className="flex items-center gap-2">
              <Button size="large" variant="accent" isLoading>
                Accent
              </Button>
              <Button size="large" variant="accent" isLoading>
                Accent
              </Button>
              <Button size="large" variant="secondary" isLoading>
                Secondary
              </Button>
              <Button
                size="large"
                variant="icon"
                isLoading
                iconTheme="accent"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button
                size="large"
                variant="icon"
                isLoading
                iconTheme="secondary"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button
                size="large"
                variant="icon"
                isLoading
                iconTheme="gray"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button size="large" variant="outline" isLoading>
                Outline
              </Button>
              <Button size="large" variant="disabled" isLoading>
                Disabled
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button size="large" variant="accent">
                Accent
              </Button>
              <Button size="large" variant="accent">
                Accent
              </Button>
              <Button size="large" variant="secondary">
                Secondary
              </Button>
              <Button
                size="large"
                variant="icon"
                iconTheme="accent"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button
                size="large"
                variant="icon"
                iconTheme="secondary"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button
                size="large"
                variant="icon"
                iconTheme="gray"
                icon={{ icon: MdNotificationsActive }}
              ></Button>
              <Button size="large" variant="outline">
                Outline
              </Button>
              <Button size="large" variant="disabled">
                Disabled
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
