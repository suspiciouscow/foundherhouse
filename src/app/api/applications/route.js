import clientPromise from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()
    console.log('Form submission:', JSON.stringify(body, null, 2))
    
    const client = await clientPromise
    const db = client.db('foundher')
    
    const application = {
      ...body,
      submittedAt: new Date(),
      status: 'pending'
    }
    
    console.log('Application to be stored:', JSON.stringify(application, null, 2))
    
    const result = await db
      .collection('applications')
      .insertOne(application)
    
    console.log('MongoDB response:', JSON.stringify(result, null, 2))
    
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