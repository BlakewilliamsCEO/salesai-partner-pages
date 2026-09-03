-- Vertical configuration for the agent-builder funnel.
--
-- verticals.json is the serialized form of these tables. The page consumes
-- either: today it fetches the JSON file; moving to Postgres means an endpoint
-- that SELECTs v_funnel_vertical_json and nothing in the front end changes.

CREATE TABLE funnel_verticals (
  vertical_id     TEXT PRIMARY KEY,            -- 'hvac' | 'electrical' | 'staffing'
  title           TEXT NOT NULL,
  partner         TEXT,                        -- topbar co-brand; NULL renders SalesAi alone
  source          TEXT NOT NULL,               -- attribution tag written into the CX payload
  plan            TEXT NOT NULL,
  system_noun     TEXT NOT NULL,               -- 'dispatch software' | 'ATS'
  art_cool        TEXT NOT NULL,               -- banner artwork, standard steps
  art_warm        TEXT NOT NULL,               -- banner artwork, hot steps (demo call, ready)
  offer_h1        TEXT NOT NULL,
  offer_p         TEXT NOT NULL,
  seats_label     TEXT NOT NULL DEFAULT 'Seats left',
  seats_left      TEXT NOT NULL,
  seats_total     TEXT NOT NULL,
  credit_cta      TEXT NOT NULL,
  claim_size_q    TEXT NOT NULL,
  claim_size_pre  TEXT NOT NULL,
  claim_size_post TEXT NOT NULL,
  claim_finish    TEXT NOT NULL,
  build_read_d    TEXT NOT NULL,
  build_kb_d      TEXT NOT NULL,
  build_playbook  TEXT NOT NULL,
  build_play_d    TEXT NOT NULL,
  agents_p        TEXT NOT NULL,
  agents_bio_ph   TEXT NOT NULL,
  demo_company    TEXT NOT NULL,
  demo_agent      TEXT NOT NULL,
  demo_agent_male TEXT NOT NULL,
  demo_audience   TEXT NOT NULL,               -- 'customers' | 'candidates'
  demo_roleplay   TEXT NOT NULL,
  demo_preview    TEXT NOT NULL,               -- {company}/{agent} template for the sample line
  integr_h2       TEXT NOT NULL,
  integr_p        TEXT NOT NULL,
  integr_always   TEXT NOT NULL,
  sends_label     TEXT NOT NULL,               -- 'Sends jobs to' | 'Sends candidates to'
  checkout_h2     TEXT NOT NULL,
  checkout_lock   TEXT NOT NULL
);

CREATE TABLE funnel_offer_bullets (
  vertical_id TEXT     NOT NULL REFERENCES funnel_verticals ON DELETE CASCADE,
  position    SMALLINT NOT NULL,
  bullet      TEXT     NOT NULL,
  PRIMARY KEY (vertical_id, position)
);

-- The vertical's top use cases: what the agent card multi-select offers.
CREATE TABLE funnel_use_cases (
  vertical_id TEXT     NOT NULL REFERENCES funnel_verticals ON DELETE CASCADE,
  position    SMALLINT NOT NULL,
  use_case_id TEXT     NOT NULL,               -- stable key written into the payload
  name        TEXT     NOT NULL,
  descr       TEXT     NOT NULL,
  icon        TEXT     NOT NULL,               -- key in the page's inline icon set
  tone        TEXT     NOT NULL DEFAULT '',
  PRIMARY KEY (vertical_id, use_case_id),
  UNIQUE (vertical_id, position)
);

-- The systems this kind of company dispatches from / recruits in.
CREATE TABLE funnel_integrations (
  vertical_id    TEXT     NOT NULL REFERENCES funnel_verticals ON DELETE CASCADE,
  position       SMALLINT NOT NULL,
  integration_id TEXT     NOT NULL,            -- 'jobber' | 'bullhorn' | ...
  name           TEXT     NOT NULL,
  doc            TEXT     NOT NULL,            -- 'Bullhorn REST API · candidate + note objects'
  PRIMARY KEY (vertical_id, integration_id),
  UNIQUE (vertical_id, position)
);

