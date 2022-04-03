import { Router } from 'itty-router'

// Create a new router
const router = Router()

// Semester Routes
// // week
router.get('/semester/week/residence', async () => {
    const result = await semester.get('residence_week')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/semester/week/shuttlecoke_i', async () => {
    const result = await semester.get('shuttlecoke_i_week')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/semester/week/shuttlecoke_o', async () => {
    const result = await semester.get('shuttlecoke_o_week')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/semester/week/subway', async () => {
    const result = await semester.get('subway_week')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/semester/week/yesulin', async () => {
    const result = await semester.get('yesulin_week')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

// // weekend
router.get('/semester/weekend/residence', async () => {
    const result = await semester.get('residence_weekend')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/semester/weekend/shuttlecoke_i', async () => {
    const result = await semester.get('shuttlecoke_i_weekend')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/semester/weekend/shuttlecoke_o', async () => {
    const result = await semester.get('shuttlecoke_o_weekend')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/semester/weekend/subway', async () => {
    const result = await semester.get('subway_weekend')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/semester/weekend/yesulin', async () => {
    const result = await semester.get('yesulin_weekend')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

// Vacation Routes
// // week
router.get('/vacation/week/residence', async () => {
    const result = await vacation.get('residence_week')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/vacation/week/shuttlecoke_i', async () => {
    const result = await vacation.get('shuttlecoke_i_week')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/vacation/week/shuttlecoke_o', async () => {
    const result = await vacation.get('shuttlecoke_o_week')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/vacation/week/subway', async () => {
    const result = await vacation.get('subway_week')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/vacation/week/yesulin', async () => {
    const result = await vacation.get('yesulin_week')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

// // weekend
router.get('/vacation/weekend/residence', async () => {
    const result = await vacation.get('residence_weekend')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/vacation/weekend/shuttlecoke_i', async () => {
    const result = await vacation.get('shuttlecoke_i_weekend')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/vacation/weekend/shuttlecoke_o', async () => {
    const result = await vacation.get('shuttlecoke_o_weekend')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/vacation/weekend/subway', async () => {
    const result = await vacation.get('subway_weekend')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/vacation/weekend/yesulin', async () => {
    const result = await vacation.get('yesulin_weekend')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

// Vacation Session Routes
// // week
router.get('/vacation_session/week/residence', async () => {
    const result = await vacation_session.get('residence_week')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/vacation_session/week/shuttlecoke_i', async () => {
    const result = await vacation_session.get('shuttlecoke_i_week')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/vacation_session/week/shuttlecoke_o', async () => {
    const result = await vacation_session.get('shuttlecoke_o_week')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/vacation_session/week/subway', async () => {
    const result = await vacation_session.get('subway_week')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/vacation_session/week/yesulin', async () => {
    const result = await vacation_session.get('yesulin_week')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

// // weekend
router.get('/vacation_session/weekend/residence', async () => {
    const result = await vacation_session.get('residence_weekend')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/vacation_session/weekend/shuttlecoke_i', async () => {
    const result = await vacation_session.get('shuttlecoke_i_weekend')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/vacation_session/weekend/shuttlecoke_o', async () => {
    const result = await vacation_session.get('shuttlecoke_o_weekend')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/vacation_session/weekend/subway', async () => {
    const result = await vacation_session.get('subway_weekend')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

router.get('/vacation_session/weekend/yesulin', async () => {
    const result = await vacation_session.get('yesulin_weekend')

    return new Response(result, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
})

/*
This is the last route we define, it will match anything that hasn't hit a route we've defined
above, therefore it's useful as a 404 (and avoids us hitting worker exceptions, so make sure to include it!).

Visit any page that doesn't exist (e.g. /foobar) to see it in action.
*/
router.all(
    '*',
    () =>
        new Response(JSON.stringify({ error: 'not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        })
)

/*
This snippet ties our worker to the router we defined above, all incoming requests
are passed to the router where your routes are called and the response is sent.
*/
addEventListener('fetch', e => {
    e.respondWith(router.handle(e.request))
})
