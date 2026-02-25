import { Badge } from "@/components/ui/badge";

export default function SiteFaq() {
  return (
    <section className="py-32 w-full px-6 sm:px-30">
      <div className="container">
        <div className="text-center">
          <Badge
            variant="secondary"
            className="bg-primary-cbe-100 text-primary-cbe-800 text-xs font-bold rounded h-5 px-2.5 py-0.5"
          >
            FAQs
          </Badge>
          <h1 className="mt-4 text-4xl font-semibold">
            Common Questions &amp; Answers
          </h1>
          <p className="mt-6 font-medium text-muted-foreground">
            Find out all the essential details about our platform and how it can
            serve your needs.
          </p>
        </div>
        <div className="mx-auto mt-14 grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex gap-4">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-primary-cbe-100 font-mono text-xs text-primary-cbe-800">
              1
            </span>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium">
                  What is a FAQ and why is it important?
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                FAQ stands for Frequently Asked Questions. It is a list that
                provides answers to common questions people may have about a
                specific product, service, or topic.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-primary-cbe-100 font-mono text-xs text-primary-cbe-800">
              2
            </span>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium">
                  Why should I use a FAQ on my website or app?
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Utilizing a FAQ section on your website or app is a practical
                way to offer instant assistance to your users or customers.
                Instead of waiting for customer support responses, they can find
                quick answers to commonly asked questions.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-primary-cbe-100 font-mono text-xs text-primary-cbe-800">
              3
            </span>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium">
                  How do I effectively create a FAQ section?
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Creating a FAQ section starts with gathering the most frequent
                questions you receive from your users or customers. Once you
                have a list, you need to write clear, detailed, and helpful
                answers to each question.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-primary-cbe-100 font-mono text-xs text-primary-cbe-800">
              4
            </span>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium">
                  What are the benefits of having a well-maintained FAQ section?
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                There are numerous advantages to maintaining a robust FAQ
                section. Firstly, it provides immediate answers to common
                queries, which improves the user experience.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-primary-cbe-100 font-mono text-xs text-primary-cbe-800">
              5
            </span>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium">
                  How should I organize my FAQ for optimal usability?
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                An organized FAQ is critical for user-friendliness. Start by
                grouping similar questions into categories, such as
                &quot;Billing,&quot; &quot;Account Setup,&quot; or
                &quot;Technical Support.&quot; This way, users can quickly find
                the section that addresses their specific concerns.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-primary-cbe-100 font-mono text-xs text-primary-cbe-800">
              6
            </span>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium">
                  How often should I update my FAQ, and why is it necessary?
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Regular updates to your FAQ are essential to keeping the
                information accurate and relevant. As your product or service
                evolves, so will the types of questions your users ask.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
