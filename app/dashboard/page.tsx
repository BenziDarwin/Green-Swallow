"use client"

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Wallet, 
  PiggyBank, 
  TrendingUp,
  Clock,
  DollarSign,
  BadgePercent,
  Building2,
  Briefcase,
  CircleDollarSign,
  ArrowDownCircle
} from "lucide-react";
import { ForexCarousel } from "@/components/forex-carousel";

const mockData = [
  { date: "2024-01", value: 4000, profit: 200 },
  { date: "2024-02", value: 4500, profit: 300 },
  { date: "2024-03", value: 4300, profit: -100 },
  { date: "2024-04", value: 5000, profit: 400 },
  { date: "2024-05", value: 5200, profit: 250 },
  { date: "2024-06", value: 5800, profit: 350 },
];

const performanceData = [
  { month: "Jan", return: 5.2 },
  { month: "Feb", return: 6.8 },
  { month: "Mar", return: -2.3 },
  { month: "Apr", return: 8.4 },
  { month: "May", return: 4.9 },
  { month: "Jun", return: 7.2 },
];

const investmentAllocation = [
  { name: "Forex", value: 60 },
  { name: "Stocks", value: 20 },
  { name: "Bonds", value: 15 },
  { name: "Cash", value: 5 },
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

export default function Dashboard() {
  const [balance, setBalance] = useState(5800);
  const [profit, setProfit] = useState(1400);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <motion.div 
        className="max-w-7xl mx-auto space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex gap-4">
            <Button className="bg-primary hover:bg-primary/90">
              <DollarSign className="mr-2 h-4 w-4" />
              Deposit
            </Button>
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600/10">
              <ArrowDownCircle className="mr-2 h-4 w-4" />
              Withdraw
            </Button>
          </div>
        </div>

        {/* Forex Charts Carousel */}
        <ForexCarousel />

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="investments">Investments</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Card className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Balance</p>
                      <h3 className="text-2xl font-bold mt-2">${balance.toLocaleString()}</h3>
                      <p className="text-sm text-green-600 flex items-center mt-2">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        +12.5%
                      </p>
                    </div>
                    <Wallet className="h-8 w-8 text-primary opacity-80" />
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Profit</p>
                      <h3 className="text-2xl font-bold mt-2 text-green-600">+${profit.toLocaleString()}</h3>
                      <p className="text-sm text-green-600 flex items-center mt-2">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        +8.3%
                      </p>
                    </div>
                    <PiggyBank className="h-8 w-8 text-primary opacity-80" />
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">ROI</p>
                      <h3 className="text-2xl font-bold mt-2">24.1%</h3>
                      <p className="text-sm text-green-600 flex items-center mt-2">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        +2.4%
                      </p>
                    </div>
                    <BadgePercent className="h-8 w-8 text-primary opacity-80" />
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Time</p>
                      <h3 className="text-2xl font-bold mt-2">186 days</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Since Nov 2023
                      </p>
                    </div>
                    <Clock className="h-8 w-8 text-primary opacity-80" />
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Portfolio Growth</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mockData}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="hsl(var(--primary))"
                        fillOpacity={1}
                        fill="url(#colorValue)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Monthly Returns</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="return"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        dot={{ fill: "hsl(var(--primary))" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Recent Activity</h3>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="space-y-4">
                {[
                  { type: "Deposit", amount: 1000, date: "2024-06-01", status: "completed" },
                  { type: "Profit", amount: 250, date: "2024-05-28", status: "completed" },
                  { type: "Withdrawal", amount: -500, date: "2024-05-15", status: "pending" },
                ].map((transaction, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex justify-between items-center p-4 bg-muted/50 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${
                        transaction.type === "Profit" ? "bg-green-100 text-green-600" :
                        transaction.type === "Deposit" ? "bg-blue-100 text-blue-600" :
                        "bg-orange-100 text-orange-600"
                      }`}>
                        {transaction.type === "Profit" ? <TrendingUp className="h-4 w-4" /> :
                         transaction.type === "Deposit" ? <ArrowUpRight className="h-4 w-4" /> :
                         <ArrowDownRight className="h-4 w-4" />}
                      </div>
                      <div>
                        <p className="font-medium">{transaction.type}</p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        transaction.type === "Withdrawal" ? "text-orange-600" :
                        transaction.type === "Profit" ? "text-green-600" : ""
                      }`}>
                        {transaction.amount > 0 ? "+" : ""}{transaction.amount}
                      </p>
                      <p className={`text-sm ${
                        transaction.status === "pending" ? "text-orange-600" : "text-green-600"
                      }`}>
                        {transaction.status}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="investments" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-6">Investment Allocation</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={investmentAllocation}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {investmentAllocation.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-6">Investment Details</h3>
                <div className="space-y-6">
                  {[
                    { name: "Stock Portfolio", icon: Briefcase, value: "$2,610", change: "+15.2%" },
                    { name: "Real Estate Fund", icon: Building2, value: "$1,450", change: "+8.7%" },
                    { name: "Bond Holdings", icon: CircleDollarSign, value: "$1,160", change: "+4.3%" },
                    { name: "Cash Reserve", icon: Wallet, value: "$580", change: "+0.5%" },
                  ].map((investment, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-primary/10">
                          <investment.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{investment.name}</p>
                          <p className="text-sm text-muted-foreground">Current Value</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{investment.value}</p>
                        <p className="text-sm text-green-600">{investment.change}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Investment Opportunities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Growth Stock Fund",
                    description: "High-growth technology and healthcare stocks",
                    return: "18.5%",
                    risk: "Moderate-High"
                  },
                  {
                    name: "Real Estate Trust",
                    description: "Commercial and residential properties",
                    return: "12.3%",
                    risk: "Moderate"
                  },
                  {
                    name: "Bond Portfolio",
                    description: "Government and corporate bonds",
                    return: "8.7%",
                    risk: "Low"
                  }
                ].map((opportunity, i) => (
                  <Card key={i} className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{opportunity.name}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{opportunity.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Annual Return</span>
                        <span className="text-sm font-medium text-green-600">{opportunity.return}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Risk Level</span>
                        <span className="text-sm font-medium">{opportunity.risk}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Invest Now</Button>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Transaction History</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">Export</Button>
                  <Button variant="outline" size="sm">Filter</Button>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { type: "Deposit", amount: 1000, date: "2024-06-01", status: "completed", id: "#TRX001" },
                  { type: "Profit", amount: 250, date: "2024-05-28", status: "completed", id: "#TRX002" },
                  { type: "Withdrawal", amount: -500, date: "2024-05-15", status: "pending", id: "#TRX003" },
                  { type: "Deposit", amount: 2000, date: "2024-05-10", status: "completed", id: "#TRX004" },
                  { type: "Profit", amount: 180, date: "2024-05-05", status: "completed", id: "#TRX005" },
                  { type: "Withdrawal", amount: -300, date: "2024-05-01", status: "completed", id: "#TRX006" },
                ].map((transaction, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex justify-between items-center p-4 bg-muted/50 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${
                        transaction.type === "Profit" ? "bg-green-100 text-green-600" :
                        transaction.type === "Deposit" ? "bg-blue-100 text-blue-600" :
                        "bg-orange-100 text-orange-600"
                      }`}>
                        {transaction.type === "Profit" ? <TrendingUp className="h-4 w-4" /> :
                         transaction.type === "Deposit" ? <ArrowUpRight className="h-4 w-4" /> :
                         <ArrowDownRight className="h-4 w-4" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{transaction.type}</p>
                          <p className="text-sm text-muted-foreground">{transaction.id}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        transaction.type === "Withdrawal" ? "text-orange-600" :
                        transaction.type === "Profit" ? "text-green-600" : ""
                      }`}>
                        {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount)}
                      </p>
                      <p className={`text-sm ${
                        transaction.status === "pending" ? "text-orange-600" : "text-green-600"
                      }`}>
                        {transaction.status}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}