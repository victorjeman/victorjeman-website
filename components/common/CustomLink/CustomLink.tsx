import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  href: string;
  children: JSX.Element;
}

export const CustomLink: React.FC<Props> = ({ href, children }: Props) => {
  const router = useRouter();

  const { props } = children;

  let className = props.className || '';

  if (router.pathname === href) {
    className = `${className} selected`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};