-- Where each captured field lands in each integration.
CREATE TABLE funnel_field_map (
  vertical_id    TEXT NOT NULL,
  integration_id TEXT NOT NULL,
  field_key      TEXT NOT NULL CHECK (field_key IN
                   ('name','email','phone','outcome','type','urgency','recording','summary','sentiment')),
  target_path    TEXT NOT NULL,                -- 'candidate.firstName / lastName'
  PRIMARY KEY (vertical_id, integration_id, field_key),
  FOREIGN KEY (vertical_id, integration_id)
    REFERENCES funnel_integrations (vertical_id, integration_id) ON DELETE CASCADE
);

CREATE TABLE funnel_demo_script (
  vertical_id TEXT     NOT NULL REFERENCES funnel_verticals ON DELETE CASCADE,
  position    SMALLINT NOT NULL,
  speaker     TEXT     NOT NULL CHECK (speaker IN ('agent','you')),
  line        TEXT     NOT NULL,
  PRIMARY KEY (vertical_id, position)
);

CREATE TABLE funnel_demo_pills (
  vertical_id TEXT     NOT NULL REFERENCES funnel_verticals ON DELETE CASCADE,
  position    SMALLINT NOT NULL,
  label       TEXT     NOT NULL,
  PRIMARY KEY (vertical_id, position)
);

CREATE TABLE funnel_kb_items (
  vertical_id TEXT     NOT NULL REFERENCES funnel_verticals ON DELETE CASCADE,
  position    SMALLINT NOT NULL,
  item        TEXT     NOT NULL,
  PRIMARY KEY (vertical_id, position)
);

-- Sizing line: revenue band -> expected call volume.
CREATE TABLE funnel_rev_calls (
  vertical_id   TEXT NOT NULL REFERENCES funnel_verticals ON DELETE CASCADE,
  revenue_band  TEXT NOT NULL,                 -- 'Under $1M' | '$1–2M' | ...
  calls_per_day TEXT NOT NULL,                 -- display string, '20–32'
  PRIMARY KEY (vertical_id, revenue_band)
);

-- The optional payload toggles on the Connect step, with vertical examples.
CREATE TABLE funnel_push_toggles (
  vertical_id TEXT     NOT NULL REFERENCES funnel_verticals ON DELETE CASCADE,
  position    SMALLINT NOT NULL,
  toggle_key  TEXT     NOT NULL,               -- type|urgency|summary|recording|sentiment
  title       TEXT     NOT NULL,
  example     TEXT     NOT NULL,
  icon        TEXT     NOT NULL,
  tone        TEXT     NOT NULL DEFAULT '',
  short_name  TEXT     NOT NULL,               -- how it reads in the Ready summary
  PRIMARY KEY (vertical_id, toggle_key)
);

-- The field-map preview rows on the Connect step.
CREATE TABLE funnel_map_rows (
  vertical_id TEXT     NOT NULL REFERENCES funnel_verticals ON DELETE CASCADE,
  position    SMALLINT NOT NULL,
  label       TEXT     NOT NULL,               -- 'Customer name' | 'Candidate name'
  field_key   TEXT     NOT NULL,
  always      BOOLEAN  NOT NULL DEFAULT FALSE,
  PRIMARY KEY (vertical_id, position)
);

