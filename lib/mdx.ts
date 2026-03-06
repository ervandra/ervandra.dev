import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}

function parseFrontmatter(raw: string): { frontmatter: BlogFrontmatter; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return {
      frontmatter: { title: "", description: "", date: "", tags: [], published: false },
      content: raw,
    };
  }

  const fm: Record<string, string | string[] | boolean> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value: string | string[] | boolean = line.slice(idx + 1).trim();
    if (value === "true") value = true;
    else if (value === "false") value = false;
    else if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""));
    } else {
      value = value.replace(/^["']|["']$/g, "");
    }
    fm[key] = value;
  }

  return {
    frontmatter: {
      title: (fm.title as string) || "",
      description: (fm.description as string) || "",
      date: (fm.date as string) || "",
      tags: (fm.tags as string[]) || [],
      published: fm.published !== false,
    },
    content: match[2],
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { frontmatter, content } = parseFrontmatter(raw);
      return {
        slug: file.replace(/\.(mdx|md)$/, ""),
        frontmatter,
        content,
      };
    })
    .filter((p) => p.frontmatter.published)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}
