import clientPromise from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()
    
    // Basic validation
    if (!body.fullName || !body.email || !body.project || !body.about) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db('foundher') // Your database name
    
    // Add submission timestamp
    const application = {
      ...body,
      submittedAt: new Date(),
      status: 'pending'
    }
    
    const result = await db
      .collection('applications')
      .insertOne(application)
    
    return NextResponse.json({ 
      message: 'Application submitted successfully',
      applicationId: result.insertedId 
    })

  } catch (error) {
    console.error('Database Error:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}