import clientPromise from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()
    const client = await clientPromise
    console.log('MongoDB connected')
    
    const db = client.db('foundher')
    
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
    console.error('MongoDB error:', error)
    return NextResponse.json(
      { error: 'Database connection failed' },
      { status: 500 }
    )
  }
}