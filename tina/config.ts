import { defineConfig } from "tinacms";

const branch =
  process.env.TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

// Reusable helpers -----------------------------------------------------------
const str = (name: string, label: string, opts: Record<string, unknown> = {}) => ({
  type: "string" as const,
  name,
  label,
  ...opts,
});

const text = (name: string, label: string, opts: Record<string, unknown> = {}) => ({
  type: "string" as const,
  name,
  label,
  ui: { component: "textarea" },
  ...opts,
});

const bool = (name: string, label: string) => ({
  type: "boolean" as const,
  name,
  label,
});

const singleton = { allowedActions: { create: false, delete: false } };

export default defineConfig({
  branch,
  // Filled in from TinaCloud for production; local dev ignores these.
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    publicFolder: "public",
    outputFolder: "cms",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "assets/uploads",
    },
  },
  ui: {
    // Side-by-side visual editing: load the live site in the editing panel.
    previewUrl: () => ({ url: "/" }),
  },
  schema: {
    collections: [
      // GLOBAL -------------------------------------------------------------
      {
        name: "global",
        label: "Site settings & navigation",
        path: "content",
        format: "json",
        match: { include: "global" },
        ui: singleton,
        fields: [
          {
            type: "object",
            name: "site",
            label: "Site",
            fields: [
              str("name", "Site name"),
              str("tagline", "Tagline"),
              text("footerBlurb", "Footer blurb"),
              str("demoEmail", "Demo email"),
              str("privacyEmail", "Privacy email"),
              str("securityEmail", "Security email"),
              str("rmsUrl", "RMS URL"),
              text("pricingNote", "Pricing note"),
            ],
          },
          {
            type: "object",
            name: "navigation",
            label: "Navigation",
            fields: [
              {
                type: "object",
                name: "main",
                label: "Main menu links",
                list: true,
                fields: [str("label", "Label"), str("href", "Link path")],
              },
              str("ctaLabel", "Header button text"),
            ],
          },
          {
            type: "object",
            name: "ui",
            label: "Shared button labels",
            fields: [
              str("learnMoreLabel", "\"Learn More\" button"),
              str("requestDemoLabel", "\"Request a Demo\" button"),
              str("exploreRmsLabel", "\"Explore Forge RMS\" button"),
              str("moduleTagLabel", "Module tag label"),
              str("exploreProductPrefix", "Explore product prefix"),
              str("openLivePlatformLabel", "\"Open live platform\" link"),
            ],
          },
        ],
      },

      // HOMEPAGE -----------------------------------------------------------
      {
        name: "home",
        label: "Homepage",
        path: "content",
        format: "json",
        match: { include: "home" },
        ui: singleton,
        fields: [
          {
            type: "object",
            name: "home",
            label: "Homepage",
            fields: [
              str("heroEyebrow", "Hero eyebrow"),
              str("heroTitle", "Hero title"),
              text("heroLead", "Hero lead"),
              text("heroBody", "Hero body"),
              { type: "string", name: "heroBullets", label: "Hero bullets", list: true },
              str("modulesEyebrow", "Modules eyebrow"),
              str("modulesTitle", "Modules title"),
              text("modulesDescription", "Modules description"),
              str("productsEyebrow", "Products eyebrow"),
              str("productsTitle", "Products title"),
              text("productsDescription", "Products description"),
              str("whyEyebrow", "Why eyebrow"),
              str("whyTitle", "Why title"),
              text("whyDescription", "Why description"),
              {
                type: "object",
                name: "whyCards",
                label: "Why cards",
                list: true,
                fields: [str("title", "Title"), text("copy", "Copy")],
              },
              str("closingTitle", "Closing title"),
              text("closingDescription", "Closing description"),
            ],
          },
        ],
      },

      // PRODUCTS PAGE ------------------------------------------------------
      {
        name: "productsPage",
        label: "Products page",
        path: "content",
        format: "json",
        match: { include: "products-page" },
        ui: singleton,
        fields: [
          {
            type: "object",
            name: "products",
            label: "Products page",
            fields: [
              str("heroEyebrow", "Hero eyebrow"),
              str("heroTitle", "Hero title"),
              text("heroDescription", "Hero description"),
              str("heroSecondaryLink", "Secondary link text"),
              str("baseEyebrow", "Base eyebrow"),
              str("baseTitle", "Base title"),
              text("baseDescription", "Base description"),
              str("addonsEyebrow", "Add-ons eyebrow"),
              str("addonsTitle", "Add-ons title"),
              text("addonsDescription", "Add-ons description"),
              str("coreTitle", "Core title"),
              text("coreDescription", "Core description"),
            ],
          },
          {
            type: "string",
            name: "basePackageFeatures",
            label: "Base package features",
            list: true,
          },
        ],
      },

      // PRODUCT MODULES ----------------------------------------------------
      {
        name: "productModules",
        label: "Core products",
        path: "content",
        format: "json",
        match: { include: "product-modules" },
        ui: singleton,
        fields: [
          {
            type: "object",
            name: "productModules",
            label: "Core products",
            list: true,
            ui: { itemProps: (item: any) => ({ label: item?.name }) },
            fields: [
              str("id", "ID (URL anchor)"),
              str("name", "Name"),
              str("subtitle", "Subtitle"),
              text("description", "Description"),
              bool("liveLink", "Has live link"),
            ],
          },
        ],
      },

      // ADD-ON MODULES -----------------------------------------------------
      {
        name: "addonModules",
        label: "Add-on modules",
        path: "content",
        format: "json",
        match: { include: "addon-modules" },
        ui: singleton,
        fields: [
          {
            type: "object",
            name: "addOnModules",
            label: "Add-on modules",
            list: true,
            ui: { itemProps: (item: any) => ({ label: item?.name }) },
            fields: [
              str("name", "Name"),
              str("subtitle", "Subtitle"),
              text("description", "Description"),
            ],
          },
        ],
      },

      // SOLUTIONS ----------------------------------------------------------
      {
        name: "solutions",
        label: "Solutions page",
        path: "content",
        format: "json",
        match: { include: "solutions" },
        ui: singleton,
        fields: [
          {
            type: "object",
            name: "solutions",
            label: "Solutions page",
            fields: [
              str("eyebrow", "Eyebrow"),
              str("title", "Title"),
              text("description", "Description"),
              {
                type: "object",
                name: "items",
                label: "Solution cards",
                list: true,
                ui: { itemProps: (item: any) => ({ label: item?.title }) },
                fields: [str("title", "Title"), text("copy", "Copy")],
              },
              str("closingTitle", "Closing title"),
              text("closingDescription", "Closing description"),
            ],
          },
        ],
      },

      // COMPANY ------------------------------------------------------------
      {
        name: "company",
        label: "Company page",
        path: "content",
        format: "json",
        match: { include: "company" },
        ui: singleton,
        fields: [
          {
            type: "object",
            name: "company",
            label: "Company page",
            fields: [
              str("eyebrow", "Eyebrow"),
              str("title", "Title"),
              text("description", "Description"),
              { type: "string", name: "paragraphs", label: "Body paragraphs", list: true, ui: { component: "textarea" } },
              str("closingTitle", "Closing title"),
              text("closingDescription", "Closing description"),
            ],
          },
        ],
      },

      // CONTACT ------------------------------------------------------------
      {
        name: "contact",
        label: "Contact page",
        path: "content",
        format: "json",
        match: { include: "contact" },
        ui: singleton,
        fields: [
          {
            type: "object",
            name: "contact",
            label: "Contact page",
            fields: [
              str("eyebrow", "Eyebrow"),
              str("title", "Title"),
              text("description", "Description"),
              str("sidebarTitle", "Sidebar title"),
              text("sidebarBody", "Sidebar body"),
              text("quote", "Testimonial quote"),
              {
                type: "object",
                name: "form",
                label: "Demo request form",
                fields: [
                  str("infoHeading", "\"Your information\" heading"),
                  {
                    type: "object",
                    name: "fields",
                    label: "Contact fields",
                    list: true,
                    ui: { itemProps: (item: any) => ({ label: item?.label }) },
                    fields: [
                      str("name", "Field key"),
                      str("label", "Label"),
                      str("placeholder", "Placeholder"),
                      bool("required", "Required"),
                    ],
                  },
                  str("agencyHeading", "\"About your agency\" heading"),
                  str("agencyTypeLabel", "Agency type label"),
                  { type: "string", name: "agencyTypes", label: "Agency type options", list: true },
                  str("agencySizeLabel", "Agency size label"),
                  { type: "string", name: "agencySizes", label: "Agency size options", list: true },
                  str("productLabel", "Product interest label"),
                  { type: "string", name: "productOptions", label: "Product interest options", list: true },
                  str("notesLabel", "Notes label"),
                  str("notesPlaceholder", "Notes placeholder"),
                  str("submitLabel", "Submit button text"),
                  str("successTitle", "Success title"),
                  text("successBody", "Success body"),
                ],
              },
            ],
          },
        ],
      },

      // RESOURCES ----------------------------------------------------------
      {
        name: "resources",
        label: "Resources page",
        path: "content",
        format: "json",
        match: { include: "resources" },
        ui: singleton,
        fields: [
          {
            type: "object",
            name: "resources",
            label: "Resources page",
            fields: [
              str("eyebrow", "Eyebrow"),
              str("title", "Title"),
              text("description", "Description"),
              {
                type: "object",
                name: "cards",
                label: "Resource cards",
                list: true,
                ui: { itemProps: (item: any) => ({ label: item?.title }) },
                fields: [
                  str("title", "Title"),
                  text("copy", "Copy"),
                  str("linkLabel", "Link label"),
                  str("linkHref", "Link URL"),
                  bool("external", "Opens in new tab"),
                ],
              },
            ],
          },
        ],
      },

      // FOOTER -------------------------------------------------------------
      {
        name: "footer",
        label: "Footer",
        path: "content",
        format: "json",
        match: { include: "footer" },
        ui: singleton,
        fields: [
          {
            type: "object",
            name: "footerColumns",
            label: "Footer columns",
            fields: [
              { type: "object", name: "Solutions", label: "Solutions column", list: true, fields: [str("label", "Label"), str("href", "Link")] },
              { type: "object", name: "Products", label: "Products column", list: true, fields: [str("label", "Label"), str("href", "Link")] },
              { type: "object", name: "Resources", label: "Resources column", list: true, fields: [str("label", "Label"), str("href", "Link")] },
              { type: "object", name: "Company", label: "Company column", list: true, fields: [str("label", "Label"), str("href", "Link")] },
            ],
          },
          {
            type: "object",
            name: "footerLegal",
            label: "Footer legal bar",
            fields: [
              { type: "object", name: "links", label: "Legal links", list: true, fields: [str("label", "Label"), str("href", "Link")] },
              str("copyrightSuffix", "Copyright suffix"),
            ],
          },
        ],
      },

      // LEGAL --------------------------------------------------------------
      {
        name: "legal",
        label: "Legal pages",
        path: "content",
        format: "json",
        match: { include: "legal" },
        ui: singleton,
        fields: [
          {
            type: "object",
            name: "legal",
            label: "Legal pages",
            fields: [
              str("lastUpdatedLabel", "\"Last updated\" label"),
              str("lastUpdated", "Last updated date"),
              {
                type: "object",
                name: "privacy",
                label: "Privacy Policy",
                fields: [
                  str("title", "Page title"),
                  { type: "object", name: "sections", label: "Sections", list: true, ui: { itemProps: (item: any) => ({ label: item?.heading }) }, fields: [str("heading", "Heading"), text("body", "Body")] },
                ],
              },
              {
                type: "object",
                name: "terms",
                label: "Terms of Service",
                fields: [
                  str("title", "Page title"),
                  { type: "object", name: "sections", label: "Sections", list: true, ui: { itemProps: (item: any) => ({ label: item?.heading }) }, fields: [str("heading", "Heading"), text("body", "Body")] },
                ],
              },
              {
                type: "object",
                name: "security",
                label: "Security",
                fields: [
                  str("title", "Page title"),
                  { type: "object", name: "sections", label: "Sections", list: true, ui: { itemProps: (item: any) => ({ label: item?.heading }) }, fields: [str("heading", "Heading"), text("body", "Body")] },
                ],
              },
            ],
          },
        ],
      },

      // 404 ----------------------------------------------------------------
      {
        name: "notfound",
        label: "404 page",
        path: "content",
        format: "json",
        match: { include: "notfound" },
        ui: singleton,
        fields: [
          {
            type: "object",
            name: "notFound",
            label: "404 page",
            fields: [
              str("eyebrow", "Eyebrow"),
              str("title", "Title"),
              text("body", "Body"),
              str("homeLabel", "Home button text"),
              str("contactLabel", "Contact button text"),
            ],
          },
        ],
      },

      // MEDIA --------------------------------------------------------------
      {
        name: "media",
        label: "Logo & hero images",
        path: "content",
        format: "json",
        match: { include: "media" },
        ui: singleton,
        fields: [
          {
            type: "object",
            name: "images",
            label: "Images",
            fields: [
              { type: "image", name: "logo", label: "Header/footer logo" },
              { type: "image", name: "hero", label: "Homepage hero background" },
            ],
          },
        ],
      },
    ],
  },
});
