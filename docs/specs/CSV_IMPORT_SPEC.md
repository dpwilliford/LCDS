# CSV Import Specification

## Workflow

1. Upload CSV
2. Parse locally
3. Preview
4. Map columns
5. Validate
6. Confirm
7. Import
8. Create ImportBatch
9. Create DataIssue records

## Rules

- Do not discard unmapped columns
- Do not overwrite existing records
- Allow incomplete data
- Track source batch

## Required Fields

Only title is strictly required.

## Duplicate Detection

Flag only, do not merge.

Signals:

- same normalized title and year
- same title and creator

## Validation

Use Zod. Display rejected rows clearly.
