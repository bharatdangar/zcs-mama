import GoogleLogo from "@/components/icons/GoogleLogo";
import LockIcon from "@/components/icons/LockIcon";
import ZCSLogo from "@/components/icons/ZCSLogo";
import Typography from "@/components/Typography";
import { Alert } from "@heroui/alert";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-5 h-full">
      <div className="hidden md:flex bg-themeGradient flex-col justify-center gap-12 lg:gap-20 p-6 items-center rounded-[1.25rem]">
        <ZCSLogo className="text-white" />
        <Image
          src="/images/login-hero.svg"
          width={702}
          height={688}
          alt="Welcome To ZSecure"
          className="w-full aspect-[702/688] max-w-[37.5rem]"
          priority
        />
      </div>
      <div className="bg-background flex flex-col rounded-[1.25rem] gap-4 items-center justify-center p-2 sm:p-6">
        <div className="bg-white shadow-[5px_5px_30px_rgba(0,0,0,0.15)] flex flex-col items-center gap-8 rounded-2xl p-6 md:p-10 w-full max-w-[31rem] text-center">
          <div className="flex flex-col items-center  ">
            <ZCSLogo className="text-primary [&_.cloud]:text-black max-w-[5.625rem]" />
            <Typography variant="h1" className="text-[1.625rem] font-medium">
              Welcome To ZSecure
            </Typography>
            <Typography className="text-gray-500/80">
              Secure. Scan. Simplify.
            </Typography>
          </div>

          <div className="flex w-full flex-col items-center gap-5">
            <Button
              radius="md"
              size="lg"
              startContent={<GoogleLogo />}
              className="text-white w-full bg-themeGradient md:h-[3.625rem] data-[hover=true]:opacity-100"
            >
              Sign In with Google
            </Button>
            <div className="space-y-2">
              <Typography>
                Authenticate securely using your Google account
              </Typography>
              <Typography className="text-gray-500/80">
                We'll never access your data without permission
              </Typography>
            </div>
          </div>
          <Alert
            hideIconWrapper
            className="p-1"
            icon={<LockIcon />}
            color="success"
            title="Your credentials are encrypted and safe with us"
            classNames={{
              base: "flex items-center gap-3 bg-success/10 text-success gap-0 text-left",
              iconWrapper: "size-6 ml-2",
              mainWrapper: "ms-1 px-1",
              title: "mr-2",
            }}
          />
        </div>
        <Typography>
          Need help?{" "}
          <Link
            href="#"
            className="text-gray-500 hover:text-primary relative after:absolute after:-bottom-0 after:left-0 after:w-full after:scale-x-100 after:h-[1px] after:bg-gray-500 hover:after:bg-primary after:origin-bottom-left after:transition-transform after:duration-700 after:ease-[cubic-bezier(.7, 0, .3, 1)] hover:after:scale-x-0 hover:after:origin-bottom-right"
          >
            Content Support
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default LoginPage;
