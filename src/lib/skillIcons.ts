import type { AstroComponentFactory } from "astro/runtime/server/index.js";

import HTML from "@/icons/html.astro";
import CSS from "@/icons/css.astro";
import JavaScript from "@/icons/javascript.astro";
import TypeScript from "@/icons/TypeScript.astro";
import React from "@/icons/react.astro";
import Node from "@/icons/node.astro";
import SQL from "@/icons/sql.astro";
import MySQL from "@/icons/mysql.astro";
import Git from "@/icons/git.astro";
import GitHub from "@/icons/GitHub.astro";
import GitLab from "@/icons/Gitlab.astro";
import Tailwind from "@/icons/tailwind.astro";
import Next from "@/icons/next.astro";
import Kotlin from "@/icons/kotlin.astro";
import Flutter from "@/icons/flutter.astro";
import Figma from "@/icons/Figma.astro";
import CSharp from "@/icons/csharp.astro";
import Xcode from "@/icons/xcode.astro";
import Expo from "@/icons/Expo.astro";
import Sentry from "@/icons/sentry.astro";
import AndroidStudio from "@/icons/androidStudio.astro";
import AI from "@/icons/ai.astro";
import XML from "@/icons/XML.astro";
import Laravel from "@/icons/Laravel.astro";
import Java from "@/icons/java.astro";

export const SKILL_ICONS: Record<string, AstroComponentFactory> = {
  HTML,
  CSS,
  JavaScript,
  TypeScript,
  React,
  Node,
  SQL,
  MySQL,
  Git,
  GitHub,
  GitLab,
  Next,
  Tailwind,
  Kotlin,
  Flutter,
  Figma,
  Xcode,
  Sentry,
  AndroidStudio,
  AI,
  XML,
  Expo,
  ReactNative: React,
  CSharp,
  Laravel,
  Java,
};

export const SKILL_NAME_TO_ICON: Record<string, string> = {
  XML: "XML",
  "Android Studio": "AndroidStudio",
  "Next.js": "Next",
  "React Native": "ReactNative",
  "C#": "CSharp",
  "Tailwind CSS": "Tailwind",
  "Node.js": "Node",
};

export function getSkillIconKey(skillName: string): string {
  return SKILL_NAME_TO_ICON[skillName] || skillName.replace(/\s+/g, "");
}

export function getSkillIcon(
  skillName: string,
): AstroComponentFactory | undefined {
  return SKILL_ICONS[getSkillIconKey(skillName)];
}
