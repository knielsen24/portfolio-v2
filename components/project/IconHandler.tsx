import {
  ComputerIcon,
  CubeIcon,
  TagIcon,
  MobileIcon,
  DocumentIcon,
  AppleIcon,
  AndroidIcon,
  GitHubIcon,
  YouTubeIcon,
  LinkIcon,
} from "@/components/icons/Project";

type Props = { name: string; desc: string; }

export default function IconHandler(props: Props) {
  const { name, desc } = props;

  const className =
    "h-5 w-5 flex-shrink-0 text-indigo-500 dark:text-indigo-400";

  const iconMap: { [key: string]: JSX.Element } = {
    github: <GitHubIcon className={className} aria-hidden="true" />,
    youtube: <YouTubeIcon className={className} aria-hidden="true" />,
    ios: <AppleIcon className={className} aria-hidden="true" />,
    android: <AndroidIcon className={className} aria-hidden="true" />,
    industry: <CubeIcon className={className} aria-hidden="true" />,
    category: <TagIcon className={className} aria-hidden="true" />,
    blog: <DocumentIcon className={className} aria-hidden="true" />,
    linkedIn: <DocumentIcon className={className} aria-hidden="true" />,
    platforms: desc?.includes("web") ? (
      <ComputerIcon className={className} aria-hidden="true" />
    ) : desc?.toLowerCase().includes("mobile") ? (
      <MobileIcon className={className} aria-hidden="true" />
    ) : (
      <LinkIcon className={className} aria-hidden="true" />
    ),
  };

  return (
    iconMap[name.toLowerCase()] || (
      <LinkIcon className={className} aria-hidden="true" />
    )
  );
}
