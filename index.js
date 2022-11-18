import { Router } from 'itty-router'

// Create a new router
const router = Router()

// All in one
router.get('/timetable/:season/:week/:location', async ({ params }) => {
    if (params.season == 'semester') {
        // Semester Routes
        if (params.week == 'week') {
            // Week
            if (params.location == 'residence') {
                // Residence
                const result = await semester.get('residence_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                })
            } else if (params.location == 'shuttlecoke_i') {
                // Shuttlecoke inbound buses -> TO Residence
                const result = await semester.get('shuttlecoke_i_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'shuttlecoke_o') {
                // Shuttlecoke outbound buses -> To subway stn, yesulin apt, etc...
                const result = await semester.get('shuttlecoke_o_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'subway') {
                // Hanyang University @ Ansan Station
                const result = await semester.get('subway_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'yesulin') {
                // Yesulin Apt.
                const result = await semester.get('yesulin_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'jungang') {
                // Jungang Station
                const result = await semester.get('jungang_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                })
            } else {
                // Error
                return new Response(
                    JSON.stringify({
                        error: `invalid parameter: ${params.location}`,
                    }),
                    {
                        status: 404,
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        },
                    }
                )
            }
        } else if (params.week == 'weekend') {
            // Weekend
            if (params.location == 'residence') {
                // Residence
                const result = await semester.get('residence_weekend')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'shuttlecoke_i') {
                // Shuttlecoke inbound buses -> TO Residence
                const result = await semester.get('shuttlecoke_i_weekend')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'shuttlecoke_o') {
                // Shuttlecoke outbound buses -> To subway stn, yesulin apt, etc...
                const result = await semester.get('shuttlecoke_o_weekend')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'subway') {
                // Hanyang University @ Ansan Station
                const result = await semester.get('subway_weekend')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'yesulin') {
                // Yesulin Apt.
                const result = await semester.get('yesulin_weekend')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'jungang') {
                // Jungang Station
                const result = await semester.get('jungang_weekend')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                })
            } else {
                // Error
                return new Response(
                    JSON.stringify({
                        error: `invalid parameter: ${params.location}`,
                    }),
                    {
                        status: 404,
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        },
                    }
                )
            }
        } else {
            // Error
            return new Response(
                JSON.stringify({ error: `invalid parameter: ${params.week}` }),
                {
                    status: 404,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                }
            )
        }
    } else if (params.season == 'vacation_session') {
        // Vacation Session Routes
        if (params.week == 'week') {
            // Week
            if (params.location == 'residence') {
                // Residence
                const result = await vacation_session.get('residence_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'shuttlecoke_i') {
                // Shuttlecoke inbound buses -> TO Residence
                const result = await vacation_session.get('shuttlecoke_i_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'shuttlecoke_o') {
                // Shuttlecoke outbound buses -> To subway stn, yesulin apt, etc...
                const result = await vacation_session.get('shuttlecoke_o_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'subway') {
                // Hanyang University @ Ansan Station
                const result = await vacation_session.get('subway_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'yesulin') {
                // Yesulin Apt.
                const result = await vacation_session.get('yesulin_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'jungang') {
                // Jungang Station
                const result = await vacation_session.get('jungang_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                })
            } else {
                // Error
                return new Response(
                    JSON.stringify({
                        error: `invalid parameter: ${params.location}`,
                    }),
                    {
                        status: 404,
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        },
                    }
                )
            }
        } else if (params.week == 'weekend') {
            // Weekend
            if (params.location == 'residence') {
                // Residence
                const result = await vacation_session.get('residence_weekend')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'shuttlecoke_i') {
                // Shuttlecoke inbound buses -> TO Residence
                const result = await vacation_session.get(
                    'shuttlecoke_i_weekend'
                )

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'shuttlecoke_o') {
                // Shuttlecoke outbound buses -> To subway stn, yesulin apt, etc...
                const result = await vacation_session.get(
                    'shuttlecoke_o_weekend'
                )

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'subway') {
                // Hanyang University @ Ansan Station
                const result = await vacation_session.get('subway_weekend')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'yesulin') {
                // Yesulin Apt.
                const result = await vacation_session.get('yesulin_weekend')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'jungang') {
                // Jungang Station
                const result = await vacation_session.get('jungang_weekend')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                })
            } else {
                // Error
                return new Response(
                    JSON.stringify({
                        error: `invalid parameter: ${params.location}`,
                    }),
                    {
                        status: 404,
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        },
                    }
                )
            }
        } else {
            // Error
            return new Response(
                JSON.stringify({ error: `invalid parameter: ${params.week}` }),
                {
                    status: 404,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                }
            )
        }
    } else if (params.season == 'vacation') {
        // Vacation Routes
        if (params.week == 'week') {
            // Week
            if (params.location == 'residence') {
                // Residence
                const result = await vacation.get('residence_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'shuttlecoke_i') {
                // Shuttlecoke inbound buses -> TO Residence
                const result = await vacation.get('shuttlecoke_i_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'shuttlecoke_o') {
                // Shuttlecoke outbound buses -> To subway stn, yesulin apt, etc...
                const result = await vacation.get('shuttlecoke_o_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'subway') {
                // Hanyang University @ Ansan Station
                const result = await vacation.get('subway_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'yesulin') {
                // Yesulin Apt.
                const result = await vacation.get('yesulin_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'jungang') {
                // Jungang Station
                const result = await vacation.get('jungang_week')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                })
            } else {
                // Error
                return new Response(
                    JSON.stringify({
                        error: `invalid parameter: ${params.location}`,
                    }),
                    {
                        status: 404,
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        },
                    }
                )
            }
        } else if (params.week == 'weekend') {
            // Weekend
            if (params.location == 'residence') {
                // Residence
                const result = await vacation.get('residence_weekend')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'shuttlecoke_i') {
                // Shuttlecoke inbound buses -> TO Residence
                const result = await vacation.get('shuttlecoke_i_weekend')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'shuttlecoke_o') {
                // Shuttlecoke outbound buses -> To subway stn, yesulin apt, etc...
                const result = await vacation.get('shuttlecoke_o_weekend')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'subway') {
                // Hanyang University @ Ansan Station
                const result = await vacation.get('subway_weekend')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'yesulin') {
                // Yesulin Apt.
                const result = await vacation.get('yesulin_weekend')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            } else if (params.location == 'jungang') {
                // Jungang Station
                const result = await vacation.get('jungang_weekend')

                return new Response(result, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                })
            } else {
                // Error
                return new Response(
                    JSON.stringify({
                        error: `invalid parameter: ${params.location}`,
                    }),
                    {
                        status: 404,
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        },
                    }
                )
            }
        } else {
            // Error
            return new Response(
                JSON.stringify({ error: `invalid parameter: ${params.week}` }),
                {
                    status: 404,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                }
            )
        }
    } else {
        // Error
        return new Response(
            JSON.stringify({ error: `invalid parameter: ${params.season}` }),
            {
                status: 404,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            }
        )
    }
})

// Disallow search engine indexing
router.get('/timetable/robots.txt', () => {
    return new Response('User-agent: *\nDisallow: /', {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        },
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
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
)

/*
This snippet ties our worker to the router we defined above, all incoming requests
are passed to the router where your routes are called and the response is sent.
*/
addEventListener('fetch', e => {
    e.respondWith(router.handle(e.request))
})
