import { ChartAreaInteractive } from '@/components/layout/analytics/chart'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { NUMBER_FORMATTER } from '@/lib/constants'
import { createFileRoute } from '@tanstack/react-router'
import { Cursor02Icon, LicenseIcon, Link02Icon, Megaphone01Icon, Notification02Icon, Search01Icon, SearchAreaIcon } from 'hugeicons-react'
import { TrendingDown, TrendingUp } from 'lucide-react'

export const TrafficSource = {
  DIRECT: 'DIRECT',
  SEARCH: 'SEARCH',
  REFERRAL: 'REFERRAL',
  NOTIFICATION: 'NOTIFICATION',
  ADVERTISEMENT: 'ADVERTISEMENT',
  FEED: 'FEED'
} as const

export type TrafficSource = (typeof TrafficSource)[keyof typeof TrafficSource]

const trafficSourceConfig = {
  [TrafficSource.FEED]: {
    icon: LicenseIcon,
    label: "Feed",
    description: "Content recommended by algorithm",
    colorClasses: {
      bg: "bg-sky-50",
      border: "border-sky-300",
      text: "text-sky-600",
    },
  },
  [TrafficSource.DIRECT]: {
    icon: Cursor02Icon,
    label: "Direct",
    description: "Users visiting directly",
    colorClasses: {
      bg: "bg-gray-50",
      border: "border-gray-300",
      text: "text-gray-700",
    },
  },
  [TrafficSource.NOTIFICATION]: {
    icon: Notification02Icon,
    label: "Notification",
    description: "Push or in-app alerts",
    colorClasses: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      text: "text-amber-600",
    },
  },
  [TrafficSource.ADVERTISEMENT]: {
    icon: Megaphone01Icon,
    label: "Advertisement",
    description: "Paid campaigns or promos",
    colorClasses: {
      bg: "bg-rose-50",
      border: "border-rose-300",
      text: "text-rose-600",
    },
  },
  [TrafficSource.SEARCH]: {
    icon: SearchAreaIcon,
    label: "Search",
    description: "Organic search traffic",
    colorClasses: {
      bg: "bg-green-50",
      border: "border-green-300",
      text: "text-green-600",
    },
  },
  [TrafficSource.REFERRAL]: {
    icon: Link02Icon,
    label: "Referral",
    description: "External links and mentions",
    colorClasses: {
      bg: "bg-violet-50",
      border: "border-violet-300",
      text: "text-violet-600",
    },
  },
};

const rankColors = [
  {
    bg: "bg-yellow-100",
    border: "border-yellow-300",
    text: "text-yellow-700",
  },
  { bg: "bg-gray-100", border: "border-gray-300", text: "text-gray-700" },
  {
    bg: "bg-orange-100",
    border: "border-orange-300",
    text: "text-orange-700",
  },
];

export const data = {
  period: {
    days: 30
  },
  totalTraffic: 847632,
  totalSearches: 234891,

  trafficSources: [
    {
      source: 'FEED',
      percentage: 34,
      percentageChange: 12.5,
      isIncreasing: true,
      visits: 288194,
      avgReadTimeMinutes: 4.2
    },
    {
      source: 'SEARCH',
      percentage: 28,
      percentageChange: 8.3,
      isIncreasing: true,
      visits: 237337,
      avgReadTimeMinutes: 6.8
    },
    {
      source: 'DIRECT',
      percentage: 18,
      percentageChange: -2.1,
      isIncreasing: false,
      visits: 152574,
      avgReadTimeMinutes: 5.5
    },
    {
      source: 'REFERRAL',
      percentage: 12,
      percentageChange: 15.7,
      isIncreasing: true,
      visits: 101716,
      avgReadTimeMinutes: 3.9
    },
    {
      source: 'NOTIFICATION',
      percentage: 5,
      percentageChange: -4.2,
      isIncreasing: false,
      visits: 42382,
      avgReadTimeMinutes: 2.8
    },
    {
      source: 'ADVERTISEMENT',
      percentage: 3,
      percentageChange: 22.9,
      isIncreasing: true,
      visits: 25429,
      avgReadTimeMinutes: 3.1
    }
  ],

  searchQueries: [
    {
      query: "best practices for web development 2025",
      categories: "Development, Tutorial",
      percentage: 24,
      percentageChange: 18.5,
      isIncreasing: true,
      searches: 56374
    },
    {
      query: "react performance optimization tips",
      categories: "React, Performance",
      percentage: 19,
      percentageChange: -3.2,
      isIncreasing: false,
      searches: 44629
    },
    {
      query: "typescript advanced patterns",
      categories: "TypeScript, Advanced",
      percentage: 15,
      percentageChange: 9.7,
      isIncreasing: true,
      searches: 35234
    },
    {
      query: "next.js app router tutorial",
      categories: "Next.js, Tutorial",
      percentage: 12,
      percentageChange: 25.3,
      isIncreasing: true,
      searches: 28187
    },
    {
      query: "css grid vs flexbox comparison",
      categories: "CSS, Layout",
      percentage: 10,
      percentageChange: -1.8,
      isIncreasing: false,
      searches: 23489
    },
    {
      query: "api design best practices",
      categories: "API, Backend",
      percentage: 8,
      percentageChange: 5.4,
      isIncreasing: true,
      searches: 18791
    },
    {
      query: "javascript debugging techniques",
      categories: "JavaScript, Debugging",
      percentage: 7,
      percentageChange: -6.1,
      isIncreasing: false,
      searches: 16442
    },
    {
      query: "responsive design mobile first",
      categories: "Design, Mobile",
      percentage: 5,
      percentageChange: 3.9,
      isIncreasing: true,
      searches: 11745
    }
  ]
};

