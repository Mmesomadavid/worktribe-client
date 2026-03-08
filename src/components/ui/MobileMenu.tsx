/**
 * 
 * @copyright 2026 ChukwunoyeluMmesoma
 * @license Apache-2.0 
 */
import { Button } from "./button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "./collapsible"
import {Separator} from './separator'
import { Link } from "react-router-dom";

import { ChevronsUpDown } from "lucide-react";

import type { MenuItem } from "@/types";

type MobileMenuProps = {
    navMenu: MenuItem[]
}


const MobileMenu = ({navMenu}: MobileMenuProps) => {
  return (
    <div>
      <ul className="mb-3">
        {navMenu.map(({href, label, submenu}, index) => (
            <li key={index}>
            {submenu ? (
                <Collapsible>
                    <CollapsibleTrigger asChild>
                    <Button 
                        variant="ghost"
                        className="w-full justify-start"
                    >
                        {label}
                        <ChevronsUpDown/>
                    </Button>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="ps-2">
                    <ul className="border-l-2 border-l-muted-foreground/20">
                        {submenu.map(({href, label}, index)=> (
                            <li key={index}>
                                <Button
                                    asChild
                                    variant="ghost"
                                    className=""
                                >
                                    <a href={href}>{label}</a>
                                </Button>
                            </li>
                        ))}
                    </ul>
                    </CollapsibleContent>
                </Collapsible>
            ) : (
                <Button 
                    asChild 
                    variant='ghost' 
                    className="w-full justify-start"
                >
                    <a href={href}>{label}</a>
                </Button>
            )}
            </li>
        ))}
      </ul>

      <Separator className="bg-muted-foreground/20"/>

      <div className="flex items-center gap-2 mt-4">
        <Button variant="ghost" className="w-full">
            <Link to="/sign-in">
                Sign In
            </Link>
        </Button>

        <Button  className="w-full">
            Free Trial
        </Button>
      </div>
    </div>
  );
}

export default MobileMenu;
