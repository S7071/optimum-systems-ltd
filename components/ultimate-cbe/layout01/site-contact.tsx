import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, MessagesSquareIcon, Phone } from "lucide-react";

export default function SiteContact() {
  return (
    <section className="bg-background py-16 sm:py-32 w-full">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Ready to transform your school&apos;s assessment management? Our
              team is here to guide you every step of the way. Reach out and
              let&apos;s discuss how UltimateCBE can be tailored to meet your
              school&apos;s CBC needs.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-4">
                <div
                  data-slot="card"
                  data-size="default"
                  className="ring-foreground/10 text-card-foreground gap-6 overflow-hidden rounded-xl py-6 text-sm ring-1 has-[&gt;img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col border-0 bg-muted shadow-none"
                >
                  <div
                    data-slot="card-content"
                    className="px-6 group-data-[size=sm]/card:px-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
                        <Mail size={24} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-semibold">Email</h3>
                        </div>
                        <p className="mb-2 text-sm text-muted-foreground">
                          Get a response within 24 hours
                        </p>
                        <a
                          href="mailto:hello@company.com"
                          className="text-sm font-medium transition-colors hover:underline"
                        >
                          hello@company.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  data-size="default"
                  className="ring-foreground/10 text-card-foreground gap-6 overflow-hidden rounded-xl py-6 text-sm ring-1 has-[&gt;img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col border-0 bg-muted shadow-none"
                >
                  <div
                    data-slot="card-content"
                    className="px-6 group-data-[size=sm]/card:px-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
                        <MessagesSquareIcon size={24} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-semibold">Live Chat</h3>
                        </div>
                        <p className="mb-2 text-sm text-muted-foreground">
                          Instant support available now
                        </p>
                        <a
                          href="#"
                          className="text-sm font-medium transition-colors hover:underline"
                        >
                          Start chatting
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  data-size="default"
                  className="ring-foreground/10 text-card-foreground gap-6 overflow-hidden rounded-xl py-6 text-sm ring-1 has-[&gt;img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col border-0 bg-muted shadow-none"
                >
                  <div
                    data-slot="card-content"
                    className="px-6 group-data-[size=sm]/card:px-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
                        <Phone size={24} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-semibold">Phone</h3>
                        </div>
                        <p className="mb-2 text-sm text-muted-foreground">
                          Mon-Fri, 9AM-6PM EST
                        </p>
                        <a
                          href="tel:+15551234567"
                          className="text-sm font-medium transition-colors hover:underline"
                        >
                          +254 (723) 550-664
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  data-size="default"
                  className="ring-foreground/10 text-card-foreground gap-6 overflow-hidden rounded-xl py-6 text-sm ring-1 has-[&gt;img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col border-0 bg-muted shadow-none"
                >
                  <div
                    data-slot="card-content"
                    className="px-6 group-data-[size=sm]/card:px-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
                        <MapPin size={24} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-semibold">Office</h3>
                        </div>
                        <p className="mb-2 text-sm text-muted-foreground">
                          Schedule an in-person meeting
                        </p>
                        <a
                          href="#"
                          className="text-sm font-medium transition-colors hover:underline"
                        >
                          1610 - 00200, City Square Nairobi
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              data-size="default"
              className="ring-foreground/10 bg-card text-card-foreground gap-6 overflow-hidden rounded-xl py-6 text-sm ring-1 has-[&gt;img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col border-0 shadow-none"
            >
              <div
                data-slot="card-header"
                className="gap-1 rounded-t-xl px-6 group-data-[size=sm]/card:px-4 [.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]"
              >
                <div
                  data-slot="card-title"
                  className="text-base leading-normal font-medium group-data-[size=sm]/card:text-sm"
                >
                  Send us a message
                </div>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
              </div>
              <div
                data-slot="card-content"
                className="px-6 group-data-[size=sm]/card:px-4"
              >
                <form
                  className="space-y-6"
                  data-okta-formhash="0"
                  data-okta-locator="926cb533-5ae0-48d3-9515-6cf7b99cabc1"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        data-slot="label"
                        className="gap-2 group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed text-sm font-medium"
                        htmlFor="firstName"
                      >
                        First Name *
                      </label>
                      <Input
                        data-slot="input"
                        className="dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                        id="firstName"
                        placeholder="John"
                        required={true}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        data-slot="label"
                        className="gap-2 group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed text-sm font-medium"
                        htmlFor="lastName"
                      >
                        Last Name *
                      </label>
                      <Input
                        data-slot="input"
                        className="dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                        id="lastName"
                        placeholder="Doe"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      data-slot="label"
                      className="gap-2 group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed text-sm font-medium"
                      htmlFor="email"
                    >
                      Email Address *
                    </label>
                    <Input
                      data-slot="input"
                      className="dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                      id="email"
                      placeholder="john@company.com"
                      required={true}
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      data-slot="label"
                      className="gap-2 group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed text-sm font-medium"
                      htmlFor="company"
                    >
                      Company
                    </label>
                    <Input
                      data-slot="input"
                      className="dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                      id="company"
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      data-slot="label"
                      className="gap-2 group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed text-sm font-medium"
                      htmlFor="message"
                    >
                      Message *
                    </label>
                    <textarea
                      data-slot="textarea"
                      className="border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                      id="message"
                      placeholder="Tell us about your institution, or how we can help..."
                      rows={4}
                      required={true}
                    ></textarea>
                  </div>
                  <div className="flex items-center space-x-3 justify-start">
                    <input
                      aria-hidden="true"
                      required={true}
                      tabIndex={-1}
                      type="checkbox"
                      //   style={{"position: absolute; pointer-events: none; opacity: 0; margin: 0px; transform: translateX(-100%); width: 16px; height: 16px;"}}
                    />
                    <label
                      data-slot="label"
                      className="gap-2 font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed text-sm leading-relaxed text-muted-foreground"
                    >
                      I agree to the{" "}
                      <a
                        href="#"
                        className="font-medium text-foreground hover:underline"
                      >
                        Terms of Service
                      </a>
                    </label>
                  </div>
                  <Button variant="default" className="w-full" type="submit">
                    <div className="flex items-center gap-2">Submit</div>
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div
              data-orientation="horizontal"
              role="none"
              data-slot="separator"
              className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch mb-8"
            ></div>
            <div
              data-slot="card"
              data-size="default"
              className="ring-foreground/10 text-card-foreground gap-6 overflow-hidden rounded-xl py-6 text-sm ring-1 has-[&gt;img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col border-0 bg-muted shadow-none"
            >
              <div
                data-slot="card-content"
                className="group-data-[size=sm]/card:px-4 p-6"
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Office Hours</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      Contact Information
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Email</span>
                        <span>hello@company.com</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Phone</span>
                        <span>+254 (723) 550-664</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Address</span>
                        <span>1610 - 00200, City Square Nairobi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
