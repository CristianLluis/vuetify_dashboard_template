import Vuseapi from "./Vuseapi";
/*
 * THIS FILE HAS BEEN AUTOMATICALLY GENERATED USING THE API-GENERATOR TOOL.
 *
 * CHANGES MADE TO THIS FILE WILL BE LOST!
 */
export default {
  "v-app": {
    props: [
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "id",
        type: "string",
        default: "app",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      }
    ],
    mixins: ["themeable"],
    slots: ["default"]
  },
  "v-alert": {
    props: [
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "dismissible",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "icon",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: "transitionable"
      },
      {
        name: "origin",
        type: "string",
        default: "undefined",
        source: "transitionable"
      },
      {
        name: "outline",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "transition",
        type: "string",
        default: "undefined",
        source: "transitionable"
      },
      {
        name: "type",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "toggleable"
      }
    ],
    mixins: ["colorable", "toggleable", "transitionable"],
    slots: ["default"],
    events: [
      {
        name: "input",
        value: "boolean"
      }
    ]
  },
  "v-autocomplete": {
    props: [
      {
        name: "flat",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "color",
        type: "string",
        default: "primary",
        source: "colorable"
      },
      {
        name: "allowOverflow",
        type: "boolean",
        default: "true",
        source: null
      },
      {
        name: "chips",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "cacheItems",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "auto",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "attach",
        type: "any",
        default: false,
        source: "v-select"
      },
      {
        name: "clearIconCb",
        type: "function",
        default: "null",
        source: "v-text-field"
      },
      {
        name: "clearIcon",
        type: "string",
        default: "$vuetify.icons.clear",
        source: "v-text-field"
      },
      {
        name: "clearable",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "browserAutocomplete",
        type: "string",
        default: "off",
        source: "v-text-field"
      },
      {
        name: "box",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "appendIcon",
        type: "string",
        default: "$vuetify.icons.dropdown",
        source: "v-input"
      },
      {
        name: "appendIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "autofocus",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "appendOuterIconCb",
        type: "function",
        default: "null",
        source: "v-text-field"
      },
      {
        name: "appendOuterIcon",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "solo",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "hint",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "hideNoData",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "filter",
        type: "function",
        default:
          "(item: object, queryText: string, itemText: string) => boolean",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "hideSelected",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "dense",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "dontFillMaskBlanks",
        type: "boolean",
        default: "false",
        source: "maskable"
      },
      {
        name: "deletableChips",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "error",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "hideDetails",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "undefined",
        source: "v-input"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "errorCount",
        type: ["number", "string"],
        default: 1,
        source: "validatable"
      },
      {
        name: "errorMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "counter",
        type: ["boolean", "number", "string"],
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "returnMaskedValue",
        type: "boolean",
        default: "false",
        source: "maskable"
      },
      {
        name: "messages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "loading",
        type: ["boolean", "string"],
        default: false,
        source: "loadable"
      },
      {
        name: "menuProps",
        type: ["string", "array", "object"],
        default: {
          closeOnClick: false,
          closeOnContentClick: false,
          openOnClick: false,
          maxHeight: 300,
          offsetY: true,
          offsetOverflow: true,
          transition: false
        },
        source: "v-select"
      },
      {
        name: "itemValue",
        type: ["string", "array", "function"],
        default: "value",
        source: "v-select"
      },
      {
        name: "itemText",
        type: ["string", "array", "function"],
        default: "text",
        source: "v-select"
      },
      {
        name: "itemDisabled",
        type: ["string", "array", "function"],
        default: "disabled",
        source: "v-select"
      },
      {
        name: "itemAvatar",
        type: ["string", "array", "function"],
        default: "avatar",
        source: "v-select"
      },
      {
        name: "items",
        type: "array",
        default: [],
        source: "v-select"
      },
      {
        name: "mask",
        type: ["object", "string"],
        default: "undefined",
        source: "maskable"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "label",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "prependInnerIcon",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "noFilter",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "multiple",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "noDataText",
        type: "string",
        default: "$vuetify.noDataText",
        source: "filterable"
      },
      {
        name: "placeholder",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "soloInverted",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "persistentHint",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "prependIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "rules",
        type: "array",
        default: [],
        source: "validatable"
      },
      {
        name: "singleLine",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "reverse",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "prependIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "prependInnerIconCb",
        type: "function",
        default: "null",
        source: "v-text-field"
      },
      {
        name: "smallChips",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "prefix",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "searchInput",
        type: "any",
        default: "undefined",
        source: "v-select"
      },
      {
        name: "outline",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "returnObject",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "openOnClear",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "success",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "successMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "suffix",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "textarea",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "type",
        type: "string",
        default: "text",
        source: "v-text-field"
      },
      {
        name: "validateOnBlur",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "valueComparator",
        type: "function",
        default: "(a: any, b: any) => boolean",
        source: "comparable"
      }
    ],
    mixins: ["comparable", "filterable"],
    slots: ["append", "prepend", "default", "no-data", "label", "progress"],
    scopedSlots: [
      {
        name: "selection",
        props: {
          parent: "VueComponent",
          item: "object",
          index: "number",
          selected: "boolean",
          disabled: "boolean"
        }
      },
      {
        name: "item",
        props: {
          parent: "VueComponent",
          item: "object",
          tile: "object"
        }
      }
    ],
    events: [
      {
        name: "input",
        value: "any"
      },
      {
        name: "change",
        value: "any"
      },
      {
        name: "update:searchInput",
        value: "string"
      },
      {
        name: "update:error",
        value: "boolean"
      }
    ]
  },
  "v-avatar": {
    props: [
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "size",
        type: ["number", "string"],
        default: 48,
        source: null
      },
      {
        name: "tile",
        type: "boolean",
        default: "false",
        source: null
      }
    ],
    mixins: ["colorable"],
    slots: ["default"]
  },
  "v-badge": {
    props: [
      {
        name: "bottom",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "color",
        type: "string",
        default: "primary",
        source: "colorable"
      },
      {
        name: "left",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: "transitionable"
      },
      {
        name: "origin",
        type: "string",
        default: "undefined",
        source: "transitionable"
      },
      {
        name: "overlap",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "transition",
        type: "string",
        default: "fab-transition",
        source: "transitionable"
      },
      {
        name: "value",
        type: "any",
        default: true,
        source: "toggleable"
      }
    ],
    mixins: ["colorable", "positionable", "toggleable", "transitionable"],
    slots: ["badge", "default"]
  },
  "v-bottom-nav": {
    props: [
      {
        name: "absolute",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "active",
        type: ["number", "string"],
        default: "undefined",
        source: null,
        sync: true
      },
      {
        name: "app",
        type: "boolean",
        default: "false",
        source: "applicationable"
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "fixed",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "height",
        type: ["number", "string"],
        default: 56,
        source: null
      },
      {
        name: "mandatory",
        type: "boolean",
        default: "false",
        source: "button-group"
      },
      {
        name: "shift",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: null
      }
    ],
    mixins: [
      "applicationable",
      "button-group",
      "colorable",
      "positionable",
      "registrable-provide"
    ],
    slots: ["default"],
    events: [
      {
        name: "input",
        value: "boolean"
      },
      {
        name: "update:active",
        value: "string | number"
      }
    ]
  },
  "v-bottom-sheet": {
    props: [
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "hideOverlay",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "inset",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "lazy",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "maxWidth",
        type: ["string", "number"],
        default: "auto",
        source: null
      },
      {
        name: "persistent",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: null
      }
    ],
    mixins: [],
    slots: ["activator", "default"]
  },
  "v-breadcrumbs": {
    props: [
      {
        name: "divider",
        type: "string",
        default: "/",
        source: null
      },
      {
        name: "justifyCenter",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "justifyEnd",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "large",
        type: "boolean",
        default: "false",
        source: null
      }
    ],
    mixins: [],
    slots: ["default"]
  },
  "v-breadcrumbs-item": {
    props: [
      {
        name: "to",
        type: ["string", "object"],
        default: "undefined",
        source: "routable"
      },
      {
        name: "activeClass",
        type: "string",
        default: "v-breadcrumbs__item--disabled",
        source: "routable"
      },
      {
        name: "append",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "exact",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "exactActiveClass",
        type: "string",
        default: "undefined",
        source: "routable"
      },
      {
        name: "href",
        type: ["string", "object"],
        default: "undefined",
        source: "routable"
      },
      {
        name: "nuxt",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "replace",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "ripple",
        type: ["boolean", "object"],
        default: "undefined",
        source: "routable"
      },
      {
        name: "tag",
        type: "string",
        default: "undefined",
        source: "routable"
      },
      {
        name: "target",
        type: "string",
        default: "undefined",
        source: "routable"
      }
    ],
    mixins: ["routable"],
    slots: ["default"]
  },
  "v-btn": {
    props: [
      {
        name: "right",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "append",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "block",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "activeClass",
        type: "string",
        default: "v-btn--active",
        source: "routable"
      },
      {
        name: "bottom",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "absolute",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "to",
        type: ["string", "object"],
        default: "undefined",
        source: "routable"
      },
      {
        name: "replace",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "ripple",
        type: ["boolean", "object"],
        default: true,
        source: "routable"
      },
      {
        name: "tag",
        type: "string",
        default: "button",
        source: "routable"
      },
      {
        name: "target",
        type: "string",
        default: "undefined",
        source: "routable"
      },
      {
        name: "href",
        type: ["string", "object"],
        default: "undefined",
        source: "routable"
      },
      {
        name: "exactActiveClass",
        type: "string",
        default: "undefined",
        source: "routable"
      },
      {
        name: "fixed",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "left",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "exact",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "small",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "nuxt",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "inputValue",
        type: "any",
        default: "undefined",
        source: "toggleable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "depressed",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "fab",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "flat",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "icon",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "large",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "loading",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "outline",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "round",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "top",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "type",
        type: "string",
        default: "button",
        source: null
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: null
      }
    ],
    mixins: [
      "colorable",
      "positionable",
      "registrable-inject",
      "routable",
      "themeable",
      "toggleable"
    ],
    slots: ["default"]
  },
  "v-btn-toggle": {
    props: [
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "inputValue",
        type: "any",
        default: "undefined",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "mandatory",
        type: "boolean",
        default: "false",
        source: "button-group"
      },
      {
        name: "multiple",
        type: "boolean",
        default: "false",
        source: null
      }
    ],
    mixins: ["button-group", "registrable-provide", "themeable"],
    slots: ["default"],
    events: [
      {
        name: "change",
        value: "any[] | any"
      }
    ]
  },
  "v-card": {
    props: [
      {
        name: "tag",
        type: "string",
        default: "div",
        source: "routable"
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "append",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "activeClass",
        type: "string",
        default: "undefined",
        source: "routable"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "exact",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "to",
        type: ["string", "object"],
        default: "undefined",
        source: "routable"
      },
      {
        name: "replace",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "ripple",
        type: ["boolean", "object"],
        default: "undefined",
        source: "routable"
      },
      {
        name: "href",
        type: ["string", "object"],
        default: "undefined",
        source: "routable"
      },
      {
        name: "target",
        type: "string",
        default: "undefined",
        source: "routable"
      },
      {
        name: "exactActiveClass",
        type: "string",
        default: "undefined",
        source: "routable"
      },
      {
        name: "nuxt",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "flat",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "undefined",
        source: null
      },
      {
        name: "hover",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "img",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "raised",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "tile",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "width",
        type: ["string", "number"],
        default: "undefined",
        source: null
      }
    ],
    mixins: ["colorable", "routable", "themeable"],
    slots: ["default"]
  },
  "v-card-media": {
    props: [
      {
        name: "src",
        type: ["string", "object"],
        default: "undefined",
        source: null
      },
      {
        name: "aspectRatio",
        type: ["string", "number"],
        default: "undefined",
        source: null
      },
      {
        name: "alt",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "contain",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "height",
        type: ["string", "number"],
        default: "undefined",
        source: null
      },
      {
        name: "lazySrc",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "maxHeight",
        type: ["string", "number"],
        default: "undefined",
        source: null
      },
      {
        name: "position",
        type: "string",
        default: "center center",
        source: null
      },
      {
        name: "sizes",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "srcset",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "transition",
        type: "string",
        default: "fade-transition",
        source: null
      }
    ],
    mixins: []
  },
  "v-card-title": {
    props: [
      {
        name: "primaryTitle",
        type: "boolean",
        default: "false",
        source: null
      }
    ],
    mixins: []
  },
  "v-card-actions": {
    props: [],
    mixins: []
  },
  "v-card-text": {
    props: [],
    mixins: []
  },
  "v-carousel": {
    props: [
      {
        name: "cycle",
        type: "boolean",
        default: "true",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "delimiterIcon",
        type: "string",
        default: "$vuetify.icons.delimiter",
        source: null
      },
      {
        name: "hideControls",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "hideDelimiters",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "interval",
        type: ["number", "string"],
        default: 6000,
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "nextIcon",
        type: ["boolean", "string"],
        default: "$vuetify.icons.next",
        source: null
      },
      {
        name: "prevIcon",
        type: ["boolean", "string"],
        default: "$vuetify.icons.prev",
        source: null
      },
      {
        name: "value",
        type: "number",
        default: "undefined",
        source: null
      }
    ],
    mixins: ["registrable-provide", "themeable"],
    slots: ["default"],
    events: [
      {
        name: "input",
        value: "number"
      }
    ]
  },
  "v-carousel-item": {
    props: [
      {
        name: "reverseTransition",
        type: "string",
        default: "tab-reverse-transition",
        source: null
      },
      {
        name: "transition",
        type: "string",
        default: "tab-transition",
        source: null
      }
    ],
    mixins: ["registrable-inject"],
    slots: ["default"]
  },
  "v-checkbox": {
    props: [
      {
        name: "hint",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "color",
        type: "string",
        default: "accent",
        source: "colorable"
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "appendIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "appendIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "persistentHint",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "errorCount",
        type: ["number", "string"],
        default: 1,
        source: "validatable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "error",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "offIcon",
        type: "string",
        default: "$vuetify.icons.checkboxOff",
        source: null
      },
      {
        name: "indeterminateIcon",
        type: "string",
        default: "$vuetify.icons.checkboxIndeterminate",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "indeterminate",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "messages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "undefined",
        source: "v-input"
      },
      {
        name: "hideDetails",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "loading",
        type: ["boolean", "string"],
        default: false,
        source: "loadable"
      },
      {
        name: "label",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "errorMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "multiple",
        type: "boolean",
        default: "false",
        source: "selectable"
      },
      {
        name: "falseValue",
        type: "any",
        default: "undefined",
        source: "selectable"
      },
      {
        name: "inputValue",
        type: "any",
        default: "undefined",
        source: "selectable"
      },
      {
        name: "id",
        type: "string",
        default: "undefined",
        source: "selectable"
      },
      {
        name: "trueValue",
        type: "any",
        default: "undefined",
        source: "selectable"
      },
      {
        name: "ripple",
        type: ["boolean", "object"],
        default: true,
        source: "rippleable"
      },
      {
        name: "onIcon",
        type: "string",
        default: "$vuetify.icons.checkboxOn",
        source: null
      },
      {
        name: "prependIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "prependIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "rules",
        type: "array",
        default: [],
        source: "validatable"
      },
      {
        name: "success",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "successMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "validateOnBlur",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "valueComparator",
        type: "function",
        default: "null",
        source: "comparable"
      }
    ],
    mixins: ["comparable", "rippleable", "selectable"],
    slots: ["append", "prepend", "default", "label"]
  },
  "v-chip": {
    props: [
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "close",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "label",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "outline",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "selected",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "small",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "textColor",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "value",
        type: "boolean",
        default: "true",
        source: "toggleable"
      }
    ],
    mixins: ["colorable", "themeable", "toggleable"],
    slots: ["default"],
    events: [
      {
        name: "input",
        value: "boolean"
      }
    ]
  },
  "v-combobox": {
    props: [
      {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "color",
        type: "string",
        default: "primary",
        source: "colorable"
      },
      {
        name: "allowOverflow",
        type: "boolean",
        default: "true",
        source: "v-autocomplete"
      },
      {
        name: "chips",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "cacheItems",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "auto",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "attach",
        type: "any",
        default: false,
        source: "v-select"
      },
      {
        name: "clearIconCb",
        type: "function",
        default: "null",
        source: "v-text-field"
      },
      {
        name: "clearIcon",
        type: "string",
        default: "$vuetify.icons.clear",
        source: "v-text-field"
      },
      {
        name: "clearable",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "browserAutocomplete",
        type: "string",
        default: "off",
        source: "v-text-field"
      },
      {
        name: "box",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "appendIcon",
        type: "string",
        default: "$vuetify.icons.dropdown",
        source: "v-input"
      },
      {
        name: "appendIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "autofocus",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "appendOuterIconCb",
        type: "function",
        default: "null",
        source: "v-text-field"
      },
      {
        name: "appendOuterIcon",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "soloInverted",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "delimiters",
        type: "array",
        default: [],
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "deletableChips",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "counter",
        type: ["boolean", "number", "string"],
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "textarea",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "hint",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "dontFillMaskBlanks",
        type: "boolean",
        default: "false",
        source: "maskable"
      },
      {
        name: "hideNoData",
        type: "boolean",
        default: "false",
        source: "v-autocomplete"
      },
      {
        name: "filter",
        type: "function",
        default:
          "(item: object, queryText: string, itemText: string) => boolean",
        source: "v-autocomplete"
      },
      {
        name: "hideDetails",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "undefined",
        source: "v-input"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "hideSelected",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "dense",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "error",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "errorCount",
        type: ["number", "string"],
        default: 1,
        source: "validatable"
      },
      {
        name: "errorMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "flat",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "prependIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "outline",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "placeholder",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "prefix",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "noFilter",
        type: "boolean",
        default: "false",
        source: "v-autocomplete"
      },
      {
        name: "mask",
        type: ["object", "string"],
        default: "undefined",
        source: "maskable"
      },
      {
        name: "persistentHint",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "openOnClear",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "multiple",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "label",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "menuProps",
        type: ["string", "array", "object"],
        default: {
          closeOnClick: false,
          closeOnContentClick: false,
          openOnClick: false,
          maxHeight: 300,
          offsetY: true,
          offsetOverflow: true,
          transition: false
        },
        source: "v-select"
      },
      {
        name: "itemValue",
        type: ["string", "array", "function"],
        default: "value",
        source: "v-select"
      },
      {
        name: "itemText",
        type: ["string", "array", "function"],
        default: "text",
        source: "v-select"
      },
      {
        name: "itemDisabled",
        type: ["string", "array", "function"],
        default: "disabled",
        source: "v-select"
      },
      {
        name: "noDataText",
        type: "string",
        default: "$vuetify.noDataText",
        source: "filterable"
      },
      {
        name: "messages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "itemAvatar",
        type: ["string", "array", "function"],
        default: "avatar",
        source: "v-select"
      },
      {
        name: "items",
        type: "array",
        default: [],
        source: "v-select"
      },
      {
        name: "loading",
        type: ["boolean", "string"],
        default: false,
        source: "loadable"
      },
      {
        name: "prependIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "singleLine",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "prependInnerIcon",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "prependInnerIconCb",
        type: "function",
        default: "null",
        source: "v-text-field"
      },
      {
        name: "searchInput",
        type: "any",
        default: "undefined",
        source: "v-select"
      },
      {
        name: "successMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "success",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "rules",
        type: "array",
        default: [],
        source: "validatable"
      },
      {
        name: "solo",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "returnMaskedValue",
        type: "boolean",
        default: "false",
        source: "maskable"
      },
      {
        name: "returnObject",
        type: "boolean",
        default: "true",
        source: "v-select"
      },
      {
        name: "reverse",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "smallChips",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "suffix",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "type",
        type: "string",
        default: "text",
        source: "v-text-field"
      },
      {
        name: "validateOnBlur",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "valueComparator",
        type: "function",
        default: "(a: any, b: any) => boolean",
        source: "comparable"
      }
    ],
    mixins: ["comparable", "filterable"],
    slots: ["append", "prepend", "default", "no-data", "label", "progress"],
    scopedSlots: [
      {
        name: "selection",
        props: {
          parent: "VueComponent",
          item: "object",
          index: "number",
          selected: "boolean",
          disabled: "boolean"
        }
      },
      {
        name: "item",
        props: {
          parent: "VueComponent",
          item: "object",
          tile: "object"
        }
      }
    ],
    events: [
      {
        name: "input",
        value: "any"
      },
      {
        name: "change",
        value: "any"
      },
      {
        name: "update:searchInput",
        value: "string"
      },
      {
        name: "update:error",
        value: "boolean"
      }
    ]
  },
  "v-counter": {
    props: [
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "max",
        type: ["number", "string"],
        default: "undefined",
        source: null
      },
      {
        name: "value",
        type: ["number", "string"],
        default: "undefined",
        source: null
      }
    ],
    mixins: ["themeable"]
  },
  "v-data-iterator": {
    props: [
      {
        name: "selectAll",
        type: ["boolean", "string"],
        default: "undefined",
        source: "data-iterable"
      },
      {
        name: "contentClass",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "search",
        type: "any",
        default: "undefined",
        source: "data-iterable"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "contentProps",
        type: "object",
        default: "undefined",
        source: null
      },
      {
        name: "contentTag",
        type: "string",
        default: "div",
        source: null
      },
      {
        name: "customSort",
        type: "function",
        default:
          "(items: object[], index: number, isDescending: boolean): object[]",
        source: "data-iterable"
      },
      {
        name: "customFilter",
        type: "function",
        default: "(items: object[], search: string, filter: Filter): object[]",
        source: "data-iterable"
      },
      {
        name: "disableInitialSort",
        type: "boolean",
        default: "false",
        source: "data-iterable"
      },
      {
        name: "noDataText",
        type: "string",
        default: "$vuetify.noDataText",
        source: "filterable"
      },
      {
        name: "expand",
        type: "boolean",
        default: "false",
        source: "data-iterable"
      },
      {
        name: "hideActions",
        type: "boolean",
        default: "false",
        source: "data-iterable"
      },
      {
        name: "itemKey",
        type: "string",
        default: "id",
        source: "data-iterable"
      },
      {
        name: "loading",
        type: ["boolean", "string"],
        default: false,
        source: "loadable"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "filter",
        type: "function",
        default: "(val: object, search: string): boolean",
        source: "data-iterable"
      },
      {
        name: "mustSort",
        type: "boolean",
        default: "false",
        source: "data-iterable"
      },
      {
        name: "nextIcon",
        type: "string",
        default: "$vuetify.icons.next",
        source: "data-iterable"
      },
      {
        name: "items",
        type: "array",
        default: [],
        source: "data-iterable"
      },
      {
        name: "noResultsText",
        type: "string",
        default: "$vuetify.dataIterator.noResultsText",
        source: "data-iterable"
      },
      {
        name: "pagination",
        type: "object",
        source: "data-iterable",
        sync: true
      },
      {
        name: "prevIcon",
        type: "string",
        default: "$vuetify.icons.prev",
        source: "data-iterable"
      },
      {
        name: "rowsPerPageItems",
        type: "array",
        default: [
          5,
          10,
          25,
          {
            text: "$vuetify.dataIterator.rowsPerPageAll",
            value: -1
          }
        ],
        source: "data-iterable"
      },
      {
        name: "rowsPerPageText",
        type: "string",
        default: "$vuetify.dataIterator.rowsPerPageText",
        source: "data-iterable"
      },
      {
        name: "totalItems",
        type: "number",
        default: "undefined",
        source: "data-iterable"
      },
      {
        name: "value",
        type: "array",
        default: [],
        source: "data-iterable"
      }
    ],
    mixins: ["data-iterable", "filterable", "loadable", "themeable"],
    slots: [
      {
        name: "footer",
        source: "data-iterable"
      },
      {
        name: "noData",
        source: "data-iterable"
      },
      {
        name: "noResults",
        source: "data-iterable"
      },
      "header"
    ],
    scopedSlots: [
      {
        name: "items",
        props: {
          item: "object",
          index: "number",
          selected: "boolean",
          expanded: "boolean"
        },
        source: "data-iterable"
      },
      {
        name: "pageText",
        props: {
          pageStart: "number",
          pageStop: "number",
          itemsLength: "number"
        },
        source: "data-iterable"
      }
    ],
    events: [
      {
        name: "update:pagination",
        value: "object",
        source: "data-iterable"
      },
      {
        name: "input",
        value: "object[]"
      }
    ]
  },
  "v-data-table": {
    props: [
      {
        name: "search",
        type: "any",
        default: "undefined",
        source: "data-iterable"
      },
      {
        name: "hideHeaders",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "headerKey",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "expand",
        type: "boolean",
        default: "false",
        source: "data-iterable"
      },
      {
        name: "hideActions",
        type: "boolean",
        default: "false",
        source: "data-iterable"
      },
      {
        name: "disableInitialSort",
        type: "boolean",
        default: "false",
        source: "data-iterable"
      },
      {
        name: "headerText",
        type: "string",
        default: "text",
        source: null
      },
      {
        name: "headersLength",
        type: "number",
        default: "undefined",
        source: null
      },
      {
        name: "headers",
        type: "array",
        default: [],
        source: null,
        example: {
          text: "string",
          value: "string",
          align: "left" | "center" | "right",
          sortable: "boolean",
          class: "string[] | string",
          width: "string"
        }
      },
      {
        name: "customSort",
        type: "function",
        default:
          "(items: object[], index: number, isDescending: boolean): object[]",
        source: "data-iterable"
      },
      {
        name: "customFilter",
        type: "function",
        default: "(items: object[], search: string, filter: Filter): object[]",
        source: "data-iterable"
      },
      {
        name: "filter",
        type: "function",
        default: "(val: object, search: string): boolean",
        source: "data-iterable"
      },
      {
        name: "itemKey",
        type: "string",
        default: "id",
        source: "data-iterable"
      },
      {
        name: "noDataText",
        type: "string",
        default: "$vuetify.noDataText",
        source: "filterable"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "mustSort",
        type: "boolean",
        default: "false",
        source: "data-iterable"
      },
      {
        name: "nextIcon",
        type: "string",
        default: "$vuetify.icons.next",
        source: "data-iterable"
      },
      {
        name: "loading",
        type: ["boolean", "string"],
        default: false,
        source: "loadable"
      },
      {
        name: "items",
        type: "array",
        default: [],
        source: "data-iterable"
      },
      {
        name: "noResultsText",
        type: "string",
        default: "$vuetify.dataIterator.noResultsText",
        source: "data-iterable"
      },
      {
        name: "pagination",
        type: "object",
        source: "data-iterable",
        sync: true
      },
      {
        name: "prevIcon",
        type: "string",
        default: "$vuetify.icons.prev",
        source: "data-iterable"
      },
      {
        name: "rowsPerPageItems",
        type: "array",
        default: [
          5,
          10,
          25,
          {
            text: "$vuetify.dataIterator.rowsPerPageAll",
            value: -1
          }
        ],
        source: "data-iterable"
      },
      {
        name: "rowsPerPageText",
        type: "string",
        default: "$vuetify.dataTable.rowsPerPageText",
        source: "data-iterable"
      },
      {
        name: "selectAll",
        type: ["boolean", "string"],
        default: "undefined",
        source: "data-iterable"
      },
      {
        name: "sortIcon",
        type: "string",
        default: "$vuetify.icons.sort",
        source: null
      },
      {
        name: "totalItems",
        type: "number",
        default: "undefined",
        source: "data-iterable"
      },
      {
        name: "value",
        type: "array",
        default: [],
        source: "data-iterable"
      }
    ],
    mixins: ["data-iterable", "filterable", "loadable", "themeable"],
    slots: [
      {
        name: "footer",
        source: "data-iterable"
      },
      {
        name: "noData",
        source: "data-iterable"
      },
      {
        name: "noResults",
        source: "data-iterable"
      }
    ],
    scopedSlots: [
      {
        name: "headerCell",
        props: {
          header: "object"
        }
      },
      {
        name: "headers",
        props: {
          headers: "object[]",
          indeterminate: "boolean",
          all: "boolean"
        }
      },
      {
        name: "items",
        props: {
          item: "object",
          index: "number",
          selected: "boolean",
          expanded: "boolean"
        },
        source: "data-iterable"
      },
      {
        name: "pageText",
        props: {
          pageStart: "number",
          pageStop: "number",
          itemsLength: "number"
        },
        source: "data-iterable"
      }
    ],
    events: [
      {
        name: "update:pagination",
        value: "object",
        source: "data-iterable"
      },
      {
        name: "input",
        value: "object[]"
      }
    ]
  },
  "v-edit-dialog": {
    props: [
      {
        name: "cancelText",
        type: "any",
        default: "Cancel",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "large",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "lazy",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "persistent",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "returnValue",
        type: "any",
        default: "undefined",
        source: "returnable"
      },
      {
        name: "saveText",
        type: "any",
        default: "Save",
        source: null
      },
      {
        name: "transition",
        type: "string",
        default: "slide-x-reverse-transition",
        source: null
      }
    ],
    mixins: ["returnable", "themeable"],
    slots: ["default", "input"],
    events: [
      {
        name: "cancel",
        value: "void"
      },
      {
        name: "close",
        value: "void"
      },
      {
        name: "open",
        value: "void"
      },
      {
        name: "save",
        value: "void"
      }
    ]
  },
  "v-table-overflow": {
    props: [],
    mixins: []
  },
  "v-date-picker": {
    props: [
      {
        name: "max",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "allowedDates",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "monthFormat",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        source: "picker"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "firstDayOfWeek",
        type: ["string", "number"],
        default: 0,
        source: null
      },
      {
        name: "eventColor",
        type: ["string", "function", "object"],
        default: "warning",
        source: null
      },
      {
        name: "events",
        type: ["array", "object", "function"],
        default: null,
        source: null
      },
      {
        name: "dayFormat",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "pickerDate",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "headerColor",
        type: "string",
        default: "undefined",
        source: "picker"
      },
      {
        name: "headerDateFormat",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "landscape",
        type: "boolean",
        default: "false",
        source: "picker"
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "locale",
        type: "string",
        default: "en-us",
        source: null
      },
      {
        name: "scrollable",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "noTitle",
        type: "boolean",
        default: "false",
        source: "picker"
      },
      {
        name: "nextIcon",
        type: "string",
        default: "$vuetify.icons.next",
        source: null
      },
      {
        name: "multiple",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "min",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "prevIcon",
        type: "string",
        default: "$vuetify.icons.prev",
        source: null
      },
      {
        name: "reactive",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "showCurrent",
        type: ["boolean", "string"],
        default: true,
        source: null
      },
      {
        name: "titleDateFormat",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "type",
        type: "string",
        default: "date",
        source: null
      },
      {
        name: "value",
        type: ["array", "string"],
        default: "undefined",
        source: null
      },
      {
        name: "width",
        type: ["number", "string"],
        default: 290,
        source: "picker"
      },
      {
        name: "yearFormat",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "yearIcon",
        type: "string",
        default: "undefined",
        source: null
      }
    ],
    mixins: ["colorable", "picker", "themeable"],
    events: [
      {
        name: "input",
        value: "string"
      }
    ],
    functions: [
      {
        name: "title-date-format",
        signature: "(date: string, locale: string): string"
      },
      {
        name: "day-format",
        signature: "(date: string, locale: string): string"
      },
      {
        name: "header-date-format",
        signature: "(date: string, locale: string): string"
      },
      {
        name: "month-format",
        signature: "(date: string, locale: string): string"
      },
      {
        name: "year-format",
        signature: "(date: string, locale: string): string"
      },
      {
        name: "allowed-dates",
        signature: "(date: string): boolean"
      }
    ]
  },
  "v-date-picker-title": {
    props: [
      {
        name: "date",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "selectingYear",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "value",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "year",
        type: ["number", "string"],
        default: "undefined",
        source: null
      },
      {
        name: "yearIcon",
        type: "string",
        default: "undefined",
        source: null
      }
    ],
    mixins: []
  },
  "v-date-picker-header": {
    props: [
      {
        name: "locale",
        type: "string",
        default: "en-us",
        source: null
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "format",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "max",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "min",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "nextIcon",
        type: "string",
        default: "$vuetify.icons.next",
        source: null
      },
      {
        name: "prevIcon",
        type: "string",
        default: "$vuetify.icons.prev",
        source: null
      },
      {
        name: "value",
        type: ["number", "string"],
        default: "undefined",
        source: null
      }
    ],
    mixins: ["colorable", "themeable"]
  },
  "v-date-picker-date-table": {
    props: [
      {
        name: "scrollable",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "allowedDates",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "value",
        type: ["string", "array"],
        default: "undefined",
        source: null
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "current",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "eventColor",
        type: ["string", "function", "object"],
        default: "warning",
        source: null
      },
      {
        name: "events",
        type: ["array", "object", "function"],
        default: null,
        source: null
      },
      {
        name: "firstDayOfWeek",
        type: ["string", "number"],
        default: 0,
        source: null
      },
      {
        name: "format",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "locale",
        type: "string",
        default: "en-us",
        source: null
      },
      {
        name: "max",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "min",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "tableDate",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "weekdayFormat",
        type: "function",
        default: "null",
        source: null
      }
    ],
    mixins: ["colorable", "themeable"]
  },
  "v-date-picker-month-table": {
    props: [
      {
        name: "min",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "allowedDates",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "current",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "format",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "locale",
        type: "string",
        default: "en-us",
        source: null
      },
      {
        name: "max",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "scrollable",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "tableDate",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "value",
        type: ["string", "array"],
        default: "undefined",
        source: null
      }
    ],
    mixins: ["colorable", "themeable"]
  },
  "v-date-picker-years": {
    props: [
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "format",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "locale",
        type: "string",
        default: "en-us",
        source: null
      },
      {
        name: "max",
        type: ["number", "string"],
        default: "undefined",
        source: null
      },
      {
        name: "min",
        type: ["number", "string"],
        default: "undefined",
        source: null
      },
      {
        name: "value",
        type: ["number", "string"],
        default: "undefined",
        source: null
      }
    ],
    mixins: ["colorable"]
  },
  "v-dialog": {
    props: [
      {
        name: "fullscreen",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "lazy",
        type: "boolean",
        default: "false",
        source: "bootable"
      },
      {
        name: "contentClass",
        type: "any",
        default: "undefined",
        source: "detachable"
      },
      {
        name: "hideOverlay",
        type: "boolean",
        default: "false",
        source: "overlayable"
      },
      {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "attach",
        type: "any",
        default: false,
        source: "detachable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "maxWidth",
        type: ["string", "number"],
        default: "none",
        source: null
      },
      {
        name: "noClickAnimation",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "center center",
        source: null
      },
      {
        name: "persistent",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "returnValue",
        type: "any",
        default: "undefined",
        source: "returnable"
      },
      {
        name: "scrollable",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "transition",
        type: ["string", "boolean"],
        default: "dialog-transition",
        source: null
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "toggleable"
      },
      {
        name: "width",
        type: ["string", "number"],
        default: "auto",
        source: null
      }
    ],
    mixins: [
      "bootable",
      "dependent",
      "detachable",
      "overlayable",
      "returnable",
      "stackable",
      "toggleable"
    ],
    slots: ["activator", "default"]
  },
  "v-divider": {
    props: [
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "inset",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "vertical",
        type: "boolean",
        default: "false",
        source: null
      }
    ],
    mixins: []
  },
  "v-expansion-panel": {
    props: [
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "expand",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "focusable",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "inset",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "popout",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "value",
        type: ["number", "array"],
        default: null,
        source: null
      }
    ],
    mixins: ["registrable-provide", "themeable"],
    slots: ["default"]
  },
  "v-expansion-panel-content": {
    props: [
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "expandIcon",
        type: "string",
        default: "$vuetify.icons.expand",
        source: null
      },
      {
        name: "hideActions",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "lazy",
        type: "boolean",
        default: "false",
        source: "bootable"
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "ripple",
        type: ["boolean", "object"],
        default: false,
        source: "rippleable"
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "toggleable"
      }
    ],
    mixins: ["bootable", "registrable-inject", "rippleable", "toggleable"],
    slots: ["default", "header"]
  },
  "v-footer": {
    props: [
      {
        name: "absolute",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "app",
        type: "boolean",
        default: "false",
        source: "applicationable"
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "fixed",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "height",
        type: ["number", "string"],
        default: 32,
        source: null
      },
      {
        name: "inset",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      }
    ],
    mixins: ["applicationable", "colorable", "positionable", "themeable"],
    slots: ["default"]
  },
  "v-form": {
    props: [
      {
        name: "lazyValidation",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "value",
        type: "boolean",
        default: "false",
        source: null
      }
    ],
    mixins: ["registrable-provide"],
    slots: ["default"],
    functions: [
      {
        name: "reset",
        signature: "(): void"
      },
      {
        name: "validate",
        signature: "(): boolean"
      }
    ],
    events: [
      {
        name: "input",
        value: "boolean"
      }
    ]
  },
  "v-container": {
    props: [
      {
        name: "id",
        type: "String",
        default: "undefined",
        source: null
      },
      {
        name: "tag",
        type: "String",
        default: "div",
        source: null
      },
      {
        name: "grid-list-{xs through xl}",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "fluid",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignBaseline",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignCenter",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignContentCenter",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignContentEnd",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignContentSpaceAround",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignContentSpaceBetween",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignContentStart",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignEnd",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignStart",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "d-{type}",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "fillHeight",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "justifyCenter",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "justifyEnd",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "justifySpaceAround",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "justifySpaceBetween",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "justifyStart",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "reverse",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "wrap",
        type: "Boolean",
        default: "false",
        source: null
      }
    ],
    mixins: []
  },
  "v-content": {
    props: [
      {
        name: "tag",
        type: "string",
        default: "main",
        source: null
      }
    ],
    mixins: ["ssr-bootable"]
  },
  "v-flex": {
    props: [
      {
        name: "id",
        type: "String",
        default: "undefined",
        source: null
      },
      {
        name: "tag",
        type: "String",
        default: "div",
        source: null
      },
      {
        name: "offset-(size)(0-12)",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "order-(size)(0-12)",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "(size)(1-12)",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignBaseline",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignCenter",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignContentCenter",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignContentEnd",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignContentSpaceAround",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignContentSpaceBetween",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignContentStart",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignEnd",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignStart",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "d-{type}",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "fillHeight",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "justifyCenter",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "justifyEnd",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "justifySpaceAround",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "justifySpaceBetween",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "justifyStart",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "reverse",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "wrap",
        type: "Boolean",
        default: "false",
        source: null
      }
    ],
    mixins: []
  },
  "v-layout": {
    props: [
      {
        name: "id",
        type: "String",
        default: "undefined",
        source: null
      },
      {
        name: "tag",
        type: "String",
        default: "div",
        source: null
      },
      {
        name: "row",
        type: "Boolean",
        default: "true",
        source: null
      },
      {
        name: "column",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignBaseline",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignCenter",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignContentCenter",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignContentEnd",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignContentSpaceAround",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignContentSpaceBetween",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignContentStart",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignEnd",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "alignStart",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "d-{type}",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "fillHeight",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "justifyCenter",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "justifyEnd",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "justifySpaceAround",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "justifySpaceBetween",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "justifyStart",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "reverse",
        type: "Boolean",
        default: "false",
        source: null
      },
      {
        name: "wrap",
        type: "Boolean",
        default: "false",
        source: null
      }
    ],
    mixins: []
  },
  "v-spacer": {
    props: [],
    mixins: []
  },
  "v-hover": {
    props: [
      {
        name: "closeDelay",
        type: ["number", "string"],
        default: 200,
        source: "delayable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "openDelay",
        type: ["number", "string"],
        default: 0,
        source: "delayable"
      },
      {
        name: "value",
        type: "boolean",
        default: "false",
        source: "toggleable"
      }
    ],
    mixins: ["delayable", "toggleable"]
  },
  "v-icon": {
    props: [
      {
        name: "xLarge",
        type: "boolean",
        default: "false",
        source: "sizeable"
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "large",
        type: "boolean",
        default: "false",
        source: "sizeable"
      },
      {
        name: "left",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "medium",
        type: "boolean",
        default: "false",
        source: "sizeable"
      },
      {
        name: "right",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "size",
        type: ["number", "string"],
        default: "undefined",
        source: "sizeable"
      },
      {
        name: "small",
        type: "boolean",
        default: "false",
        source: "sizeable"
      }
    ],
    mixins: ["colorable", "sizeable", "themeable"],
    slots: ["default"]
  },
  "v-img": {
    props: [
      {
        name: "src",
        type: ["string", "object"],
        default: "undefined",
        source: null
      },
      {
        name: "aspectRatio",
        type: ["string", "number"],
        default: "undefined",
        source: null
      },
      {
        name: "alt",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "contain",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "height",
        type: ["string", "number"],
        default: "undefined",
        source: null
      },
      {
        name: "lazySrc",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "maxHeight",
        type: ["string", "number"],
        default: "undefined",
        source: null
      },
      {
        name: "position",
        type: "string",
        default: "center center",
        source: null
      },
      {
        name: "sizes",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "srcset",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "transition",
        type: "string",
        default: "fade-transition",
        source: null
      }
    ],
    mixins: []
  },
  "v-input": {
    props: [
      {
        name: "appendIcon",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "appendIconCb",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "error",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "undefined",
        source: null
      },
      {
        name: "messages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "label",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "hint",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "hideDetails",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "loading",
        type: ["boolean", "string"],
        default: false,
        source: "loadable"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "errorCount",
        type: ["number", "string"],
        default: 1,
        source: "validatable"
      },
      {
        name: "errorMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "persistentHint",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "prependIcon",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "prependIconCb",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "rules",
        type: "array",
        default: [],
        source: "validatable"
      },
      {
        name: "success",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "successMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "validateOnBlur",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: null
      }
    ],
    mixins: [
      "colorable",
      "colorable",
      "loadable",
      "registrable-inject",
      "themeable",
      "validatable"
    ]
  },
  "v-jumbotron": {
    props: [
      {
        name: "replace",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "append",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "activeClass",
        type: "string",
        default: "undefined",
        source: "routable"
      },
      {
        name: "tag",
        type: "string",
        default: "div",
        source: "routable"
      },
      {
        name: "exact",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "exactActiveClass",
        type: "string",
        default: "undefined",
        source: "routable"
      },
      {
        name: "gradient",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "400px",
        source: null
      },
      {
        name: "href",
        type: ["string", "object"],
        default: "undefined",
        source: "routable"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "nuxt",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "ripple",
        type: ["boolean", "object"],
        default: "undefined",
        source: "routable"
      },
      {
        name: "src",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "target",
        type: "string",
        default: "undefined",
        source: "routable"
      },
      {
        name: "to",
        type: ["string", "object"],
        default: "undefined",
        source: "routable"
      }
    ],
    mixins: ["colorable", "routable", "themeable"]
  },
  "v-label": {
    props: [
      {
        name: "absolute",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "color",
        type: ["boolean", "string"],
        default: "primary",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "focused",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "for",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "left",
        type: ["number", "string"],
        default: 0,
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "right",
        type: ["number", "string"],
        default: "auto",
        source: null
      },
      {
        name: "value",
        type: "boolean",
        default: "false",
        source: null
      }
    ],
    mixins: ["themeable"]
  },
  "v-list": {
    props: [
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "dense",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "expand",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "subheader",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "threeLine",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "twoLine",
        type: "boolean",
        default: "false",
        source: null
      }
    ],
    mixins: ["registrable-provide", "themeable"],
    slots: ["default"]
  },
  "v-list-group": {
    props: [
      {
        name: "activeClass",
        type: "string",
        default: "primary--text",
        source: null
      },
      {
        name: "appendIcon",
        type: "string",
        default: "$vuetify.icons.expand",
        source: null
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "group",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "lazy",
        type: "boolean",
        default: "false",
        source: "bootable"
      },
      {
        name: "noAction",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "prependIcon",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "subGroup",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "toggleable"
      }
    ],
    mixins: ["bootable", "registrable-inject", "toggleable"]
  },
  "v-list-tile": {
    props: [
      {
        name: "nuxt",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "append",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "avatar",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "activeClass",
        type: "string",
        default: "primary--text",
        source: "routable"
      },
      {
        name: "ripple",
        type: ["boolean", "object"],
        default: "undefined",
        source: "routable"
      },
      {
        name: "exactActiveClass",
        type: "string",
        default: "undefined",
        source: "routable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "exact",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "href",
        type: ["string", "object"],
        default: "undefined",
        source: "routable"
      },
      {
        name: "inactive",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "replace",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "tag",
        type: "string",
        default: "undefined",
        source: "routable"
      },
      {
        name: "target",
        type: "string",
        default: "undefined",
        source: "routable"
      },
      {
        name: "to",
        type: ["string", "object"],
        default: "undefined",
        source: "routable"
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "toggleable"
      }
    ],
    mixins: ["colorable", "routable", "toggleable"],
    slots: ["default"]
  },
  "v-list-tile-action": {
    props: [],
    mixins: [],
    slots: ["default"]
  },
  "v-list-tile-action-text": {
    props: [],
    mixins: []
  },
  "v-list-tile-avatar": {
    props: [
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "size",
        type: ["number", "string"],
        default: 40,
        source: null
      },
      {
        name: "tile",
        type: "boolean",
        default: "false",
        source: null
      }
    ],
    mixins: [],
    slots: ["default"]
  },
  "v-list-tile-content": {
    props: [],
    mixins: []
  },
  "v-list-tile-sub-title": {
    props: [],
    mixins: [],
    slots: ["default"]
  },
  "v-list-tile-title": {
    props: [],
    mixins: [],
    slots: ["default"]
  },
  "v-menu": {
    props: [
      {
        name: "nudgeRight",
        type: ["number", "string"],
        default: 0,
        source: "menuable"
      },
      {
        name: "openDelay",
        type: ["number", "string"],
        default: 0,
        source: "delayable"
      },
      {
        name: "lazy",
        type: "boolean",
        default: "false",
        source: "bootable"
      },
      {
        name: "attach",
        type: "any",
        default: false,
        source: "detachable"
      },
      {
        name: "contentClass",
        type: "any",
        default: "undefined",
        source: "detachable"
      },
      {
        name: "absolute",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "bottom",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "fixed",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "left",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "offsetY",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "offsetX",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "activator",
        type: "any",
        default: "undefined",
        source: "menuable"
      },
      {
        name: "allowOverflow",
        type: "boolean",
        default: "false",
        source: "menuable"
      },
      {
        name: "inputActivator",
        type: "boolean",
        default: "false",
        source: "menuable"
      },
      {
        name: "maxWidth",
        type: ["number", "string"],
        default: "auto",
        source: "menuable"
      },
      {
        name: "minWidth",
        type: ["number", "string"],
        default: "undefined",
        source: "menuable"
      },
      {
        name: "nudgeBottom",
        type: ["number", "string"],
        default: 0,
        source: "menuable"
      },
      {
        name: "nudgeLeft",
        type: ["number", "string"],
        default: 0,
        source: "menuable"
      },
      {
        name: "closeDelay",
        type: ["number", "string"],
        default: 200,
        source: "delayable"
      },
      {
        name: "nudgeTop",
        type: ["number", "string"],
        default: 0,
        source: "menuable"
      },
      {
        name: "nudgeWidth",
        type: ["number", "string"],
        default: 0,
        source: "menuable"
      },
      {
        name: "offsetOverflow",
        type: "boolean",
        default: "false",
        source: "menuable"
      },
      {
        name: "maxHeight",
        type: "any",
        default: "auto",
        source: null
      },
      {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "closeOnContentClick",
        type: "boolean",
        default: "true",
        source: null
      },
      {
        name: "closeOnClick",
        type: "boolean",
        default: "true",
        source: null
      },
      {
        name: "auto",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "top",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "transition",
        type: ["boolean", "string"],
        default: "v-menu-transition",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top left",
        source: null
      },
      {
        name: "positionY",
        type: "number",
        default: "undefined",
        source: "menuable"
      },
      {
        name: "positionX",
        type: "number",
        default: "undefined",
        source: "menuable"
      },
      {
        name: "returnValue",
        type: "any",
        default: "undefined",
        source: "returnable"
      },
      {
        name: "right",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "openOnClick",
        type: "boolean",
        default: "true",
        source: null
      },
      {
        name: "openOnHover",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "toggleable"
      },
      {
        name: "zIndex",
        type: ["number", "string"],
        default: "undefined",
        source: "menuable"
      }
    ],
    mixins: [
      "bootable",
      "delayable",
      "dependent",
      "detachable",
      "menuable",
      "positionable",
      "returnable",
      "stackable",
      "themeable",
      "toggleable"
    ],
    slots: ["activator", "default"]
  },
  "v-messages": {
    props: [
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "value",
        type: "array",
        default: [],
        source: null
      }
    ],
    mixins: ["colorable", "themeable"]
  },
  "v-navigation-drawer": {
    props: [
      {
        name: "floating",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "absolute",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "miniVariant",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "app",
        type: "boolean",
        default: "false",
        source: "applicationable"
      },
      {
        name: "miniVariantWidth",
        type: ["number", "string"],
        default: 80,
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "clipped",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "permanent",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "disableRouteWatcher",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "disableResizeWatcher",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "right",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "fixed",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "100%",
        source: null
      },
      {
        name: "hideOverlay",
        type: "boolean",
        default: "false",
        source: "overlayable"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "mobileBreakPoint",
        type: ["number", "string"],
        default: 1264,
        source: null
      },
      {
        name: "stateless",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "temporary",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "touchless",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: null
      },
      {
        name: "width",
        type: ["number", "string"],
        default: 300,
        source: null
      }
    ],
    mixins: [
      "applicationable",
      "overlayable",
      "positionable",
      "ssr-bootable",
      "themeable"
    ],
    slots: ["default"],
    events: [
      {
        name: "input",
        value: "boolean"
      },
      {
        name: "update:miniVariant",
        value: "boolean"
      }
    ]
  },
  "v-overflow-btn": {
    props: [
      {
        name: "outline",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "color",
        type: "string",
        default: "primary",
        source: "colorable"
      },
      {
        name: "allowOverflow",
        type: "boolean",
        default: "true",
        source: "v-autocomplete"
      },
      {
        name: "chips",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "cacheItems",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "auto",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "attach",
        type: "any",
        default: false,
        source: "v-select"
      },
      {
        name: "clearIconCb",
        type: "function",
        default: "null",
        source: "v-text-field"
      },
      {
        name: "clearIcon",
        type: "string",
        default: "$vuetify.icons.clear",
        source: "v-text-field"
      },
      {
        name: "clearable",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "browserAutocomplete",
        type: "string",
        default: "off",
        source: "v-text-field"
      },
      {
        name: "box",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "appendIcon",
        type: "string",
        default: "$vuetify.icons.dropdown",
        source: "v-input"
      },
      {
        name: "appendIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "autofocus",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "appendOuterIconCb",
        type: "function",
        default: "null",
        source: "v-text-field"
      },
      {
        name: "appendOuterIcon",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "suffix",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "hint",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "editable",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "hideNoData",
        type: "boolean",
        default: "false",
        source: "v-autocomplete"
      },
      {
        name: "filter",
        type: "function",
        default: "(item, queryText, itemText) => {}",
        source: "v-autocomplete"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "hideSelected",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "dontFillMaskBlanks",
        type: "boolean",
        default: "false",
        source: "maskable"
      },
      {
        name: "dense",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "deletableChips",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "hideDetails",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "undefined",
        source: "v-input"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "error",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "errorCount",
        type: ["number", "string"],
        default: 1,
        source: "validatable"
      },
      {
        name: "errorMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "flat",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "counter",
        type: ["boolean", "number", "string"],
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "returnMaskedValue",
        type: "boolean",
        default: "false",
        source: "maskable"
      },
      {
        name: "messages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "loading",
        type: ["boolean", "string"],
        default: false,
        source: "loadable"
      },
      {
        name: "menuProps",
        type: ["string", "array", "object"],
        default: {
          closeOnClick: false,
          closeOnContentClick: false,
          openOnClick: false,
          maxHeight: 300,
          offsetY: true,
          offsetOverflow: true,
          transition: false
        },
        source: "v-select"
      },
      {
        name: "itemValue",
        type: ["string", "array", "function"],
        default: "value",
        source: "v-select"
      },
      {
        name: "itemText",
        type: ["string", "array", "function"],
        default: "text",
        source: "v-select"
      },
      {
        name: "itemDisabled",
        type: ["string", "array", "function"],
        default: "disabled",
        source: "v-select"
      },
      {
        name: "itemAvatar",
        type: ["string", "array", "function"],
        default: "avatar",
        source: "v-select"
      },
      {
        name: "items",
        type: "array",
        default: [],
        source: "v-select"
      },
      {
        name: "mask",
        type: ["object", "string"],
        default: "undefined",
        source: "maskable"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "label",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "prependInnerIcon",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "textarea",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "persistentHint",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "noDataText",
        type: "string",
        default: "$vuetify.noDataText",
        source: "filterable"
      },
      {
        name: "success",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "successMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "segmented",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "soloInverted",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "rules",
        type: "array",
        default: [],
        source: "validatable"
      },
      {
        name: "solo",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "noFilter",
        type: "boolean",
        default: "false",
        source: "v-autocomplete"
      },
      {
        name: "singleLine",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "reverse",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "prependInnerIconCb",
        type: "function",
        default: "null",
        source: "v-text-field"
      },
      {
        name: "prependIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "prefix",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "placeholder",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "multiple",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "openOnClear",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "returnObject",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "searchInput",
        type: "any",
        default: "undefined",
        source: "v-select"
      },
      {
        name: "smallChips",
        type: "boolean",
        default: "false",
        source: "v-select"
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "prependIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "transition",
        type: "any",
        default: "undefined",
        source: null
      },
      {
        name: "type",
        type: "string",
        default: "text",
        source: "v-text-field"
      },
      {
        name: "validateOnBlur",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "valueComparator",
        type: "function",
        default: "null",
        source: "comparable"
      }
    ],
    mixins: ["comparable", "filterable"]
  },
  "v-pagination": {
    props: [
      {
        name: "circle",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "length",
        type: "number",
        default: 0,
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "nextIcon",
        type: "string",
        default: "$vuetify.icons.next",
        source: null
      },
      {
        name: "prevIcon",
        type: "string",
        default: "$vuetify.icons.prev",
        source: null
      },
      {
        name: "totalVisible",
        type: ["number", "string"],
        default: "undefined",
        source: null
      },
      {
        name: "value",
        type: "number",
        default: 0,
        source: null
      }
    ],
    mixins: ["colorable", "themeable"],
    events: [
      {
        name: "input",
        value: "number"
      },
      {
        name: "next",
        value: "void"
      },
      {
        name: "right",
        value: "void"
      }
    ]
  },
  "v-parallax": {
    props: [
      {
        name: "alt",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "height",
        type: ["string", "number"],
        default: 500,
        source: "translatable"
      },
      {
        name: "src",
        type: "string",
        default: "undefined",
        source: null
      }
    ],
    mixins: ["translatable"],
    slots: ["default"]
  },
  "v-picker": {
    props: [
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "landscape",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "transition",
        type: "string",
        default: "fade-transition",
        source: null
      },
      {
        name: "width",
        type: ["number", "string"],
        default: 290,
        source: null
      }
    ],
    mixins: ["colorable", "themeable"]
  },
  "v-progress-circular": {
    props: [
      {
        name: "button",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "indeterminate",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "rotate",
        type: "number",
        default: 0,
        source: null
      },
      {
        name: "size",
        type: ["number", "string"],
        default: 32,
        source: null
      },
      {
        name: "value",
        type: "number",
        default: 0,
        source: null
      },
      {
        name: "width",
        type: "number",
        default: 4,
        source: null
      }
    ],
    mixins: ["colorable"],
    slots: ["default"]
  },
  "v-progress-linear": {
    props: [
      {
        name: "active",
        type: "boolean",
        default: "true",
        source: null
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "backgroundOpacity",
        type: ["number", "string"],
        default: "undefined",
        source: null
      },
      {
        name: "bufferValue",
        type: ["number", "string"],
        default: 100,
        source: null
      },
      {
        name: "color",
        type: "string",
        default: "primary",
        source: "colorable"
      },
      {
        name: "height",
        type: ["number", "string"],
        default: 7,
        source: null
      },
      {
        name: "indeterminate",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "query",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "value",
        type: ["number", "string"],
        default: 0,
        source: null
      }
    ],
    mixins: ["colorable"]
  },
  "v-radio-group": {
    props: [
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "appendIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "appendIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "hideDetails",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "errorCount",
        type: ["number", "string"],
        default: 1,
        source: "validatable"
      },
      {
        name: "column",
        type: "boolean",
        default: "true",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "error",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "persistentHint",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "row",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "name",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "mandatory",
        type: "boolean",
        default: "true",
        source: null
      },
      {
        name: "loading",
        type: ["boolean", "string"],
        default: false,
        source: "loadable"
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "auto",
        source: "v-input"
      },
      {
        name: "errorMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "hint",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "label",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "messages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "prependIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "prependIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "rules",
        type: "array",
        default: [],
        source: "validatable"
      },
      {
        name: "success",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "successMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "validateOnBlur",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "valueComparator",
        type: "function",
        default: "null",
        source: "comparable"
      }
    ],
    mixins: ["comparable", "registrable-provide"],
    slots: ["append", "prepend", "default", "label"],
    events: [
      {
        name: "change",
        value: "any"
      },
      {
        name: "update:error",
        value: "boolean"
      }
    ]
  },
  "v-radio": {
    props: [
      {
        name: "color",
        type: "string",
        default: "accent",
        source: "colorable"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "label",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "offIcon",
        type: "string",
        default: "$vuetify.icons.radioOff",
        source: null
      },
      {
        name: "onIcon",
        type: "string",
        default: "$vuetify.icons.radioOn",
        source: null
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "ripple",
        type: ["boolean", "object"],
        default: true,
        source: "rippleable"
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: null
      }
    ],
    mixins: ["colorable", "registrable-inject", "rippleable", "themeable"],
    events: [
      {
        name: "change",
        value: "any"
      }
    ]
  },
  "v-range-slider": {
    props: [
      {
        name: "label",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "alwaysDirty",
        type: "boolean",
        default: "false",
        source: "v-slider"
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "appendIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "appendIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "prependIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "errorMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "error",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "errorCount",
        type: ["number", "string"],
        default: 1,
        source: "validatable"
      },
      {
        name: "rules",
        type: "array",
        default: [],
        source: "validatable"
      },
      {
        name: "trackColor",
        type: "string",
        default: "undefined",
        source: "v-slider"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "success",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "undefined",
        source: "v-input"
      },
      {
        name: "hideDetails",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "hint",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "loading",
        type: ["boolean", "string"],
        default: false,
        source: "loadable"
      },
      {
        name: "persistentHint",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "prependIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "messages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "thumbSize",
        type: ["number", "string"],
        default: 32,
        source: "v-slider"
      },
      {
        name: "successMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "inverseLabel",
        type: "boolean",
        default: "false",
        source: "v-slider"
      },
      {
        name: "min",
        type: ["number", "string"],
        default: 0,
        source: "v-slider"
      },
      {
        name: "max",
        type: ["number", "string"],
        default: 100,
        source: "v-slider"
      },
      {
        name: "range",
        type: "boolean",
        default: "false",
        source: "v-slider"
      },
      {
        name: "step",
        type: ["number", "string"],
        default: 1,
        source: "v-slider"
      },
      {
        name: "ticks",
        type: ["boolean", "string"],
        default: false,
        source: "v-slider"
      },
      {
        name: "tickLabels",
        type: "array",
        default: [],
        source: "v-slider"
      },
      {
        name: "tickSize",
        type: ["number", "string"],
        default: 1,
        source: "v-slider"
      },
      {
        name: "thumbColor",
        type: "string",
        default: "undefined",
        source: "v-slider"
      },
      {
        name: "thumbLabel",
        type: ["boolean", "string"],
        default: "undefined",
        source: "v-slider"
      },
      {
        name: "validateOnBlur",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "value",
        type: "array",
        default: [],
        source: "v-input"
      }
    ],
    mixins: [
      "colorable",
      "colorable",
      "loadable",
      "registrable-inject",
      "themeable",
      "validatable"
    ],
    events: [
      {
        name: "input",
        value: "array"
      },
      {
        name: "change",
        value: "array"
      },
      {
        name: "start",
        value: "array"
      },
      {
        name: "end",
        value: "array"
      },
      {
        name: "update:error",
        value: "boolean"
      }
    ]
  },
  "v-rating": {
    props: [
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "color",
        type: "string",
        default: "primary",
        source: "colorable"
      },
      {
        name: "closeDelay",
        type: ["number", "string"],
        default: 200,
        source: "delayable"
      },
      {
        name: "clearable",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "accent",
        source: null
      },
      {
        name: "fullIcon",
        type: "string",
        default: "$vuetify.icons.ratingFull",
        source: null
      },
      {
        name: "medium",
        type: "boolean",
        default: "false",
        source: "sizeable"
      },
      {
        name: "hover",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "length",
        type: ["number", "string"],
        default: 5,
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "halfIncrements",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "large",
        type: "boolean",
        default: "false",
        source: "sizeable"
      },
      {
        name: "emptyIcon",
        type: "string",
        default: "$vuetify.icons.ratingEmpty",
        source: null
      },
      {
        name: "halfIcon",
        type: "string",
        default: "$vuetify.icons.ratingHalf",
        source: null
      },
      {
        name: "openDelay",
        type: ["number", "string"],
        default: 0,
        source: "delayable"
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "ripple",
        type: ["boolean", "object"],
        default: true,
        source: "rippleable"
      },
      {
        name: "size",
        type: ["number", "string"],
        default: "undefined",
        source: "sizeable"
      },
      {
        name: "small",
        type: "boolean",
        default: "false",
        source: "sizeable"
      },
      {
        name: "value",
        type: "number",
        default: 0,
        source: null
      },
      {
        name: "xLarge",
        type: "boolean",
        default: "false",
        source: "sizeable"
      }
    ],
    mixins: ["colorable", "delayable", "rippleable", "sizeable", "themeable"]
  },
  "v-responsive": {
    props: [
      {
        name: "aspectRatio",
        type: ["string", "number"],
        default: "undefined",
        source: null
      },
      {
        name: "height",
        type: ["string", "number"],
        default: "undefined",
        source: null
      },
      {
        name: "maxHeight",
        type: ["string", "number"],
        default: "undefined",
        source: null
      }
    ],
    mixins: []
  },
  "v-select": {
    props: [
      {
        name: "clearIconCb",
        type: "function",
        default: "null",
        source: "v-text-field"
      },
      {
        name: "color",
        type: "string",
        default: "primary",
        source: "colorable"
      },
      {
        name: "chips",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "cacheItems",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "auto",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "attach",
        type: "any",
        default: false,
        source: null
      },
      {
        name: "clearIcon",
        type: "string",
        default: "$vuetify.icons.clear",
        source: "v-text-field"
      },
      {
        name: "clearable",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "browserAutocomplete",
        type: "string",
        default: "on",
        source: "v-text-field"
      },
      {
        name: "box",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "autofocus",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "appendOuterIconCb",
        type: "function",
        default: "null",
        source: "v-text-field"
      },
      {
        name: "appendIcon",
        type: "string",
        default: "$vuetify.icons.dropdown",
        source: "v-input"
      },
      {
        name: "appendIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "appendOuterIcon",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "prependInnerIconCb",
        type: "function",
        default: "null",
        source: "v-text-field"
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "undefined",
        source: "v-input"
      },
      {
        name: "dense",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "deletableChips",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "error",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "errorCount",
        type: ["number", "string"],
        default: 1,
        source: "validatable"
      },
      {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "flat",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "dontFillMaskBlanks",
        type: "boolean",
        default: "false",
        source: "maskable"
      },
      {
        name: "counter",
        type: ["boolean", "number", "string"],
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "errorMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "type",
        type: "string",
        default: "text",
        source: "v-text-field"
      },
      {
        name: "smallChips",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "searchInput",
        type: "any",
        default: "undefined",
        source: null
      },
      {
        name: "rules",
        type: "array",
        default: [],
        source: "validatable"
      },
      {
        name: "messages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "returnMaskedValue",
        type: "boolean",
        default: "false",
        source: "maskable"
      },
      {
        name: "loading",
        type: ["boolean", "string"],
        default: false,
        source: "loadable"
      },
      {
        name: "mask",
        type: ["object", "string"],
        default: "undefined",
        source: "maskable"
      },
      {
        name: "returnObject",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "outline",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "placeholder",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "prefix",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "prependInnerIcon",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "hideDetails",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "reverse",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "singleLine",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "openOnClear",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "multiple",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "menuProps",
        type: ["string", "array", "object"],
        default: {
          closeOnClick: false,
          closeOnContentClick: false,
          openOnClick: false,
          maxHeight: 300
        },
        source: null
      },
      {
        name: "itemValue",
        type: ["string", "array", "function"],
        default: "value",
        source: null
      },
      {
        name: "itemText",
        type: ["string", "array", "function"],
        default: "text",
        source: null
      },
      {
        name: "itemDisabled",
        type: ["string", "array", "function"],
        default: "disabled",
        source: null
      },
      {
        name: "noDataText",
        type: "string",
        default: "$vuetify.noDataText",
        source: "filterable"
      },
      {
        name: "prependIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "prependIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "persistentHint",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "label",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "hint",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "hideSelected",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "items",
        type: "array",
        default: [],
        source: null
      },
      {
        name: "itemAvatar",
        type: ["string", "array", "function"],
        default: "avatar",
        source: null
      },
      {
        name: "solo",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "soloInverted",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "success",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "successMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "suffix",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "textarea",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "validateOnBlur",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "valueComparator",
        type: "function",
        default: "(a: any, b: any) => boolean",
        source: "comparable"
      },
      {
        name: "filter",
        default:
          "(item: object, queryText: string, itemText: string) => boolean"
      }
    ],
    mixins: ["comparable", "filterable"],
    slots: ["append", "prepend", "default", "no-data", "label", "progress"],
    scopedSlots: [
      {
        name: "selection",
        props: {
          parent: "VueComponent",
          item: "object",
          index: "number",
          selected: "boolean",
          disabled: "boolean"
        }
      },
      {
        name: "item",
        props: {
          parent: "VueComponent",
          item: "object",
          tile: "object"
        }
      }
    ],
    events: [
      {
        name: "input",
        value: "any"
      },
      {
        name: "change",
        value: "any"
      },
      {
        name: "update:searchInput",
        value: "string"
      },
      {
        name: "update:error",
        value: "boolean"
      }
    ]
  },
  "v-slider": {
    props: [
      {
        name: "label",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "alwaysDirty",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "appendIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "appendIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "prependIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "errorMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "error",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "errorCount",
        type: ["number", "string"],
        default: 1,
        source: "validatable"
      },
      {
        name: "rules",
        type: "array",
        default: [],
        source: "validatable"
      },
      {
        name: "trackColor",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "success",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "undefined",
        source: "v-input"
      },
      {
        name: "hideDetails",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "hint",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "loading",
        type: ["boolean", "string"],
        default: false,
        source: "loadable"
      },
      {
        name: "persistentHint",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "prependIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "messages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "thumbSize",
        type: ["number", "string"],
        default: 32,
        source: null
      },
      {
        name: "successMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "inverseLabel",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "min",
        type: ["number", "string"],
        default: 0,
        source: null
      },
      {
        name: "max",
        type: ["number", "string"],
        default: 100,
        source: null
      },
      {
        name: "range",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "step",
        type: ["number", "string"],
        default: 1,
        source: null
      },
      {
        name: "ticks",
        type: ["boolean", "string"],
        default: false,
        source: null
      },
      {
        name: "tickLabels",
        type: "array",
        default: [],
        source: null
      },
      {
        name: "tickSize",
        type: ["number", "string"],
        default: 1,
        source: null
      },
      {
        name: "thumbColor",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "thumbLabel",
        type: ["boolean", "string"],
        default: "undefined",
        source: null
      },
      {
        name: "validateOnBlur",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "value",
        type: ["number", "string"],
        default: "undefined",
        source: "v-input"
      }
    ],
    mixins: [
      "colorable",
      "colorable",
      "loadable",
      "registrable-inject",
      "themeable",
      "validatable"
    ],
    events: [
      {
        name: "input",
        value: "number"
      },
      {
        name: "change",
        value: "number"
      },
      {
        name: "start",
        value: "number"
      },
      {
        name: "end",
        value: "number"
      },
      {
        name: "update:error",
        value: "boolean"
      }
    ]
  },
  "v-snackbar": {
    props: [
      {
        name: "left",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "absolute",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "autoHeight",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "bottom",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "multiLine",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "right",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "timeout",
        type: "number",
        default: 6000,
        source: null
      },
      {
        name: "top",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "toggleable"
      },
      {
        name: "vertical",
        type: "boolean",
        default: "false",
        source: null
      }
    ],
    mixins: ["colorable", "positionable", "toggleable"],
    slots: ["default"]
  },
  "v-speed-dial": {
    props: [
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "toggleable"
      },
      {
        name: "absolute",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "bottom",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "direction",
        type: "string",
        default: "top",
        source: null
      },
      {
        name: "fixed",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "left",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: "transitionable"
      },
      {
        name: "openOnHover",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "undefined",
        source: "transitionable"
      },
      {
        name: "right",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "top",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "transition",
        type: "string",
        default: "scale-transition",
        source: "transitionable"
      }
    ],
    mixins: ["positionable", "toggleable", "transitionable"],
    slots: ["activator", "default"]
  },
  "v-stepper": {
    props: [
      {
        name: "altLabels",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "nonLinear",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "value",
        type: ["number", "string"],
        default: "undefined",
        source: null
      },
      {
        name: "vertical",
        type: "boolean",
        default: "false",
        source: null
      }
    ],
    mixins: ["themeable"],
    slots: ["default"],
    events: [
      {
        name: "input",
        value: "number"
      }
    ]
  },
  "v-stepper-content": {
    props: [
      {
        name: "step",
        type: ["number", "string"],
        default: "undefined",
        source: null
      }
    ],
    mixins: [],
    slots: ["default"]
  },
  "v-stepper-step": {
    props: [
      {
        name: "color",
        type: "string",
        default: "primary",
        source: null
      },
      {
        name: "complete",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "completeIcon",
        type: "string",
        default: "$vuetify.icons.complete",
        source: null
      },
      {
        name: "editIcon",
        type: "string",
        default: "$vuetify.icons.edit",
        source: null
      },
      {
        name: "editable",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "errorIcon",
        type: "string",
        default: "$vuetify.icons.error",
        source: null
      },
      {
        name: "rules",
        type: "array",
        default: [],
        source: null
      },
      {
        name: "step",
        type: ["number", "string"],
        default: "undefined",
        source: null
      }
    ],
    mixins: [],
    slots: ["default"]
  },
  "v-stepper-header": {
    props: [],
    mixins: [],
    slots: ["default"]
  },
  "v-stepper-items": {
    props: [],
    mixins: [],
    slots: ["default"]
  },
  "v-subheader": {
    props: [
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "inset",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      }
    ],
    mixins: ["themeable"],
    slots: ["default"]
  },
  "v-switch": {
    props: [
      {
        name: "height",
        type: ["number", "string"],
        default: "undefined",
        source: "v-input"
      },
      {
        name: "color",
        type: "string",
        default: "accent",
        source: "colorable"
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "appendIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "appendIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "hint",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "errorCount",
        type: ["number", "string"],
        default: 1,
        source: "validatable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "error",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "prependIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "multiple",
        type: "boolean",
        default: "false",
        source: "selectable"
      },
      {
        name: "falseValue",
        type: "any",
        default: "undefined",
        source: "selectable"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "inputValue",
        type: "any",
        default: "undefined",
        source: "selectable"
      },
      {
        name: "messages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "loading",
        type: ["boolean", "string"],
        default: false,
        source: "loadable"
      },
      {
        name: "hideDetails",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "errorMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "label",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "id",
        type: "string",
        default: "undefined",
        source: "selectable"
      },
      {
        name: "valueComparator",
        type: "function",
        default: "null",
        source: "comparable"
      },
      {
        name: "successMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "success",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "ripple",
        type: ["boolean", "object"],
        default: true,
        source: "rippleable"
      },
      {
        name: "prependIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "persistentHint",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "rules",
        type: "array",
        default: [],
        source: "validatable"
      },
      {
        name: "trueValue",
        type: "any",
        default: "undefined",
        source: "selectable"
      },
      {
        name: "validateOnBlur",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "v-input"
      }
    ],
    mixins: ["comparable", "rippleable", "selectable"],
    slots: ["append", "prepend", "default", "label"]
  },
  "v-system-bar": {
    props: [
      {
        name: "absolute",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "app",
        type: "boolean",
        default: "false",
        source: "applicationable"
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "fixed",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "undefined",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "lightsOut",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "status",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "window",
        type: "boolean",
        default: "false",
        source: null
      }
    ],
    mixins: ["applicationable", "colorable", "positionable", "themeable"]
  },
  "v-tabs": {
    props: [
      {
        name: "mobileBreakPoint",
        type: ["number", "string"],
        default: 1264,
        source: null
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "centered",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "alignWithTitle",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "prevIcon",
        type: "string",
        default: "$vuetify.icons.prev",
        source: null
      },
      {
        name: "grow",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "fixedTabs",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "undefined",
        source: null
      },
      {
        name: "hideSlider",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "iconsAndText",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "nextIcon",
        type: "string",
        default: "$vuetify.icons.next",
        source: null
      },
      {
        name: "right",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "showArrows",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "sliderColor",
        type: "string",
        default: "accent",
        source: null
      },
      {
        name: "value",
        type: ["number", "string"],
        default: "undefined",
        source: null
      }
    ],
    mixins: ["colorable", "registrable-provide", "ssr-bootable", "themeable"],
    slots: ["default"],
    events: [
      {
        name: "input",
        value: "string"
      }
    ]
  },
  "v-tab": {
    props: [
      {
        name: "to",
        type: ["string", "object"],
        default: "undefined",
        source: "routable"
      },
      {
        name: "activeClass",
        type: "string",
        default: "v-tabs__item--active",
        source: "routable"
      },
      {
        name: "append",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "exact",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "exactActiveClass",
        type: "string",
        default: "undefined",
        source: "routable"
      },
      {
        name: "href",
        type: ["string", "object"],
        default: "undefined",
        source: "routable"
      },
      {
        name: "nuxt",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "replace",
        type: "boolean",
        default: "false",
        source: "routable"
      },
      {
        name: "ripple",
        type: ["boolean", "object"],
        default: true,
        source: "routable"
      },
      {
        name: "tag",
        type: "string",
        default: "undefined",
        source: "routable"
      },
      {
        name: "target",
        type: "string",
        default: "undefined",
        source: "routable"
      }
    ],
    mixins: ["registrable-inject", "routable"],
    slots: ["default"]
  },
  "v-tabs-items": {
    props: [
      {
        name: "cycle",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "touchless",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "value",
        type: ["number", "string"],
        default: "undefined",
        source: null
      }
    ],
    mixins: ["registrable-provide"],
    slots: ["default"],
    events: [
      {
        name: "input",
        value: "string"
      }
    ]
  },
  "v-tab-item": {
    props: [
      {
        name: "id",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "lazy",
        type: "boolean",
        default: "false",
        source: "bootable"
      },
      {
        name: "reverseTransition",
        type: ["boolean", "string"],
        default: "tab-reverse-transition",
        source: null
      },
      {
        name: "transition",
        type: ["boolean", "string"],
        default: "tab-transition",
        source: null
      }
    ],
    mixins: ["bootable", "registrable-inject"],
    slots: ["default"]
  },
  "v-tabs-slider": {
    props: [
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      }
    ],
    mixins: ["colorable"]
  },
  "v-textarea": {
    props: [
      {
        name: "returnMaskedValue",
        type: "boolean",
        default: "false",
        source: "maskable"
      },
      {
        name: "color",
        type: "string",
        default: "primary",
        source: "colorable"
      },
      {
        name: "autoGrow",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "clearIconCb",
        type: "function",
        default: "null",
        source: "v-text-field"
      },
      {
        name: "clearIcon",
        type: "string",
        default: "$vuetify.icons.clear",
        source: "v-text-field"
      },
      {
        name: "clearable",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "browserAutocomplete",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "box",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "autofocus",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "appendOuterIconCb",
        type: "function",
        default: "null",
        source: "v-text-field"
      },
      {
        name: "appendOuterIcon",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "appendIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "appendIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "error",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "rows",
        type: ["number", "string"],
        default: 5,
        source: null
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "undefined",
        source: "v-input"
      },
      {
        name: "hideDetails",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "hint",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "label",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "persistentHint",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "prependIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "prependIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "rowHeight",
        type: ["number", "string"],
        default: 24,
        source: null
      },
      {
        name: "dontFillMaskBlanks",
        type: "boolean",
        default: "false",
        source: "maskable"
      },
      {
        name: "mask",
        type: ["object", "string"],
        default: "undefined",
        source: "maskable"
      },
      {
        name: "loading",
        type: ["boolean", "string"],
        default: false,
        source: "loadable"
      },
      {
        name: "noResize",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "reverse",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "messages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "errorMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "errorCount",
        type: ["number", "string"],
        default: 1,
        source: "validatable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "counter",
        type: ["boolean", "number", "string"],
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "flat",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "outline",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "placeholder",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "prefix",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "prependInnerIcon",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "prependInnerIconCb",
        type: "function",
        default: "null",
        source: "v-text-field"
      },
      {
        name: "textarea",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "rules",
        type: "array",
        default: [],
        source: "validatable"
      },
      {
        name: "singleLine",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "solo",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "soloInverted",
        type: "boolean",
        default: "false",
        source: "v-text-field"
      },
      {
        name: "success",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "successMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "suffix",
        type: "string",
        default: "undefined",
        source: "v-text-field"
      },
      {
        name: "type",
        type: "string",
        default: "text",
        source: "v-text-field"
      },
      {
        name: "validateOnBlur",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "v-input"
      }
    ],
    mixins: ["maskable"]
  },
  "v-text-field": {
    props: [
      {
        name: "dontFillMaskBlanks",
        type: "boolean",
        default: "false",
        source: "maskable"
      },
      {
        name: "color",
        type: "string",
        default: "primary",
        source: "colorable"
      },
      {
        name: "clearIconCb",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "clearIcon",
        type: "string",
        default: "$vuetify.icons.clear",
        source: null
      },
      {
        name: "clearable",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "browserAutocomplete",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "box",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "autofocus",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "appendOuterIconCb",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "appendOuterIcon",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "appendIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "appendIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "errorCount",
        type: ["number", "string"],
        default: 1,
        source: "validatable"
      },
      {
        name: "type",
        type: "string",
        default: "text",
        source: null
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "undefined",
        source: "v-input"
      },
      {
        name: "hideDetails",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "hint",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "label",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "persistentHint",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "prependIcon",
        type: "string",
        default: "undefined",
        source: "v-input"
      },
      {
        name: "prependIconCb",
        type: "function",
        default: "null",
        source: "v-input"
      },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        source: "v-input"
      },
      {
        name: "textarea",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "loading",
        type: ["boolean", "string"],
        default: false,
        source: "loadable"
      },
      {
        name: "mask",
        type: ["object", "string"],
        default: "undefined",
        source: "maskable"
      },
      {
        name: "returnMaskedValue",
        type: "boolean",
        default: "false",
        source: "maskable"
      },
      {
        name: "success",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "rules",
        type: "array",
        default: [],
        source: "validatable"
      },
      {
        name: "messages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "errorMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "successMessages",
        type: ["string", "array"],
        default: [],
        source: "validatable"
      },
      {
        name: "error",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "counter",
        type: ["boolean", "number", "string"],
        default: "undefined",
        source: null
      },
      {
        name: "flat",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "outline",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "placeholder",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "prefix",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "prependInnerIcon",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "prependInnerIconCb",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "reverse",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "singleLine",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "solo",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "soloInverted",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "suffix",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "validateOnBlur",
        type: "boolean",
        default: "false",
        source: "validatable"
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "v-input"
      }
    ],
    mixins: ["maskable"],
    events: [
      {
        name: "input",
        value: "string"
      },
      {
        name: "change",
        value: "string"
      },
      {
        name: "click:prepend-inner",
        value: "Event"
      },
      {
        name: "click:append-outer",
        value: "Event"
      },
      {
        name: "update:error",
        value: "boolean"
      }
    ]
  },
  "v-time-picker": {
    props: [
      {
        name: "width",
        type: ["number", "string"],
        default: 290,
        source: "picker"
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "allowedMinutes",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "allowedHours",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "headerColor",
        type: "string",
        default: "undefined",
        source: "picker"
      },
      {
        name: "format",
        type: "string",
        default: "ampm",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        source: "picker"
      },
      {
        name: "landscape",
        type: "boolean",
        default: "false",
        source: "picker"
      },
      {
        name: "max",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "min",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "noTitle",
        type: "boolean",
        default: "false",
        source: "picker"
      },
      {
        name: "scrollable",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: null
      }
    ],
    mixins: ["colorable", "picker", "themeable"],
    events: [
      {
        name: "input",
        value: "string"
      }
    ]
  },
  "v-time-picker-clock": {
    props: [
      {
        name: "max",
        type: "number",
        default: "undefined",
        source: null
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "allowedValues",
        type: "function",
        default: "null",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "double",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "format",
        type: "function",
        default: "(val: string): string",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "min",
        type: "number",
        default: "undefined",
        source: null
      },
      {
        name: "rotate",
        type: "number",
        default: 0,
        source: null
      },
      {
        name: "scrollable",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "size",
        type: ["number", "string"],
        default: 270,
        source: null
      },
      {
        name: "step",
        type: "number",
        default: 1,
        source: null
      },
      {
        name: "value",
        type: "number",
        default: "undefined",
        source: null
      }
    ],
    mixins: ["colorable", "themeable"]
  },
  "v-time-picker-title": {
    props: [
      {
        name: "ampm",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "hour",
        type: "number",
        default: "undefined",
        source: null
      },
      {
        name: "minute",
        type: "number",
        default: "undefined",
        source: null
      },
      {
        name: "period",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "selectingHour",
        type: "boolean",
        default: "false",
        source: null
      }
    ],
    mixins: []
  },
  "v-toolbar": {
    props: [
      {
        name: "extensionHeight",
        type: ["number", "string"],
        default: "undefined",
        source: null
      },
      {
        name: "absolute",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "flat",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "app",
        type: "boolean",
        default: "false",
        source: "applicationable"
      },
      {
        name: "floating",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "card",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "clippedLeft",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "clippedRight",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "manualScroll",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "extended",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "dense",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "fixed",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "height",
        type: ["number", "string"],
        default: "undefined",
        source: null
      },
      {
        name: "invertedScroll",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "prominent",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "scrollOffScreen",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "scrollTarget",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "scrollThreshold",
        type: "number",
        default: 300,
        source: null
      },
      {
        name: "scrollToolbarOffScreen",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "tabs",
        type: "boolean",
        default: "false",
        source: null
      }
    ],
    mixins: [
      "applicationable",
      "colorable",
      "positionable",
      "ssr-bootable",
      "themeable"
    ],
    slots: ["default", "extension"]
  },
  "v-toolbar-items": {
    props: [],
    mixins: []
  },
  "v-toolbar-title": {
    props: [],
    mixins: []
  },
  "v-toolbar-side-icon": {
    props: [],
    mixins: []
  },
  "v-tooltip": {
    props: [
      {
        name: "inputActivator",
        type: "boolean",
        default: "false",
        source: "menuable"
      },
      {
        name: "color",
        type: "string",
        default: "undefined",
        source: "colorable"
      },
      {
        name: "closeDelay",
        type: ["number", "string"],
        default: 200,
        source: "delayable"
      },
      {
        name: "allowOverflow",
        type: "boolean",
        default: "false",
        source: "menuable"
      },
      {
        name: "attach",
        type: "any",
        default: false,
        source: "detachable"
      },
      {
        name: "activator",
        type: "any",
        default: "undefined",
        source: "menuable"
      },
      {
        name: "absolute",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "bottom",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "nudgeLeft",
        type: ["number", "string"],
        default: 0,
        source: "menuable"
      },
      {
        name: "fixed",
        type: "boolean",
        default: "true",
        source: "positionable"
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "debounce",
        type: ["number", "string"],
        default: 0,
        source: null
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "contentClass",
        type: "any",
        default: "undefined",
        source: "detachable"
      },
      {
        name: "nudgeWidth",
        type: ["number", "string"],
        default: 0,
        source: "menuable"
      },
      {
        name: "light",
        type: "boolean",
        default: "false",
        source: "themeable"
      },
      {
        name: "lazy",
        type: "boolean",
        default: "false",
        source: "bootable"
      },
      {
        name: "left",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "positionX",
        type: "number",
        default: "undefined",
        source: "menuable"
      },
      {
        name: "minWidth",
        type: ["number", "string"],
        default: "undefined",
        source: "menuable"
      },
      {
        name: "maxWidth",
        type: ["number", "string"],
        default: "auto",
        source: "menuable"
      },
      {
        name: "zIndex",
        type: "any",
        default: "undefined",
        source: "menuable"
      },
      {
        name: "nudgeRight",
        type: ["number", "string"],
        default: 0,
        source: "menuable"
      },
      {
        name: "nudgeBottom",
        type: ["number", "string"],
        default: 0,
        source: "menuable"
      },
      {
        name: "nudgeTop",
        type: ["number", "string"],
        default: 0,
        source: "menuable"
      },
      {
        name: "offsetOverflow",
        type: "boolean",
        default: "false",
        source: "menuable"
      },
      {
        name: "openDelay",
        type: ["number", "string"],
        default: 200,
        source: "delayable"
      },
      {
        name: "positionY",
        type: "number",
        default: "undefined",
        source: "menuable"
      },
      {
        name: "right",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "tag",
        type: "string",
        default: "span",
        source: null
      },
      {
        name: "top",
        type: "boolean",
        default: "false",
        source: "positionable"
      },
      {
        name: "transition",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "value",
        type: "any",
        default: "undefined",
        source: "toggleable"
      }
    ],
    mixins: [
      "bootable",
      "colorable",
      "delayable",
      "dependent",
      "detachable",
      "menuable",
      "positionable",
      "stackable",
      "themeable",
      "toggleable"
    ],
    slots: ["activator", "default"]
  },
  "v-bottom-sheet-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-carousel-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-carousel-reverse-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-dialog-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-dialog-bottom-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-fab-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "out-in",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "center center",
        source: null
      }
    ],
    mixins: []
  },
  "v-fade-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-menu-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-scale-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-scroll-x-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-scroll-x-reverse-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-scroll-y-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-scroll-y-reverse-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-slide-x-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-slide-x-reverse-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-slide-y-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-slide-y-reverse-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-tab-reverse-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-tab-transition": {
    props: [
      {
        name: "group",
        type: "boolean",
        default: "false",
        source: null
      },
      {
        name: "mode",
        type: "string",
        default: "undefined",
        source: null
      },
      {
        name: "origin",
        type: "string",
        default: "top center 0",
        source: null
      }
    ],
    mixins: []
  },
  "v-expand-transition": {
    props: [
      {
        name: "mode",
        type: "string",
        default: "in-out",
        source: null
      }
    ],
    mixins: []
  },
  "v-row-expand-transition": {
    props: [
      {
        name: "mode",
        type: "string",
        default: "in-out",
        source: null
      }
    ],
    mixins: []
  },
  $vuetify: {
    functions: [
      {
        name: "goTo",
        signature:
          "(target: string | number | HTMLElement | VueComponent, options?: object) => void"
      }
    ]
  },
  ...Vuseapi
};
