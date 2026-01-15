import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.')
}

const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Log what we're receiving
    console.log('Received application data:', JSON.stringify(body, null, 2))
    
    // Validate required fields
    if (!body.full_name || !body.age || !body.startup_description || 
        !body.impressive_thing || !body.fun_fact || !body.location_preference) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Prepare insert data - only include fields that might exist
    const insertData: any = {
      full_name: body.full_name,
      age: body.age,
      startup_description: body.startup_description,
      impressive_thing: body.impressive_thing,
      fun_fact: body.fun_fact,
      location_preference: body.location_preference,
    }

    // Only add optional fields if they have values
    if (body.links) {
      insertData.links = body.links
    }

    // Add timestamp if column exists
    insertData.submitted_at = new Date().toISOString()
    
    // Add status if column exists
    insertData.status = 'pending'

    console.log('Inserting data:', JSON.stringify(insertData, null, 2))

    const { data, error } = await supabase
      .from('applications')
      .insert(insertData)
      .select()

    if (error) {
      console.error('Supabase error:', error)
      console.error('Error details:', JSON.stringify(error, null, 2))
      return NextResponse.json(
        { 
          error: 'Database error', 
          details: error.message,
          hint: error.hint,
          code: error.code
        },
        { status: 500 }
      )
    }
    
    return NextResponse.json({
      message: 'Application submitted successfully',
      applicationId: data[0].id
    })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}