-- Migration: Add email column to applications table
-- Date: 2024

ALTER TABLE applications
ADD COLUMN email TEXT NOT NULL;

