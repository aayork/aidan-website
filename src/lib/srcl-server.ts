import * as Utilities from "@/lib/srcl-utilities";
import Cors from "@/lib/modules/cors";
import { NextApiRequest, NextApiResponse } from "next";

// Keep the commented code as is...

export function initMiddleware(middleware: any) {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: Error | unknown) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

export const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
  }),
);

interface SetupContext {
  req: {
    cookies: {
      [key: string]: string;
    };
  };
}

interface ViewerResponse {
  viewer?: Record<string, any> | null;
}

export async function setup(
  context: SetupContext,
): Promise<{ sessionKey: string; viewer: Record<string, any> | null }> {
  let viewer = null;
  const sessionKey = context.req.cookies["sitekey"] || "";

  if (!Utilities.isEmpty(sessionKey)) {
    try {
      const response = await fetch(
        "https://api.internet.dev/api/users/viewer",
        {
          method: "PUT",
          headers: {
            "X-API-KEY": sessionKey,
            "Content-Type": "application/json",
          },
        },
      );
      const result = (await response.json()) as ViewerResponse;
      if (result && result.viewer) {
        viewer = result.viewer;
      }
    } catch (e) {}
  }

  return { sessionKey, viewer };
}

export async function tryKeyWithoutCookie(
  key: string,
): Promise<{ sessionKey: string; viewer: Record<string, any> | null }> {
  let viewer = null;

  if (!Utilities.isEmpty(key)) {
    try {
      const response = await fetch(
        "https://api.internet.dev/api/users/viewer",
        {
          method: "PUT",
          headers: { "X-API-KEY": key, "Content-Type": "application/json" },
        },
      );
      const result = (await response.json()) as ViewerResponse;
      if (result && result.viewer) {
        viewer = result.viewer;
      }
    } catch (e) {}
  }

  return { sessionKey: key, viewer };
}
