"use client";

import React, { useCallback, useState } from "react";
import { extractYouTubeVideoId } from "@/lib/youtube";

/**
 * Click-to-play YouTube embed: avoids loading the heavy iframe until the learner
 * chooses to play — better for low-end devices and metered data.
 */
export default function LazyYouTubeEmbed({ embedSrc, title = "Course video" }) {
  const [loaded, setLoaded] = useState(false);
  const videoId = extractYouTubeVideoId(embedSrc);
  const poster =
    videoId != null
      ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
      : null;

  const onLoad = useCallback(() => setLoaded(true), []);

  if (!embedSrc) {
    return (
      <div className="edu-verse-video-placeholder rounded-8 bg-light-3 d-flex items-center justify-center text-light-1 text-14 p-40">
        No video URL for this course.
      </div>
    );
  }

  if (loaded) {
    return (
      <div className="edu-verse-video-frame rounded-8 overflow-hidden bg-black">
        <iframe
          title={title}
          className="edu-verse-video-iframe"
          src={embedSrc}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="edu-verse-video-lazy rounded-8 overflow-hidden position-relative bg-dark-2">
      {poster ? (
        <img
          src={poster}
          alt=""
          className="w-1/1"
          style={{ display: "block", width: "100%", height: "auto", opacity: 0.85 }}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="ratio ratio-16x9 bg-dark-1" />
      )}
      <button
        type="button"
        onClick={onLoad}
        className="edu-verse-video-play button -md -purple-1 text-white shadow-2"
        aria-label={`Load and play video: ${title}`}
      >
        <span className="icon-play text-14 mr-8" aria-hidden />
        Play video
      </button>
      <p className="edu-verse-video-hint text-13 text-white px-20 pb-15 mb-0">
        Tap to load the YouTube player — saves data and keeps the page light until
        you are ready.
      </p>
    </div>
  );
}
