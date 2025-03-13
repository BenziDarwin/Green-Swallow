"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Settings, LogOut, User, Wallet, HelpCircle } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();
  const isLoggedIn = pathname.startsWith("/dashboard");

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-primary">
           <Image src="images/logo.png" alt="logo" width={100} height={50} />
          </Link>
          
          {isLoggedIn && (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Markets</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <div className="grid grid-cols-2 gap-3">
                        <Link href="/dashboard?market=XAUUSD" className="block p-3 space-y-1 hover:bg-muted rounded-md">
                          <div className="font-medium">XAUUSD</div>
                          <div className="text-sm text-muted-foreground">Gold vs US Dollar</div>
                        </Link>
                        <Link href="/dashboard?market=EURUSD" className="block p-3 space-y-1 hover:bg-muted rounded-md">
                          <div className="font-medium">EURUSD</div>
                          <div className="text-sm text-muted-foreground">Euro vs US Dollar</div>
                        </Link>
                        <Link href="/dashboard?market=GBPUSD" className="block p-3 space-y-1 hover:bg-muted rounded-md">
                          <div className="font-medium">GBPUSD</div>
                          <div className="text-sm text-muted-foreground">British Pound vs US Dollar</div>
                        </Link>
                        <div className="block p-3 space-y-1 bg-muted/50 rounded-md cursor-not-allowed">
                          <div className="font-medium text-muted-foreground">BTCUSD</div>
                          <div className="text-sm text-muted-foreground">Coming Soon</div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Trading</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <Link href="/dashboard" className="block p-3 space-y-1 hover:bg-muted rounded-md">
                        <div className="font-medium">Portfolio Overview</div>
                        <div className="text-sm text-muted-foreground">View your investment summary</div>
                      </Link>
                      <Link href="/dashboard?tab=investments" className="block p-3 space-y-1 hover:bg-muted rounded-md">
                        <div className="font-medium">Active Positions</div>
                        <div className="text-sm text-muted-foreground">Manage your open trades</div>
                      </Link>
                      <Link href="/dashboard?tab=transactions" className="block p-3 space-y-1 hover:bg-muted rounded-md">
                        <div className="font-medium">Transaction History</div>
                        <div className="text-sm text-muted-foreground">View past trades and transfers</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <Link href="/education" className="block p-3 space-y-1 hover:bg-muted rounded-md">
                        <div className="font-medium">Education Center</div>
                        <div className="text-sm text-muted-foreground">Learn forex trading basics</div>
                      </Link>
                      <Link href="/analysis" className="block p-3 space-y-1 hover:bg-muted rounded-md">
                        <div className="font-medium">Market Analysis</div>
                        <div className="text-sm text-muted-foreground">Daily market insights</div>
                      </Link>
                      <Link href="/support" className="block p-3 space-y-1 hover:bg-muted rounded-md">
                        <div className="font-medium">Support Center</div>
                        <div className="text-sm text-muted-foreground">Get help with trading</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/avatar.png" alt="User" />
                      <AvatarFallback>GS</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">john@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Wallet className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/register">
                <Button>Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}