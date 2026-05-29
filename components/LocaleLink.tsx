"use client";

import Link from "next/link";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

export function LocaleLink({ href, ...rest }: Props) {
  const { localePath } = useLocaleContext();
  return <Link {...rest} href={localePath(href)} />;
}
