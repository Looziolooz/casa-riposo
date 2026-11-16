import { boolean, date, pgEnum, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

// GDPR: nessun campo clinico. Retention prevista 24 mesi (pulizia via cron, fase 4).

export const requestType = pgEnum("request_type", ["info", "visita"]);
export const complaintStatus = pgEnum("complaint_status", ["nuovo", "in_gestione", "chiuso"]);
export const documentCategory = pgEnum("document_category", ["trasparenza", "modulistica", "qualita"]);

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  type: requestType("type").notNull().default("info"),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  phone: varchar("phone", { length: 40 }),
  message: text("message"),
  preferredDate: date("preferred_date"),
  consent: boolean("consent").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const jobApplications = pgTable("job_applications", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  role: varchar("role", { length: 120 }),
  cvBlobUrl: text("cv_blob_url").notNull(),
  consent: boolean("consent").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const complaints = pgTable("complaints", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }),
  contact: varchar("contact", { length: 200 }),
  body: text("body").notNull(),
  status: complaintStatus("status").notNull().default("nuovo"),
  consent: boolean("consent").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 160 }).notNull().unique(),
  titleIt: varchar("title_it", { length: 200 }).notNull(),
  titleEn: varchar("title_en", { length: 200 }),
  bodyIt: text("body_it").notNull(),
  bodyEn: text("body_en"),
  eventDate: date("event_date"),
  imageUrl: text("image_url"),
  published: boolean("published").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const documents = pgTable("documents", {
  id: serial("id").primaryKey(),
  category: documentCategory("category").notNull(),
  title: varchar("title", { length: 200 }).notNull(),
  fileUrl: text("file_url").notNull(),
  publishedAt: date("published_at").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
