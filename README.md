# BusHanyang Timetable API

This is the simple router that implements the timetable API for Hanyang University shuttle bus.

### How it works

The API is running in Cloudflare Workers.
Timetables are stored in KV, in JSON type.
The API accesses KV storage directly to fetch the timetable.


If the URI matches, we return a proper timetable in JSON. 
Else, it will return a JSON with an error message.


### How to test/contribute

1. Get Cloudflare account access from administrator.
2. Run `npm install`.
3. Run `npm run dev`. This will make you test the routers in localhost.
4. If it works, send a PR!