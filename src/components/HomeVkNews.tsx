"use client";

import { useRef } from "react";
import { SafeImage } from "./SafeImage";

type VkPost = {
  date: string;
  text: string;
  image: string;
};

type HomeVkNewsProps = {
  title: string;
  subtitle: string;
  posts: VkPost[];
};

export function HomeVkNews({ title, subtitle, posts }: HomeVkNewsProps) {
  const rowRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (dir: -1 | 1) => {
    if (!rowRef.current) return;
    const card = rowRef.current.querySelector<HTMLElement>(".vk-news-card");
    const amount = (card?.offsetWidth ?? 300) + 12;
    rowRef.current.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="home-section home-vk-news">
      <div className="page-shell">
        <div className="section-head section-head-actions">
          <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <div className="slider-controls">
            <button type="button" className="slider-btn" onClick={() => scrollByCard(-1)}>
              ←
            </button>
            <button type="button" className="slider-btn" onClick={() => scrollByCard(1)}>
              →
            </button>
          </div>
        </div>
        <div ref={rowRef} className="vk-news-row" role="region" aria-label={title}>
          {posts.map((post, index) => (
            <article key={post.date + index} className="vk-news-card">
              <SafeImage src={post.image} alt={post.text} />
              <div className="vk-news-body">
                <span>{post.date}</span>
                <p>{post.text}</p>
                <a href="https://vk.com/" target="_blank" rel="noreferrer">
                  VK
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
