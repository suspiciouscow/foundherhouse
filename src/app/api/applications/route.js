import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()
    
    const { data, error } = await supabase
      .from('applications')
      .insert({
        ...body,
        submitted_at: new Date().toISOString(),
        status: 'pending'
      })
      .select()
    
    if (error) throw error
    
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