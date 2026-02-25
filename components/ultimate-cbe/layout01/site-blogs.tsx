/* eslint-disable @next/next/no-img-element */
export default function SiteBlogs() {
  return (
    <section className="py-16 sm:py-32 w-full px-6 sm:px-30">
      <div className="container">
        <div className="mb-8 md:mb-14 lg:mb-16">
          <div className="flex items-start justify-between gap-8">
            <div>
              <h1 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
                Blog
              </h1>
            </div>
          </div>
          <p>
            Insights, tutorials, and thoughts on modern software development
          </p>
        </div>
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
          <a href="#" className="group flex flex-col">
            <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
              <div className="transition-opacity duration-300 group-hover:opacity-80">
                <img
                  alt="The Future of Web Development: What's Next in 2024"
                  className="aspect-3/2 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                />
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">Sarah Chen</span>
              <span>•</span>
              <span>15 Jan 2024</span>
            </div>
            <h2 className="mb-2 line-clamp-3 text-lg font-medium break-words md:mb-3 md:text-2xl">
              The Future of Web Development: What&apos;s Next in 2024
            </h2>
            <div className="line-clamp-2 text-sm text-muted-foreground md:text-base">
              Explore the latest trends in web development, from AI-powered
              tools to new frameworks that are reshaping how we build the web.
              Discover what developers need to know to stay ahead.
            </div>
          </a>
          <a href="#" className="group flex flex-col">
            <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
              <div className="transition-opacity duration-300 group-hover:opacity-80">
                <img
                  alt="Building Scalable APIs with Modern Architecture Patterns"
                  className="aspect-3/2 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&amp;w=2022&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">Marcus Rodriguez</span>
              <span>•</span>
              <span>12 Jan 2024</span>
            </div>
            <h2 className="mb-2 line-clamp-3 text-lg font-medium break-words md:mb-3 md:text-2xl">
              Building Scalable APIs with Modern Architecture Patterns
            </h2>
            <div className="line-clamp-2 text-sm text-muted-foreground md:text-base">
              Learn about microservices, GraphQL, and event-driven architectures
              that are powering today&apos;s most successful applications. Practical
              insights for building robust APIs.
            </div>
          </a>
          <a href="#" className="group flex flex-col">
            <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
              <div className="transition-opacity duration-300 group-hover:opacity-80">
                <img
                  alt="Design Systems: Creating Consistency at Scale"
                  className="aspect-3/2 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1563952532949-3d1a874ad614?q=80&amp;w=1951&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">Emma Thompson</span>
              <span>•</span>
              <span>10 Jan 2024</span>
            </div>
            <h2 className="mb-2 line-clamp-3 text-lg font-medium break-words md:mb-3 md:text-2xl">
              Design Systems: Creating Consistency at Scale
            </h2>
            <div className="line-clamp-2 text-sm text-muted-foreground md:text-base">
              How leading companies are implementing design systems to maintain
              visual consistency across products while enabling rapid
              development and innovation.
            </div>
          </a>
          <a href="#" className="group flex flex-col">
            <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
              <div className="transition-opacity duration-300 group-hover:opacity-80">
                <img
                  alt="Machine Learning in Production: Best Practices for Deployment"
                  className="aspect-3/2 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1563952532949-3d1a874ad614?q=80&amp;w=1951&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">Alex Kim</span>
              <span>•</span>
              <span>8 Jan 2024</span>
            </div>
            <h2 className="mb-2 line-clamp-3 text-lg font-medium break-words md:mb-3 md:text-2xl">
              Machine Learning in Production: Best Practices for Deployment
            </h2>
            <div className="line-clamp-2 text-sm text-muted-foreground md:text-base">
              From model versioning to monitoring and scaling, learn the
              essential practices for deploying machine learning models in
              production environments.
            </div>
          </a>
          <a href="#" className="group flex flex-col">
            <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
              <div className="transition-opacity duration-300 group-hover:opacity-80">
                <img
                  alt="The Rise of Edge Computing: Transforming Application Architecture"
                  className="aspect-3/2 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                />
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">David Park</span>
              <span>•</span>
              <span>5 Jan 2024</span>
            </div>
            <h2 className="mb-2 line-clamp-3 text-lg font-medium break-words md:mb-3 md:text-2xl">
              The Rise of Edge Computing: Transforming Application Architecture
            </h2>
            <div className="line-clamp-2 text-sm text-muted-foreground md:text-base">
              Discover how edge computing is revolutionizing application
              performance and user experience, and learn strategies for
              implementing edge-first architectures.
            </div>
          </a>
          <a href="#" className="group flex flex-col">
            <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
              <div className="transition-opacity duration-300 group-hover:opacity-80">
                <img
                  alt="Cybersecurity Essentials for Modern Applications"
                  className="aspect-3/2 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&amp;w=2022&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">Lisa Wang</span>
              <span>•</span>
              <span>3 Jan 2024</span>
            </div>
            <h2 className="mb-2 line-clamp-3 text-lg font-medium break-words md:mb-3 md:text-2xl">
              Cybersecurity Essentials for Modern Applications
            </h2>
            <div className="line-clamp-2 text-sm text-muted-foreground md:text-base">
              Essential security practices every developer should implement,
              from authentication and authorization to data encryption and
              secure coding practices.
            </div>
          </a>
          <a href="#" className="group flex flex-col">
            <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
              <div className="transition-opacity duration-300 group-hover:opacity-80">
                <img
                  alt="Performance Optimization: Techniques for Faster Web Applications"
                  className="aspect-3/2 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                />
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">James Wilson</span>
              <span>•</span>
              <span>1 Jan 2024</span>
            </div>
            <h2 className="mb-2 line-clamp-3 text-lg font-medium break-words md:mb-3 md:text-2xl">
              Performance Optimization: Techniques for Faster Web Applications
            </h2>
            <div className="line-clamp-2 text-sm text-muted-foreground md:text-base">
              Advanced techniques for optimizing web application performance,
              including code splitting, lazy loading, and modern caching
              strategies.
            </div>
          </a>
          <a href="#" className="group flex flex-col">
            <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
              <div className="transition-opacity duration-300 group-hover:opacity-80">
                <img
                  alt="DevOps Culture: Building Better Software Delivery Pipelines"
                  className="aspect-3/2 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&amp;w=2022&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">Maria Garcia</span>
              <span>•</span>
              <span>29 Dec 2023</span>
            </div>
            <h2 className="mb-2 line-clamp-3 text-lg font-medium break-words md:mb-3 md:text-2xl">
              DevOps Culture: Building Better Software Delivery Pipelines
            </h2>
            <div className="line-clamp-2 text-sm text-muted-foreground md:text-base">
              How to foster a DevOps culture in your organization and implement
              CI/CD pipelines that accelerate development while maintaining
              quality.
            </div>
          </a>
          <a href="#" className="group flex flex-col">
            <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
              <div className="transition-opacity duration-300 group-hover:opacity-80">
                <img
                  alt="Mobile App Development: Native vs Cross-Platform Solutions"
                  className="aspect-3/2 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1563952532949-3d1a874ad614?q=80&amp;w=1951&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">Ryan Johnson</span>
              <span>•</span>
              <span>27 Dec 2023</span>
            </div>
            <h2 className="mb-2 line-clamp-3 text-lg font-medium break-words md:mb-3 md:text-2xl">
              Mobile App Development: Native vs Cross-Platform Solutions
            </h2>
            <div className="line-clamp-2 text-sm text-muted-foreground md:text-base">
              Compare native and cross-platform development approaches,
              exploring the trade-offs between performance, development speed,
              and user experience.
            </div>
          </a>
        </div>
        <div className="mt-8 flex flex-col items-center py-2 md:hidden">
          <button
            data-slot="button"
            data-variant="default"
            data-size="default"
            className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none bg-primary text-primary-foreground hover:bg-primary/80 h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 w-full sm:w-fit"
          >
            View all posts
          </button>
        </div>
      </div>
    </section>
  );
}
