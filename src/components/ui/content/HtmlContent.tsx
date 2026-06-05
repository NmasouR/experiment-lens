import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

export function HtmlContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

useEffect(() => {
  const root = ref.current;
  if (!root) return;

  const preBlocks = root.querySelectorAll("pre");

  preBlocks.forEach((pre) => {
    const code = pre.querySelector("code");
    if (!code) return;

    // Highlight first
    if (!code.dataset.highlighted) {
      hljs.highlightElement(code as HTMLElement);
    }

    // Skip if already wrapped
    if (pre.parentElement?.hasAttribute("data-code-block-wrapper")) return;

    const wrapper = document.createElement("div");
    wrapper.setAttribute("data-code-block-wrapper", "true");

    wrapper.className = [
      "relative",
      "group",
      "my-4",
    ].join(" ");

    pre.parentNode?.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const button = document.createElement("button");

    button.type = "button";
    button.textContent = "Copy";
    button.setAttribute("data-copy-code-button", "true");

    button.className = [
      "absolute",
      "right-6",
      "top-3",
      "z-10",
      "rounded-md",
      "border",
      "border-white/10",
      "bg-white/10",
      "px-2",
      "py-1",
      "text-xs",
      "font-medium",
      "text-slate-200",
      "opacity-0",
      "transition",
      "hover:bg-white/20",
      "hover:text-white",
      "group-hover:opacity-100",
    ].join(" ");

    button.addEventListener("click", async () => {
      const text = code.textContent ?? "";

      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "Copied";

        window.setTimeout(() => {
          button.textContent = "Copy";
        }, 1500);
      } catch {
        button.textContent = "Failed";

        window.setTimeout(() => {
          button.textContent = "Copy";
        }, 1500);
      }
    });

    wrapper.appendChild(button);
  });
}, [html]);

  return (
    <div
      ref={ref}
      className="
        mt-3 max-w-none text-sm leading-relaxed text-slate-600

        [&_pre]:max-h-[450px]
        [&_pre]:overflow-auto
        [&_pre]:rounded-xl
        [&_pre]:bg-slate-950
        [&_pre]:p-4
        [&_pre]:pr-24
        [&_pre]:shadow-sm

        [&_pre_code]:block
        [&_pre_code]:bg-transparent
        [&_pre_code]:p-0
        [&_pre_code]:font-mono
        [&_pre_code]:text-sm
        [&_pre_code]:leading-6
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}