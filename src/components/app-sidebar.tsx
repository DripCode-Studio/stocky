import {
  LayoutDashboard,
  Package,
  Truck,
  ShoppingCart,
  Box,
  BookOpen,
  Users,
  ClipboardList,
  Calendar,
  BarChart3,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Raw Products", href: "/raw-products", icon: Package },
  { name: "Suppliers", href: "/suppliers", icon: Truck },
  { name: "Raw Orders", href: "/raw-orders", icon: ShoppingCart },
  { name: "Finished Products", href: "/finished-products", icon: Box },
  { name: "Recipes", href: "/recipes", icon: BookOpen },
  { name: "Clients", href: "/clients", icon: Users },
  { name: "Client Orders", href: "/client-orders", icon: ClipboardList },
  { name: "Production", href: "/production", icon: Calendar },
  { name: "Reports", href: "/reports", icon: BarChart3 },
];

function AppSidebar() {
  return (
    <div className="drawer-side is-drawer-close:overflow-visible">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
        <ul className="menu w-full grow mt-20">
          {navigation.map((item) => {
            return (
              <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                <li className="w-full ">
                  <a
                    href={item.href}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="is-drawer-close:hidden">{item.name}</span>
                  </a>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AppSidebar;
