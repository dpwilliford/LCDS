# LCDS Roadmap

## Phase 0: Planning and Project Setup

Deliverables:

- product brief
- data model
- CSV import rules
- UI map
- reporting specification
- visualization specification
- enrichment workflow rules
- Claude Code work rules

## Phase 1: Local MVP

Goal: working local browser app.

Features:

- CSV upload
- field mapping
- import preview
- SQLite storage
- searchable records table
- advanced filters
- record detail pages
- manual editing
- overview dashboard
- basic reports
- Chart.js visualizations
- data issues panel

No Claude enrichment in Phase 1.

## Phase 2: Reporting and Visualization System

Features:

- saved reports
- custom report builder
- plain-language report interface
- reusable filters
- collection strength/gap analysis
- checkout/popularity analytics
- missing-data reports
- enrichment-readiness reports
- exportable report summaries
- possible ECharts integration for larger visualizations

## Phase 3: Enrichment Queue

Features:

- create enrichment batches up to 200 records
- export batch packets as JSON/CSV
- track sub-batches
- enrichment status per record
- batch status dashboard
- activity log
- failed-task handling
- import returned enrichment files
- validate returned data
- proposed changes review panel
- accept/reject/edit controls

Claude produces proposed data only. The app saves only approved changes.

## Phase 4: Claude-Assisted Research Workflow

Features:

- standardized Claude task packets
- standardized return schema
- source URL tracking
- confidence notes
- prompt logging
- partial result imports
- resume failed batches
- enrichment throughput reporting

## Phase 5: Authority and Normalization Layer

Features:

- duplicate detection
- creator normalization
- publisher/studio/developer normalization
- subject/genre cleanup
- controlled vocabulary support
- merge suggestions
- alternate titles
- franchise/series linking
- adaptation relationships

## Phase 6: Advanced Discovery and Search

Features:

- full-text search improvements
- faceted browsing
- relevance ranking
- saved searches
- complex filters
- possible Meilisearch, Typesense, Solr, or Elasticsearch integration

## Phase 7: Advanced Visualization and Research Tools

Features:

- creator networks
- franchise timelines
- genre/media heatmaps
- publication/release timelines
- collection gap maps
- cross-media comparison dashboards
- exportable visual reports

## Phase 8: Direct API Integration

Features:

- direct Anthropic API integration
- strict rate limits
- cost controls
- daily/monthly quotas
- batch scheduling
- retry controls
- API usage reporting
- automatic pause on failures or high cost

## Phase 9: Packaging and Maintainability

Features:

- one-command local startup
- backup/export tools
- database backup
- settings page
- documentation
- test suite
- changelog
- recovery instructions
- possible SQLite-to-Postgres migration path
