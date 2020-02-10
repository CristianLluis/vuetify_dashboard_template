import AppSidebar from "@/layouts/App/NavDrawer";
import AppToolbar from "@/layouts/App/Toolbar";
import AppFooter from "@/layouts/App/Footer";

import Dashboardv1 from "@/views/Dashboard/Dashboardv1";
import Contacts from "@/views/Applications/Contacts";
import Chat from "@/views/Applications/Chat";

// User Interface
import FormUI from "@/views/UI/FormUI";
import IconsUI from "@/views/UI/IconsUI";
import ColorsUI from "@/views/UI/ColorsUI";
import TypographyUI from "@/views/UI/TypographyUI";
import HelperClasses from "@/views/UI/Helpers";

// Pages
import LoginPage from "@/views/Pages/Authentication/LoginPage";
import RegisterPage from "@/views/Pages/Authentication/RegisterPage";
import AuthPage from "@/views/Pages/Authentication/AuthPage";
import ForgotPasswordPage from "@/views/Pages/Authentication/ForgotPasswordPage";
import LockScreenPage from "@/views/Pages/Authentication/LockScreenPage";

import Error404 from "@/views/Pages/Errors/Error404";
import Error500 from "@/views/Pages/Errors/Error500";

import PricingStyleOne from "@/views/Pages/Pricing/PricingStyleOne";
import PricingStyleTwo from "@/views/Pages/Pricing/PricingStyleTwo";

import CountdownPage from "@/views/Pages/CountdownPage";
import MaintenancePage from "@/views/Pages/MaintenancePage";
import ProfileView from "@/views/Pages/Profile";

// Vuetify Components
import ButtonGroupView from "@/views/Vuetify/Groups/ButtonGroupView";
import ItemGroupView from "@/views/Vuetify/Groups/ItemGroupView";
import WindowsView from "@/views/Vuetify/Groups/WindowsView";
// FormControl
import FormsView from "@/views/Vuetify/FormControl/FormsView";
import SelectView from "@/views/Vuetify/FormControl/SelectView";
import SelectionControlsView from "@/views/Vuetify/FormControl/SelectionControlsView";
import TextFieldsView from "@/views/Vuetify/FormControl/TextFieldsView";
import AutocompleteView from "@/views/Vuetify/FormControl/AutocompleteView";
import ComboboxView from "@/views/Vuetify/FormControl/ComboboxView";
import TextareaView from "@/views/Vuetify/FormControl/TextareaView";

// Navigation
import BreadcrumbsView from "@/views/Vuetify/Navigation/BreadcrumbsView";
import BottomNavigationView from "@/views/Vuetify/Navigation/BottomNavigationView";
import MenusView from "@/views/Vuetify/Navigation/MenusView";
import NavigationDrawersView from "@/views/Vuetify/Navigation/NavigationDrawersView";
import ToolbarView from "@/views/Vuetify/Navigation/ToolbarView";

// Layouts
import GridView from "@/views/Vuetify/Layouts/GridView";
import GridListsView from "@/views/Vuetify/Layouts/GridListsView";
import BreakpointView from "@/views/Vuetify/Layouts/BreakpointView";
import AspectRatioView from "@/views/Vuetify/Layouts/AspectRatioView";
import CardsView from "@/views/Vuetify/Layouts/CardsView";
import SteppersView from "@/views/Vuetify/Layouts/SteppersView";
import TabsView from "@/views/Vuetify/Layouts/TabsView";
import ExpansionPanelView from "@/views/Vuetify/Layouts/ExpansionPanelView";
import ListsView from "@/views/Vuetify/Layouts/ListsView";
import JumbotronViews from "@/views/Vuetify/Layouts/JumbotronViews";
import VimgView from "@/views/Vuetify/Layouts/VimgView";

// Motion & Transitions
import ScrollingView from "@/views/Vuetify/Motion/ScrollingView";
import TransitionView from "@/views/Vuetify/Motion/TransitionView";

// Buttons & Indicators
import ButtonsView from "@/views/Vuetify/Buttons-Indicators/ButtonsView";
import FabsView from "@/views/Vuetify/Buttons-Indicators/FabsView";
import IconsView from "@/views/Vuetify/Buttons-Indicators/IconsView";
import BadgesView from "@/views/Vuetify/Buttons-Indicators/BadgesView";
import ProgressView from "@/views/Vuetify/Buttons-Indicators/ProgressView";

