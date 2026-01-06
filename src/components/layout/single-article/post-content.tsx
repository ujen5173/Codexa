import { Separator } from "@/components/ui/separator";
import "@/content.css";
import { Link } from "@tanstack/react-router";
import { BookOpen02Icon, Calendar01Icon, Notebook01Icon } from "hugeicons-react";
import { Link as LinkIcon, PlayCircle } from "lucide-react";
import { Img } from "react-image";
import { Button } from "../../ui/button";
import PostFooter from "./post-footer";

const PostContent = () => {


  // if (isLoading) {
  //   return (
  //     <main className="w-full">
  //       <div className="mx-auto px-4 pb-12 max-w-236">
  //         <div className="space-y-8 animate-pulse">
  //           <div className="bg-slate-200 rounded-lg h-96" />
  //           <div className="space-y-4">
  //             <div className="bg-slate-200 mx-auto rounded w-3/4 h-8" />
  //             <div className="bg-slate-200 mx-auto rounded w-1/2 h-6" />
  //           </div>
  //         </div>
  //       </div>
  //     </main>
  //   );
  // }

  // if (!article) {
  //   return (
  //     <main className="w-full">
  //       <div className="mx-auto px-4 pb-12 max-w-236">
  //         <div className="py-12 text-center">
  //           <h1 className="mb-2 font-semibold text-slate-800 text-2xl">
  //             Article not found
  //           </h1>
  //           <p className="text-slate-600">
  //             The article you're looking for doesn't exist.
  //           </p>
  //         </div>
  //       </div>
  //     </main>
  //   );
  // }

  // const tags = article.tags?.map((at) => at.tag) || [];

  return (
    <main className="relative bg-white dark:bg-slate-950 w-full transition-colors duration-300">
      <div className="mx-auto px-4 lg:px-8 pb-4 max-w-4xl">
        <section className="mb-8 pt-8 md:pt-12">
          <div className="space-y-6 lg:text-left text-center">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
              <div className="flex gap-2">
                <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full font-medium text-slate-700 dark:text-slate-300 text-sm">
                  JavaScript
                </span>
                <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full font-medium text-slate-700 dark:text-slate-300 text-sm">
                  Web Development
                </span>
              </div>
              <Separator orientation="vertical" className="h-[27px!important]" />
              <Link to="/">
                <span className="flex items-center gap-1.5 bg-primary/20 hover:bg-primary/10 dark:bg-primary/20 dark:hover:bg-primary/30 px-3 py-1 rounded-full font-medium text-primary hover:text-primary text-sm">
                  <Notebook01Icon className="size-3.5" />
                  Series: Advanced Concepts
                </span>
              </Link>
            </div>

            <h1 className="font-extrabold text-slate-900 dark:text-white text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
              Bir müəllim bir aya maksimum nə qədər qazana bilər?
            </h1>

            <p className="mx-auto lg:mx-0 max-w-2xl text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
              Analyzing the potential earnings of teachers in the modern era, exploring various income streams and opportunities for growth.
            </p>
          </div>
        </section>

        <div className="relative shadow-xl -mx-4 md:mx-0 mb-8 md:mb-12 rounded-none md:rounded-2xl aspect-[21/9] overflow-hidden">
          <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />
          <Img
            src={"https://blog.behbudluacademy.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1767550653579%2Fbc27f039-7bfe-46f8-ab25-acb35f3382f2.png&w=3840&q=75"}
            alt="Article Featured Image"
            className="relative w-full h-full object-cover"
          />
        </div>

        <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-6 mb-12 pb-8 border-slate-200 dark:border-slate-800 border-b">
          <div className="flex items-center gap-4">
            <Img
              src={"https://cdn.hashnode.com/res/hashnode/image/upload/v1767564224474/8c42e6a9-fc8c-4345-96f9-1bb4215376d5.jpeg?w=500&h=500&fit=crop&crop=faces&w=500&h=500&fit=crop&crop=entropy&auto=compress,format&format=webp&auto=compress,format&format=webp"}
              alt="Aleksandra Dudkina"
              width={56}
              height={56}
              className="rounded-full ring-2 ring-white dark:ring-slate-900 w-14 h-14 object-cover"
            />
            <div className="text-left">
              <div className="font-bold text-slate-900 dark:text-white text-lg hover:underline cursor-pointer">
                Aleksandra Dudkina
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-sm">
                Software Engineer & Writer
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-slate-500 dark:text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full">
                <span className="sr-only">Date</span>
                <Calendar01Icon className="size-4" />
              </span>
              <div className="flex flex-col">
                <span className="font-medium text-xs uppercase tracking-wider">Published</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
              </div>
            </div>

            <div className="bg-slate-200 dark:bg-slate-800 w-px h-8" />

            <div className="flex items-center gap-2">
              <span className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full">
                <BookOpen02Icon className="size-4" />
              </span>
              <div className="flex flex-col">
                <span className="font-medium text-xs uppercase tracking-wider">Read Time</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">6 min read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex lg:flex-row flex-col gap-12">

          <div className="hidden top-32 sticky lg:flex flex-col gap-6 w-12 h-fit shrink-0">
            <div className="flex flex-col gap-1">
              <Button size="icon" variant="ghost" className="hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-[#1DA1F2]">
                <svg viewBox="0 0 24 24" className="fill-current w-5 h-5"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-[#0A66C2]">
                <svg viewBox="0 0 24 24" className="fill-current w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-[#1877F2]">
                <svg viewBox="0 0 24 24" className="fill-current w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
              </Button>
              <div className="my-2 border-slate-200 dark:border-slate-800 border-t w-full" />
              <Button size="icon" variant="ghost" className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
                <LinkIcon className="size-5" />
              </Button>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="max-w-[800px] blog-content">
              <h1>finally(): Why It Can’t Change a Promise Result</h1>

              <p className="lead">
                A common misconception is that <code>finally()</code> behaves like
                <code>then()</code>. In reality, it doesn’t receive values, ignores return
                values, and only affects a promise in very specific cases.
              </p>

              <h2>finally() doesn’t receive arguments</h2>

              <p>Let’s start with a quick quiz:</p>


              <p><strong>Question:</strong> What will appear in the console?</p>

              <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 border border-yellow-200 dark:border-yellow-900/30 rounded-lg text-yellow-800 dark:text-yellow-200">
                <p className="mt-0 font-medium">Wait, think about it!</p>
                <p className="mb-0">
                  If you think the answer is
                  <code>"Hi, Sasha!Whats up?"</code>, that assumption is wrong.
                </p>
              </div>

              <h2>How finally() works under the hood</h2>

              <p>
                The <code>finally</code> method doesn’t have its own low-level implementation
                in the Promise specification.
              </p>

              <p>
                Under the hood, it simply delegates to <code>then</code>, using the same
                callback for both success and failure:
              </p>

              <pre><code>
                promise.finally(onDone);

                // is roughly equivalent to

                promise.then(onDone, onDone);
              </code></pre>

              <p>
                Because of this, <code>onDone</code> does <strong>not receive any arguments</strong>
                (no resolved value, no rejection reason).
              </p>

              <p>
                Since no value is passed, the parameter remains <code>undefined</code>.
              </p>

              <p>
                <strong>Correct answer:</strong>
                <code>undefinedWhats up?</code>
              </p>

              <h2>What happens to the Promise value after finally()?</h2>

              <p>Another quiz:</p>

              <p><strong>Question:</strong> What will be logged?</p>

              <p><strong>Answer:</strong> <code>"Hi, Sasha!"</code></p>

              <p>
                The value returned from <code>finally()</code> is completely ignored.
              </p>

              <blockquote>
                <p>
                  <strong>Key rule:</strong> <code>finally()</code> does not change a Promise’s
                  value. It exists for side effects only (cleanup, logging, metrics, etc.).
                </p>
              </blockquote>

              <h2>Why the returned value from finally() is ignored</h2>

              <ul>
                <li><code>finally()</code> doesn’t receive the resolved value</li>
                <li>It can’t pass a new value down the chain</li>
                <li>The Promise continues with the value from the last <code>then()</code> or <code>catch()</code></li>
              </ul>

              <h2>Takeaways so far</h2>

              <ul>
                <li>
                  Since <code>finally()</code> doesn't get any arguments, any value used inside
                  it is <code>undefined</code>.
                </li>
                <li>
                  The return value from <code>finally()</code> is ignored and does not affect
                  the next <code>then()</code>.
                </li>
                <li>
                  The Promise keeps the value from the last <code>then()</code> or
                  <code>catch()</code> before <code>finally()</code>.
                </li>
              </ul>

              <h2>Can finally() change the Promise state?</h2>


              <p><strong>Questions:</strong></p>
              <ul>
                <li>What is the final Promise state?</li>
                <li>What will be logged: <code>"OK"</code> or <code>"Something went wrong"</code>?</li>
              </ul>

              <p>
                Despite expectations, the output is
                <code>"Something went wrong"</code>, and the Promise is rejected.
              </p>

              <h3>Why does this happen?</h3>

              <p>
                <strong>Important clarification:</strong>
                <code>finally()</code> does not change a Promise’s state by default.
              </p>

              <p>
                However, if an error is thrown inside <code>finally()</code>, or it returns a
                rejected Promise, that error overrides the previous state.
              </p>

              <h2>Returning a rejected Promise from finally()</h2>

              <p>
                Even without throwing an error, the result is still
                <code>"Something went wrong"</code>.
              </p>

              <p>
                Returning a rejected Promise from <code>finally()</code> also changes the
                Promise state.
              </p>

              <h3>Why does this work if return values are ignored?</h3>

              <p>
                Because <code>finally()</code> is implemented using <code>then()</code>:
              </p>

              <pre><code>
                promise.finally(onDone);

                // roughly equivalent to

                promise.then(onDone, onDone);
              </code></pre>

              <p>Expanded version of the example:</p>

              <p>
                When the rejected Promise propagates, it overrides the previous resolved
                state—just like throwing an error.
              </p>

              <p>
                If <code>finally()</code> returns a resolved Promise, the chain waits for it,
                then continues with the original value.
              </p>

              <h2>Final takeaways</h2>

              <ul>
                <li>
                  <code>finally()</code> does not receive arguments; values inside it are
                  <code>undefined</code>.
                </li>
                <li>
                  The return value from <code>finally()</code> is ignored and does not alter
                  the Promise result.
                </li>
                <li>
                  The Promise keeps the previous value or rejection reason unless:
                  <ul>
                    <li>An error is thrown inside <code>finally()</code></li>
                    <li>A rejected Promise is returned from <code>finally()</code></li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/10 mt-12 mb-12 border border-blue-200 dark:border-blue-900/50 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 bg-blue-100 dark:bg-blue-900/30 px-6 py-4 border-blue-200 dark:border-blue-900/50 border-b">
                <Notebook01Icon className="size-5 text-blue-700 dark:text-blue-300" />
                <h3 className="m-0 font-bold text-blue-900 dark:text-blue-100 text-lg">Series: Advanced Concepts</h3>
              </div>
              <div className="divide-y divide-blue-200 dark:divide-blue-900/50">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="group flex items-center gap-4 hover:bg-blue-100/50 dark:hover:bg-blue-900/20 px-6 py-4 transition-colors cursor-pointer">
                    <div className="flex justify-center items-center bg-white dark:bg-slate-900 shadow-sm border border-blue-200 dark:border-blue-800 rounded-full w-8 h-8 font-bold text-blue-600 dark:text-blue-400 text-sm shrink-0">
                      {i}
                    </div>
                    <div className="flex-1">
                      <p className="m-0 font-medium text-slate-800 dark:group-hover:text-blue-300 dark:text-slate-200 group-hover:text-blue-700 text-sm md:text-base">
                        Understanding JavaScript Promises: A Deep Dive into {i === 1 ? 'Basics' : i === 2 ? 'Chaining' : 'Async/Await'}
                      </p>
                    </div>
                    {i === 1 && (
                      <span className="bg-blue-600 px-2 py-0.5 rounded-full font-bold text-[10px] text-white uppercase">
                        Current
                      </span>
                    )}
                    {i !== 1 && (
                      <PlayCircle className="opacity-0 group-hover:opacity-100 size-5 text-slate-400 group-hover:text-blue-500 transition-all" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-12 border-slate-200 dark:border-slate-800 border-t">
              <h3 className="mb-6 font-bold text-slate-900 dark:text-white text-xl">Related Articles</h3>
              <div className="gap-6 grid md:grid-cols-2">
                {[1, 2].map((i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="bg-slate-200 dark:bg-slate-800 mb-3 rounded-lg aspect-video overflow-hidden">
                      <Img
                        src={`https://picsum.photos/seed/${i + 20}/800/400`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="font-bold text-slate-800 dark:group-hover:text-blue-400 dark:text-slate-200 group-hover:text-blue-600 line-clamp-2 transition-colors">
                      Mastering React hooks: Best practices for modern web development
                    </h4>
                    <p className="mt-1 text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
                      Learn how to use useEffect, useState, and custom hooks effectively in your next project.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <PostFooter />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PostContent;
