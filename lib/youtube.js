/**
 * Extracts a YouTube video id from embed URLs, watch URLs, or youtu.be links.
 */
export function extractYouTubeVideoId(embedOrWatchUrl) {
  if (!embedOrWatchUrl || typeof embedOrWatchUrl !== "string") return null;
  const u = embedOrWatchUrl.trim();
  const embedMatch = u.match(/youtube\.com\/embed\/([^?&/]+)/i);
  if (embedMatch) return embedMatch[1];
  const vMatch = u.match(/[?&]v=([^&]+)/i);
  if (vMatch) return vMatch[1];
  const shortMatch = u.match(/youtu\.be\/([^?&/]+)/i);
  if (shortMatch) return shortMatch[1];
  return null;
}