// Popups & Modals
import BottomSheetsView from "@/views/Vuetify/Popups-Modals/BottomSheetsView";
import DialogsView from "@/views/Vuetify/Popups-Modals/DialogsView";
import TooltipsView from "@/views/Vuetify/Popups-Modals/TooltipsView";
import SnackbarsToastView from "@/views/Vuetify/Popups-Modals/SnackbarsToastView";

// Datatables & Pagination
import DatatablesView from "@/views/Vuetify/Datatables/DatatablesView";
import DataIteratorView from "@/views/Vuetify/Datatables/DataIteratorView";
import PaginationView from "@/views/Vuetify/Datatables/PaginationView";

// Pickers
import DatePickerView from "@/views/Vuetify/Pickers/DatePickerView";
import TimePickerView from "@/views/Vuetify/Pickers/TimePickerView";

// Others
import AlertsView from "@/views/Vuetify/AlertsView";
import AvatarsView from "@/views/Vuetify/AvatarsView";
import CarouselView from "@/views/Vuetify/CarouselView";
import ChipsView from "@/views/Vuetify/ChipsView";
import DividersView from "@/views/Vuetify/DividersView";
import FooterView from "@/views/Vuetify/FooterView";
import HoverView from "@/views/Vuetify/HoverView";
import ParallaxView from "@/views/Vuetify/ParallaxView";
import RatingsView from "@/views/Vuetify/RatingsView";
import SlidersView from "@/views/Vuetify/SlidersView";
import SubheadersView from "@/views/Vuetify/SubheadersView";
import TimeLineView from "@/views/Vuetify/TimeLineView";
import TreeviewView from "@/views/Vuetify/TreeviewView";
// Chart
import ChartJs from "@/views/Charts/ChartJs";
import VuetrendView from "@/views/Charts/TrendChart";
import VueBarView from "@/views/Charts/VueBarChat";

// Widgets
import CardWidgets from "@/views/Widgets/CardWidgets";
import ListWidgets from "@/views/Widgets/ListWidgets";
import SocialWidgets from "@/views/Widgets/SocialWidgets";
import StatisticWidgets from "@/views/Widgets/StatisticWidgets";
import ChartWidgets from "@/views/Widgets/ChartWidgets";

import VuseColorPicker from "@/views/VuseColorPicker";

// Directives
import Resizing from "@/views/Vuetify/Directives/Resizing";
import Ripples from "@/views/Vuetify/Directives/Ripples";
import Scrolling from "@/views/Vuetify/Directives/Scrolling";
import TouchSupport from "@/views/Vuetify/Directives/TouchSupport";

