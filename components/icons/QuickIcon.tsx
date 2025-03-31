import { IClassProps } from "@/lib/types";

const QuickIcon = ({ className }: IClassProps) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.25192 15.6649H6.15192C5.75192 15.6649 5.45609 15.4857 5.26442 15.1274C5.07276 14.769 5.09359 14.4232 5.32692 14.0899L12.8019 3.33985C12.9686 3.10652 13.1853 2.94402 13.4519 2.85235C13.7186 2.76068 13.9936 2.76485 14.2769 2.86485C14.5603 2.96485 14.7686 3.13985 14.9019 3.38985C15.0353 3.63985 15.0853 3.90652 15.0519 4.18985L14.2519 10.6649H18.1269C18.5603 10.6649 18.8644 10.8565 19.0394 11.2399C19.2144 11.6232 19.1603 11.9815 18.8769 12.3149L10.6519 22.1649C10.4686 22.3815 10.2436 22.5232 9.97692 22.5899C9.71026 22.6565 9.45192 22.6315 9.20192 22.5149C8.95192 22.3982 8.75609 22.219 8.61442 21.9774C8.47276 21.7357 8.41859 21.4732 8.45192 21.1899L9.25192 15.6649Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default QuickIcon;
