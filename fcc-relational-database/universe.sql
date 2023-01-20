--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: biggest_countries_on_earth; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.biggest_countries_on_earth (
    name character varying(30) NOT NULL,
    telephone_code integer,
    world_cup_titles integer,
    biggest_countries_on_earth_id integer NOT NULL
);


ALTER TABLE public.biggest_countries_on_earth OWNER TO freecodecamp;

--
-- Name: biggest_countries_on_earth_biggest_countries_on_earth_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.biggest_countries_on_earth_biggest_countries_on_earth_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.biggest_countries_on_earth_biggest_countries_on_earth_id_seq OWNER TO freecodecamp;

--
-- Name: biggest_countries_on_earth_biggest_countries_on_earth_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.biggest_countries_on_earth_biggest_countries_on_earth_id_seq OWNED BY public.biggest_countries_on_earth.biggest_countries_on_earth_id;


--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(30) NOT NULL,
    has_life boolean NOT NULL,
    is_bayerl_here boolean,
    constellation text
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    planet_id integer NOT NULL,
    name character varying(30) NOT NULL,
    has_life boolean NOT NULL,
    orbital_period_days numeric
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    star_id integer NOT NULL,
    name character varying(30) NOT NULL,
    has_life boolean NOT NULL,
    orbital_period_years numeric
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    galaxy_id integer NOT NULL,
    name character varying(30) NOT NULL,
    distance_from_earth_ly numeric,
    constellation character varying(30)
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_id_seq OWNER TO freecodecamp;

--
-- Name: star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_id_seq OWNED BY public.star.star_id;


--
-- Name: biggest_countries_on_earth biggest_countries_on_earth_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.biggest_countries_on_earth ALTER COLUMN biggest_countries_on_earth_id SET DEFAULT nextval('public.biggest_countries_on_earth_biggest_countries_on_earth_id_seq'::regclass);


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_id_seq'::regclass);


--
-- Data for Name: biggest_countries_on_earth; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.biggest_countries_on_earth VALUES ('Russia', 7, 0, 1);
INSERT INTO public.biggest_countries_on_earth VALUES ('Canada', 1, 0, 2);
INSERT INTO public.biggest_countries_on_earth VALUES ('China', 86, 0, 3);
INSERT INTO public.biggest_countries_on_earth VALUES ('USA', 1, 0, 4);
INSERT INTO public.biggest_countries_on_earth VALUES ('Brazil', 55, 5, 5);


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (2, 'Andromeda Galaxy', false, false, 'Andromeda');
INSERT INTO public.galaxy VALUES (3, 'Triangulum Galaxy', false, false, 'Triangulum');
INSERT INTO public.galaxy VALUES (4, 'Sombrero Galaxy', true, false, 'Virgo');
INSERT INTO public.galaxy VALUES (5, 'Whirlpool Galaxy', false, false, 'Canes Venatici');
INSERT INTO public.galaxy VALUES (6, 'Large Magellanic Cloud', false, false, 'Dorado');
INSERT INTO public.galaxy VALUES (7, 'Messier 110', false, false, 'Andromeda');
INSERT INTO public.galaxy VALUES (1, 'Milky Way', true, true, 'Sagittarius');


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 1, 'Moon', false, 27);
INSERT INTO public.moon VALUES (2, 5, 'Phobos', false, 0.33);
INSERT INTO public.moon VALUES (3, 5, 'Deimos', false, 1.25);
INSERT INTO public.moon VALUES (4, 6, 'Io', false, 1.75);
INSERT INTO public.moon VALUES (5, 6, 'Europa', true, 3.54);
INSERT INTO public.moon VALUES (6, 6, 'Ganymede', false, 7.16);
INSERT INTO public.moon VALUES (7, 6, 'Callisto', false, 17);
INSERT INTO public.moon VALUES (8, 7, 'Mimas', false, 1);
INSERT INTO public.moon VALUES (9, 7, 'Enceladus', false, 1.37);
INSERT INTO public.moon VALUES (10, 7, 'Tethys', false, 1.87);
INSERT INTO public.moon VALUES (11, 7, 'Rhea', false, 4.5);
INSERT INTO public.moon VALUES (12, 7, 'Titan', true, 16);
INSERT INTO public.moon VALUES (13, 7, 'Dione', false, 2.75);
INSERT INTO public.moon VALUES (14, 7, 'Iapetus', false, 79);
INSERT INTO public.moon VALUES (15, 8, 'Miranda', false, 1.41);
INSERT INTO public.moon VALUES (16, 8, 'Ariel', false, 2.5);
INSERT INTO public.moon VALUES (17, 8, 'Umbriel', false, 4.12);
INSERT INTO public.moon VALUES (18, 8, 'Titania', false, 8.7);
INSERT INTO public.moon VALUES (19, 8, 'Oberon', false, 13);
INSERT INTO public.moon VALUES (20, 9, 'Proteus', false, 1.12);
INSERT INTO public.moon VALUES (21, 9, 'Larissa', true, 0.54);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 1, 'Earth', true, 1);
INSERT INTO public.planet VALUES (2, 1, 'Mercury', false, 0.22);
INSERT INTO public.planet VALUES (4, 1, 'Venus', false, 0.62);
INSERT INTO public.planet VALUES (5, 1, 'Mars', true, 1.88);
INSERT INTO public.planet VALUES (6, 1, 'Jupiter', false, 12);
INSERT INTO public.planet VALUES (7, 1, 'Saturn', false, 29);
INSERT INTO public.planet VALUES (8, 1, 'Uranus', false, 84);
INSERT INTO public.planet VALUES (9, 1, 'Neptune', false, 165);
INSERT INTO public.planet VALUES (10, 1, 'Pluto', true, 248);
INSERT INTO public.planet VALUES (11, 2, 'Proxima Centauri b', true, 0.03);
INSERT INTO public.planet VALUES (12, 2, 'Proxima Centauri c', false, 5.28);
INSERT INTO public.planet VALUES (13, 3, 'Cadidate 1', false, 1);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 1, 'Sun', 0.000016, NULL);
INSERT INTO public.star VALUES (2, 1, 'Proxima Centauri', 4.246, 'Centaurus');
INSERT INTO public.star VALUES (3, 1, 'Alpha Centauri A', 4.364, 'Centaurus');
INSERT INTO public.star VALUES (4, 1, 'Sirius', 8.611, 'Canis Major');
INSERT INTO public.star VALUES (5, 1, 'Barnards Star', 6, 'Ophiuchus');
INSERT INTO public.star VALUES (6, 1, 'Vega', 25, 'Lyra');
INSERT INTO public.star VALUES (7, 1, 'Antares', 554.5, 'Scorpius');


--
-- Name: biggest_countries_on_earth_biggest_countries_on_earth_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.biggest_countries_on_earth_biggest_countries_on_earth_id_seq', 5, true);


--
-- Name: galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_id_seq', 7, true);


--
-- Name: moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_id_seq', 21, true);


--
-- Name: planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_id_seq', 13, true);


--
-- Name: star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_id_seq', 7, true);


--
-- Name: biggest_countries_on_earth biggest_countries_on_earth_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.biggest_countries_on_earth
    ADD CONSTRAINT biggest_countries_on_earth_name_key UNIQUE (name);


--
-- Name: biggest_countries_on_earth biggest_countries_on_earth_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.biggest_countries_on_earth
    ADD CONSTRAINT biggest_countries_on_earth_pkey PRIMARY KEY (biggest_countries_on_earth_id);


--
-- Name: galaxy galaxy_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: star star_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_key UNIQUE (name);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

