

import {Button, Drawer} from "@heroui/react";
import { RiMenuFold2Fill } from "react-icons/ri";
import { FaPlusCircle } from "react-icons/fa";
import DashboardNavigation from "./DashboardNavigation";

export function DashboardDrawer() {

  return (
    <Drawer className="md:hidden ">
      <Button variant="outline" className='border-none rounded-lg'>
        <RiMenuFold2Fill className='w-6 h-6' />
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Dashboard Items</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
                {/* dashboard navigation items */}
              <DashboardNavigation/>
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}