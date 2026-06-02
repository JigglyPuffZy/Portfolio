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

- **GitHub** rejects any single file over **100MB**. The three LED clips (~85–90MB each) can be committed. `weather-news.mp4` (~210MB) is listed in `.gitignore` and must be hosted elsewhere or compressed below 100MB.
- After compressing weather, remove `public/videos/weather-news.mp4` from `.gitignore` and commit the smaller file.

## Weather video on production

Either:

1. Compress `weather-news.mp4` to under 100MB (HandBrake, etc.), remove it from `.gitignore`, commit, and redeploy, or  
2. Upload to a CDN and set in Vercel → **Settings → Environment Variables**:

   `VITE_WEATHER_VIDEO_URL` = `https://your-cdn.com/weather-news.mp4`

Then redeploy.
