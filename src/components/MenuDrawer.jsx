

import {Button, Drawer} from "@heroui/react";
import { RiMenuFold2Fill } from "react-icons/ri";
import { FaPlusCircle } from "react-icons/fa";

export function DashboardDrawer() {
  const navItems = [
    {icon: FaPlusCircle, label: "Home"},
    {icon: FaPlusCircle, label: "Search"},
    {icon: FaPlusCircle, label: "Notifications"},
  ];

  return (
    <Drawer>
      <Button variant="outline" className='border-none rounded-lg'>
        <RiMenuFold2Fill className='w-6 h-6' />
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                  >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}