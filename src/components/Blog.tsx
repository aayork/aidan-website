"use client";

import { useEffect } from "react";
import Link from "next/link";

export const Blog = () => {
  useEffect(() => {
    // Check if the script is already added
    const scriptId = "retainable-rss-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="ds-blog-section m-10">
      <div className="container">
        <h2 className="ds-heading">
          <Link href="https://medium.com/@York_aa19">Blog</Link>
        </h2>
        <div className="ds-blog-list-section">
          <div className="ds-blog-list">
            <div
              id="retainable-rss-embed"
              data-rss="https://medium.com/feed/@York_aa19"
              data-maxcols="2"
              data-layout="grid"
              data-poststyle="inline"
              data-readmore="Read"
              data-buttonclass="btn ds-button"
              data-offset="-100"
              style={{ width: "max-content" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
