import clientPromise from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function POST(req) {
  console.log('API route started')
  
  try {
    console.log('Request headers:', Object.fromEntries(req.headers.entries()))
    console.log('Request method:', req.method)
    
    let body
    try {
      const text = await req.text() // Get raw request body
      console.log('Raw request body:', text)
      body = JSON.parse(text)
      console.log('Parsed request body:', body)
    } catch (parseError) {
      console.error('JSON parsing error:', parseError)
      return NextResponse.json(
        { error: 'Invalid JSON format in request body' },
        { status: 400 }
      )
    }

    const client = await clientPromise
    console.log('MongoDB connected')
    
    const db = client.db('foundher')
    const application = {
      ...body,
      submittedAt: new Date(),
      status: 'pending',
      environment: process.env.NODE_ENV
    }
    
    const result = await db
      .collection('applications')
      .insertOne(application)
    
    console.log('MongoDB response:', result)
    
    return NextResponse.json({
      message: 'Application submitted successfully',
      applicationId: result.insertedId
    })

  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Server error occurred' },
      { status: 500 }
    )
  }
}