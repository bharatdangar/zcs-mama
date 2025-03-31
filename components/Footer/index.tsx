import { IClassProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Link } from "@heroui/link";

const Footer = ({ className }: IClassProps) => {
  return (
    <div
      className={cn(
        "bg-white p-5 text-center text-gray-400 mt-auto",
        className
      )}
    >
      Need help understanding these results?{" "}
      <Link
        href="#"
        className="text-gray-500 hover:text-primary relative after:absolute after:-bottom-0 after:left-0 after:w-full after:scale-x-100 after:h-[1px] after:bg-gray-500 hover:after:bg-primary after:origin-bottom-left after:transition-transform after:duration-700 after:ease-[cubic-bezier(.7, 0, .3, 1)] hover:after:scale-x-0 hover:after:origin-bottom-right"
      >
        Read Docs
      </Link>{" "}
      |{" "}
      <Link
        href="#"
        className="text-gray-500 hover:text-primary relative after:absolute after:-bottom-0 after:left-0 after:w-full after:scale-x-100 after:h-[1px] after:bg-gray-500 hover:after:bg-primary after:origin-bottom-left after:transition-transform after:duration-700 after:ease-[cubic-bezier(.7, 0, .3, 1)] hover:after:scale-x-0 hover:after:origin-bottom-right"
      >
        Report an Issues
      </Link>
    </div>
  );
};

export default Footer;
