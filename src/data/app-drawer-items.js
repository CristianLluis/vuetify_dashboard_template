export default [
  { header: "App" },
  {
    title: "Dashboard",
    group: "dashboard",
    icon: "dashboard",
    items: [
      { name: "Dashboardv1", title: "Dashboard V1", prependIcon: "dashboard" }
    ]
  },
  { icon: "contacts", title: "Contacts", name: "Contacts" },
  { icon: "chat", title: "Chat", name: "Chat" },

  { header: "Style & User Interface" },
  { icon: "color_lens", title: "Color", name: "ColorsUI" },
  { icon: "collections", title: "Icons", name: "IconsUI" },
  { icon: "help", title: "Helpers", name: "HelperClasses" },
  { icon: "text_fields", title: "Typography", name: "TypographyUI" },
  { icon: "input", title: "Forms", name: "FormUI" },

  { header: "Pages" },
  { icon: "people", title: "Profile", name: "ProfileView" },
  { icon: "timer", title: "Coming Soon", name: "CountdownPage" },
  { icon: "build", title: "Under Construction", name: "MaintenancePage" },
  {
    title: "Authentication",
    group: "pages/authentication",
    icon: "lock",
    items: [
      { name: "LoginPage", title: "Login" },
      { name: "RegisterPage", title: "Register" },
      { name: "ForgotPasswordPage", title: "Forgot Password" },
      { name: "AuthPage", title: "Auth Models" },
      { name: "LockScreenPage", title: "Lock Screen" }
    ]
  },
  {
    title: "Error",
    group: "pages/error",
    icon: "error",
    items: [
      { name: "Error404", title: "404" },
      { name: "Error500", title: "500" }
    ]
  },
  {
    title: "Pricing",
    group: "pricing",
    icon: "attach_money",
    items: [
      { name: "PricingStyleOne", title: "Style 1" },
      { name: "PricingStyleTwo", title: "Style 2" }
    ]
  },
  { header: "UI Components" },
  {
    title: "Vuetify Components",
    group: "components",
    icon: "dashboard",
    items: [
      {
        title: "Groups",
        group: "groups",
        namespace: "components",
        icon: "",
        items: [
          { name: "ButtonGroupView", title: "Button Group" },
          { name: "ItemGroupView", title: "Item Group" },
          { name: "WindowsView", title: "Windows", badge: "new" }
        ]
      },
      {
        title: "Form Control",
        group: "forms-control",
        namespace: "components",
        icon: "",
        items: [
          { name: "AutocompleteView", title: "Auto Complete" },
          { name: "ComboboxView", title: "Combo box" },
          { name: "FormsView", title: "Forms" },
          { name: "FormSelectView", title: "Select" },
          { name: "SelectionControlsView", title: "Select Controls" },
          { name: "TextFieldsView", title: "Text Fields" },
          { name: "TextareaView", title: "Textarea" }
        ]
      },
      {
        title: "Navigation",
        group: "navigation",
        namespace: "components",
        items: [
          { name: "breadcrumbs", title: "Breadcrumbs" },
          { name: "bottom-navigation", title: "Bottom navigation" },
          { name: "MenusView", title: "Menus" },
          { name: "navigation-drawers", title: "Navigation drawers" },
          { name: "toolbars", title: "Toolbars", badge: "updated" }
        ]
      },
      {
        title: "Layouts",
        group: "layout",
        namespace: "components",
        items: [
          { name: "AspectRatioView", title: "Aspect Ratio" },
          { name: "BreakpointView", title: "Breakpoint" },
          { name: "CardsView", title: "Cards" },
          { name: "ExpansionPanelView", title: "Expansion Panel" },
          { name: "GridView", title: "Grid" },
          { name: "GridListsView", title: "Grid Lists" },
          { name: "VimgView", title: "Images" },
          { name: "ListsView", title: "List" },
          { name: "SteppersView", title: "Steppers" },
          { name: "TabsView", title: "Tabs" }
          // { name: 'JumbotronViews', title: 'Jumbotrons' }
        ]
      },
      {
        title: "Motion & Transitions",
        group: "motion",
        namespace: "components",
        icon: "mdi-clock-fast",
        items: [
          { name: "ScrollingView", title: "Scrolling" },
          { name: "TransitionView", title: "Transition" }
        ]
      },
      {
        title: "Buttons & Indicators",
        group: "buttons-indicators",
        namespace: "components",
        items: [
          { name: "ButtonsView", title: "Buttons" },
          { name: "FabsView", title: "Button Floating Action" },
          { name: "IconsView", title: "Icons" },
          { name: "BadgesView", title: "Badges" },
          { name: "ProgressView", title: "Progress & Activity" }
        ]
      },
      {
        title: "Popups & Modals",
        group: "popups-modals",
        namespace: "components",
        items: [
          { name: "BottomSheetsView", title: "Bottom Sheets" },
          { name: "DialogsView", title: "Dialogs" },
          { name: "TooltipsView", title: "Tooltip" },
          { name: "SnackbarsToastView", title: "Snackbars & Toasts" }
        ]
      },
      {
        title: "Datatables",
        group: "data-tables",
        namespace: "components",
        items: [
          { name: "DatatablesView", title: "Datatables" },
          { name: "DataIteratorView", title: "Data Iterator" },
          { name: "PaginationView", title: "Pagination" }
        ]
      },
      {
        title: "Pickers",
        group: "pickers",
        namespace: "components",
        items: [
          { name: "DatePickerView", title: "Date Picker" },
          { name: "TimePickerView", title: "TIme Picker" }
        ]
      },
      { name: "AlertsView", title: "Alerts" },
      { name: "AvatarsView", title: "Avatars" },
      { name: "CarouselView", title: "Carousel" },
      { name: "ChipsView", title: "Chips" },
      { name: "DividersView", title: "Dividers" },
      { name: "FooterView", title: "Footer" },
      { name: "HoverView", title: "Hover" },
      { name: "ParallaxView", title: "Parallax" },
      { name: "RatingsView", title: "Ratings" },
      { name: "SlidersView", title: "Sliders" },
      { name: "SubheadersView", title: "Subheaders" },
      { name: "TimeLineView", title: "Timelines", badge: "New" },
      { name: "TreeviewView", title: "Treeview", badge: "New" }
    ]
  },
  {
    title: "Charts",
    group: "charts",
    icon: "insert_chart",
    items: [
      { name: "VuetrendView", title: "Trend" },
      { name: "VueBarView", title: "Bar" },
      { name: "ChartJs", title: "ChartJS" }
    ]
  },
  {
    title: "Widgets",
    group: "widgets",
    icon: "widgets",
    items: [
      { name: "CardWidgets", title: "Cards" },
      { name: "ListWidgets", title: "Lists" },
      { name: "SocialWidgets", title: "Social" },
      { name: "StatisticWidgets", title: "Statistic" },
      { name: "ChartWidgets", title: "Chart" }
    ]
  },
  { icon: "color_lens", title: "Color Picker", name: "VuseColorPicker" },
  { header: "Directives" },
  {
    title: "Directives",
    group: "directives",
    icon: "mdi-function",
    items: [
      { name: "Resizing", title: "Resizing" },
      { name: "Ripples", title: "Ripples" },
      // { name: 'Scrolling', title: 'Scrolling' },
      { name: "TouchSupport", title: "Touch Support" }
    ]
  },
  {
    icon: "fas fa-file",
    title: "Document",
    href: "http://doc-vuse-v1.hexesis.com",
    target: "_blank"
  }
];
