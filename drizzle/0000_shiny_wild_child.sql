CREATE TYPE "public"."complaint_status" AS ENUM('nuovo', 'in_gestione', 'chiuso');--> statement-breakpoint
CREATE TYPE "public"."document_category" AS ENUM('trasparenza', 'modulistica', 'qualita');--> statement-breakpoint
CREATE TYPE "public"."request_type" AS ENUM('info', 'visita');--> statement-breakpoint
CREATE TABLE "complaints" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(120),
	"contact" varchar(200),
	"body" text NOT NULL,
	"status" "complaint_status" DEFAULT 'nuovo' NOT NULL,
	"consent" boolean NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "contact_requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" "request_type" DEFAULT 'info' NOT NULL,
	"name" varchar(120) NOT NULL,
	"email" varchar(200) NOT NULL,
	"phone" varchar(40),
	"message" text,
	"preferred_date" date,
	"consent" boolean NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "documents" (
	"id" serial PRIMARY KEY NOT NULL,
	"category" "document_category" NOT NULL,
	"title" varchar(200) NOT NULL,
	"file_url" text NOT NULL,
	"published_at" date NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar(160) NOT NULL,
	"title_it" varchar(200) NOT NULL,
	"title_en" varchar(200),
	"body_it" text NOT NULL,
	"body_en" text,
	"event_date" date,
	"image_url" text,
	"published" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "events_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "job_applications" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(120) NOT NULL,
	"email" varchar(200) NOT NULL,
	"role" varchar(120),
	"cv_blob_url" text NOT NULL,
	"consent" boolean NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
