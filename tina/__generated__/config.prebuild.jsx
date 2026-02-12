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

// tina/config.js
var require_config = __commonJS({
  "tina/config.js"(exports, module) {
    var { defineConfig } = __require("tinacms");
    var branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
    module.exports = defineConfig({
      branch,
      clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
      token: process.env.TINA_TOKEN || "",
      build: {
        outputFolder: "admin",
        publicFolder: "public"
      },
      media: {
        tina: {
          mediaRoot: "content/images",
          publicFolder: "public"
        }
      },
      schema: {
        collections: [
          {
            name: "article",
            label: "Blog Articles",
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
                label: "Meta Description",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "datetime",
                name: "date",
                label: "Publish Date",
                required: true
              },
              {
                type: "string",
                name: "slug",
                label: "URL Slug",
                required: true
              },
              {
                type: "string",
                name: "keywords",
                label: "SEO Keywords",
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
                label: "Article Content",
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
