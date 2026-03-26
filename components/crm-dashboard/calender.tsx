export default function Calendar() {
  return (
    <div className="bg-muted/40 flex flex-1 flex-col">
      <div className="@container/main p-(--content-padding) xl:group-data-[theme-content-layout=centered]/layout:container xl:group-data-[theme-content-layout=centered]/layout:mx-auto">
        <div
          className="flex min-h-[calc(100vh-var(--header-height)-3rem)] flex-col rounded-lg border has-data-[slot=month-view]:flex-1"
          //   style="--event-height: 24px; --event-gap: 4px; --week-cells-height: 64px;"
        >
          <div className="flex items-center justify-between p-2 sm:p-4">
            <div className="flex items-center gap-1 sm:gap-4">
              <button
                data-slot="button"
                data-variant="outline"
                data-size="default"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 max-[479px]:aspect-square max-[479px]:p-0!"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  aria-hidden="true"
                  className="remixicon min-[480px]:hidden"
                >
                  <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 10H4V19H20V10ZM15.0355 11.136L16.4497 12.5503L11.5 17.5L7.96447 13.9645L9.37868 12.5503L11.5 14.6716L15.0355 11.136ZM7 5H4V8H20V5H17V6H15V5H9V6H7V5Z"></path>
                </svg>
                <span className="max-[479px]:sr-only">Today</span>
              </button>
              <div className="flex items-center sm:gap-2">
                <button
                  data-slot="button"
                  data-variant="ghost"
                  data-size="icon"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9"
                  aria-label="Previous"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-left"
                    aria-hidden="true"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </button>
                <button
                  data-slot="button"
                  data-variant="ghost"
                  data-size="icon"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9"
                  aria-label="Next"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-right"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              </div>
              <h2 className="text-sm font-semibold sm:text-lg md:text-xl">
                March 2026
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                data-slot="dropdown-menu-trigger"
                data-variant="outline"
                data-size="default"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 gap-1.5 max-[479px]:h-8"
                type="button"
                id="radix-_r_5_"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
              >
                <span>
                  <span className="min-[480px]:hidden" aria-hidden="true">
                    M
                  </span>
                  <span className="max-[479px]:sr-only">Month</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down -me-1 opacity-60"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <button
                data-slot="button"
                data-variant="default"
                data-size="sm"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 max-[479px]:aspect-square max-[479px]:p-0!"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-plus opacity-60 sm:-ms-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <span className="max-sm:sr-only">New event</span>
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div data-slot="month-view" className="contents">
              <div className="border-border/70 grid grid-cols-7 border-b">
                <div className="text-muted-foreground/70 py-2 text-center text-sm">
                  Sun
                </div>
                <div className="text-muted-foreground/70 py-2 text-center text-sm">
                  Mon
                </div>
                <div className="text-muted-foreground/70 py-2 text-center text-sm">
                  Tue
                </div>
                <div className="text-muted-foreground/70 py-2 text-center text-sm">
                  Wed
                </div>
                <div className="text-muted-foreground/70 py-2 text-center text-sm">
                  Thu
                </div>
                <div className="text-muted-foreground/70 py-2 text-center text-sm">
                  Fri
                </div>
                <div className="text-muted-foreground/70 py-2 text-center text-sm">
                  Sat
                </div>
              </div>
              <div className="grid flex-1 auto-rows-fr">
                <div className="grid grid-cols-7 [&amp;:last-child&gt;*]:border-b-0">
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        1
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]">
                        <div className="aria-hidden:hidden">
                          <div
                            className="touch-none"
                            //   style="height: auto;"
                          >
                            <button
                              className="focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2 bg-sky-200/50 hover:bg-sky-200/40 text-sky-950/80 dark:bg-sky-400/25 dark:hover:bg-sky-400/20 dark:text-sky-200 shadow-sky-700/8 rounded-l rounded-r-none mt-[var(--event-gap)] h-[var(--event-height)] items-center text-[10px] sm:text-xs"
                              data-past-event="true"
                              role="button"
                              //   tabindex="0"
                              aria-disabled="false"
                              aria-roledescription="draggable"
                              aria-describedby="_r_4_"
                            >
                              <span className="truncate">Annual Planning</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        2
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]">
                        <div className="aria-hidden:hidden">
                          <button
                            className="focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2 bg-sky-200/50 hover:bg-sky-200/40 text-sky-950/80 dark:bg-sky-400/25 dark:hover:bg-sky-400/20 dark:text-sky-200 shadow-sky-700/8 rounded-r rounded-l-none mt-[var(--event-gap)] h-[var(--event-height)] items-center text-[10px] sm:text-xs"
                            data-past-event="true"
                          >
                            <div className="invisible" aria-hidden="true">
                              Annual Planning
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        3
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        4
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        5
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        6
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        7
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-7 [&amp;:last-child&gt;*]:border-b-0">
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        8
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        9
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        10
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        11
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        12
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]">
                        <div className="aria-hidden:hidden">
                          <div
                            className="touch-none"
                            //   style="height: auto;"
                          >
                            <button
                              className="focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2 bg-orange-200/50 hover:bg-orange-200/40 text-orange-950/80 dark:bg-orange-400/25 dark:hover:bg-orange-400/20 dark:text-orange-200 shadow-orange-700/8 rounded mt-[var(--event-gap)] h-[var(--event-height)] items-center text-[10px] sm:text-xs"
                              data-past-event="true"
                              role="button"
                              //   tabindex="0"
                              aria-disabled="false"
                              aria-roledescription="draggable"
                              aria-describedby="_r_4_"
                            >
                              <span className="truncate">
                                Quarterly Budget Review
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        13
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        14
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-7 [&amp;:last-child&gt;*]:border-b-0">
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        15
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        16
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]">
                        <div className="aria-hidden:hidden">
                          <div
                            className="touch-none"
                            //   style="height: auto;"
                          >
                            <button
                              className="focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2 bg-amber-200/50 hover:bg-amber-200/40 text-amber-950/80 dark:bg-amber-400/25 dark:hover:bg-amber-400/20 dark:text-amber-200 shadow-amber-700/8 rounded mt-[var(--event-gap)] h-[var(--event-height)] items-center text-[10px] sm:text-xs"
                              data-past-event="true"
                              role="button"
                              //   tabindex="0"
                              aria-disabled="false"
                              aria-roledescription="draggable"
                              aria-describedby="_r_4_"
                            >
                              <span className="truncate">
                                <span className="truncate font-normal opacity-70 sm:text-[11px]">
                                  1pm{" "}
                                </span>
                                Project Deadline
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        17
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        18
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        19
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        20
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        21
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-7 [&amp;:last-child&gt;*]:border-b-0">
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        22
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        23
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        24
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div
                    className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0"
                    data-today="true"
                  >
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        25
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]">
                        <div className="aria-hidden:hidden">
                          <div
                            className="touch-none"
                            //   style="height: auto;"
                          >
                            <button
                              className="focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2 bg-sky-200/50 hover:bg-sky-200/40 text-sky-950/80 dark:bg-sky-400/25 dark:hover:bg-sky-400/20 dark:text-sky-200 shadow-sky-700/8 rounded mt-[var(--event-gap)] h-[var(--event-height)] items-center text-[10px] sm:text-xs"
                              data-past-event="true"
                              role="button"
                              //   tabindex="0"
                              aria-disabled="false"
                              aria-roledescription="draggable"
                              aria-describedby="_r_4_"
                            >
                              <span className="truncate">
                                <span className="truncate font-normal opacity-70 sm:text-[11px]">
                                  10am{" "}
                                </span>
                                Team Meeting
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        26
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]">
                        <div className="aria-hidden:hidden">
                          <div
                            className="touch-none"
                            //   style="height: auto;"
                          >
                            <button
                              className="focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2 bg-emerald-200/50 hover:bg-emerald-200/40 text-emerald-950/80 dark:bg-emerald-400/25 dark:hover:bg-emerald-400/20 dark:text-emerald-200 shadow-emerald-700/8 rounded mt-[var(--event-gap)] h-[var(--event-height)] items-center text-[10px] sm:text-xs"
                              role="button"
                              //   tabindex="0"
                              aria-disabled="false"
                              aria-roledescription="draggable"
                              aria-describedby="_r_4_"
                            >
                              <span className="truncate">
                                <span className="truncate font-normal opacity-70 sm:text-[11px]">
                                  12pm{" "}
                                </span>
                                Lunch with Client
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        27
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        28
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]">
                        <div className="aria-hidden:hidden">
                          <div
                            className="touch-none"
                            //   style="height: auto;"
                          >
                            <button
                              className="focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2 bg-violet-200/50 hover:bg-violet-200/40 text-violet-950/80 dark:bg-violet-400/25 dark:hover:bg-violet-400/20 dark:text-violet-200 shadow-violet-700/8 rounded-l rounded-r-none mt-[var(--event-gap)] h-[var(--event-height)] items-center text-[10px] sm:text-xs"
                              role="button"
                              //   tabindex="0"
                              aria-disabled="false"
                              aria-roledescription="draggable"
                              aria-describedby="_r_4_"
                            >
                              <span className="truncate">Product Launch</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-7 [&amp;:last-child&gt;*]:border-b-0">
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        29
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]">
                        <div className="aria-hidden:hidden">
                          <button className="focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2 bg-violet-200/50 hover:bg-violet-200/40 text-violet-950/80 dark:bg-violet-400/25 dark:hover:bg-violet-400/20 dark:text-violet-200 shadow-violet-700/8 rounded-none mt-[var(--event-gap)] h-[var(--event-height)] items-center text-[10px] sm:text-xs">
                            <div className="invisible" aria-hidden="true">
                              Product Launch
                            </div>
                          </button>
                        </div>
                        <div className="aria-hidden:hidden">
                          <div
                            className="touch-none"
                            //   style="height: auto;"
                          >
                            <button
                              className="focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2 bg-rose-200/50 hover:bg-rose-200/40 text-rose-950/80 dark:bg-rose-400/25 dark:hover:bg-rose-400/20 dark:text-rose-200 shadow-rose-700/8 rounded-l rounded-r-none mt-[var(--event-gap)] h-[var(--event-height)] items-center text-[10px] sm:text-xs"
                              role="button"
                              //   tabindex="0"
                              aria-disabled="false"
                              aria-roledescription="draggable"
                              aria-describedby="_r_4_"
                            >
                              <span className="truncate">
                                <span className="truncate font-normal opacity-70 sm:text-[11px]">
                                  2:30pm{" "}
                                </span>
                                Sales Conference
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        30
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]">
                        <div className="aria-hidden:hidden">
                          <button className="focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2 bg-violet-200/50 hover:bg-violet-200/40 text-violet-950/80 dark:bg-violet-400/25 dark:hover:bg-violet-400/20 dark:text-violet-200 shadow-violet-700/8 rounded-none mt-[var(--event-gap)] h-[var(--event-height)] items-center text-[10px] sm:text-xs">
                            <div className="invisible" aria-hidden="true">
                              Product Launch
                            </div>
                          </button>
                        </div>
                        <div className="aria-hidden:hidden">
                          <button className="focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2 bg-rose-200/50 hover:bg-rose-200/40 text-rose-950/80 dark:bg-rose-400/25 dark:hover:bg-rose-400/20 dark:text-rose-200 shadow-rose-700/8 rounded-r rounded-l-none mt-[var(--event-gap)] h-[var(--event-height)] items-center text-[10px] sm:text-xs">
                            <div className="invisible" aria-hidden="true">
                              <span>2:30 </span>Sales Conference
                            </div>
                          </button>
                        </div>
                        <div className="aria-hidden:hidden">
                          <div
                            className="touch-none"
                            //   style="height: auto;"
                          >
                            <button
                              className="focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2 bg-orange-200/50 hover:bg-orange-200/40 text-orange-950/80 dark:bg-orange-400/25 dark:hover:bg-orange-400/20 dark:text-orange-200 shadow-orange-700/8 rounded mt-[var(--event-gap)] h-[var(--event-height)] items-center text-[10px] sm:text-xs"
                              role="button"
                              //   tabindex="0"
                              aria-disabled="false"
                              aria-roledescription="draggable"
                              aria-describedby="_r_4_"
                            >
                              <span className="truncate">
                                <span className="truncate font-normal opacity-70 sm:text-[11px]">
                                  9am{" "}
                                </span>
                                Team Meeting
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="aria-hidden:hidden" aria-hidden="true">
                          <div
                            className="touch-none"
                            //   style="height: auto;"
                          >
                            <button
                              className="focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2 bg-amber-200/50 hover:bg-amber-200/40 text-amber-950/80 dark:bg-amber-400/25 dark:hover:bg-amber-400/20 dark:text-amber-200 shadow-amber-700/8 rounded mt-[var(--event-gap)] h-[var(--event-height)] items-center text-[10px] sm:text-xs"
                              role="button"
                              //   tabindex="0"
                              aria-disabled="false"
                              aria-roledescription="draggable"
                              aria-describedby="_r_4_"
                            >
                              <span className="truncate">
                                <span className="truncate font-normal opacity-70 sm:text-[11px]">
                                  9:45am{" "}
                                </span>
                                Team Meeting
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="aria-hidden:hidden" aria-hidden="true">
                          <div
                            className="touch-none"
                            //   style="height: auto;"
                          >
                            <button
                              className="focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2 bg-sky-200/50 hover:bg-sky-200/40 text-sky-950/80 dark:bg-sky-400/25 dark:hover:bg-sky-400/20 dark:text-sky-200 shadow-sky-700/8 rounded mt-[var(--event-gap)] h-[var(--event-height)] items-center text-[10px] sm:text-xs"
                              role="button"
                              //   tabindex="0"
                              aria-disabled="false"
                              aria-roledescription="draggable"
                              aria-describedby="_r_4_"
                            >
                              <span className="truncate">
                                <span className="truncate font-normal opacity-70 sm:text-[11px]">
                                  2pm{" "}
                                </span>
                                Review contracts
                              </span>
                            </button>
                          </div>
                        </div>
                        <button
                          className="focus-visible:border-ring focus-visible:ring-ring/50 text-muted-foreground hover:text-foreground hover:bg-muted/50 mt-[var(--event-gap)] flex h-[var(--event-height)] w-full items-center overflow-hidden px-1 text-left text-[10px] backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] sm:px-2 sm:text-xs"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-_r_a_"
                          data-state="closed"
                          data-slot="popover-trigger"
                        >
                          <span>
                            + 2 <span className="max-sm:sr-only">more</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0">
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        31
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]">
                        <div className="aria-hidden:hidden">
                          <button className="focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2 bg-violet-200/50 hover:bg-violet-200/40 text-violet-950/80 dark:bg-violet-400/25 dark:hover:bg-violet-400/20 dark:text-violet-200 shadow-violet-700/8 rounded-r rounded-l-none mt-[var(--event-gap)] h-[var(--event-height)] items-center text-[10px] sm:text-xs">
                            <div className="invisible" aria-hidden="true">
                              Product Launch
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0"
                    data-outside-cell="true"
                  >
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        1
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div
                    className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0"
                    data-outside-cell="true"
                  >
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        2
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                  <div
                    className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0"
                    data-outside-cell="true"
                  >
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        3
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]">
                        <div className="aria-hidden:hidden">
                          <div
                            className="touch-none"
                            //   style="height: auto;"
                          >
                            <button
                              className="focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2 bg-emerald-200/50 hover:bg-emerald-200/40 text-emerald-950/80 dark:bg-emerald-400/25 dark:hover:bg-emerald-400/20 dark:text-emerald-200 shadow-emerald-700/8 rounded mt-[var(--event-gap)] h-[var(--event-height)] items-center text-[10px] sm:text-xs"
                              role="button"
                              //   tabindex="0"
                              aria-disabled="false"
                              aria-roledescription="draggable"
                              aria-describedby="_r_4_"
                            >
                              <span className="truncate">
                                <span className="truncate font-normal opacity-70 sm:text-[11px]">
                                  10am{" "}
                                </span>
                                Marketing Strategy Session
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0"
                    data-outside-cell="true"
                  >
                    <div className="data-dragging:bg-accent flex h-full flex-col overflow-hidden px-0.5 py-1 sm:px-1">
                      <div className="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
                        4
                      </div>
                      <div className="min-h-[calc((var(--event-height)+var(--event-gap))*2)] sm:min-h-[calc((var(--event-height)+var(--event-gap))*3)] lg:min-h-[calc((var(--event-height)+var(--event-gap))*4)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="_r_4_"
            //   style="display: none;"
          >
            To pick up a draggable item, press the space bar. While dragging,
            use the arrow keys to move the item. Press space again to drop the
            item in its new position, or press escape to cancel.
          </div>
          <div
            id="DndLiveRegion-0"
            role="status"
            aria-live="assertive"
            aria-atomic="true"
            // style="position: fixed; top: 0px; left: 0px; width: 1px; height: 1px; margin: -1px; border: 0px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(100%); white-space: nowrap;"
          ></div>
        </div>
      </div>
    </div>
  );
}
