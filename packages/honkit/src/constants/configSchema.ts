const FILENAME_REGEX = "^[a-zA-Z-._d,s]+$";

export default {
    $schema: "http://json-schema.org/schema#",
    id: "https://gitbook.com/schemas/book.json",
    title: "HonKit Configuration",
    type: "object",
    properties: {
        root: {
            type: "string",
            title: "Path fro the root folder containing the book's content",
        },
        title: {
            type: "string",
            title: "Title of the book, default is extracted from README",
        },
        author: {
            type: "string",
            title: "Name of the author",
        },
        authorSort: {
            type: "string",
            title: "String to be used to sort the author(s)",
        },
        producer: {
            type: "string",
            title: "Name of the producer",
        },
        publisher: {
            type: "string",
            title: "Name of the publisher",
        },
        pubdate: {
            type: "string",
            title: "Publication date of the book",
        },
        series: {
            type: "string",
            title: "Series this book belongs to",
        },
        seriesIndex: {
            type: "string",
            title: "Index of the book in this series",
        },
        isbn: {
            type: "string",
            title: "ISBN for published book",
        },
        language: {
            type: "string",
            title: "Language of the book",
        },
        gitbook: {
            type: "string",
            default: "*",
            title: "GitBook/HonKit version to match",
        },
        direction: {
            type: "string",
            enum: ["ltr", "rtl"],
            title: "Direction of texts, default is detected in the pages",
        },
        theme: {
            type: "string",
            default: "default",
            title: "Name of the theme plugin to use",
        },
        variables: {
            type: "object",
            title: "Templating context variables",
        },
        plugins: {
            oneOf: [{ $ref: "#/definitions/pluginsArray" }, { $ref: "#/definitions/pluginsString" }],
            default: [],
        },
        pluginsConfig: {
            type: "object",
            title: "Configuration for plugins",
        },
        structure: {
            type: "object",
            properties: {
                langs: {
                    default: "LANGS.md",
                    type: "string",
                    title: "File to use as languages index",
                    pattern: FILENAME_REGEX,
                },
                readme: {
                    default: "README.md",
                    type: "string",
                    title: "File to use as preface",
                    pattern: FILENAME_REGEX,
                },
                glossary: {
                    default: "GLOSSARY.md",
                    type: "string",
                    title: "File to use as glossary index",
                    pattern: FILENAME_REGEX,
                },
                summary: {
                    default: "SUMMARY.md",
                    type: "string",
                    title: "File to use as table of contents",
                    pattern: FILENAME_REGEX,
                },
            },
            additionalProperties: false,
        },
        pdf: {
            type: "object",
            title: "PDF specific configurations",
            properties: {
                pageNumbers: {
                    type: "boolean",
                    default: true,
                    title: "Add page numbers to the bottom of every page",
                },
                fontSize: {
                    type: "integer",
                    minimum: 8,
                    maximum: 30,
                    default: 12,
                    title: "Font size for the PDF output",
                },
                fontFamily: {
                    type: "string",
                    default: "Arial",
                    title: "Font family for the PDF output",
                },
                paperSize: {
                    type: "string",
                    enum: [
                        "a0",
                        "a1",
                        "a2",
                        "a3",
                        "a4",
                        "a5",
                        "a6",
                        "b0",
                        "b1",
                        "b2",
                        "b3",
                        "b4",
                        "b5",
                        "b6",
                        "legal",
                        "letter",
                    ],
                    default: "a4",
                    title: "Paper size for the PDF",
                },
                chapterMark: {
                    type: "string",
                    enum: ["pagebreak", "rule", "both", "none"],
                    default: "pagebreak",
                    title: "How to mark detected chapters",
                },
                pageBreaksBefore: {
                    type: "string",
                    default: "/",
                    title: 'An XPath expression. Page breaks are inserted before the specified elements. To disable use the expression: "/"',
                },
                margin: {
                    type: "object",
                    properties: {
                        right: {
                            type: "integer",
                            title: "Right Margin",
                            minimum: 0,
                            maximum: 100,
                            default: 62,
                        },
                        left: {
                            type: "integer",
                            title: "Left Margin",
                            minimum: 0,
                            maximum: 100,
                            default: 62,
                        },
                        top: {
                            type: "integer",
                            title: "Top Margin",
                            minimum: 0,
                            maximum: 100,
                            default: 56,
                        },
                        bottom: {
                            type: "integer",
                            title: "Bottom Margin",
                            minimum: 0,
                            maximum: 100,
                            default: 56,
                        },
                    },
                },
                embedFonts: {
                    type: "boolean",
                    default: false,
                    title: "Embed all fonts into the PDF",
                },
            },
        },
    },
    required: [],
    definitions: {
        pluginsArray: {
            type: "array",
            items: {
                oneOf: [{ $ref: "#/definitions/pluginObject" }, { $ref: "#/definitions/pluginString" }],
            },
        },
        pluginsString: {
            type: "string",
        },
        pluginString: {
            type: "string",
        },
        pluginObject: {
            type: "object",
            properties: {
                name: {
                    type: "string",
                },
                version: {
                    type: "string",
                },
            },
            additionalProperties: false,
            required: ["name"],
        },
    },
};
