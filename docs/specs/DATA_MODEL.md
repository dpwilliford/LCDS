# LCDS Data Model Specification

## Phase 1 Principle

Use a practical import-first model. Preserve enough imported data to make records searchable and reportable before attempting authority control or deep normalization.

## Item

Suggested fields:

- id
- source_record_id
- title
- subtitle
- sort_title
- media_type
- year
- date_text
- library_collection
- subject_collection
- series
- franchise
- volume_number
- creators_display
- contributors_display
- publisher
- studio
- developer
- platform
- genre
- subgenre
- topics
- summary
- rating
- critical_commentary
- sales_data
- popularity_data
- checkout_count
- checkout_count_month
- checkout_count_year
- enrichment_status
- enrichment_notes
- import_batch_id
- created_at
- updated_at

## ImportBatch

- id
- filename
- imported_at
- total_rows
- accepted_rows
- rejected_rows
- field_mapping_json
- notes

## DataIssue

- id
- item_id, nullable
- import_batch_id, nullable
- issue_type
- severity
- message
- status
- created_at
- resolved_at

## Later Tables

Do not implement these unless needed by a later phase:

- Creator
- ContributorRole
- WorkRelation
- EnrichmentBatch
- EnrichmentResult
- SourceReference
- SavedReport
- ControlledVocabularyTerm

## Phase 1 Rule

Use flexible text fields first. Normalize creators, contributors, franchises, and subjects later after real imported data reveals actual patterns.