export const Route = createFileRoute(
  '/dashboard/$publicationId/_pub/analytics',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="relative">
    <div className="mx-auto px-4 py-10 w-full max-w-5xl min-h-screen">
      <div className="pb-6">
        <h1 className="font-semibold text-slate-800 dark:text-slate-100 text-3xl">
          Analytics
        </h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          Summary of your publication analytics
        </p>
      </div>

      <Separator className="mb-8" />

      <div className="space-y-6">
        <div className="gap-6 grid grid-cols-1 md:grid-cols-4">
          <div className="space-y-1 bg-chart-1/70 p-4 border border-border dark:border-slate-600/30 rounded-md">
            <h5 className="font-semibold text-slate-900 dark:text-white text-lg">
              2
            </h5>
            <p className="text-slate-800 dark:text-slate-100 text-sm">
              7-day page view
            </p>
          </div>
          <div className="space-y-1 bg-chart-2/70 p-4 border border-border dark:border-slate-600/30 rounded-md">
            <h5 className="font-semibold text-slate-900 dark:text-white text-lg">
              3
            </h5>
            <p className="text-slate-800 dark:text-slate-100 text-sm">
              Total page views
            </p>
          </div>
          <div className="space-y-1 bg-chart-3/70 p-4 border border-border dark:border-slate-600/30 rounded-md">
            <h5 className="font-semibold text-slate-900 dark:text-white text-lg">
              6
            </h5>
            <p className="text-slate-800 dark:text-slate-100 text-sm">
              Total Views
            </p>
          </div>
          <div className="space-y-1 bg-chart-4/70 p-4 border border-border dark:border-slate-600/30 rounded-md">
            <h5 className="font-semibold text-slate-900 dark:text-white text-lg">
              -
            </h5>
            <p className="text-slate-800 dark:text-slate-100 text-sm">
              Newsletter subscribers
            </p>
          </div>
        </div>

        <ChartAreaInteractive />

        <div className="items-start gap-6 grid grid-cols-1 lg:grid-cols-2">
          <section className="flex flex-col bg-white dark:bg-slate-950 shadow-sm border border-border rounded-xl h-full">
            <div className="p-4 sm:p-6 border-border border-b">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-slate-900 dark:text-slate-100 text-lg">
                  Traffic Sources
                </h2>
                <Badge variant="secondary" className="text-xs">
                  Last 30 days
                </Badge>
              </div>
              <p className="mt-1 text-slate-600 dark:text-slate-300 text-sm">
                Where your readers are coming from
              </p>
            </div>

            <div className="flex-1 space-y-6 p-4 sm:p-6">
              <ScrollArea className="pr-3 w-full h-[400px]" type="auto">
                <div className="space-y-5">
                  {data.trafficSources
                    .sort((a, b) => b.percentage - a.percentage)
                    .map((source) => {
                      const config = trafficSourceConfig[source.source];
                      const Icon = config.icon;

                      return (
                        <div key={source.source} className="group">
                          <div className="flex items-start gap-4 mb-2">
                            <div
                              className={`p-2 border ${config.colorClasses.border} ${config.colorClasses.bg} rounded-lg mt-0.5`}
                            >
                              <Icon
                                className={`h-4 w-4 ${config.colorClasses.text}`}
                              />
                            </div>
                            <div className="flex-1 w-full min-w-0">
                              <div className="flex justify-between items-center mb-1.5">
                                <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm truncate">
                                  {config.label}
                                </p>
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`flex items-center gap-1 text-[11px] font-medium ${source.isIncreasing
                                      ? "text-emerald-600 dark:text-emerald-500"
                                      : "text-rose-600 dark:text-rose-500"
                                      }`}
                                  >
                                    {source.isIncreasing ? (
                                      <TrendingUp className="w-3 h-3" />
                                    ) : (
                                      <TrendingDown className="w-3 h-3" />
                                    )}
                                    <span>
                                      {source.percentageChange}%
                                    </span>
                                  </div>
                                  <span className="font-bold text-slate-700 dark:text-slate-200 text-sm">
                                    {source.percentage}%
                                  </span>
                                </div>
                              </div>

                              <Progress
                                value={source.percentage}
                                className="h-2"
                              />
                              <div className="flex justify-between items-center mt-2 text-xs">
                                <span className="text-slate-500 dark:text-slate-400">
                                  {NUMBER_FORMATTER.format(source.visits)} visits
                                </span>
                                <span className="text-slate-400 dark:text-slate-500">
                                  {source.avgReadTimeMinutes}m read
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </ScrollArea>

              <div className="pt-4 border-border dark:border-slate-800/60 border-t">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-slate-600 dark:text-slate-300">Total Traffic</span>
                  <span className="font-bold text-slate-900 dark:text-slate-100">
                    {NUMBER_FORMATTER.format(data.totalTraffic)} visits
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col bg-white dark:bg-slate-950 shadow-sm border border-border rounded-xl h-full">
            <div className="p-4 sm:p-6 border-border border-b">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-slate-900 dark:text-slate-100 text-lg">
                  Top Search Queries
                </h2>
                <Badge variant="secondary" className="text-xs">
                  Last {data.period.days} days
                </Badge>
              </div>
              <p className="mt-1 text-slate-600 dark:text-slate-300 text-sm">
                Most searched terms leading to your content
              </p>
            </div>

            <div className="flex-1 space-y-6 p-4 sm:p-6">
              {data.searchQueries.length === 0 ? (
                <div className="py-12 text-slate-500 dark:text-slate-400 text-center">
                  <Search01Icon className="opacity-20 mx-auto mb-3 w-10 h-10" />
                  <p>No search queries recorded yet</p>
                </div>
              ) : (
                <>
                  <ScrollArea className="pr-3 w-full h-[400px]" type="auto">
                    <div className="space-y-4">
                      {data.searchQueries
                        .sort((a, b) => b.percentage - a.percentage)
                        .slice(0, 10) // Show more items since it's scrollable
                        .map((query, index) => {
                          const rankColor = rankColors[index] || {
                            bg: "bg-slate-100 dark:bg-slate-800",
                            border: "border-slate-200 dark:border-slate-700",
                            text: "text-slate-600 dark:text-slate-400"
                          };

                          return (
                            <div key={query.query} className="group py-1">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-6 h-6 border ${rankColor?.border} ${rankColor?.bg} rounded shadow-sm flex items-center justify-center flex-shrink-0`}
                                >
                                  <span
                                    className={`text-[10px] font-bold ${rankColor?.text}`}
                                  >
                                    {index + 1}
                                  </span>
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div className="flex justify-between items-center mb-1">
                                    <p className="pr-2 font-medium text-slate-800 dark:text-slate-200 text-sm truncate" title={query.query}>
                                      {query.query}
                                    </p>
                                    <span className="font-bold text-slate-700 dark:text-slate-300 text-xs shrink-0">
                                      {query.percentage}%
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center gap-4">
                                    <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                      <div
                                        className="bg-blue-500/80 rounded-full h-full"
                                        style={{ width: `${query.percentage}%` }}
                                      />
                                    </div>
                                    <div className="w-16 tabular-nums text-[10px] text-slate-400 text-right shrink-0">
                                      {NUMBER_FORMATTER.format(query.searches)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </ScrollArea>

                  <div className="flex justify-between items-center pt-4 border-border dark:border-slate-800/60 border-t text-sm">
                    <span className="font-medium text-slate-600 dark:text-slate-300">Total Searches</span>
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      {NUMBER_FORMATTER.format(data.totalSearches)} searches
                    </span>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
}
