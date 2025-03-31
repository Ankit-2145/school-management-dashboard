import menuItems from "@/constants/menuItems";
import { role } from "@/lib/data";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((item) => (
        <div className="flex flex-col gap-2" key={item.title}>
          <span className="hidden lg:block text-muted-foreground font-normal my-4">
            {item.title}
          </span>
          {item.items.map((subItem) => {
            if (subItem.visible.includes(role)) {
              return (
                <Link
                  href={subItem.href}
                  key={subItem.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-muted-foreground py-2 md:px-2 rounded-md hover:bg-SkyLight"
                >
                  <subItem.icon className="w-5 h-5 inline-block mr-2" />
                  <span className="hidden lg:block">{subItem.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
