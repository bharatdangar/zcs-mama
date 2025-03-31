import { IClassProps } from "@/lib/types";

const CloudIcon = ({ className }: IClassProps) => {
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
        d="M7.24414 20.6649C5.72747 20.6649 4.43164 20.1399 3.35664 19.0899C2.28164 18.0399 1.74414 16.7565 1.74414 15.2399C1.74414 13.9399 2.13581 12.7815 2.91914 11.7649C3.70247 10.7482 4.72747 10.0982 5.99414 9.81486C6.41081 8.28152 7.24414 7.03986 8.49414 6.08986C9.74414 5.13986 11.1608 4.66486 12.7441 4.66486C14.6941 4.66486 16.3483 5.34402 17.7066 6.70236C19.065 8.06069 19.7441 9.71486 19.7441 11.6649C20.8941 11.7982 21.8483 12.294 22.6066 13.1524C23.365 14.0107 23.7441 15.0149 23.7441 16.1649C23.7441 17.4149 23.3066 18.4774 22.4316 19.3524C21.5566 20.2274 20.4941 20.6649 19.2441 20.6649H13.7441V13.5149L14.6441 14.3899C14.8275 14.5732 15.0566 14.6649 15.3316 14.6649C15.6066 14.6649 15.8441 14.5649 16.0441 14.3649C16.2275 14.1815 16.3191 13.9482 16.3191 13.6649C16.3191 13.3815 16.2275 13.1482 16.0441 12.9649L13.4441 10.3649C13.2441 10.1649 13.0108 10.0649 12.7441 10.0649C12.4775 10.0649 12.2441 10.1649 12.0441 10.3649L9.44414 12.9649C9.26081 13.1482 9.16497 13.3774 9.15664 13.6524C9.14831 13.9274 9.24414 14.1649 9.44414 14.3649C9.62747 14.5482 9.85664 14.644 10.1316 14.6524C10.4066 14.6607 10.6441 14.5732 10.8441 14.3899L11.7441 13.5149V20.6649H7.24414Z"
        fill="white"
      />
    </svg>
  );
};

export default CloudIcon;
