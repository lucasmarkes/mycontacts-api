CREATE DATABASE mycontacts;

CREATE EXTENSIONS IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
   id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
   name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS contacts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(255) NOT NULL,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);
