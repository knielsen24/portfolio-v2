import Link from 'next/link';
export default function BtnLinkArrow() {
  <Link
    href="/experience"
    className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
    Check out my experience <span aria-hidden="true">&rarr;</span>
  </Link>;
}
