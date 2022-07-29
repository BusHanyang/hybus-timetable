# BusHanyang Timetable API

This is the simple router that implements the timetable API for Hanyang University shuttle bus.

### How it works

The API is running in Cloudflare Workers.
Timetables are stored in KV, in JSON type.
The API accesses KV storage directly to fetch the timetable.


If the URI matches, we return a proper timetable in JSON. 
Else, it will return a JSON with an error message.


### URI Schemes

Basic: `/{season}/{week}/{location}`

**`{season}`**
* `semester`: Semester period
* `vacation_session`: Summer/Winter course period
* `vacation`: Vacation period


**`{week}`**
* `week`: During weekdays
* `weekend`: During weekend


**`{location}`**
* `subway`: Bus Stop at Hanyang University at Ansan Station (Line No.4)
* `yesulin`: Bus Stop at Yesulin Apt.
* `shuttlecoke_o`: 'Shuttlecoke' Bus Stop. Bus Stop for outbound buses (To yesulin and HYU@Ansan Stn.)
* `shuttlecoke_i`: 'Shuttlecoke' Bus Stop, Bus Stop for inbound buses (From yesulin and HYU@Ansan Stn.)
* `residence`: Bus Stop at the dormitory

Any routes that do not match `/{season}/{week}/{location}` will throw an error JSON.


### Bus Types in JSON

* `DH`: The bus goes directly to HYU@Ansan Stn.
* `DY`: The bus goes directly to Yesulin Apt.
* `C`: Circle route bus. (Shuttlecoke(Outbound) -> HYU@Ansan Stn -> Yesulin Apt. -> Shuttlecoke(Inbound) -> Residence)
* `R`: The bus goes to the dormitory.
* Empty String: Goes directly to Shuttlecoke(Inbound).
* `NA`: Not specified, the bus comes on time, but goes nowhere. (CAN NOT RIDE)


### How to test/contribute

1. Get Cloudflare account access from administrator.
2. Run `npm install`.
3. Run `npm run dev`. This will make you test the routers in localhost.
4. If it works, send a PR!