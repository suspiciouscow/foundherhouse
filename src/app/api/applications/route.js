import clientPromise from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()
    const client = await clientPromise
    const db = client.db('foundher')
    
    const application = {
      ...body,
      submittedAt: new Date(),
      status: 'pending'
    }
    
    const result = await db.collection('applications').insertOne(application)
    
    return NextResponse.json({
      message: 'Application submitted successfully',
      applicationId: result.insertedId
    })

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}