var __getOwnPropNames = Object.getOwnPropertyNames;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// tina/config.ts
var require_config = __commonJS({
  "tina/config.ts"(exports, module) {
    var { defineConfig } = __require("tinacms");
    module.exports = defineConfig({
      branch: process.env.TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main",
      clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
      token: process.env.TINA_TOKEN,
      build: {
        outputFolder: "admin",
        publicFolder: "public"
      },
      media: {
        tina: {
          mediaRoot: "uploads",
          publicFolder: "public"
        }
      },
      schema: {
        collections: [
          {
            name: "article",
            label: "Articles",
            path: "content/articles",
            format: "md",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "datetime",
                name: "date",
                label: "Date",
                required: true
              },
              {
                type: "string",
                name: "slug",
                label: "Slug (URL)",
                required: true
              },
              {
                type: "string",
                name: "keywords",
                label: "Keywords",
                list: true
              },
              {
                type: "string",
                name: "author",
                label: "Author"
              },
              {
                type: "image",
                name: "image",
                label: "Featured Image"
              },
              {
                type: "boolean",
                name: "published",
                label: "Published"
              },
              {
                type: "rich-text",
                name: "body",
                label: "Content",
                isBody: true
              }
            ]
          }
        ]
      }
    });
  }
});
export default require_config();