export const routes = [
  { path: "/", redirect: "/dashboard/dashboardv1" },
  {
    path: "/dashboard/dashboardv1",
    name: "dashboard/Dashboardv1",
    components: {
      default: Dashboardv1,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    }
  },

  {
    path: "/app/contacts",
    components: {
      default: Contacts,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "Contacts"
  },
  {
    path: "/app/chat",
    components: {
      default: Chat,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "Chat"
  },

  // UI
  {
    path: "/ui/forms",
    components: {
      default: FormUI,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "FormUI"
  },
  {
    path: "/ui/icons",
    components: {
      default: IconsUI,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "IconsUI"
  },
  {
    path: "/ui/typography",
    components: {
      default: TypographyUI,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "TypographyUI"
  },
  {
    path: "/ui/colors",
    component: ColorsUI,
    components: {
      default: ColorsUI,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "ColorsUI"
  },
  {
    path: "/ui/helper-classes",
    components: {
      default: HelperClasses,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "HelperClasses"
  },

  // Pages
  {
    path: "/pages/authentication/login",
    components: { default: LoginPage },
    name: "pages/authentication/LoginPage",
    meta: { layout: "auth" }
  },
  {
    path: "/pages/authentication/register",
    components: { default: RegisterPage },
    name: "pages/authentication/RegisterPage",
    meta: { layout: "auth" }
  },
  {
    path: "/pages/authentication/auth",
    components: { default: AuthPage },
    name: "pages/authentication/AuthPage",
    meta: { layout: "auth" }
  },
  {
    path: "/pages/authentication/forgot-password",
    components: { default: ForgotPasswordPage },
    name: "pages/authentication/ForgotPasswordPage",
    meta: { layout: "auth" }
  },
  {
    path: "/pages/authentication/lock-screen1",
    components: { default: LockScreenPage },
    name: "pages/authentication/LockScreenPage",
    meta: { layout: "auth" }
  },
  {
    path: "/pages/error/404",
    components: { default: Error404 },
    name: "pages/error/Error404",
    meta: { layout: "full" }
  },
  {
    path: "/pages/error/500",
    components: { default: Error500 },
    name: "pages/error/Error500",
    meta: { layout: "full" }
  },

  {
    path: "/pages/countdown",
    components: { default: CountdownPage },
    name: "CountdownPage",
    meta: { layout: "full" }
  },
  {
    path: "/pages/under-maintenance",
    components: { default: MaintenancePage },
    name: "MaintenancePage",
    meta: { layout: "full" }
  },

  {
    path: "/pages/pricing/style1",
    component: PricingStyleOne,
    components: { default: PricingStyleOne },
    name: "pricing/PricingStyleOne"
  },
  {
    path: "/pages/pricing/style2",
    components: { default: PricingStyleTwo },
    name: "pricing/PricingStyleTwo"
  },

  {
    path: "/pages/profile",
    components: {
      default: ProfileView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "ProfileView"
  },
  {
    path: "/components/groups/button-groups",
    components: {
      default: ButtonGroupView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/ButtonGroupView"
  },
  {
    path: "/components/groups/item-groups",
    components: {
      default: ItemGroupView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/ItemGroupView"
  },
  {
    path: "/components/groups/windows",
    components: {
      default: WindowsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/WindowsView"
  },

  // Form Control

  {
    path: "/components/forms-control/forms",
    components: {
      default: FormsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/FormsView"
  },
  {
    path: "/components/forms-control/select",
    components: {
      default: SelectView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/FormSelectView"
  },
  {
    path: "/components/forms-control/text-fields",
    components: {
      default: TextFieldsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/TextFieldsView"
  },
  {
    path: "/components/forms-control/selection-controls",
    components: {
      default: SelectionControlsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/SelectionControlsView"
  },
  {
    path: "/components/forms-control/auto-complete",
    components: {
      default: AutocompleteView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/AutocompleteView"
  },
  {
    path: "/components/forms-control/combo-box",
    components: {
      default: ComboboxView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/ComboboxView"
  },
  {
    path: "/components/forms-control/textarea",
    components: {
      default: TextareaView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/TextareaView"
  },

  // Navigation Control
  {
    path: "/components/navigation/breadcrumbs",
    components: {
      default: BreadcrumbsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/Breadcrumbs"
  },
  {
    path: "/components/navigation/bottom-navigation",
    components: {
      default: BottomNavigationView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/BottomNavigation"
  },
  {
    path: "/components/navigation/menus",
    components: {
      default: MenusView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/MenusView"
  },
  {
    path: "/components/navigation/navigation-drawers",
    components: {
      default: NavigationDrawersView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/NavigationDrawers"
  },
  {
    path: "/components/navigation/toolbar",
    components: {
      default: ToolbarView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/Toolbars"
  },
  // Layouts
  {
    path: "/components/layout/grid",
    components: {
      default: GridView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/GridView"
  },
  {
    path: "/components/layout/grid-lists",
    components: {
      default: GridListsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/GridListsView"
  },
  {
    path: "/components/layout/breakpoint",
    components: {
      default: BreakpointView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/BreakpointView"
  },
  {
    path: "/components/layout/aspect-ratio",
    components: {
      default: AspectRatioView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/AspectRatioView"
  },
  {
    path: "/components/layout/cards",
    components: {
      default: CardsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/CardsView"
  },
  {
    path: "/components/layout/steppers",
    components: {
      default: SteppersView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/SteppersView"
  },
  {
    path: "/components/layout/tabs",
    components: {
      default: TabsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/TabsView"
  },
  {
    path: "/components/layout/expansion-panel",
    components: {
      default: ExpansionPanelView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/ExpansionPanelView"
  },
  {
    path: "/components/layout/lists",
    components: {
      default: ListsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/ListsView"
  },
  {
    path: "/components/layout/jumbotrons",
    components: {
      default: JumbotronViews,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/JumbotronViews"
  },
  {
    path: "/components/layout/images",
    components: {
      default: VimgView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/VimgView"
  },
  // Layouts
  {
    path: "/components/motion/scrolling",
    components: {
      default: ScrollingView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/ScrollingView"
  },
  {
    path: "/components/motion/transition",
    components: {
      default: TransitionView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/TransitionView"
  },

  // Buttons & Indicators
  {
    path: "/components/buttons-indicators/buttons",
    components: {
      default: ButtonsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/ButtonsView"
  },
  {
    path: "/components/buttons-indicators/fabs",
    components: {
      default: FabsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/FabsView"
  },
  {
    path: "/components/buttons-indicators/icons",
    components: {
      default: IconsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/IconsView"
  },
  {
    path: "/components/buttons-indicators/badges",
    components: {
      default: BadgesView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/BadgesView"
  },
  {
    path: "/components/buttons-indicators/progress",
    components: {
      default: ProgressView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/ProgressView"
  },

  // Popups & Modals
  {
    path: "/components/popups-modals/bottom-sheets",
    components: {
      default: BottomSheetsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/BottomSheetsView"
  },
  {
    path: "/components/popups-modals/dialogs",
    components: {
      default: DialogsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/DialogsView"
  },
  {
    path: "/components/popups-modals/tooltip",
    components: {
      default: TooltipsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/TooltipsView"
  },
  {
    path: "/components/popups-modals/snackbars-toast",
    components: {
      default: SnackbarsToastView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/SnackbarsToastView"
  },
  // Datatables & Pagination
  {
    path: "/components/data-tables/datatable",
    components: {
      default: DatatablesView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/DatatablesView"
  },
  {
    path: "/components/data-tables/pagination",
    components: {
      default: PaginationView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/PaginationView"
  },
  {
    path: "/components/data-tables/data-iterator",
    components: {
      default: DataIteratorView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/DataIteratorView"
  },
  // Pickers
  {
    path: "/components/pickers/date-picker",
    components: {
      default: DatePickerView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/DatePickerView"
  },
  {
    path: "/components/pickers/time-picker",
    components: {
      default: TimePickerView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/TimePickerView"
  },

  // Others
  {
    path: "/components/alerts",
    components: {
      default: AlertsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/AlertsView"
  },
  {
    path: "/components/avatars",
    components: {
      default: AvatarsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/AvatarsView"
  },
  {
    path: "/components/dividers",
    components: {
      default: DividersView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/DividersView"
  },
  {
    path: "/components/carousel",
    components: {
      default: CarouselView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/CarouselView"
  },
  {
    path: "/components/chips",
    components: {
      default: ChipsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/ChipsView"
  },
  {
    path: "/components/footer",
    components: {
      default: FooterView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/FooterView"
  },
  {
    path: "/components/hover",
    components: {
      default: HoverView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/HoverView"
  },
  {
    path: "/components/parallax",
    components: {
      default: ParallaxView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/ParallaxView"
  },
  {
    path: "/components/ratings",
    components: {
      default: RatingsView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/RatingsView"
  },
  {
    path: "/components/sliders",
    components: {
      default: SlidersView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/SlidersView"
  },
  {
    path: "/components/subheader",
    components: {
      default: SubheadersView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/SubheadersView"
  },
  {
    path: "/components/timeline",
    components: {
      default: TimeLineView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/TimeLineView"
  },
  {
    path: "/components/treeview",
    components: {
      default: TreeviewView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "components/TreeviewView"
  },

  // Charts
  {
    path: "/charts/trend",
    component: VuetrendView,
    components: {
      default: VuetrendView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "charts/VuetrendView"
  },
  {
    path: "/charts/vue-bar",
    component: VueBarView,
    components: {
      default: VueBarView,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "charts/VueBarView"
  },
  {
    path: "/charts/chartjs",
    component: ChartJs,
    components: {
      default: ChartJs,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "charts/ChartJs"
  },
  // Widgets
  {
    path: "/widgets/cards",
    components: {
      default: CardWidgets,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "widgets/CardWidgets"
  },
  {
    path: "/widgets/lists",
    components: {
      default: ListWidgets,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "widgets/ListWidgets"
  },
  {
    path: "/widgets/social",
    components: {
      default: SocialWidgets,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "widgets/SocialWidgets"
  },
  {
    path: "/widgets/statistic",
    components: {
      default: StatisticWidgets,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "widgets/StatisticWidgets"
  },
  {
    path: "/widgets/chart",
    components: {
      default: ChartWidgets,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "widgets/ChartWidgets"
  },
  {
    path: "/vuse-color-picker",
    components: {
      default: VuseColorPicker,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "VuseColorPicker"
  },
  {
    path: "/directives/resizing",
    components: {
      default: Resizing,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "directives/Resizing"
  },
  {
    path: "/directives/ripples",
    components: {
      default: Ripples,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "directives/Ripples"
  },
  {
    path: "/directives/scrolling",
    components: {
      default: Scrolling,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "directives/Scrolling"
  },
  {
    path: "/directives/touch-support",
    components: {
      default: TouchSupport,
      sidebar: AppSidebar,
      header: AppToolbar,
      footer: AppFooter
    },
    name: "directives/TouchSupport"
  }
];
