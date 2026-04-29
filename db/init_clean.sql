-- Tablas

CREATE TABLE IF NOT EXISTS public.session (
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);

CREATE TABLE IF NOT EXISTS public.author (
    id_author SERIAL PRIMARY KEY,
    name character varying(50),
    last_name character varying(50),
    age integer,
    email character varying(50),
    phone character varying(15),
    fecha_nacimiento date,
    username character varying,
    password character varying
);

CREATE TABLE IF NOT EXISTS public.post (
    id_post SERIAL PRIMARY KEY,
    title text,
    date timestamp without time zone,
    img text,
    id_author integer REFERENCES public.author(id_author) NOT VALID
);

-- Constraints de session

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);

CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON public.session USING btree (expire);

-- Datos

INSERT INTO public.author (id_author, name, last_name, age, email, phone, fecha_nacimiento, username, password) VALUES
    (3, 'CC',      'CC',     23, 'cc@gmail.com',       '+52 4587985654', '2003-05-30', 'CC',      '123'),
    (4, 'Skai',    'S',      13, 'skai@gmail.com',     '+45 4587452154', '2013-06-02', 'Skai',    '123'),
    (5, 'Hamster', 'G',      30, 'hamsterg@gmail.com', '+75 4521025412', '1996-04-02', 'Hamster', '123'),
    (6, 'Seal',    'Master', 25, 'seal@seal.seal',     '+00 0000000000', '2001-01-02', 'Seal',    '123')
ON CONFLICT DO NOTHING;

INSERT INTO public.post (id_post, title, date, img, id_author) VALUES
    (1,  'Un perrito',       '2026-02-26', './src/assets/perro1.jpg',   3),
    (2,  'Un conejo',        '2026-02-26', './src/assets/bunny.jpg',    4),
    (3,  'Un hamster',       '2026-02-26', './src/assets/hamster.jpg',  5),
    (4,  'Sra. Kippling',    '2026-02-26', './src/assets/varano.jpg',   6),
    (5,  'Un gato',          '2026-02-26', './src/assets/gato.jpg',     3),
    (6,  'Otro perrito',     '2026-02-26', './src/assets/perro2.jpg',   4),
    (7,  'Otro conejo',      '2026-02-26', './src/assets/conejo2.jpg',  5),
    (8,  'Otro hamster',     '2026-02-26', './src/assets/hamster2.jpg', 6),
    (9,  'Sra. Kippling OG', '2026-02-26', './src/assets/varano2.jpg',  3),
    (10, 'Otro gato',        '2026-02-26', './src/assets/gato2.jpg',    4)
ON CONFLICT DO NOTHING;

SELECT pg_catalog.setval('public.author_id_author_seq', 6, true);
SELECT pg_catalog.setval('public.post_id_seq', 19, true);
