PGDMP  '    2                |            tesina    17.0 (Debian 17.0-1.pgdg120+1)    17.0 e    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    24576    tesina    DATABASE     q   CREATE DATABASE tesina WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';
    DROP DATABASE tesina;
                     postgres    false            �            1259    24578    tc_tipo_gasto    TABLE     �   CREATE TABLE public.tc_tipo_gasto (
    id_tipo_gasto integer NOT NULL,
    nombre_tipo_gasto character varying(50) NOT NULL
);
 !   DROP TABLE public.tc_tipo_gasto;
       public         heap r       postgres    false            �            1259    24577    tc_tipo_gasto_id_tipo_gasto_seq    SEQUENCE     �   CREATE SEQUENCE public.tc_tipo_gasto_id_tipo_gasto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.tc_tipo_gasto_id_tipo_gasto_seq;
       public               postgres    false    218            �           0    0    tc_tipo_gasto_id_tipo_gasto_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.tc_tipo_gasto_id_tipo_gasto_seq OWNED BY public.tc_tipo_gasto.id_tipo_gasto;
          public               postgres    false    217            �            1259    24585    tc_tipo_ingreso    TABLE     �   CREATE TABLE public.tc_tipo_ingreso (
    id_tipo_ingreso integer NOT NULL,
    nombre_tipo_ingreso character varying(50) NOT NULL
);
 #   DROP TABLE public.tc_tipo_ingreso;
       public         heap r       postgres    false            �            1259    24584 #   tc_tipo_ingreso_id_tipo_ingreso_seq    SEQUENCE     �   CREATE SEQUENCE public.tc_tipo_ingreso_id_tipo_ingreso_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public.tc_tipo_ingreso_id_tipo_ingreso_seq;
       public               postgres    false    220            �           0    0 #   tc_tipo_ingreso_id_tipo_ingreso_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public.tc_tipo_ingreso_id_tipo_ingreso_seq OWNED BY public.tc_tipo_ingreso.id_tipo_ingreso;
          public               postgres    false    219            �            1259    24592    tc_tipo_inversion    TABLE     �   CREATE TABLE public.tc_tipo_inversion (
    id_tipo_inversion integer NOT NULL,
    nombre_tipo_inversion character varying(50) NOT NULL
);
 %   DROP TABLE public.tc_tipo_inversion;
       public         heap r       postgres    false            �            1259    24591 '   tc_tipo_inversion_id_tipo_inversion_seq    SEQUENCE     �   CREATE SEQUENCE public.tc_tipo_inversion_id_tipo_inversion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 >   DROP SEQUENCE public.tc_tipo_inversion_id_tipo_inversion_seq;
       public               postgres    false    222            �           0    0 '   tc_tipo_inversion_id_tipo_inversion_seq    SEQUENCE OWNED BY     s   ALTER SEQUENCE public.tc_tipo_inversion_id_tipo_inversion_seq OWNED BY public.tc_tipo_inversion.id_tipo_inversion;
          public               postgres    false    221            �            1259    24599    tc_tipo_sector    TABLE     �   CREATE TABLE public.tc_tipo_sector (
    id_tipo_sector integer NOT NULL,
    nombre_tipo_sector character varying(50) NOT NULL
);
 "   DROP TABLE public.tc_tipo_sector;
       public         heap r       postgres    false            �            1259    24598 !   tc_tipo_sector_id_tipo_sector_seq    SEQUENCE     �   CREATE SEQUENCE public.tc_tipo_sector_id_tipo_sector_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.tc_tipo_sector_id_tipo_sector_seq;
       public               postgres    false    224            �           0    0 !   tc_tipo_sector_id_tipo_sector_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.tc_tipo_sector_id_tipo_sector_seq OWNED BY public.tc_tipo_sector.id_tipo_sector;
          public               postgres    false    223            �            1259    24606    tc_tipo_usuario    TABLE     �   CREATE TABLE public.tc_tipo_usuario (
    id_tipo_usuario integer NOT NULL,
    nombre_tipo_usuario character varying(100) NOT NULL
);
 #   DROP TABLE public.tc_tipo_usuario;
       public         heap r       postgres    false            �            1259    24605 #   tc_tipo_usuario_id_tipo_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.tc_tipo_usuario_id_tipo_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public.tc_tipo_usuario_id_tipo_usuario_seq;
       public               postgres    false    226            �           0    0 #   tc_tipo_usuario_id_tipo_usuario_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public.tc_tipo_usuario_id_tipo_usuario_seq OWNED BY public.tc_tipo_usuario.id_tipo_usuario;
          public               postgres    false    225            �            1259    24613 	   tr_accion    TABLE     �  CREATE TABLE public.tr_accion (
    id_accion integer NOT NULL,
    nombre_empresa character varying(100) NOT NULL,
    ticker character varying(20) NOT NULL,
    id_tipo_sector integer NOT NULL,
    precio_actual numeric(12,2) NOT NULL,
    rendimiento numeric(12,2) NOT NULL,
    predicciones json NOT NULL,
    dias_prediccion integer NOT NULL,
    monto_invertido numeric(15,2) NOT NULL,
    usuario_id integer NOT NULL
);
    DROP TABLE public.tr_accion;
       public         heap r       postgres    false            �            1259    24612    tr_accion_id_accion_seq    SEQUENCE     �   CREATE SEQUENCE public.tr_accion_id_accion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.tr_accion_id_accion_seq;
       public               postgres    false    228            �           0    0    tr_accion_id_accion_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.tr_accion_id_accion_seq OWNED BY public.tr_accion.id_accion;
          public               postgres    false    227            �            1259    24745 	   tr_deudas    TABLE     =  CREATE TABLE public.tr_deudas (
    id_deuda integer NOT NULL,
    id_usuario integer NOT NULL,
    descripcion text NOT NULL,
    monto numeric(10,2) NOT NULL,
    fecha_inicio date NOT NULL,
    estado character varying(50) DEFAULT 'pendiente'::character varying,
    acreedor text NOT NULL,
    fecha_pago date
);
    DROP TABLE public.tr_deudas;
       public         heap r       postgres    false            �            1259    24744    tr_deudas_id_deuda_seq    SEQUENCE     �   CREATE SEQUENCE public.tr_deudas_id_deuda_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.tr_deudas_id_deuda_seq;
       public               postgres    false    240            �           0    0    tr_deudas_id_deuda_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.tr_deudas_id_deuda_seq OWNED BY public.tr_deudas.id_deuda;
          public               postgres    false    239            �            1259    24732    tr_finanzas_personales    TABLE     N  CREATE TABLE public.tr_finanzas_personales (
    id_finanzas integer NOT NULL,
    id_usuario integer NOT NULL,
    salario_mensual numeric(12,2) NOT NULL,
    necesidades numeric(12,2) NOT NULL,
    deseos numeric(12,2) NOT NULL,
    ahorros numeric(12,2) NOT NULL,
    fecha timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 *   DROP TABLE public.tr_finanzas_personales;
       public         heap r       postgres    false            �            1259    24731 &   tr_finanzas_personales_id_finanzas_seq    SEQUENCE     �   CREATE SEQUENCE public.tr_finanzas_personales_id_finanzas_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE public.tr_finanzas_personales_id_finanzas_seq;
       public               postgres    false    238            �           0    0 &   tr_finanzas_personales_id_finanzas_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public.tr_finanzas_personales_id_finanzas_seq OWNED BY public.tr_finanzas_personales.id_finanzas;
          public               postgres    false    237            �            1259    24622    tr_gasto    TABLE       CREATE TABLE public.tr_gasto (
    id_gasto integer NOT NULL,
    id_usuario integer NOT NULL,
    monto numeric(12,2) NOT NULL,
    fecha_gasto timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    descripcion text,
    id_tipo_gasto integer NOT NULL
);
    DROP TABLE public.tr_gasto;
       public         heap r       postgres    false            �            1259    24621    tr_gasto_id_gasto_seq    SEQUENCE     �   CREATE SEQUENCE public.tr_gasto_id_gasto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.tr_gasto_id_gasto_seq;
       public               postgres    false    230            �           0    0    tr_gasto_id_gasto_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.tr_gasto_id_gasto_seq OWNED BY public.tr_gasto.id_gasto;
          public               postgres    false    229            �            1259    24632 
   tr_ingreso    TABLE       CREATE TABLE public.tr_ingreso (
    id_ingreso integer NOT NULL,
    id_usuario integer NOT NULL,
    monto numeric(12,2) NOT NULL,
    fecha_ingreso timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    descripcion text,
    id_tipo_ingreso integer NOT NULL
);
    DROP TABLE public.tr_ingreso;
       public         heap r       postgres    false            �            1259    24631    tr_ingreso_id_ingreso_seq    SEQUENCE     �   CREATE SEQUENCE public.tr_ingreso_id_ingreso_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.tr_ingreso_id_ingreso_seq;
       public               postgres    false    232            �           0    0    tr_ingreso_id_ingreso_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.tr_ingreso_id_ingreso_seq OWNED BY public.tr_ingreso.id_ingreso;
          public               postgres    false    231            �            1259    24642    tr_inversion    TABLE     3  CREATE TABLE public.tr_inversion (
    id_inversion integer NOT NULL,
    id_usuario integer NOT NULL,
    cantidad_invertida numeric(12,2) NOT NULL,
    fecha_inversion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    rendimiento_esperado numeric(12,2),
    id_tipo_inversion integer NOT NULL
);
     DROP TABLE public.tr_inversion;
       public         heap r       postgres    false            �            1259    24641    tr_inversion_id_inversion_seq    SEQUENCE     �   CREATE SEQUENCE public.tr_inversion_id_inversion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.tr_inversion_id_inversion_seq;
       public               postgres    false    234            �           0    0    tr_inversion_id_inversion_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.tr_inversion_id_inversion_seq OWNED BY public.tr_inversion.id_inversion;
          public               postgres    false    233            �            1259    24660 
   tr_usuario    TABLE     2  CREATE TABLE public.tr_usuario (
    id_usuario integer NOT NULL,
    nombre character varying(100) NOT NULL,
    email character varying(150) NOT NULL,
    contrasena text NOT NULL,
    fecha_registro timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    id_tipo_usuario integer NOT NULL
);
    DROP TABLE public.tr_usuario;
       public         heap r       postgres    false            �            1259    24659    tr_usuario_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.tr_usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.tr_usuario_id_usuario_seq;
       public               postgres    false    236            �           0    0    tr_usuario_id_usuario_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.tr_usuario_id_usuario_seq OWNED BY public.tr_usuario.id_usuario;
          public               postgres    false    235            �           2604    24581    tc_tipo_gasto id_tipo_gasto    DEFAULT     �   ALTER TABLE ONLY public.tc_tipo_gasto ALTER COLUMN id_tipo_gasto SET DEFAULT nextval('public.tc_tipo_gasto_id_tipo_gasto_seq'::regclass);
 J   ALTER TABLE public.tc_tipo_gasto ALTER COLUMN id_tipo_gasto DROP DEFAULT;
       public               postgres    false    218    217    218            �           2604    24588    tc_tipo_ingreso id_tipo_ingreso    DEFAULT     �   ALTER TABLE ONLY public.tc_tipo_ingreso ALTER COLUMN id_tipo_ingreso SET DEFAULT nextval('public.tc_tipo_ingreso_id_tipo_ingreso_seq'::regclass);
 N   ALTER TABLE public.tc_tipo_ingreso ALTER COLUMN id_tipo_ingreso DROP DEFAULT;
       public               postgres    false    219    220    220            �           2604    24595 #   tc_tipo_inversion id_tipo_inversion    DEFAULT     �   ALTER TABLE ONLY public.tc_tipo_inversion ALTER COLUMN id_tipo_inversion SET DEFAULT nextval('public.tc_tipo_inversion_id_tipo_inversion_seq'::regclass);
 R   ALTER TABLE public.tc_tipo_inversion ALTER COLUMN id_tipo_inversion DROP DEFAULT;
       public               postgres    false    222    221    222            �           2604    24602    tc_tipo_sector id_tipo_sector    DEFAULT     �   ALTER TABLE ONLY public.tc_tipo_sector ALTER COLUMN id_tipo_sector SET DEFAULT nextval('public.tc_tipo_sector_id_tipo_sector_seq'::regclass);
 L   ALTER TABLE public.tc_tipo_sector ALTER COLUMN id_tipo_sector DROP DEFAULT;
       public               postgres    false    223    224    224            �           2604    24609    tc_tipo_usuario id_tipo_usuario    DEFAULT     �   ALTER TABLE ONLY public.tc_tipo_usuario ALTER COLUMN id_tipo_usuario SET DEFAULT nextval('public.tc_tipo_usuario_id_tipo_usuario_seq'::regclass);
 N   ALTER TABLE public.tc_tipo_usuario ALTER COLUMN id_tipo_usuario DROP DEFAULT;
       public               postgres    false    226    225    226            �           2604    24616    tr_accion id_accion    DEFAULT     z   ALTER TABLE ONLY public.tr_accion ALTER COLUMN id_accion SET DEFAULT nextval('public.tr_accion_id_accion_seq'::regclass);
 B   ALTER TABLE public.tr_accion ALTER COLUMN id_accion DROP DEFAULT;
       public               postgres    false    227    228    228            �           2604    24748    tr_deudas id_deuda    DEFAULT     x   ALTER TABLE ONLY public.tr_deudas ALTER COLUMN id_deuda SET DEFAULT nextval('public.tr_deudas_id_deuda_seq'::regclass);
 A   ALTER TABLE public.tr_deudas ALTER COLUMN id_deuda DROP DEFAULT;
       public               postgres    false    240    239    240            �           2604    24735 "   tr_finanzas_personales id_finanzas    DEFAULT     �   ALTER TABLE ONLY public.tr_finanzas_personales ALTER COLUMN id_finanzas SET DEFAULT nextval('public.tr_finanzas_personales_id_finanzas_seq'::regclass);
 Q   ALTER TABLE public.tr_finanzas_personales ALTER COLUMN id_finanzas DROP DEFAULT;
       public               postgres    false    237    238    238            �           2604    24625    tr_gasto id_gasto    DEFAULT     v   ALTER TABLE ONLY public.tr_gasto ALTER COLUMN id_gasto SET DEFAULT nextval('public.tr_gasto_id_gasto_seq'::regclass);
 @   ALTER TABLE public.tr_gasto ALTER COLUMN id_gasto DROP DEFAULT;
       public               postgres    false    229    230    230            �           2604    24635    tr_ingreso id_ingreso    DEFAULT     ~   ALTER TABLE ONLY public.tr_ingreso ALTER COLUMN id_ingreso SET DEFAULT nextval('public.tr_ingreso_id_ingreso_seq'::regclass);
 D   ALTER TABLE public.tr_ingreso ALTER COLUMN id_ingreso DROP DEFAULT;
       public               postgres    false    231    232    232            �           2604    24645    tr_inversion id_inversion    DEFAULT     �   ALTER TABLE ONLY public.tr_inversion ALTER COLUMN id_inversion SET DEFAULT nextval('public.tr_inversion_id_inversion_seq'::regclass);
 H   ALTER TABLE public.tr_inversion ALTER COLUMN id_inversion DROP DEFAULT;
       public               postgres    false    233    234    234            �           2604    24663    tr_usuario id_usuario    DEFAULT     ~   ALTER TABLE ONLY public.tr_usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.tr_usuario_id_usuario_seq'::regclass);
 D   ALTER TABLE public.tr_usuario ALTER COLUMN id_usuario DROP DEFAULT;
       public               postgres    false    235    236    236            �          0    24578    tc_tipo_gasto 
   TABLE DATA           I   COPY public.tc_tipo_gasto (id_tipo_gasto, nombre_tipo_gasto) FROM stdin;
    public               postgres    false    218   '�       �          0    24585    tc_tipo_ingreso 
   TABLE DATA           O   COPY public.tc_tipo_ingreso (id_tipo_ingreso, nombre_tipo_ingreso) FROM stdin;
    public               postgres    false    220   ҃       �          0    24592    tc_tipo_inversion 
   TABLE DATA           U   COPY public.tc_tipo_inversion (id_tipo_inversion, nombre_tipo_inversion) FROM stdin;
    public               postgres    false    222   ��       �          0    24599    tc_tipo_sector 
   TABLE DATA           L   COPY public.tc_tipo_sector (id_tipo_sector, nombre_tipo_sector) FROM stdin;
    public               postgres    false    224   D�       �          0    24606    tc_tipo_usuario 
   TABLE DATA           O   COPY public.tc_tipo_usuario (id_tipo_usuario, nombre_tipo_usuario) FROM stdin;
    public               postgres    false    226   U�       �          0    24613 	   tr_accion 
   TABLE DATA           �   COPY public.tr_accion (id_accion, nombre_empresa, ticker, id_tipo_sector, precio_actual, rendimiento, predicciones, dias_prediccion, monto_invertido, usuario_id) FROM stdin;
    public               postgres    false    228   ��       �          0    24745 	   tr_deudas 
   TABLE DATA           y   COPY public.tr_deudas (id_deuda, id_usuario, descripcion, monto, fecha_inicio, estado, acreedor, fecha_pago) FROM stdin;
    public               postgres    false    240   ��       �          0    24732    tr_finanzas_personales 
   TABLE DATA              COPY public.tr_finanzas_personales (id_finanzas, id_usuario, salario_mensual, necesidades, deseos, ahorros, fecha) FROM stdin;
    public               postgres    false    238   R�       �          0    24622    tr_gasto 
   TABLE DATA           h   COPY public.tr_gasto (id_gasto, id_usuario, monto, fecha_gasto, descripcion, id_tipo_gasto) FROM stdin;
    public               postgres    false    230   ܨ       �          0    24632 
   tr_ingreso 
   TABLE DATA           p   COPY public.tr_ingreso (id_ingreso, id_usuario, monto, fecha_ingreso, descripcion, id_tipo_ingreso) FROM stdin;
    public               postgres    false    232   r�       �          0    24642    tr_inversion 
   TABLE DATA           �   COPY public.tr_inversion (id_inversion, id_usuario, cantidad_invertida, fecha_inversion, rendimiento_esperado, id_tipo_inversion) FROM stdin;
    public               postgres    false    234   �       �          0    24660 
   tr_usuario 
   TABLE DATA           l   COPY public.tr_usuario (id_usuario, nombre, email, contrasena, fecha_registro, id_tipo_usuario) FROM stdin;
    public               postgres    false    236   ��       �           0    0    tc_tipo_gasto_id_tipo_gasto_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.tc_tipo_gasto_id_tipo_gasto_seq', 12, true);
          public               postgres    false    217            �           0    0 #   tc_tipo_ingreso_id_tipo_ingreso_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public.tc_tipo_ingreso_id_tipo_ingreso_seq', 15, true);
          public               postgres    false    219            �           0    0 '   tc_tipo_inversion_id_tipo_inversion_seq    SEQUENCE SET     U   SELECT pg_catalog.setval('public.tc_tipo_inversion_id_tipo_inversion_seq', 9, true);
          public               postgres    false    221            �           0    0 !   tc_tipo_sector_id_tipo_sector_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.tc_tipo_sector_id_tipo_sector_seq', 40, true);
          public               postgres    false    223            �           0    0 #   tc_tipo_usuario_id_tipo_usuario_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public.tc_tipo_usuario_id_tipo_usuario_seq', 3, true);
          public               postgres    false    225            �           0    0    tr_accion_id_accion_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.tr_accion_id_accion_seq', 17, true);
          public               postgres    false    227            �           0    0    tr_deudas_id_deuda_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.tr_deudas_id_deuda_seq', 11, true);
          public               postgres    false    239            �           0    0 &   tr_finanzas_personales_id_finanzas_seq    SEQUENCE SET     U   SELECT pg_catalog.setval('public.tr_finanzas_personales_id_finanzas_seq', 17, true);
          public               postgres    false    237            �           0    0    tr_gasto_id_gasto_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.tr_gasto_id_gasto_seq', 10, true);
          public               postgres    false    229            �           0    0    tr_ingreso_id_ingreso_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.tr_ingreso_id_ingreso_seq', 6, true);
          public               postgres    false    231            �           0    0    tr_inversion_id_inversion_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.tr_inversion_id_inversion_seq', 1, false);
          public               postgres    false    233            �           0    0    tr_usuario_id_usuario_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.tr_usuario_id_usuario_seq', 4, true);
          public               postgres    false    235            �           2606    24583     tc_tipo_gasto tc_tipo_gasto_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.tc_tipo_gasto
    ADD CONSTRAINT tc_tipo_gasto_pkey PRIMARY KEY (id_tipo_gasto);
 J   ALTER TABLE ONLY public.tc_tipo_gasto DROP CONSTRAINT tc_tipo_gasto_pkey;
       public                 postgres    false    218            �           2606    24590 $   tc_tipo_ingreso tc_tipo_ingreso_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.tc_tipo_ingreso
    ADD CONSTRAINT tc_tipo_ingreso_pkey PRIMARY KEY (id_tipo_ingreso);
 N   ALTER TABLE ONLY public.tc_tipo_ingreso DROP CONSTRAINT tc_tipo_ingreso_pkey;
       public                 postgres    false    220            �           2606    24597 (   tc_tipo_inversion tc_tipo_inversion_pkey 
   CONSTRAINT     u   ALTER TABLE ONLY public.tc_tipo_inversion
    ADD CONSTRAINT tc_tipo_inversion_pkey PRIMARY KEY (id_tipo_inversion);
 R   ALTER TABLE ONLY public.tc_tipo_inversion DROP CONSTRAINT tc_tipo_inversion_pkey;
       public                 postgres    false    222            �           2606    24604 "   tc_tipo_sector tc_tipo_sector_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.tc_tipo_sector
    ADD CONSTRAINT tc_tipo_sector_pkey PRIMARY KEY (id_tipo_sector);
 L   ALTER TABLE ONLY public.tc_tipo_sector DROP CONSTRAINT tc_tipo_sector_pkey;
       public                 postgres    false    224            �           2606    24611 $   tc_tipo_usuario tc_tipo_usuario_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.tc_tipo_usuario
    ADD CONSTRAINT tc_tipo_usuario_pkey PRIMARY KEY (id_tipo_usuario);
 N   ALTER TABLE ONLY public.tc_tipo_usuario DROP CONSTRAINT tc_tipo_usuario_pkey;
       public                 postgres    false    226            �           2606    24618    tr_accion tr_accion_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.tr_accion
    ADD CONSTRAINT tr_accion_pkey PRIMARY KEY (id_accion);
 B   ALTER TABLE ONLY public.tr_accion DROP CONSTRAINT tr_accion_pkey;
       public                 postgres    false    228            �           2606    32952    tr_accion tr_accion_ticker_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.tr_accion
    ADD CONSTRAINT tr_accion_ticker_key UNIQUE (ticker);
 H   ALTER TABLE ONLY public.tr_accion DROP CONSTRAINT tr_accion_ticker_key;
       public                 postgres    false    228            �           2606    24753    tr_deudas tr_deudas_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.tr_deudas
    ADD CONSTRAINT tr_deudas_pkey PRIMARY KEY (id_deuda);
 B   ALTER TABLE ONLY public.tr_deudas DROP CONSTRAINT tr_deudas_pkey;
       public                 postgres    false    240            �           2606    24738 2   tr_finanzas_personales tr_finanzas_personales_pkey 
   CONSTRAINT     y   ALTER TABLE ONLY public.tr_finanzas_personales
    ADD CONSTRAINT tr_finanzas_personales_pkey PRIMARY KEY (id_finanzas);
 \   ALTER TABLE ONLY public.tr_finanzas_personales DROP CONSTRAINT tr_finanzas_personales_pkey;
       public                 postgres    false    238            �           2606    24630    tr_gasto tr_gasto_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.tr_gasto
    ADD CONSTRAINT tr_gasto_pkey PRIMARY KEY (id_gasto);
 @   ALTER TABLE ONLY public.tr_gasto DROP CONSTRAINT tr_gasto_pkey;
       public                 postgres    false    230            �           2606    24640    tr_ingreso tr_ingreso_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.tr_ingreso
    ADD CONSTRAINT tr_ingreso_pkey PRIMARY KEY (id_ingreso);
 D   ALTER TABLE ONLY public.tr_ingreso DROP CONSTRAINT tr_ingreso_pkey;
       public                 postgres    false    232            �           2606    24648    tr_inversion tr_inversion_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.tr_inversion
    ADD CONSTRAINT tr_inversion_pkey PRIMARY KEY (id_inversion);
 H   ALTER TABLE ONLY public.tr_inversion DROP CONSTRAINT tr_inversion_pkey;
       public                 postgres    false    234            �           2606    24670    tr_usuario tr_usuario_email_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.tr_usuario
    ADD CONSTRAINT tr_usuario_email_key UNIQUE (email);
 I   ALTER TABLE ONLY public.tr_usuario DROP CONSTRAINT tr_usuario_email_key;
       public                 postgres    false    236            �           2606    24668    tr_usuario tr_usuario_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.tr_usuario
    ADD CONSTRAINT tr_usuario_pkey PRIMARY KEY (id_usuario);
 D   ALTER TABLE ONLY public.tr_usuario DROP CONSTRAINT tr_usuario_pkey;
       public                 postgres    false    236            �           2606    24721    tr_accion fk_empresa    FK CONSTRAINT     �   ALTER TABLE ONLY public.tr_accion
    ADD CONSTRAINT fk_empresa FOREIGN KEY (id_tipo_sector) REFERENCES public.tc_tipo_sector(id_tipo_sector) ON DELETE SET NULL;
 >   ALTER TABLE ONLY public.tr_accion DROP CONSTRAINT fk_empresa;
       public               postgres    false    3290    228    224            �           2606    24676    tr_gasto fk_tipo_gasto    FK CONSTRAINT     �   ALTER TABLE ONLY public.tr_gasto
    ADD CONSTRAINT fk_tipo_gasto FOREIGN KEY (id_tipo_gasto) REFERENCES public.tc_tipo_gasto(id_tipo_gasto) ON DELETE SET NULL;
 @   ALTER TABLE ONLY public.tr_gasto DROP CONSTRAINT fk_tipo_gasto;
       public               postgres    false    3284    218    230            �           2606    24686    tr_ingreso fk_tipo_ingreso    FK CONSTRAINT     �   ALTER TABLE ONLY public.tr_ingreso
    ADD CONSTRAINT fk_tipo_ingreso FOREIGN KEY (id_tipo_ingreso) REFERENCES public.tc_tipo_ingreso(id_tipo_ingreso) ON DELETE SET NULL;
 D   ALTER TABLE ONLY public.tr_ingreso DROP CONSTRAINT fk_tipo_ingreso;
       public               postgres    false    232    3286    220            �           2606    24696    tr_inversion fk_tipo_inversion    FK CONSTRAINT     �   ALTER TABLE ONLY public.tr_inversion
    ADD CONSTRAINT fk_tipo_inversion FOREIGN KEY (id_tipo_inversion) REFERENCES public.tc_tipo_inversion(id_tipo_inversion) ON DELETE SET NULL;
 H   ALTER TABLE ONLY public.tr_inversion DROP CONSTRAINT fk_tipo_inversion;
       public               postgres    false    222    234    3288            �           2606    24716    tr_usuario fk_tipo_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.tr_usuario
    ADD CONSTRAINT fk_tipo_usuario FOREIGN KEY (id_tipo_usuario) REFERENCES public.tc_tipo_usuario(id_tipo_usuario) ON DELETE SET NULL;
 D   ALTER TABLE ONLY public.tr_usuario DROP CONSTRAINT fk_tipo_usuario;
       public               postgres    false    3292    236    226            �           2606    24739 *   tr_finanzas_personales fk_usuario_finanzas    FK CONSTRAINT     �   ALTER TABLE ONLY public.tr_finanzas_personales
    ADD CONSTRAINT fk_usuario_finanzas FOREIGN KEY (id_usuario) REFERENCES public.tr_usuario(id_usuario) ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.tr_finanzas_personales DROP CONSTRAINT fk_usuario_finanzas;
       public               postgres    false    3306    238    236            �           2606    24681    tr_gasto fk_usuario_gasto    FK CONSTRAINT     �   ALTER TABLE ONLY public.tr_gasto
    ADD CONSTRAINT fk_usuario_gasto FOREIGN KEY (id_usuario) REFERENCES public.tr_usuario(id_usuario) ON DELETE CASCADE;
 C   ALTER TABLE ONLY public.tr_gasto DROP CONSTRAINT fk_usuario_gasto;
       public               postgres    false    3306    236    230            �           2606    24759    tr_accion fk_usuario_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.tr_accion
    ADD CONSTRAINT fk_usuario_id FOREIGN KEY (usuario_id) REFERENCES public.tr_usuario(id_usuario);
 A   ALTER TABLE ONLY public.tr_accion DROP CONSTRAINT fk_usuario_id;
       public               postgres    false    236    3306    228            �           2606    24691    tr_ingreso fk_usuario_ingreso    FK CONSTRAINT     �   ALTER TABLE ONLY public.tr_ingreso
    ADD CONSTRAINT fk_usuario_ingreso FOREIGN KEY (id_usuario) REFERENCES public.tr_usuario(id_usuario) ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.tr_ingreso DROP CONSTRAINT fk_usuario_ingreso;
       public               postgres    false    232    3306    236            �           2606    24701 !   tr_inversion fk_usuario_inversion    FK CONSTRAINT     �   ALTER TABLE ONLY public.tr_inversion
    ADD CONSTRAINT fk_usuario_inversion FOREIGN KEY (id_usuario) REFERENCES public.tr_usuario(id_usuario) ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.tr_inversion DROP CONSTRAINT fk_usuario_inversion;
       public               postgres    false    3306    236    234            �           2606    24754 #   tr_deudas tr_deudas_id_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.tr_deudas
    ADD CONSTRAINT tr_deudas_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.tr_usuario(id_usuario);
 M   ALTER TABLE ONLY public.tr_deudas DROP CONSTRAINT tr_deudas_id_usuario_fkey;
       public               postgres    false    240    3306    236            �   �   x�M�=
�@��z�9���_�BQ�l�����;<�G�b�`a�����P~d1r��,�H��Wp�����B����nv�x��;���Sm�{8jO!{fg�??@�%.���k�|	-�4hL^��oN��i�f���
h,�q_ ��T;�      �   �   x�5�KnB1E��*���S萏�HT 1��J,)�(y����`c8����N��N݉�8�MfN$�q{����~��N`��n!%��J��D.���P�YZr��g(�1�u�c`	Z�Ӝ�����v�r���-m��aq�w�·����$�D*5�I���A3�/+y2uk�/2�o���fd��\j�mV� �hVXv      �   �   x��=
A��:9Ŝ@�_�݅�E��f�؉$3���#�������X
n��"�[�d�0��|�`P~U����p=��p��'9<�ș8���,S��7���-x�)VR�nʳ��J���{����U��B��Z1d      �     x�=�;N1��S�	Pbo^e�D�Ȗi�$�;F~ ��p�Tt�{1lE��_�?>5���x�/�͠R��b�j"*�򀪅G/1��y�hY�b�ſ�Mߑ�G���P�g��E�S�����O.�ؼM�'W�K�:&�ؼ��f)����$��z�}����5���
���6���A��ρ��Q��#�ÇD��r�M?�z	[�#I*���N<N�*������ְ�ɏ�쾢���Qjg.J$<r��9������D��p�      �   <   x�3�tL����,.)JL�/�2�-.M,��Wp-.9�0/%���.P���Y������ o�      �      x��}��n�m����|I��z��in&Ӣәh{a�.�"�O2�`�G�S��f�}X?��8�9���֖��ErI����۷����|���?�o���?�~�*S_��_�}�����_���_������ۯ��+mڿ���W?��w���W���^�w�ݦ蒅���o�Ϸ������o������/Jk���W��?��˦~�$�k�7]�Ef/�����e��ε���]vk>�}5��h�F�0�_���&}u�{F�^v|��F{��.]}�aci���5��m�`������ߗT_����Fg6��뛴�}����bB����ɕM�`rwY���ګ�iX�c�v����)���D�\������6�e�;L�R3���������z�I����|OS����b㛾�X%�p	F�~���sKaT�5N�N�4����ܺū�o��F%�I,X��n�[�\�[�{��:W*�IN8��\�C�����������$'���vk�v�~�=��ϵ�h�66W�6Vˋ�ח[_2�dF�g�G����^�.m�}�R���Jpx����з>��ԏ��O���Ó
��M��m.�'?lf4i6�6X�6ea���x�&3�T��c&���K[�A��O63�T�0�цϞ�v��Z/9#h�F YGD�2��v�[�����I�Xն�P��a3#I��4���n�m�j��%���M1Ls ����`�^3�t��G��j\�n�\�KΥ�H�l��`N`2k�s�;��2�t�=�m�Z�wl{OJ��@t,c)�<y���/Q,�N{k�jρf0Y�������}��f�� o��ӏ�!sj�/������ᘭg�'>���"(c/�{:����FG6z �ox܆/�z{?���+6=����"�c���/�3�sf�>�U�"�!6f�~zkS.�+��8N�f|�P�C�GO�������mkX��\���kN��ls�k��:���o�̡K���f������������è&��62f��#X�b����J�6b��@�AH�F��4F�lz��D(iG42�S�����D�g �H���� {�	��hFR���5E�5ᖀ%�"S;?>C)�F8{�eϬ�����{�R`�紐��������qF3�$������mk��ۙ�f$I�s�ܬ�嗟gd$]��-��
w�h5�}����t1Fd���0���e_�,�͌��2��"�͵@q���G8���Hrγue^��1QJj�H����`��G<z��##���l3�\2�ȫǏ�@�$D_*��j:��O":2�4�_L�:S�]2�+[I���ds��S�C_��%��An�h,�9 �G�<��g0���$~!�郎��us�N�4�����\�3�I@yT��!�7E�<A �	@�n�ހ�j�����lL�0�;�Z�u�A7�����vbE����y~C�*:��9LX�O�����Z��ߘ�����LmO�)��@�P;��a��Uv�/��raԊ4i�8�ި�ʎ �s!܃�?[�ؼQu�k�:�p[�{�w*>)�a�F�UydI�FwS+�p��ޠ��G�SB
Qe:|�{�&�8>oL��#�QC�3C6����*�Sgy8c�d�0ʏ1es��⸐�s�1uRHE�'.�Iw��?c�d��T��2�0i�դ����S'��хdLܗ���`V{h�̌��F�*��d)�lX�><�̘:i$�.�����^���#N����I�*>�L̧WF%TV��%�@R:"���E��//;v�ʠ�*8��X̆�xOz� �F3�4��&ҙ��iv)|�<U��jF�ިBR�t|M��*�J~|`ueXi��R�	��D�� ��3�XU'���>��*&֙�#���F3�4�jr��L|�}���Z!�ZTA�S���ewPP=�YU�Sn��9V���~U��{�T#�6��:�-᪋I��Ǧ�TAհ� ��R}UH]����T8���0X��H���[hd�T8��3�n���z����}c��rb������{����oߐ�@�ˊuw���"�AXh��oDY T���/29m��v�z��(��Yl�H��EgUD ��$�7�,*mC���\����m��o@Y T4���K���&Ŕ�Տ���+[�a��F���9+߷b�@�)���V�@��f������$lS�S�ڙQv�E�v�&���2���V�;�O��Q� ���K˨��*����I����r�'L�V{���V�4�����:��-K"�ԑ��@
��
U����2�$"���0��
ȒvI2�����Ol,�Vm�*-l��@�`�	%"�0W+������x�M����E�Rm�>N�Y�W�r*��� >އU�����J2��big����y�^��dd^�_t-mb��T��nP$#++� Bu�ޚX����H,=�kFV`V�X��sz�Z]��fdj5^�>�*�b��U�0�Y'�r�����_m�V��8}�dd��
���J����B*�s�z2��kZ��q�f�_wGb�z2�Βf ��Z���4�Se��\-��:Kv���j�.���k�� �=�fl�%��8-6*��"�
N��7�z䗠��+����V�`����V��A�n.V�T�u 9��7�zd�~@Y	R�ދ�B������b��l*Ƙ�=:�P`���#����,����j�7�z$��/s dizU�J0��Y=���\���i[E�A���e�Y=�L�����+i���� ���#�d;f��m����vz���#ˤ`���|i�`ՃՌ��2��@&��m�x��}��=�Lvyt �6� ��jQ�s��eb�(o%t$��x�p�0Yc!r$�X(�����$IM�#����>@���ɫ�+Iz�Y&��B҇9��(�2��0�-���rCN�I�Պ�-�[��$��e"�B�0`�崪FB�D=��A��A(%S-��$��$�*z���֥S�%���5AI��~��97�'-:"�nCIL����,s�����VԄ����%I+zd��V`�e!3��Z���-I+z"��e��
W�K�V��1�y��ͭU�j��&.I[�#�t�(�%�-�3MZ�`5K�����}aWD �0P�$��b��@��Lᰊ���[RX��0ٖ�p-J}�� �qW%�E�s�6Rlwt�^U���[��b�\�a��\s��VXeKFN�7���uc�ܴ���`�ꍫ��� GY��U�9z��'�ň\��S����ZY�1��bD&� @�EޮE��vpVIi1n&ح���Zڨ╼�U�Z��
�N��2y�V� ��'eIb�q��ᮑ�e�V�@p,Im1"d�;�j��V�K���㦂���fl�ztIm1n*(�ީ��*`�����b�TІ���Ӂ��0����@��4(6�VE�e��Z��bD*� @��3P��Zl�J\�Ha�簔����k��]$�Ÿ� R2!$��� M�UI��qs��;h Rw�*�����J��qs���ҶL[^�.@�8��4�悫���Tl�2%�g���bD.����p�VZ�#�\%�.���$�v%�.}V<�'Iv1"؈ًǲFU�Wj����t�&��+ �v0w}/^}ͳ�$Iw1"��<<h`/t�ey4x�$��� k��q��s0�׶0�[D�����(Z��-U����� ��ܕ��d doIy1"Ą�`�Iՙ����=�5I/F$��q_ʠm�V�]���$�ŸK�l��ͽ*����I|1R���a�ι*�5g8Y#I{�e��s�z,��cOW���#�f6�C��0kFjI|�7���a�܊� �X��a�7�<���B��J�B(�+"�<�$���3�E�� ���Q�u�$���D�[;��p]u�-Lk�_x��$������	�Ni�_�]q�Tn��p�z$\��a%��G�	N���C�Z��C��>�����2��R�<��CUu�/��Y&�p���'\K�qH&�El�VW�V3���Y'P����x��EB�4I    &>��� Y,`Ta�͉�2��${Pm;IT%�)�d&�G��^<Z�-5y����/uM*�$��6�o@2u�jc��kҤ��H2'�Q���2��[c�ȒV�ݐ�7LD���#M*�$q��)��@n���k^3��d�с*�T�riv�<�TI�oA 6_��p����c3����̳WE���dh���\��Sy/��pf�kax��+�t��W1���-��8����E��l�P ��CM"C}d�*��:�4î:�&���K�z3��^�p�z�$��9��W�<ٴ��_�+�4��u2LN ��'',v &༯A�c28�0��^�]��eha�@���}X)Lk��MW8��I�1�
`�8r!V���&�d�3�	�r�UX�H"����yk�5�����!��$��*�!c�5y��}oW�Q�c6H��2�0�kql�LC�I�1�Սpmc /.Ԩ��q�cF6��:�ק�mERl�V@�c:ȍ���u)}˼�fhI���tpr�ʷ�~�&ƌ|p�{�@_t�L�p^�cF>Ȋ���*�o�M���zu�}f��=�����l�$�b�cb�}��Vqv̳4�0f䃬����s��*\����Ѥ�R`��c\��vBoM*�y�A�<L�U�0�c�Q+�0f�.m�"f��0B��9�I�1#�0�OϪk�<h;4�0f�����`�U�y��)Ҥ7�����1)���V�7iRa�Xt�Xh �a���@<��I�1cё�O��[�BP(�k�x�QRa�Xt�=���B�6���p$[�cFB�[E�sJ���A0�I�1o����u�U���\M*�y���V��R�ZL��P3�.�#v�R�C}Cq�I�%ƌ5G�#^@�p[V��<ޑ�I�1c��96�;�I+�X횁Z+�ӆ��O)Vwd.I��bё���/T}��NRh�a�Xs�z�uw�<��T���'M:�k�@�ww_��V$��H3�cŚ#�ka��mt+*y֮�&!Ɗ5�'��!-Dv�*��m'%ƊEG��u_�����4���������=8�"�Z��Z暔+�L�w�pf��[aUG8��I��b�q��?�LG��+Rp��\�cE���Hx���1c�8X��:y��,��&�VYp��<#A�b��3AIX��[y�7�{�'�Jb�x&�me��w�A)*Y a�2Mb�x&�e�t��(F�vN@�b�@3YǡhI�Eǃϧ�JZ�h&�:���)����x<��I��͜�
�Ȋ����Z��QMZ�h��<���`v��������A�c���Z�Ԧcjm�p�A�c��p���9]�Ze��� �&-�
4s�Su���y(*]�MZ��<ջ�&�(��P(;&)ƊeG�}pp�����@D��+�1����C�
�:�*MR�X&�
.�������؂=A��+�y���:��M���&)ƊuG�1��S:�R���LR�u��c�s�����Uj�b�Xx��F!=�VU#�mcaZ3�,G�s��ե���%����w5���݆}=�}��ꍬ����(I�2�^�1L=�q4)1v�f�D��bs"��_3pCk�j&;v�j��8�����찚�;V3��Z��@�]yWD��]�c��L%�tOdqV�m��"֤�ر���68m��*��mXMJ�}W3y�P�{«�jFe��Z;�Lޗ6�4m<ST� ��$�؉fn:+Li�%�xc�鴓c��6?͐:��^�U<��$�ؑfb���Y|����LNR�i&/zE�Ɩ%s)�3�����ؒ��ή.o*�h��#�Ѥ�ؑfb���x9�p�s�b�H3�K(�|�E��4��4i1v���	�%r߭�(��Ǹ��;�L6
��@�Î�8�N�:7Vc�H3��\?y[ռ�+YI��o�ٴS�7���"�E��������@
R8F���XRc�H3;>�(�d�@��lǻ�5�1v���n�ab��m�xMb�if���Cu+�cX�p�%1Ǝ4�+�h/�(^�1(�&ϒc�4��b�*R�b�i�%-Ǝ,������؊}����u�vF���i� ︯N@�#�c�Ռ��eb��������2	�>oSNR�I&��?G��J���]h�CZ�n�����yR��<���ՙ�^|p�B�O��j���V�z�FxM��N�]rL߿�����A$�瞵�_��-Š�K52�,\��V��muK1h5�,�����7x��
M���jY���܆�J�g�b��Vc�B�^�{RQBH���b�j,:6�q�Z�K�׶��0*�ld�
�V\��-0�P3����|n���.��ڂ��n)�ƚ�� �Upm�Y=�[�b�j��6�:�A��N���RZ��|&���&\%�i�o�[�A����!򩗾]J9N�n)�^l�M&�p��W��8�-����涪2��G���b�j��#dgAVX+<�n��ZZ��5|��8����=X���+��MkK�Ҫ��Ht���V#��%"�������[�A�1h!X-$/�fJ��e�9o\�[�A����hw��(}.�Zg��n-��k���i~j����:��vk1h5&Z�g�����cו vk1h�qi� �sX��3F��ۭŠ�+��\yChI�{TO٭Šըv���7���͆=�vk1hu��+�ǜ��
[3�t�b����^b'[����vK1h5&ZԷ4����V��V|�e�ti����j���x+��J��0{�Xvy�xqj�x4`�FV|��S�I>ȣeZ���L�n%��7[H���~Ţr��V<tr�VbH|��}#7�vu�ω��Vwh�ڭĐ�l�Ș�Z��*7�3f�B������|�ëcۜ �z�*����M0JmuzKPN�-Đ�v��|R��ةl���4�������L޶�Y��S[1T�#��[�!��������,�I�U�[�!��X���[��~{�:�3V3�$������'�*��+	v1$>�²�P^�VX�J{�X�C�.ljj��[u͆�C�-Ð��F:x嶱8>�co�Y�UqaGo�^��W�����ԭ��=��E�&��j�{M��*����ˡy`{u���Ux��VaH|�e>G�A[m>� �_,��A`�
C�k.�kP6�~a�&�
<�Va��m�ޭ��e��(�8���Va���ƾQ�"�@�X%T��aH|��N�{���"-]<>	v�0$�邱��!%�`S�?�T��n��2����	 �2!)K�->5v�0$>�B*��uw�n'=+��y���2����+1d�(�J��K��X3���#�
6 Ź�BU|��|�?`���5�d~����?~�������|މ^B�����?�h�|��?�ꎪ?�h��5�����.���V�	�lT�Q>�$KA�����<��(�{���̒Oѯm�Bg���Dˣ�E�/���l�<�����e�,��Sx^�\��s��C�4�l(ޣ�F��3�"���OE����Ά��ɞ�D߬���+Z�����d/�e�B�@���X4/�n��z�7��)�����h�3d|L��Wuc5_lj�F�lT��睲<&g͋{���������Uja٩���ũ>��Ⴞl5`깎��.v=��2��?�Z4�����Z�:��g�g��(ѣ+]�T�y.]J�L��F�^X�T�P兀����N�)�\0^=ȻC	�/Fs�����;`�W��E�/���2�[e��Z�y�0�?MF5D)���nE��Ï�u�/<-H�yc $Xy��Q^�N�d�!J�!�*�����.��O?�j�<y3{�:�Т��<E���h�S�ye�jR�W���y.�矍�щ{�����l�C�AW��z�Q|�	�x�b��e8���W����?�ñ��[����³���폈�g��=W���+�f��O��[�����#��`��$�������~��o���w�}��?|������|�   ���7������_�껏_��o~������􏯱5֟H �#[�[�+=�����|Dʞ'5JN�c�����ɩGsq��u�%���GD#�xae�m����n����5�����VX��?>P��!1?��X�o?~�W������~��\Y�j�&����W՞�bL@e�����(��t���?�����x*Ը�x��|�m<�����╽m-uD���x(���=�{^��rJuskk�*.�?�~����S      �   �   x�3�4��MUH��-(:�R�4O!�45=�����@�� H����r��d�敤rF�s��qYpq�����s������U��Y"��)64�I,�J-ITHIUp.JM�,��4E��� I�_)Hg� �Q,$      �   z   x�����0�h�,��d��,����|��C�AO u��8�T�8��^WAq�����!/�A��ٞj)c�v�r�R����_�>��@���s��;�u���_�q"F`8g]ʞbfFY,�      �   �   x�]�1�0���|�h�0!��I����B�����!4����UR�M�B��0�����lOe�����#)wd\XW�kI��ܘ2	�Ǥ^0������'��m��e�������벯�2��]3�K�.�      �   _   x�3�4�4450�30�4202�54�54R00�#΀��ÛRs�R�R9�L9�8�P� ��f�%��%��aQjh�P\����T���� ���      �      x������ � �      �   �   x�M�=n�0 Fgs
�X���a
TB��R*(QJIB�h�7�9z�uH��}z�3�z(�U���S�q3�C��5��h�C�H��߄���g����ح*~|M���Wd^�����oi����c��0QǤ�ۖ�,��!;�����*�y��l��v��̚s]<F���+�S_��n�0E]�����r�yQ����X^�ܒ�=BWqL�
��m���PQ�?!9N     