-- Reassemble one vertical as the JSON shape verticals.json holds, so the
-- endpoint is a one-liner: SELECT config FROM v_funnel_vertical_json WHERE ...
CREATE VIEW v_funnel_vertical_json AS
SELECT v.vertical_id,
       jsonb_build_object(
         'title', v.title, 'partner', v.partner, 'source', v.source, 'plan', v.plan,
         'systemNoun', v.system_noun,
         'art', jsonb_build_object('cool', v.art_cool, 'warm', v.art_warm),
         'offer', jsonb_build_object(
            'h1', v.offer_h1, 'p', v.offer_p,
            'bullets', (SELECT jsonb_agg(bullet ORDER BY position) FROM funnel_offer_bullets b WHERE b.vertical_id = v.vertical_id),
            'seatsLabel', v.seats_label, 'seatsLeft', v.seats_left, 'seatsTotal', v.seats_total),
         'demo', jsonb_build_object(
            'company', v.demo_company, 'agent', v.demo_agent, 'agentMale', v.demo_agent_male,
            'audience', v.demo_audience, 'rolePlay', v.demo_roleplay, 'preview', v.demo_preview,
            'script', (SELECT jsonb_agg(jsonb_build_array(speaker, line) ORDER BY position) FROM funnel_demo_script s WHERE s.vertical_id = v.vertical_id),
            'pills', (SELECT jsonb_agg(label ORDER BY position) FROM funnel_demo_pills pl WHERE pl.vertical_id = v.vertical_id)),
         'creditCta', v.credit_cta,
         'claim', jsonb_build_object(
            'sizeQ', v.claim_size_q, 'sizePre', v.claim_size_pre, 'sizePost', v.claim_size_post,
            'finishLine', v.claim_finish,
            'revCalls', (SELECT jsonb_object_agg(revenue_band, calls_per_day) FROM funnel_rev_calls r WHERE r.vertical_id = v.vertical_id)),
         'build', jsonb_build_object(
            'readD', v.build_read_d, 'kbD', v.build_kb_d, 'playbook', v.build_playbook, 'playD', v.build_play_d,
            'kb', (SELECT jsonb_agg(item ORDER BY position) FROM funnel_kb_items k WHERE k.vertical_id = v.vertical_id)),
         'agents', jsonb_build_object('p', v.agents_p, 'bioPh', v.agents_bio_ph),
         'usecases', (SELECT jsonb_agg(jsonb_build_object('id', use_case_id, 'name', name, 'desc', descr, 'icon', icon, 'tone', tone) ORDER BY position)
                      FROM funnel_use_cases u WHERE u.vertical_id = v.vertical_id),
         'integr', jsonb_build_object(
            'h2', v.integr_h2, 'p', v.integr_p, 'alwaysLine', v.integr_always, 'sendsLabel', v.sends_label,
            'fsms', (SELECT jsonb_agg(jsonb_build_object('id', integration_id, 'name', name) ORDER BY position) FROM funnel_integrations i WHERE i.vertical_id = v.vertical_id),
            'fsmDoc', (SELECT jsonb_object_agg(integration_id, doc) FROM funnel_integrations i WHERE i.vertical_id = v.vertical_id),
            'fsmFields', (SELECT jsonb_object_agg(integration_id, fields) FROM (
                SELECT integration_id, jsonb_object_agg(field_key, target_path) AS fields
                FROM funnel_field_map fm WHERE fm.vertical_id = v.vertical_id GROUP BY integration_id) sub),
            'toggles', (SELECT jsonb_agg(jsonb_build_array(toggle_key, title, example, icon, tone) ORDER BY position) FROM funnel_push_toggles t WHERE t.vertical_id = v.vertical_id),
            'mapRows', (SELECT jsonb_agg(CASE WHEN always THEN jsonb_build_array(label, field_key, TRUE) ELSE jsonb_build_array(label, field_key) END ORDER BY position) FROM funnel_map_rows m WHERE m.vertical_id = v.vertical_id),
            'pushNames', (SELECT jsonb_object_agg(toggle_key, short_name) FROM funnel_push_toggles t WHERE t.vertical_id = v.vertical_id)),
         'checkout', jsonb_build_object('h2', v.checkout_h2, 'lockLine', v.checkout_lock)
       ) AS config
FROM funnel_verticals v;
