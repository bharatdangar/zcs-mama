export interface IClassProps {
  className?: string;
}

export interface IProjectCardProps {
  title: string;
  id: string;
  activeTime: string;
  onClick?: () => void;
}
