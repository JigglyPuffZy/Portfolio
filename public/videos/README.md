# Portfolio videos (production)

Videos are served from this folder at `/videos/...` so Vercel can deploy them without Vite bundling.

## Files

| File | Project |
|------|---------|
| `led-intro-course.mp4` | Introducing the LED Lighting Course |
| `led-education-industry.mp4` | LED Education the Industry Doesn't Want… |
| `led-technology-exploding.mp4` | LED Technology Is Exploding… |
| `weather-news.mp4` | Weather News |

## GitHub / Vercel limits

- **GitHub** rejects any single file over **100MB**. All portfolio clips in `public/videos/` are whitelisted via `!public/videos/*.mp4`.
- Optional: override the weather clip URL with `VITE_WEATHER_VIDEO_URL` in Vercel environment variables.
