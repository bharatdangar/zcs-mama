import { IClassProps } from "@/lib/types";

const UserIcon = ({ className }: IClassProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.99992 10.3287C9.08325 10.3287 8.29853 10.0023 7.64575 9.34949C6.99297 8.69671 6.66658 7.91199 6.66658 6.99532C6.66658 6.07865 6.99297 5.29393 7.64575 4.64115C8.29853 3.98838 9.08325 3.66199 9.99992 3.66199C10.9166 3.66199 11.7013 3.98838 12.3541 4.64115C13.0069 5.29393 13.3333 6.07865 13.3333 6.99532C13.3333 7.91199 13.0069 8.69671 12.3541 9.34949C11.7013 10.0023 10.9166 10.3287 9.99992 10.3287ZM3.33325 15.3287V14.662C3.33325 14.1898 3.45478 13.7557 3.69784 13.3599C3.94089 12.9641 4.26381 12.662 4.66659 12.4537C5.5277 12.0231 6.4027 11.7002 7.29158 11.4849C8.18047 11.2696 9.08325 11.162 9.99992 11.162C10.9166 11.162 11.8194 11.2696 12.7083 11.4849C13.5971 11.7002 14.4721 12.0231 15.3333 12.4537C15.736 12.662 16.0589 12.9641 16.302 13.3599C16.5451 13.7557 16.6666 14.1898 16.6666 14.662V15.3287C16.6666 15.787 16.5034 16.1793 16.177 16.5057C15.8506 16.8321 15.4583 16.9953 14.9999 16.9953H4.99992C4.54159 16.9953 4.14922 16.8321 3.82284 16.5057C3.49645 16.1793 3.33325 15.787 3.33325 15.3287Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default UserIcon;
