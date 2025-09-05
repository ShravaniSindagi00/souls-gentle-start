Phase 0: Baseline & Foundation (Immediate) Goals:

Finalize DB schema and add migrations.
Centralize API layer: auth, users, therapists, appointments, blog.
Add global state (e.g. Zustand or Redux) for auth + user profile. Deliverables:
/api/auth (register, login, refresh)
/api/therapists (list, profile, availability)
/api/appointments (CRUD, status change) Acceptance:
Login → book → appointment stored in DB.

Phase 1: Therapist Discovery & Profiles Goals:

Improve therapist listing: filters (specialization, language, availability, price).
Add “empathic listeners” category (different role flag). Deliverables:
DB: add role differentiation or tag (listener vs therapist).
Endpoint: /api/therapists?specialization=&date=
UI: Faceted search + profile page enhancements (ratings, languages). Acceptance:
User filters and opens detailed profile; availability slots visible.

Phase 3: Google Meet Integration (Video Sessions) Goals:

Auto-create Google Meet link when appointment confirmed. Dependencies:
Google Workspace or OAuth credentials. Deliverables:
OAuth service + token storage (encrypted).
Endpoint: POST /api/appointments/:id/meet-link
Store meeting_link in appointments.
UI: show “Join Session” button 15 min before start. Acceptance:
Confirming appointment populates valid Meet URL.

Phase 4: Automated Meeting Notes (Transcription & Summaries) Goals:

After session: transcript + key points + suggested follow-up tasks. Approach:
Client browser captures audio (if allowed) OR rely on therapist local capture.
Upload audio → transcription (Whisper local or external API) → summarizer (LLM). Deliverables:
Table: session_notes (appointment_id, transcript_text, summary, action_items, sentiment).
Background job queue (BullMQ) for processing.
Endpoint: GET /api/appointments/:id/notes Acceptance:
Completed session shows structured summary within 5–10 min.

Phase 5: In-Browser Audio Calling (Fallback to Video) Goals:

WebRTC audio-only calls inside platform. Deliverables:
Signaling server (Socket.IO).
ICE/STUN config.
UI: Call panel (mute, end, timer).
Store call metadata in appointments. Acceptance:
Two users connect audio-only without leaving site

Phase 6: Wellness & Growth Recommendations Goals:

Personalized dashboard: mood trends, suggested activities, micro-goals. Data sources:
AI chat sentiment, appointment tags, self-reported mood check-ins. Deliverables:
Tables: mood_logs (user_id, mood_level, note), recommendation_events.
Recommendation engine (rule-based initial: if anxiety + low mood → breathing module).
UI widgets: streaks, next suggested action. Acceptance:
User logs mood → dashboard updates → tailored recommendations appear.

Phase 7: Social / Community Module Goals:

Lightweight community space (NOT full social network). Features:
Topic threads, psychoeducation posts, moderated replies. Deliverables:
Tables: community_topics, community_posts, community_replies, moderation_flags.
Roles: moderator actions (hide, flag).
Endpoint set: /api/community/\*
Basic abuse filters (profanity list). Acceptance:
User creates thread → others reply → moderator can hide.

Phase 8: AI Therapy Chatbot Upgrade (From Basic to Tiered Intelligence) Goals:

Replace simple logic with:
Context windows (last N messages).
Mode switching: grounding / coping / reflection / crisis.
Safety layer (self-harm detection → hotline message). Deliverables:
Table: ai_therapy_sessions (already) + ai_message_metadata (intent, sentiment, flags).
Service: classify + respond (pipeline: classify → plan → respond).
Streaming responses (Server-Sent Events). Acceptance:
User sends multi-turn query; bot maintains context and applies mode.

Phase 9: Production Hardening & Compliance Prep Goals:

Rate limiting, audit logging, encryption at rest (sensitive fields), privacy settings. Deliverables:
Logging: request + error + security events.
Table: audit_logs.
Secret rotation procedure. Acceptance:
Load test: 200 concurrent users stable.
Security scan passes (no critical findings).

Phase 10: Final QA & Launch Goals:

Cross-browser testing.
Mobile responsiveness.
Accessibility audit (WCAG AA basics).
Monitoring (Health check + uptime + error tracking). Deliverables:
Lighthouse report ≥ 85 perf, ≥ 95 accessibility.
Sentry + uptime monitor + DB backup script. Acceptance:
All core flows pass regression checklist.
